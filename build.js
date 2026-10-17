// Copies the web app into ./www, which is the folder Capacitor packages into the mobile app.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const out = path.join(root, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
["index.html", "manifest.webmanifest", "sw.js", "icons"].forEach((f) => {
  fs.cpSync(path.join(root, f), path.join(out, f), { recursive: true });
});
console.log("Built web app into ./www");
