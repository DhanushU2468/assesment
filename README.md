# Northstar Assessments

A static, browser-only online MCQ assessment experience.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The candidate enters a name and registration number, completes 50 questions in 50 minutes, and is automatically submitted after three tab-switch warnings or when time expires.

## Results

Use the **Results** link in the header. The local admin passcode is `northstar` for this demo. Attempts are stored in the browser's `localStorage`, then can be downloaded as JSON or CSV from the results dashboard.

Because this build intentionally has no backend, a browser cannot write to a shared server-side JSON file. The JSON export is the portable response file; for shared multi-user storage, connect the same UI to an API or serverless database later.