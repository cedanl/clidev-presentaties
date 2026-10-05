# Workshop RAD / DAIR: Agentic data science in het onderwijs

Alles voor de workshop van 120 minuten: *jij stuurt, de agent bouwt*. Deelnemers werken in
tweetallen met een AI-agent (Claude Code) aan één casus en leveren één dashboard op.

| Wat | Waar |
|---|---|
| **Voorstel**-deck (voor akkoord) | het originele `../workshop-voorstel-RAD_120min.pptx`, met minimale aanpassingen: `scripts/patch_voorstel.py` → `exports/workshop-voorstel-RAD_120min.pptx` / `.pdf` |
| **Uitvoerings**-deck (op de dag) | `decks/261005_workshop_rad_uitvoering.deck.mjs` → `exports/261005_workshop_rad_uitvoering.pptx` / `.pdf` (na het bouwen: `scripts/fix_beeldmerk.py`) |
| Claude-skills voor de workshop | `skills/` |
| Synthetische data + antwoordsleutel | `data/` (script: `scripts/genereer_data.R`) |
| Echt Npuls-beeldmerk (stippenring, transparant) | `assets/npuls-beeldmerk-zwart.png`, `assets/npuls-beeldmerk-wit.png`, `assets/beeldmerk-ring.json` |
| Draaiboek, bevindingen, evaluatie, beslissingen | `docs/` |

`../workshop-voorstel-RAD_120min.pptx` is het oorspronkelijke voorstel. Daar is alleen het logo vervangen
en de evaluatie aan toegevoegd, zie *Wat er veranderd is aan het voorstel* hieronder.

## Hoe de stukken in elkaar passen

```
voorstel-deck ──(akkoord)──► uitvoerings-deck + draaiboek
                                   │
   data/ (synthetisch, met patroon) │   skills/
   scripts/genereer_data.R          ├── workshop-verkennen   (ronde 1)
                                    ├── workshop-dashboard   (ronde 2)
                                    └── workshop-reflectie   (evaluatie)
                                          │
                              docs/evaluatie-en-vervolg.md  (peiling en verwerking)
```

## Aan de slag

### De decks (opnieuw) maken

Vanuit de root van `clidev-presentaties`.

**Uitvoeringsdeck** met de skill `powerclaude` (zie die skill voor fonts en afhankelijkheden). powerclaude
tekent zelf een indicatief beeldmerk (een gevulde stippenster) dat niet het echte Npuls-logo is; daarom
vervangt `fix_beeldmerk.py` dat achteraf door de echte stippenring:

```bash
node ~/.claude/skills/powerclaude/scripts/build.mjs workshop-rad/decks/261005_workshop_rad_uitvoering.deck.mjs
cp exports/261005_workshop_rad_uitvoering/261005_workshop_rad_uitvoering.pptx workshop-rad/exports/
python workshop-rad/scripts/fix_beeldmerk.py workshop-rad/exports/261005_workshop_rad_uitvoering.pptx
node ~/.claude/skills/powerclaude/scripts/render.mjs workshop-rad/exports/261005_workshop_rad_uitvoering.pptx --pdf
```

**Voorstel**: `python workshop-rad/scripts/patch_voorstel.py` haalt het origineel uit git (commit `67272a3`) en
schrijft `workshop-voorstel-RAD_120min.pptx`. Staat dat bestand open in PowerPoint, dan schrijft het script
naar `workshop-rad/exports/`; sluit PowerPoint en draai opnieuw om het in de root te krijgen.

Ontvangers zonder Npuls-fonts zien Calibri: stuur de PDF, of installeer de fonts uit
`public/npuls/Npuls_lettertype/` (`node ~/.claude/skills/powerclaude/scripts/install-fonts.mjs`).
Aanpassen doe je in de spec en daarna opnieuw bouwen; kleine tekstwijzigingen mogen ook direct in
PowerPoint.

### De data opnieuw maken

```bash
Rscript workshop-rad/scripts/genereer_data.R ../staat-van-onderwijsinstelling
Rscript workshop-rad/scripts/verwachte_uitkomsten.R > workshop-rad/data/verwachte_uitkomsten.txt
```

Dit heeft R en de packages `dplyr`, `readr`, `tibble`, `pkgload` (en wat staat1cho nodig heeft)
nodig. De seeds (11, 12, 13) maken de uitkomst reproduceerbaar.

**Deel `data/waarheid.csv` en `data/verwachte_uitkomsten.txt` niet met deelnemers**: dat is de
antwoordsleutel.

### De skills gebruiken

Kopieer de mappen uit `skills/` naar `.claude/skills/` van de devcontainer (of de projectmap van de
deelnemers). Activeren met `/workshop-verkennen`, `/workshop-dashboard` en `/workshop-reflectie`.
Ze zijn bedoeld als tekstbestanden die deelnemers kunnen lezen en aanpassen.

## Docs

| Document | Waarvoor |
|---|---|
| `docs/programma-uitvoering.md` | Draaiboek: tijdlijn, checklist, per blok, als het misgaat |
| `docs/bevindingen-staat1cho.md` | Wat we leerden van het staat-van-onderwijsinstelling-dashboard en package |
| `docs/evaluatie-en-vervolg.md` | Opzet van het evaluatieblok, vragen, opslag en verwerking |
| `docs/droge-run.md` | Uitkomst van de droge run van de skills |
| `docs/beslissingen.md` | Gemaakte keuzes, aannames en open punten |

## Geschiedenis (version control)

Werk gebeurt op branch `feat/workshop-rad-uitvoering`; zie `git log`. Het oorspronkelijke voorstel staat
onaangetast in commit `67272a3` (`git show 67272a3:workshop-voorstel-RAD_120min.pptx`).

## Wat er veranderd is aan het voorstel

Bewust weinig. De opmaak, kleuren, iconen en teksten van het origineel zijn behouden.

1. **Logo:** het zelfgetekende stippenlogo (rechtsboven en linksboven op de titelslide) is vervangen door
   het echte Npuls-beeldmerk, de stippenring uit `public/npuls/npuls_logo.jpg`. Wit op blauwe slides, zwart
   op de rest.
2. **Evaluatieslide** toegevoegd, in dezelfde stijl als "De opdracht", vóór de afsluiting.
3. **Programma (slide 3)** bijgewerkt: de laatste regel is nu "Evaluatie en afsluiting" (16 min, één blok) en
   de tijden zijn aangepast. De spiegelmomenten gaan over de skill en niet over individuele dashboards.

Niet aangeraakt: de iconen op de slides over synthetische data en responsible (schild, mens, weegschaal,
boek) en de golven en ringen. Die zijn geen logo; of ze Font Awesome *Solid Sharp* zijn zoals de huisstijl
voorschrijft, is niet gecontroleerd.

Het eerdere voorstel dat ik volledig had herbouwd met powerclaude is verwijderd: dat was te veel.
