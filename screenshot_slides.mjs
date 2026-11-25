import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const OUT = 'slide-shots'
mkdirSync(OUT, { recursive: true })

// slide nummer -> label
const SLIDES = {
  13: 'keuzevakken',
  14: 'genai',
  15: '1cho',
  16: 'binaire-uitkomsten',
  21: 'dashboard-overzicht',
  31: 'scope',
  32: 'vervolgstappen',
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })

for (const [num, label] of Object.entries(SLIDES)) {
  await page.goto(`http://localhost:3031/${num}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  await page.screenshot({ path: `${OUT}/${num}_${label}.png` })
  console.log('opgeslagen:', `${OUT}/${num}_${label}.png`)
}

await browser.close()
