# Droge run van de skills

Datum: 2026-10-05. Uitgevoerd door een afzonderlijke agent die **blind** werkte: alleen
`synthetisch_1cho.csv` en de twee SKILL.md's, de antwoordsleutel pas na afloop. Casus A.
Python 3.14, duckdb 1.5, streamlit 1.65, plotly. Dit vervangt de twee droge runs met mensen niet
(zie `programma-uitvoering.md`): het is een eerste controle of de skills uitvoerbaar zijn.

## Uitkomst

- Beide skills waren uitvoerbaar; `app.py` draaide in `streamlit.testing.v1.AppTest` zonder exception,
  ook bij lege selectie. De privacy-drempel werkte (bij drempel 100 werden man n=33 en vrouw n=31
  onderdrukt) en cohort 2023 kwam nergens in beeld.
- **Alle checkpoints klopten:** techniek 21,9% (n=1381), economie 13,1% (n=720), gezondheidszorg
  10,2% (n=708), totaal 16,7% (n=2809); man 16,1%, vrouw 17,3%; 3070 studenten; 28 van 96 groepen
  onder 30.

## Gevonden en verwerkt in de skills (versie 0.1.0, ongewijzigd nummer)

| # | Bevinding | Aanpassing |
|---|---|---|
| 1 | `opleidingsvorm` is altijd voltijd; casusvraag A is daarmee half onbeantwoordbaar | Stap 1 in `verkennen`: per uitsplitsing controleren; draaiboek noemt het |
| 2 | Sector en opleiding niet aan kolomnamen gekoppeld | Kolommen benoemd onder *Invoer* |
| 3 | "Niet meer ingeschreven na jaar 1" niet operationeel | Definitie: geen rij op `inschrijvingsjaar = j+1` en geen `diplomajaar` |
| 4 | Drempel 5 per cel dubbelzinnig en veel invloed (26 → 47 van 88 groepen) | Aantallen apart rapporteren |
| 5 | Secundaire onderdrukking onderbelicht | Wanneer nodig en per uitsplitsing toegelicht |
| 6 | Laatste cohort geeft 100% uitval, niet 0% | Skill, draaiboek, bevindingen en deck-notities aangepast |
| 7, 8 | Test-instructie ontbrak; berekeningen niet los testbaar | `berekeningen.py` naast `app.py`; test met `AppTest` |
| 9 | Geen peildatum in de data | Laatste `inschrijvingsjaar` |
| 10 | `use_container_width` deprecated; geen dependency-lijst | `width="stretch"` en `workshop-rad/requirements.txt` |

## Niet gecontroleerd

- Visueel resultaat in een browser, kleurcontrast (4,5:1) en alt-tekst voor schermlezers.
- `streamlit run` in echte servermodus.
- Casus B en C.
- Of een niet-programmeur in de checkerrol dit in de beschikbare tijd haalt.

Dit blijft werk voor de echte droge runs voor de dag.
