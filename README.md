# Uber Income Tracker

A mobile-friendly app for Australian Uber and rideshare drivers to record income and expenses, see profit, and keep an estimate of GST. It runs entirely on your device: there is no server and no account. Data is saved in the browser or app storage on the phone.

> GST figures are estimates for record-keeping purposes only. Verify GST treatment and your Business Activity Statement (BAS) figures with a qualified accountant or registered tax agent.

## What's in this repo

| File | Purpose |
| --- | --- |
| `index.html` | The whole app (HTML, CSS and JavaScript in one file) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make it installable on a phone and usable offline (PWA) |
| `package.json`, `capacitor.config.json`, `scripts/build.js` | Wrap the app as a native Android or iOS app with Capacitor |
| `.github/workflows/pages.yml` | Publishes the app to GitHub Pages automatically |
| `.github/workflows/android-apk.yml` | Builds a downloadable Android APK on GitHub |

## Option 1 (easiest): install it from GitHub Pages

1. Create a new repository on GitHub and upload all of these files (or push them with git).
2. In the repo go to **Settings > Pages**, and under *Build and deployment* set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for *Deploy to GitHub Pages* to finish. Your app is then at `https://<your-username>.github.io/<repo-name>/`.
4. Open that link on your phone:
   - **iPhone (Safari):** Share > **Add to Home Screen**.
   - **Android (Chrome):** menu > **Install app** (or *Add to Home screen*).

It then opens full screen like a normal app and works offline.

## Option 2: Android APK built by GitHub

1. Push the repo to GitHub.
2. Go to **Actions > Build Android APK > Run workflow**.
3. When it finishes, download `uber-income-tracker-debug-apk` from the run's **Artifacts**, unzip it, and install `app-debug.apk` on your Android phone (you will need to allow installs from unknown sources).

This is a debug build for personal use. To publish on Google Play you need a signed release build (open the `android` folder in Android Studio).

## Option 3: build locally with Capacitor (Android and iOS)

Requirements: Node 20+, Android Studio for Android, and a Mac with Xcode for iOS.

```bash
npm install
npm run build
npx cap add android      # and/or: npx cap add ios
npm run android          # or: npm run ios   (syncs and opens the IDE)
```

Before publishing to a store, change `appId` in `capacitor.config.json` (for example `au.com.yourname.ubertracker`).

## Updating the app

Edit `index.html`, then bump `CACHE` in `sw.js` (for example `v2`) so phones that already installed it pick up the change. Pushing to `main` redeploys GitHub Pages.

## Your data

Records live only in the browser or app storage on that device. Use **Settings > Export CSV** regularly for a backup. Clearing browser data or uninstalling the app removes the records, and data is not shared between devices.
