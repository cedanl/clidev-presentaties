# Beslissingen, aannames en open punten

Bijgewerkt: 2026-10-05. Gebruik dit bestand om afwijkingen van het oorspronkelijke voorstel terug
te vinden en om te zien wat nog beslist moet worden.

## Genomen beslissingen (door Claude, op basis van het verzoek)

| # | Beslissing | Reden |
|---|---|---|
| D1 | Het voorstel blijft het originele bestand; alleen logo, evaluatie en programma zijn aangepast (`patch_voorstel.py`) | Een eerste poging om het hele voorstel met powerclaude te herbouwen veranderde te veel en is teruggedraaid |
| D2 | Het evaluatieblok staat **na spiegelmoment 2 en vóór de interactieve afsluiting** | Zo is het verzoek geformuleerd; deelnemers hebben dan alles gezien |
| D3 | De 8 minuten voor evaluatie komen uit de uitleg-blokken (intro 6→5, synthetisch 7→6, opdracht 7→6, skills 10→8) en de afsluiting (11→8) | De rondes en spiegelmomenten (22 en 15 min) zijn de kern en blijven staan |
| D4 | De peiling heeft vier meerkeuze-opties van "nee" tot "4 uur per week, één semester" | Zo is de vraag gesteld; de tussenopties zijn aanvullingen van ons |
| D5 | Reflectie als skill `workshop-reflectie`, afgeleid van `sessie-terugblik` | De bestaande skill koppelt aan commits en GitHub, dat past niet bij losse deelnemers |
| D6 | Privacydrempel is 30 studenten per groep en 5 per percentage-cel (was "n<5" in de sheets) | Dat is wat staat1cho doet, met secundaire onderdrukking |
| D7 | Casus A is de aanbevolen casus in het uitvoeringsdeck | Daar zit het ingebouwde patroon in; casus C kan niet met dit bestand |
| D8 | Eigen datawrapper met een ingebakken patroon per sector | De generator van staat1cho heeft zelf geen patroon, zie `bevindingen-staat1cho.md` |
| D9 | Eén echt verschil (sector) en één nep-verschil (geslacht) in de data | Leert deelnemers het verschil tussen patroon en ruis |
| D10 | Skills staan in `workshop-rad/skills/` en niet in `.claude/skills/` | `.claude/` staat in `.gitignore`; zo staan ze onder version control |
| D11 | Uitvoeringsdeck gebruikt de pay-off "Moving Education."; het voorstel houdt "Onderwijs bewegen." | De huisstijl schrijft de eerste voor; het voorstel is niet aangepast |
| D12 | Het echte beeldmerk is uit `Slide16.PNG` gereconstrueerd als 70 vector-stippen (`assets/beeldmerk-ring.json`) | powerclaude en de skill vormgever-npuls-huisstijl tekenen een indicatieve gevulde ster, niet de stippenring van het echte logo. Een officieel vectorbestand ontbreekt in de repo |

## Aannames (controleren)

- **A1:** De peiling-meerkeuzeoptie "4 uur per week voor één semester" is een omschrijving van het team
  ("ofzo"). Pas aan als de omvang anders is.
- **A2:** De deelnemers hebben Claude Code beschikbaar in de devcontainer (abonnement of API-key).
  Niet gecontroleerd.
- **A3:** De dashboard-tool is Streamlit. In het voorstel stond dat nog open.
- **A4:** De drempelwaarden 30/5 zijn een eigen keuze van staat1cho en niet getoetst door een
  privacy officer. Dat staat zo ook in de skills.
- **A5:** De kansen in `genereer_data.R` (22%/10%/15% uitval, 5%/20%/12% wissel) zijn onze keuze.
- **A6:** Voor deze workshop is geen datum bekend; de decks noemen geen datum.

## Open punten

| # | Punt | Wie | Voor wanneer |
|---|---|---|---|
| O1 | Casus kiezen (A aanbevolen) en casus C wel/niet herformuleren | Workshopleiding | Voor de eerste droge run |
| O2 | Peiling-tool kiezen (Mentimeter of vergelijkbaar) en QR-code in dia 21 zetten | Workshopleiding | Week voor de workshop |
| O3 | Devcontainer bouwen en testen met de skills en data erin | Technisch team | Twee droge runs voor de dag |
| O4 | Streamlit bevestigen of kiezen voor een alternatief | Workshopleiding | Met O3 |
| O5 | Datum, tijdstip en spreker invullen | CEDA | Voor verzending |
| O6 | Peiling-resultaten verwerken volgens `evaluatie-en-vervolg.md` | CEDA | Binnen een week na de workshop |
| O7 | Privacy officer of FG laten kijken naar de drempels voor echte data | CEDA | Voor gebruik met echte data |

## Wat we niet gedaan hebben

- De Shiny-app uit staat1cho niet gedraaid en niets in die repo gewijzigd.
- Geen devcontainer gebouwd; daar is geen specificatie van.
- Geen echte deelnemers of echte data gebruikt. De droge run is gedaan door een agent, zie `droge-run.md`.
- Geen reflectie of peiling uitgevoerd; er zijn dus geen echte antwoorden.
