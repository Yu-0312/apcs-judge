# Privacy Policy

Last updated: July 17, 2026

This policy explains how "Interactive Coding Classroom × APCS Practice" (the "Site", https://yu-0312.github.io/apcs-judge/ ) handles your data. The Site is a personally developed, non-profit static website with no self-hosted user-account backend; most features run locally in your browser or on your device. When you actively use AI, online execution, or the public chat room, the relevant data is still sent to the third-party services listed below, and chat room administrators may also access public messages for operations or to handle reports. Details are given item by item below.

## 1. Data Stored Locally on Your Device (Never Sent to the Site)

The Site makes extensive use of the browser's `localStorage` to keep your usage state on **your own device**. This data is not transmitted to the Site or the developer; only your browser can read it. It includes:

- **Learning and answer records**: tutorial completion progress, public-sample check results, cumulative code-reading counts, code drafts, study plans, interface language, and layout preferences.
- **Mistake book**: incorrectly answered code-reading questions, coding problems not fully passed, and problems uploaded for AI solving are organized and stored in the local mistake book.
- **AI-related**: the selected model may be kept locally; the Gemini API key and AI teaching-assistant conversations are held only in the current tab's `sessionStorage` / memory and are discarded when the tab is closed. Keys stored in `localStorage` by older versions are removed when a new version loads.
- **AI problem thumbnails**: only if you tick the consent box, a re-encoded thumbnail is stored with your solving record in the local mistake book; by default no image is saved.
- **Chat room nickname**: the nickname you set for yourself in the chat room.

You can remove the above using the in-site backup / clear functions, or through your browser's "clear site data" option; once cleared, the data cannot be recovered. Even though keys are only kept until the tab is closed, a public or shared computer is still not a suitable place to enter a personal API key.

## 2. Data Transmitted to Third-Party Services

Some Site features require sending data to third-party services in order to work. These transmissions are sent **directly** from your browser to each service; the Site does not collect or retain them in between.

### 1. AI Features (Google Gemini)

When you use "AI problem paste / photo solving" or the "AI teaching assistant", the problem you paste, your supplementary / coach-mode answers, and the conversation content are sent, together with your own API key, directly from the browser to the Google Gemini API. Problem images are first limited in size, downscaled, and re-encoded as JPEG locally to remove EXIF / GPS and other metadata from the original file; they are sent only after you tick the "send" prompt and press "read problem". After reading is complete, the solving or coaching stage uses only the text you have confirmed and does not resend the image. If you do not want data sent to Google, do not use the AI features.

### 2. Online Judging (Judge0)

When you run C, C++, or Java in the coding problems or interactive tutorial, the **code and test input** you write are sent to the public judging service Judge0 (ce.judge0.com) for execution, and the result is returned. This is a public third-party service, so please do not put any personal, private, or confidential information in your code or input. Python is usually run instead by the in-browser Pyodide Worker, in which case the code is not sent to Judge0.

### 3. Chat Room (Firebase Realtime Database) — Please Take Special Note

When the public chat room is enabled, Firebase Anonymous Authentication creates an anonymous identifier for the current browser; the **nickname, message text, anonymous UID, random client identifier, and server timestamp** you send are written to the Firebase Realtime Database and can be read by other signed-in chat room visitors. This is the **only** data the Site continuously stores externally and that other users can see. Please note:

- This is a **public, shared chat room**; any visitor can see the messages you send.
- No fixed retention period is currently guaranteed, and the interface does not guarantee self-service deletion of individual messages; operators should set up retention and moderation processes separately before deployment.
- **Do not enter your real name, contact details, keys, or any information you do not want to be public in the chat room.**
- If you need a specific message removed, please use the contact methods below.

### 4. Content Delivery Networks and Libraries (CDNs)

The Site's libraries and resources are loaded from public CDNs, including cdnjs (Cloudflare), jsDelivr, and Google (gstatic.com, for Firebase). When loading resources, these CDNs receive your IP address and basic browser information as a technical necessity of their operation. This is common to all websites that use CDNs and is governed by each CDN provider's privacy policy.

## 3. Hosting (GitHub Pages)

The Site is statically hosted on GitHub Pages. When you visit, GitHub may log standard server access logs (such as IP address and browser type) as part of its service operation. This is governed by **GitHub's privacy statement**, and the Site cannot access these logs.

## 4. Cookies and Tracking

The Site does **not** use cookies and has **not** installed Google Analytics or any third-party advertising or behavioral tracking tools. The Site does not profile your behavior for advertising purposes and does not sell any data. The `localStorage` described above is used only to save your own usage state and is not used for cross-site tracking.

## 5. Desktop Widget (Scriptable Widget)

The "Daily Problem" iPhone / Mac widget runs through Scriptable. It fetches the problem set from GitHub and stores your **answer records, streak count, and local mistakes** in a **file on your device**, without uploading them. When it uses the Judge0 / Gemini services described above, the terms in Section 2 of this policy apply.

## 6. Children and Minors

The Site is aimed mainly at students preparing for APCS, which may include minors. The Site does not actively collect any personally identifiable information; when using features that transmit data externally, such as AI and the chat room, minors are asked to take care not to enter personal information, with the help of a teacher or parent.

## 7. Your Controls

Because data is stored mainly on your device, you hold the primary controls: you can export a backup and clear in-site learning data; you can choose not to use features that transmit externally, such as AI, Judge0, or the chat room; and you can clear the current session's API key at any time. For data already sent to a third party (Google, Judge0) or already written to the public chat room, subsequent handling is governed by that service's policy; where necessary, you may request assistance via the contact methods below.

## 8. Amendments to This Policy

This policy may be updated as features change; amendments take effect on this page upon posting, and the date above is updated. Significant changes will, where possible, be flagged on the site or in the project.

## 9. Contact

For any questions about this policy, or to request removal of a specific message in the public chat room, please contact:

- Email: wang.yuchi.312@gmail.com
- GitHub Issues: https://github.com/Yu-0312/apcs-judge/issues
