# Tijdmeting: hoe lang duren de skills?

Gemeten op 2026-10-05 met Claude Code (`claude -p`, headless) op de synthetische workshopdata, casus A. Doel:
weten hoeveel tijd de leider moet inplannen om een skill live te laten draaien bij het spiegelmoment, en wat het
verschil is met een gewone prompt.

## Opzet

- Model: `claude-sonnet-5-5` (standaard van de omgeving, niet gekozen).
- Elke run in een schone map met alleen `data/synthetisch_1cho.csv` en (behalve run C) de twee skills in
  `.claude/skills/`. Python met duckdb, streamlit en plotly stond klaar.
- Run A en B: `workshop-verkennen`, daarna `workshop-dashboard` op de uitkomst. Twee keer gedraaid om spreiding te zien.
- Run C: **één gewone prompt** zonder skills: "Verken het bestand en bouw een Streamlit-dashboard dat deze vraag
  beantwoordt".
- Alle runs kregen de opdracht geen vragen te stellen. Muurtijd is gemeten met `date`; de API-tijd komt uit de
  uitvoer van Claude Code.

## Resultaten

| Run | Stap | Muurtijd | Beurten | Kosten |
|---|---|---|---|---|
| A | `workshop-verkennen` | 71 s | 8 | $0,25 |
| A | `workshop-dashboard` | 124 s | 14 | $0,38 |
| B | `workshop-verkennen` | 58 s | 7 | $0,22 |
| B | `workshop-dashboard` | 136 s | 18 | $0,45 |
| C | gewone prompt (verkennen en dashboard) | 104 s | 13 | $0,35 |

**Samengevat:**
- `workshop-verkennen`: **ongeveer 1 minuut** (58 tot 71 s).
- `workshop-dashboard`: **ongeveer 2 tot 2,5 minuut** (124 tot 136 s).
- Beide skills achter elkaar: **ongeveer 3 minuten**.
- Een gewone prompt voor hetzelfde doel: **ongeveer 1,7 minuut**.

Op de skills na was elke run foutloos. Beide dashboards draaiden zonder fouten in `AppTest`.

## Kwaliteit: wat levert de skill méér op dan een gewone prompt?

Een gewone prompt kwam verder dan verwacht. Hij sloot cohort 2023 zelf uit en merkte op dat opleidingsvorm maar één
waarde heeft. Wat een gewone prompt **niet** deed:

| | Skill (run A en B) | Gewone prompt (run C) |
|---|---|---|
| Uitkomst techniek / economie / zorg | 21,9% / 13,1% / 10,2% (totaal 16,7%) | 21,5% / 12,5% / 10% (totaal 16,3%) |
| Aantal eerstejaars | 2.809 (definitie van staat1cho) | 2.449 (eigen definitie van "eerstejaars") |
| Privacydrempel (30 per groep, 5 per cel) | ja, met "te weinig studenten" | **geen** |
| Definities vastgelegd | ja, `data-profiel.md` | nee |
| Tussenproducten om na te lopen | `data-profiel.md`, `schets.md` | geen |
| Rekenregels los van de weergave | `berekeningen.py` | alles in `app.py` |
| Extra | n.v.t. | toetst op significantie (chi-kwadraat) |

Het belangrijkste verschil voor het spiegelmoment: **de gewone prompt telt anders**. Zijn "eerstejaars" is een
ander aantal dan de definitie van staat1cho, en daardoor wijken de percentages iets af. Niet fout, wel anders: precies
waarom een skill met vaste definities elke keer dezelfde cijfers geeft. En hij toont groepen onder de 30 gewoon,
terwijl de skill ze verbergt.

## Wat betekent dit voor het programma?

- Een skill live draaien kost **1 tot 2,5 minuut**, minder dan je zou denken. Dat past ruim binnen een spiegelmoment
  van 15 minuten, óók als je er één gewone prompt naast zet voor het contrast (samen ongeveer 4 minuten).
- Je kunt de skill tijdens het draaien uitleggen. De leider vult die tijd met praten en laat het resultaat zien.
- Dit zijn de **minimale** tijden, voor een leider die precies de instructie typt. Zie de beperkingen hieronder.
- Daardoor is er in de spiegelmomenten ruimte over. Overweeg 2 tot 3 minuten per spiegelmoment te laten vallen en
  die aan de devcontainer te geven, omdat het werkend krijgen daarvan de grootste planningsrisico is.

## Beperkingen (belangrijk)

- **Ander model dan de deelnemers.** Gemeten met `claude-sonnet-5-5`. De devcontainer van `cedanl/dair-agentic-coding` gebruikt Claude via Foundry met `claude-sonnet-4-6` als standaard Sonnet (zie het Dockerfile). De tijden kunnen dus anders uitvallen; herhaal de meting met het model van de deelnemers.
- **Niet in de devcontainer gemeten.** Dit draaide op één laptop, headless. Een tragere machine of een verbinding met
  veel gebruikers kan het flink rekken.
- **Twee runs per skill.** Dat laat spreiding zien (58 tot 71 s, 124 tot 136 s) maar is geen statistiek.
- **Modeltijd verschilt per tijdstip en drukte.** Reken op een marge van 50 tot 100% voor een live demo.
- **Geen gesprek.** De runs mochten geen vragen stellen. Een interactieve skill (met een gespreksstap) duurt langer.
- **Geen browser.** Of het dashboard er goed uitziet, is niet bekeken; alleen `AppTest`.
- **Deelnemers gebruiken de skills nu niet zelf** (besluit: alleen de leider laat ze zien). Hun eigen prompttijd in de
  rondes is hiermee niet gemeten.

## Hoe opnieuw te meten

Het script staat in de scratchpad van deze sessie; de aanpak is simpel te herhalen:

```bash
claude -p "Gebruik de skill workshop-verkennen op data/synthetisch_1cho.csv. <casus>" \
  --output-format json --allowedTools "Bash Read Write Edit Glob Grep Skill" --permission-mode acceptEdits
```

Meet de muurtijd met `date +%s` ervoor en erna, en lees `duration_ms`, `num_turns` en `total_cost_usd` uit de
JSON-uitvoer. Doe dit voor de workshop in de echte devcontainer en met de modelkeuze die deelnemers krijgen.
