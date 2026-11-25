# Vrij-HTML-track

Een tweede manier om een presentatie te maken in deze repo, náást de Slidev/`clidev`-workflow. Geen aparte skill (nog), gewoon een `_template.html` + deze conventies. Gebruik 'm wanneer visuele vrijheid en animatie belangrijker zijn dan snelheid en consistentie — zie de afweging onderaan.

## Wanneer welke track

| | Slidev (`clidev`) | Vrij-HTML (dit bestand) |
|---|---|---|
| Achtergronden | 17 vaste PNG's, gemeten content-zones | Vrij CSS/SVG, geen vaste platen |
| Animatie | `v-click`/`v-motion`, klik-gestuurd tussen slides | Vrije CSS-keyframes, scroll-reveal, evt. GSAP |
| Snelheid | Hoog — component-bibliotheek, harde capaciteitslimieten | Lager — elke scene is vrije opmaak |
| Consistentie tussen decks | Hoog, afgedwongen door de skill | Lager, leunt op discipline van de promptschrijver |
| Export | PDF/PPTX ingebouwd (`npx slidev export`) | Geen ingebouwde export, zie "Export en QA" |
| Gebruik | Standaard reviewmeetings, terugkerende sjablonen | Show-decks, kick-offs, iets dat echt moet opvallen |

Bij twijfel: start met `clidev`. Grijp naar deze track pas als de vaste achtergronden of het klik-animatiemodel je concreet in de weg zitten.

## Quickstart

```bash
cp _template.html YYMMDD_onderwerp.html
npx serve .          # of: python -m http.server 8080
```

Open daarna `http://localhost:3000/YYMMDD_onderwerp.html` (poort hangt af van de gekozen server). Serveer altijd vanuit de **projectroot** — `_template.html` linkt naar `/style.css` en eventuele illustraties naar `/npuls/...`, exact zoals de Slidev-track dat al doet via `public/`.

## Huisstijl: hergebruik, dupliceer niet

`_template.html` linkt rechtstreeks naar `style.css` in de projectroot:

```html
<link rel="stylesheet" href="/style.css" />
```

Daarmee krijg je dezelfde `--np-*` kleurtokens, dezelfde `@font-face`-declaraties (General Sans, Cooper Light BT) en, als je ze wilt hergebruiken, dezelfde componentklassen (`.np-card`, `.np-badge`, `.np-table`, `.np-grid-*`) als de Slidev-track. Geen aparte kopie, dus geen sync-script nodig zoals `scripts/check-design-tokens.mjs` voor `style.css` zelf al doet.

**Let op — asset-paden verschillen van Slidev.** Slidev aliast `public/` automatisch naar de root, zodat `/npuls/...` en `/shots/...` daar gewoon resolven. Een gewone static server (`npx serve .`, `python -m http.server`) doet dat niet: die serveert `public/` letterlijk als map. Gebruik daarom in HTML-bestanden altijd `/public/npuls/...` en `/public/shots/...`, niet `/npuls/...` / `/shots/...`. Voor fonts betekent dit dat de `@font-face`-declaraties uit `style.css` (die wél `/npuls/...` gebruiken, want die gelden ook voor Slidev) niet laden onder de vrij-HTML-track — `_template.html` overschrijft ze daarom lokaal met de juiste `/public/npuls/...`-paden. Kopieer dat blok mee als je een nieuwe presentatie vanaf het template start; verzin geen eigen `@font-face`-regels.

**Regels die overeind blijven, ongeacht track:**
- Geen hardcoded hex-kleuren — altijd `var(--np-*)`.
- Minimaal 3 primaire Npuls-kleuren zichtbaar over het hele deck.
- Toegestane achtergrond→accent-combinaties uit `npuls-huisstijl.md` §3 blijven gelden (bijv. oranje achtergrond → alleen zwart/roze tekst).
- Voor vormtaal (pulse-lijn, starburst, chevrons, concentrische cirkels — zie `npuls-huisstijl.md` §5): dit zijn nu ook de motieven om mee te *animeren*. `_template.html` bevat al een werkend voorbeeld van de pulse-lijn (SVG stroke-draw) en concentrische cirkels (ademende scale-animatie).

## Structuur: scenes in plaats van slides

Elke "slide" is een `<section class="scene ...">`, vol scherm, met CSS scroll-snap. Drie achtergrondvarianten zitten al in het template (`scene--light`, `scene--ink`, `scene--gradient`) — voeg gerust een vierde toe zolang die uit `--np-*`-tokens is opgebouwd.

Navigatie zit al in het template: pijltjestoetsen/spatie/page-up/down scrollen naar de volgende scene, en er verschijnt een stip-navigatie rechts die meekleurt met de actieve scene. Niets hiervan hoeft per presentatie herschreven te worden.

## Animatiepatroon

Twee ingebouwde technieken, allebei GPU-goedkoop (alleen `transform`/`opacity`, of `stroke-dashoffset` voor SVG-lijnen):

1. **Entrance bij laden** — zet `.reveal` op een element in scene 1 (die al zichtbaar is bij het openen); die animeert direct.
2. **Scroll-reveal** — zet `.reveal` op elementen in latere scenes; een `IntersectionObserver` in het template triggert `.is-visible` zodra de scene in beeld scrollt. Gebruik `.reveal-group` om kinderen na elkaar te laten verschijnen (stagger via `nth-child`-delays, al gedefinieerd voor 4 items — breid uit indien nodig).

**Verplicht:** elke animatie moet uitgeschakeld worden onder `prefers-reduced-motion: reduce` (staat al in het template — laat deze regel niet weg als je nieuwe animaties toevoegt).

**Voor zwaardere choreografie** (canvas, particles, uitgebreide timelines) — laad een library via CDN, bijvoorbeeld:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

Gebruik dat alleen als CSS-keyframes/`IntersectionObserver` niet volstaan — begin met wat er al in het template staat.

## De briefing-prompt (herbruikbaar, los van track)

Het sterkste deel van het voorbeeld dat dit spoor triggerde was niet de techniek maar de briefing. Gebruik deze structuur bij het aanmaken van een presentatie — voor beide tracks, maar vooral hier omdat er geen component-bibliotheek is die de inhoud voor je structureert:

1. **Titel** — de exacte titel van de presentatie.
2. **Aanleiding** — waarom dit onderzoek/experiment er is, in 1-2 zinnen.
3. **Bronmappen** — verwijs naar de daadwerkelijke data/onderzoeksmappen (`research/...`, `results/...`) zodat het model zelf leest en interpreteert, in plaats van dat jij content voorkauwt.
4. **Begeleidende tekst** — een alinea die het probleem, de context en de toon voor het publiek beschrijft (bijv. "reviewmeeting"). Dit geeft het model de verhaallijn, niet alleen de feiten.
5. **Output-pad** — waar het bestand moet komen, hier dus `YYMMDD_onderwerp.html` in de projectroot.

## Export en QA

Er is geen ingebouwde PDF/PPTX-export zoals bij Slidev. Twee opties:

- **Bekijken/delen:** stuur de map (`YYMMDD_onderwerp.html` + `style.css` + `public/`) of host 'm; browser-print-to-PDF werkt redelijk dankzij `scroll-snap-align` maar is niet pixel-perfect.
- **Visuele QA:** `playwright-chromium` staat al in `devDependencies` (zie `screenshot_slides.mjs` voor het Slidev-equivalent). Schrijf een vergelijkbaar script dat elke `[data-scene]` in de nieuwe presentatie los screenshot voor controle op overflow/contrast, net als stap 2 in de `clidev`-skill.

## Status

Dit is een eerste versie, geen officiële skill. Als dit patroon zich bewijst in een paar presentaties, is de volgende stap 'm te herschrijven als een echte skill (analoog aan `clidev`) in `cedanl/.github`, zodat collega's 'm ook via `npx skills add` krijgen.
