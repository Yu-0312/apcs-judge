# Deployment and production-readiness checklist

The learning site is static, but several optional features call third-party services directly. A GitHub Pages publish is enough for local-only learning features; it is **not** enough to claim hidden-test judging or production-grade public chat.

## Before every publish

Run:

```sh
node scripts/build-tutorial-drills.js --check
node scripts/check-data.js
node scripts/check-pages.js
node scripts/check-studyplan-links.js
node scripts/check-client-state.js
node scripts/check-index-contract.js
node scripts/check-tutorial-runner-limits.js
node scripts/check-solutions.js --lang=py
```

CI additionally runs the C, C++ and Java reference solutions against every published example. Review the duplicate-sample warning and lower `scripts/judge-data-baseline.json` whenever duplicate debt is removed.

## Firebase public chat

The public room is disabled by default through `publicChat.enabled: false` in
`data/service-config.js`. Keep that flag off unless all of these are complete:

1. Enable Firebase Anonymous Authentication.
2. Point `FIREBASE_CONFIG` in `data/chat-widget.js` at the intended project.
3. Validate the deny and allow cases with the Firebase Emulator.
4. Deploy `firebase.database.rules.json` through `firebase deploy --only database`.
5. Configure App Check before enforcing it, then add server-side rate limiting, moderation/reporting, retention deletion, budget alerts and an incident process.
6. Only after the preceding controls have been verified, set `publicChat.enabled`
   to `true`, bump the shared cache tag, and repeat the smoke checks in a staging
   deployment before production.

See `FIREBASE_CHAT_SECURITY.md` for the rule-specific checklist. Client-side throttling is only a usability guard and is not an abuse-control boundary.

## Honest judging boundary

The current static implementation runs only the examples visible in each problem statement. It deliberately records `sampleChecked`, not AC. A real acceptance result requires a separate trusted backend with:

- hidden and versioned test data that never reaches the browser;
- isolated per-submission workers with CPU, memory, process, filesystem, network and output limits;
- queued jobs, authenticated result lookup, rate limits and abuse controls;
- deterministic compiler/runtime images and explicit language versions;
- test-data audit trails, rejudge support and monitoring.

Do not place hidden inputs in JavaScript, source maps, downloadable assets or client-delivered API responses. Until that service exists, keep the UI wording as “公開範例檢查（非 AC）”.

## Browser security headers

GitHub Pages does not provide repository-controlled custom response headers. For stronger isolation, deploy behind a host or CDN where headers can be configured and remove inline scripts before enabling a strict Content Security Policy. Target controls include:

- a nonce/hash-based `Content-Security-Policy` with explicit Gemini, Judge0, Firebase and pinned CDN origins;
- `frame-ancestors 'none'`, `object-src 'none'` and a narrow `connect-src`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `X-Content-Type-Options: nosniff`;
- a restrictive `Permissions-Policy`;
- a separate origin for untrusted code execution or any future credential proxy.

The current local sanitizer and session-only API key reduce exposure but cannot protect a key from JavaScript that is already executing in the same origin.

## External-service verification

Use non-production test projects and low-value credentials when verifying Gemini, Judge0 or Firebase. Test 401/403, 429, 5xx, timeout, oversized payload, offline and malformed-response paths. Never commit API keys or service-account credentials.

Before each release, compare the Gemini IDs in `data/service-config.js` with the
[official model lifecycle page](https://ai.google.dev/gemini-api/docs/deprecations). The current default is stable
`gemini-3.5-flash`; the stable cost-focused fallback is
`gemini-3.1-flash-lite`, while `gemini-3.1-pro-preview` is intentionally marked
as Preview in the UI and must not be treated as a stability guarantee.

## Content maintenance

To regenerate translated language-specific tutorial content:

```sh
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r scripts/requirements.txt
python3 scripts/gen-lang-content-en.py
node scripts/check-data.js
```

The translation command calls an external translation service. Review its diff manually before publishing.
