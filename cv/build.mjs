/**
 * Genera los PDFs del CV a partir de los HTML de esta carpeta.
 *
 *   npm run cv
 *
 * Usa Chrome en modo headless: no hay dependencias que instalar, pero sí hace
 * falta tener Chrome (o Edge) en una de las rutas de CANDIDATES.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "..", "public", "documents");

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("No encontré Chrome ni Edge. Agregá la ruta a CANDIDATES.");
  process.exit(1);
}

for (const [lang, suffix] of [
  ["es", "ES"],
  ["en", "EN"],
]) {
  const target = resolve(out, `Leandro_Licata_CV_${suffix}.pdf`);
  execFileSync(chrome, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${target}`,
    `file://${resolve(here, `cv-${lang}.html`).replace(/\\/g, "/")}`,
  ]);
  console.log(`✓ ${target}`);
}
