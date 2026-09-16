#!/usr/bin/env node
// Vergelijkt de merkkleuren in style.css met de brontabel in
// vormgever-npuls-huisstijl/references/design-tokens.json. clidev claimt
// style.css te baseren op die skill; dit script verifieert dat daadwerkelijk
// in plaats van dat een agent het met het blote oog moet nagaan.
//
// Gebruik (vanuit de clidev-presentaties projectroot):
//   node scripts/check-design-tokens.mjs [pad-naar-design-tokens.json] [pad-naar-style.css]
//
// Exit code 0 = alles in sync, 1 = mismatch/ontbrekende variabele,
// 2 = design-tokens.json of style.css niet gevonden.

import { readFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const candidateTokenPaths = [
  process.argv[2],
  join(homedir(), '.claude', 'skills', 'vormgever-npuls-huisstijl', 'references', 'design-tokens.json'),
  join(homedir(), '.agents', 'skills', 'vormgever-npuls-huisstijl', 'references', 'design-tokens.json'),
  // De via `npx skills add` geïnstalleerde kopie bevat momenteel alleen
  // SKILL.md, niet de references/-map (packaging-gat, los probleem).
  // In de dev-checkout van cedanl/.github staat design-tokens.json wel.
  join(homedir(), 'Projects', '.github', '.claude', 'skills', 'vormgever-npuls-huisstijl', 'references', 'design-tokens.json'),
].filter(Boolean);

const tokensPath = candidateTokenPaths.find((p) => existsSync(p));
if (!tokensPath) {
  console.error('Kan design-tokens.json niet vinden op de gebruikelijke plekken.');
  console.error('Geef het pad expliciet mee:');
  console.error('  node scripts/check-design-tokens.mjs <pad-naar-design-tokens.json>');
  process.exit(2);
}

const stylePath = process.argv[3] || join(process.cwd(), 'style.css');
if (!existsSync(stylePath)) {
  console.error(`Kan style.css niet vinden op ${stylePath}`);
  console.error('Run dit script vanuit de clidev-presentaties projectroot, of geef het pad expliciet mee als tweede argument.');
  process.exit(2);
}

const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));
const css = readFileSync(stylePath, 'utf8');

// Mapping: kleurnaam in design-tokens.json -> CSS-variabele in style.css.
// Bewust alleen de merkidentiteitskleuren (primary + secondary/licht) --
// de grijstinten (--np-dark-gray, --np-ink, etc.) in style.css zijn
// doelbewuste UI-keuzes van clidev, geen kopie van de "neutrals" in
// design-tokens.json, en horen dus niet in deze vergelijking.
const colorMap = {
  'npuls-oranje': '--np-orange',
  'npuls-blauw': '--np-blue',
  'npuls-roze': '--np-pink',
  'npuls-geel': '--np-yellow',
  'npuls-groen': '--np-green',
  'npuls-zwart': '--np-black',
  'licht-blauw': '--np-light-blue',
  'licht-oranje': '--np-light-orange',
  'licht-groen': '--np-light-green',
  'licht-geel': '--np-light-yellow',
  'licht-roze': '--np-light-pink',
};

function extractCssVar(name) {
  const re = new RegExp(`${name}\\s*:\\s*(#[0-9a-fA-F]{3,8})`);
  const match = css.match(re);
  return match ? match[1].toUpperCase() : null;
}

const allColors = { ...(tokens.colors?.primary ?? {}), ...(tokens.colors?.secondary ?? {}) };

let hasMismatch = false;
let hasMissing = false;
const rows = [];

for (const [tokenName, cssVar] of Object.entries(colorMap)) {
  const expected = (allColors[tokenName] || '').toUpperCase();
  const actual = extractCssVar(cssVar);
  if (!expected) {
    rows.push([tokenName, cssVar, '(niet in tokens)', actual ?? '(ontbreekt)', 'SKIP']);
    continue;
  }
  if (!actual) {
    hasMissing = true;
    rows.push([tokenName, cssVar, expected, '(ontbreekt)', 'MISSING']);
  } else if (actual !== expected) {
    hasMismatch = true;
    rows.push([tokenName, cssVar, expected, actual, 'MISMATCH']);
  } else {
    rows.push([tokenName, cssVar, expected, actual, 'OK']);
  }
}

const widths = [14, 18, 10, 10, 8];
const header = ['token', 'css-variabele', 'verwacht', 'actueel', 'status'];
console.log(header.map((h, i) => h.padEnd(widths[i])).join(' '));
console.log(widths.map((w) => '-'.repeat(w)).join(' '));
for (const row of rows) {
  console.log(row.map((c, i) => String(c).padEnd(widths[i])).join(' '));
}

if (hasMismatch || hasMissing) {
  console.error(
    '\nFOUT: style.css loopt uit de pas met vormgever-npuls-huisstijl.\n' +
    'Werk style.css bij naar de waarden hierboven (nooit de brontabel of losse\n' +
    'slide-files aanpassen) en run dit script opnieuw.'
  );
  process.exit(1);
}

console.log('\nOK: style.css komt overeen met vormgever-npuls-huisstijl.');
