#!/usr/bin/env python3
"""Generate data/tutorial-lang-content-en.js from the tracked zh source file."""

from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "tutorial-lang-content-zh.js"
OUTPUT = ROOT / "data" / "tutorial-lang-content-en.js"
CACHE = ROOT / "scripts" / ".lang-content-en-cache.json"
MARKER_START = "const LANG_CONTENT = {"
LANGS = ("cpp", "c", "java")


def read_template_literal(text: str, start: int) -> tuple[str, int]:
    """Read a JS template literal starting at text[start] == '`'."""
    assert text[start] == "`"
    i = start + 1
    out: list[str] = []
    while i < len(text):
        ch = text[i]
        if ch == "\\":
            if i + 1 < len(text):
                nxt = text[i + 1]
                if nxt == "`":
                    out.append("`")
                    i += 2
                    continue
                if nxt == "\\":
                    out.append("\\")
                    i += 2
                    continue
                if nxt == "n":
                    out.append("\n")
                    i += 2
                    continue
                if nxt == "t":
                    out.append("\t")
                    i += 2
                    continue
                out.append(ch)
                out.append(nxt)
                i += 2
                continue
        if ch == "`":
            return "".join(out), i + 1
        out.append(ch)
        i += 1
    raise ValueError("Unterminated template literal")


def parse_lang_content(block: str) -> dict[int, dict[str, str]]:
    data: dict[int, dict[str, str]] = {}
    i = 0
    while i < len(block):
        m = re.match(r"(\d+):\{", block[i:])
        if not m:
            i += 1
            continue
        chap_id = int(m.group(1))
        i += m.end()
        entry: dict[str, str] = {}
        while i < len(block):
            if block[i] == "}":
                i += 1
                break
            lm = re.match(r"(cpp|c|java):", block[i:])
            if not lm:
                i += 1
                continue
            lang = lm.group(1)
            i += lm.end()
            while i < len(block) and block[i] in " \t\n\r":
                i += 1
            if i >= len(block) or block[i] != "`":
                continue
            content, i = read_template_literal(block, i)
            entry[lang] = content
        if entry:
            data[chap_id] = entry
    return data


def extract_lang_content(source: str) -> str:
    start = source.index(MARKER_START) + len(MARKER_START)
    end = source.rfind("\n};")
    if end < start:
        raise ValueError(f"Cannot find LANG_CONTENT terminator in {SOURCE}")
    return source[start:end]


def protect_code_blocks(text: str) -> tuple[str, list[str]]:
    blocks: list[str] = []

    def repl(m: re.Match[str]) -> str:
        blocks.append(m.group(0))
        return f"__CODEBLOCK_{len(blocks) - 1}__"

    protected = re.sub(r"```[\s\S]*?```", repl, text)
    protected = re.sub(r"`[^`\n]+`", repl, protected)
    return protected, blocks


def restore_code_blocks(text: str, blocks: list[str]) -> str:
    for idx, block in enumerate(blocks):
        text = text.replace(f"__CODEBLOCK_{idx}__", block)
    return text


def translate_text(text: str, translator) -> str:
    protected, blocks = protect_code_blocks(text)
    # Split into chunks to respect API limits
    max_chunk = 4500
    if len(protected) <= max_chunk:
        chunks = [protected]
    else:
        chunks = []
        cur: list[str] = []
        cur_len = 0
        for line in protected.split("\n"):
            line_len = len(line) + 1
            if cur and cur_len + line_len > max_chunk:
                chunks.append("\n".join(cur))
                cur = [line]
                cur_len = line_len
            else:
                cur.append(line)
                cur_len += line_len
        if cur:
            chunks.append("\n".join(cur))

    translated_chunks: list[str] = []
    for chunk in chunks:
        if not chunk.strip():
            translated_chunks.append(chunk)
            continue
        for attempt in range(4):
            try:
                translated_chunks.append(translator.translate(chunk))
                break
            except Exception as exc:
                if attempt == 3:
                    raise
                time.sleep(1.5 * (attempt + 1))
                print(f"  retry {attempt + 1}: {exc}", file=sys.stderr)
        time.sleep(0.15)
    out = restore_code_blocks("\n".join(translated_chunks), blocks)
    glossary = [
        ("never written any procedural formulas", "never programmed before"),
        ("| Projects |", "| Item |"),
        ("| projects |", "| Item |"),
    ]
    for bad, good in glossary:
        out = out.replace(bad, good)
    return out


def js_escape_template(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`")


def render_lang_content_en(data: dict[int, dict[str, str]]) -> str:
    lines = ["const LANG_CONTENT_EN = {"]
    for chap_id in sorted(data):
        lines.append(f"{chap_id}:{{")
        entry = data[chap_id]
        for lang in LANGS:
            if lang not in entry:
                continue
            lines.append(f"{lang}:`")
            lines.append(js_escape_template(entry[lang]))
            lines.append("`,\n")
        lines.append("},\n")
    lines.append("};")
    return "\n".join(lines)


def main() -> None:
    from deep_translator import GoogleTranslator

    source = SOURCE.read_text(encoding="utf-8")
    zh = parse_lang_content(extract_lang_content(source))

    cache: dict[str, str] = {}
    if CACHE.exists():
        cache = json.loads(CACHE.read_text(encoding="utf-8"))

    translator = GoogleTranslator(source="zh-TW", target="en")
    en: dict[int, dict[str, str]] = {}
    total = sum(len(v) for v in zh.values())
    done = 0

    for chap_id in sorted(zh):
        en[chap_id] = {}
        for lang in LANGS:
            if lang not in zh[chap_id]:
                continue
            key = f"{chap_id}:{lang}"
            done += 1
            if key in cache:
                en[chap_id][lang] = cache[key]
                print(f"[cache] {key} ({done}/{total})")
                continue
            print(f"[translate] {key} ({done}/{total})")
            translated = translate_text(zh[chap_id][lang], translator)
            # Normalize headings to English chapter style
            lang_label = {"cpp": "C++", "c": "C", "java": "Java"}[lang]
            translated = re.sub(
                rf"# 第 (\d+) 章：(.+?) \({lang_label} 版\)",
                rf"# Chapter \1: \2 ({lang_label} Edition)",
                translated,
            )
            translated = re.sub(
                rf"# 第 (\d+) 章：(.+?) \({lang_label}\)",
                rf"# Chapter \1: \2 ({lang_label})",
                translated,
            )
            cache[key] = translated
            en[chap_id][lang] = translated
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")

    en_block = render_lang_content_en(en)
    header = "// Generated from tutorial-lang-content-zh.js by scripts/gen-lang-content-en.py\n"
    OUTPUT.write_text(header + en_block + "\n", encoding="utf-8")
    print(f"Done. Wrote {OUTPUT} with {len(en)} chapters × up to 3 langs.")


if __name__ == "__main__":
    main()
