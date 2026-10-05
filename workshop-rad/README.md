# Workshop RAD / DAIR: Agentic data science in het onderwijs

Alles voor de workshop van 120 minuten: *jij stuurt, de agent bouwt*. Deelnemers werken in
tweetallen met een AI-agent (Claude Code) aan één casus en leveren één dashboard op.

| Wat | Waar |
|---|---|
| **Voorstel**-deck (voor akkoord) | `decks/261005_workshop_rad_voorstel.deck.mjs` → `exports/261005_workshop_rad_voorstel.pptx` / `.pdf` |
| **Uitvoerings**-deck (op de dag) | `decks/261005_workshop_rad_uitvoering.deck.mjs` → `exports/261005_workshop_rad_uitvoering.pptx` / `.pdf` |
| Claude-skills voor de workshop | `skills/` |
| Synthetische data + antwoordsleutel | `data/` (script: `scripts/genereer_data.R`) |
| Draaiboek, bevindingen, evaluatie, beslissingen | `docs/` |

Het eerdere bestand `../workshop-voorstel-RAD_120min.pptx` is de herbouwde versie van het voorstel
(zie *Geschiedenis* hieronder).

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

### De decks (opnieuw) bouwen

Vanuit de root van `clidev-presentaties`, met de skill `powerclaude` (zie die skill voor
fonts en afhankelijkheden):

```bash
node ~/.claude/skills/powerclaude/scripts/build.mjs workshop-rad/decks/261005_workshop_rad_uitvoering.deck.mjs
node ~/.claude/skills/powerclaude/scripts/render.mjs exports/261005_workshop_rad_uitvoering/261005_workshop_rad_uitvoering.pptx --pdf
```

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

Werk gebeurt op branch `feat/workshop-rad-uitvoering`. Commits in volgorde:

1. `chore(workshop)`: v1 van het voorstel (zoals het was) bewaard als uitgangspunt
2. `feat(workshop)`: voorstel herbouwd met echte Npuls-assets, plus evaluatieblok
3. `feat(workshop)`: data, skills, uitvoeringsdeck en documentatie (zie `git log` voor details)

Vergelijk met de oorspronkelijke versie via `git show 67272a3:workshop-voorstel-RAD_120min.pptx`.

## Wat er veranderd is aan het voorstel

De originele v1 gebruikte losse iconen (schild, weegschaal, mens-icoon, boek) en een zelfgetekende
stippenster als logo. Dat is vervangen:

- Het **Npuls-beeldmerk** komt uit de huisstijl-assets (op inhoudsslides klein rechtsboven, op de
  afsluiting met woordmerk).
- Illustraties komen uit `public/npuls/powerpoint_illustrations/` (isometrisch, meerdere kleuren,
  zwarte lijnvoering), niet uit Font Awesome-iconen of zelfgemaakte cirkels.
- De CEDA-introslide en de contactslide met de vaste teksten zijn toegevoegd.
- Fonts zijn General Sans en Cooper (zoals de huisstijl voorschrijft).
- Pay-off **"Moving Education."**, zoals in de huisstijl, in plaats van "Onderwijs bewegen.".
