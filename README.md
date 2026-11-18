# Hardwood Dynasty: offline app

These files turn the game into an app you can install on your iPhone home screen. Once installed and opened online one time, it works with no internet connection.

## Put it online (free, about 5 minutes)

**Option A: Netlify Drop (easiest)**
1. On a computer, go to app.netlify.com/drop and sign in (free).
2. Drag this whole folder onto the page.
3. Netlify gives you a web address. That's your app.

**Option B: GitHub Pages**
1. Create a new public repository on GitHub (for example `hardwood-dynasty`).
2. Upload every file in this folder to the repository's main branch.
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute your app is live at `https://YOUR-USERNAME.github.io/hardwood-dynasty/`.

## Install on iPhone
1. Open your app's web address in **Safari**.
2. Tap the Share button, then **Add to Home Screen**.
3. Open it once from the home screen while online so it can save itself for offline use.

## Your saves
- Dynasties are stored on the device, inside the app. The installed app and the claude.ai version keep separate saves.
- To move a dynasty, use **Export** on the My dynasties screen, then **Import a dynasty file** in the other version.

## Updating later
Replace `index.html` with the new version and change `VERSION` at the top of `sw.js` (for example `hd-v2`) so devices pick up the update.
