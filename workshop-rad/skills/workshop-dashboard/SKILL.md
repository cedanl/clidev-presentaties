---
name: workshop-dashboard
description: Gebruik bij ronde 2 van de CEDA-workshop "Agentic data science in het onderwijs", of wanneer iemand uit een eerder profiel en schets (data-profiel.md en schets.md) een dashboard wil bouwen over studiesucces in 1CHO-data — met grafiek, vergelijking en filter, privacy-drempel, eerlijke framing, bron en toegankelijkheid. LET OP — de data eerst verkennen hoort bij `workshop-verkennen`; reflectie bij `workshop-reflectie`.
allowed-tools: Read Grep Glob Write Edit Bash
metadata:
  workshop: ceda-rad-dair
  ronde: "2"
  versie: "0.1.0"
---

# Workshop: dashboard bouwen (ronde 2)

Bouwt uit `schets.md` een werkend én verantwoord dashboard dat de casusvraag beantwoordt. Het
verantwoorden zit er **in verweven**: er is geen aparte stap achteraf.

## Invoer

- `data-profiel.md` en `schets.md` uit `workshop-verkennen`. Ontbreken ze, draai dan eerst die skill.
- `data/synthetisch_1cho.csv`.
- De casusvraag (staat bovenaan het profiel).

## Stack

Python, DuckDB voor de berekening en Streamlit voor het dashboard (de dashboard-tool kan voor de
workshop nog wijzigen; volg dan de keuze van de workshopleiding). Eén bestand `app.py`, start met
`streamlit run app.py`. Zet berekeningen in functies zodat ze los te testen zijn.

## Wat het dashboard minimaal heeft

1. **Een grafiek** die de casusvraag beantwoordt, met de **conclusie als titel** ("Uitval is het
   hoogst in techniek"), niet "Uitval per sector".
2. **Een vergelijking** tussen groepen of cohorten, met één gemeenschappelijke nul-as.
3. **Een filter** (sector, opleiding, cohort), waarbij de privacy-drempel opnieuw wordt toegepast
   op de gefilterde groep.
4. **Een zijbalk of kader "Zo lees je dit"** met definities (uit `data-profiel.md`), bron en de
   zin *Wat dit dashboard niet kan zeggen*.

## Responsible, verweven

| Check | Wat jij doet |
|---|---|
| Privacy | Toon geen groep onder de drempel (standaard 30 studenten per groep, 5 per percentage-cel; zie `data-profiel.md`). Toon in plaats daarvan "te weinig studenten" en pas secundaire onderdrukking toe. Bouw de drempel als parameter, niet hardcoded in elke grafiek. |
| Waarneembaarheid | Sluit cohorten uit waarvan de observatietermijn niet volledig is en zeg dat op het dashboard. |
| Eerlijke framing | Geen woorden als "slechter" of "risicogroep" over groepen mensen; benoem opleidingen, geen kenmerken van personen als oorzaak. Een verband is geen oorzaak. |
| Toegankelijkheid | Kleurenblind-veilig palet (niet alleen rood/groen), contrast minimaal 4,5:1, elke grafiek met een tekstuele samenvatting als alt-tekst, labels direct op de staven waar het past. |
| Bron en uitleg | Bronvermelding (synthetische 1CHO-data, de definities), peildatum en n per groep zichtbaar. |

## Werkwijze

1. Lees `schets.md`, kies met de deelnemer welke view het eerst komt, bouw die.
2. Draai de app kort (`streamlit run app.py --server.headless true`) en controleer dat hij start.
   Meld eerlijk wat je niet kon controleren, bijvoorbeeld hoe het er in de browser uitziet.
3. Controleer de uitkomst tegen het checkpoint hieronder.
4. Vat samen: welke keuzes zijn gemaakt, welke checks zijn toegepast, wat blijft open.

## Checkpoint (voor de workshopleiding)

Op de standaard workshopdata hoort de uitval binnen 1 jaar (cohorten 2012-2022) uit te komen op
ongeveer **22% in techniek, 13% in economie en 10% in gezondheidszorg** (totaal 16,7%). Geslacht
laat vrijwel geen verschil zien (16% man, 17% vrouw): wie dat als bevinding presenteert, ziet ruis.
Zie `workshop-rad/data/verwachte_uitkomsten.txt`.

## Let op

- Geen interactie of extra tab "voor de zekerheid": houd het bij wat de casus nodig heeft.
- Vermeld op het dashboard dat de data synthetisch is.
- Volg de huisstijl van het eigen team of Npuls als de deelnemer die opgeeft; zo niet, kies een rustig
  standaardthema met voldoende contrast.
