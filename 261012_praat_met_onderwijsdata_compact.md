---
theme: default
title: Praat met je onderwijsdata (compact)
info: Compacte versie. Teamsessie CEDA. Visie op een betrouwbare onderwijsdata-chat, stand van onderwijsdata-chat, twee sporen (uniform model + semantiek, MCP) en discussiepunten.
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- TITELSLIDE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <h1 style="font-size: 3rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Praat met je onderwijsdata</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Semantiek, HORA/MORA en MCP: van losse tools naar een chatbot die elk getal kan verantwoorden
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Teamsessie &middot; 12 oktober 2026 &middot; compact</div>
</div>

<!--
Teamsessie, half informeren, half werksessie. Eerste helft: visie en stand van zaken. Tweede helft: discussiepunten.
Losse observaties uit de repo-analyse (verouderde docs, upload, auth) staan in een aparte deck: 261012_onderwijsdata_chat_issues.md.
-->

---

<!-- VASTE CEDA-SLIDE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide16.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 50% 50%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2.2rem 2.2rem 3rem;">
    <p class="eyebrow">Wie is CEDA</p>
    <h1 style="font-size: 1.7rem;">Centre of Educational Data Analytics</h1>
    <p class="np-subtitle" style="margin-top: 0.4rem; max-width: 100%;">Eén team binnen Npuls. Van ruwe data tot AI-toepassing, open source.</p>
    <ul style="font-size: 0.88rem; line-height: 1.7;">
      <li>Data, analytics en generatieve AI in één keten</li>
      <li>Altijd in co-creatie met mbo, hbo en wo</li>
      <li>Open source, voor elke instelling</li>
    </ul>
  </div>
  <div></div>
</div>

---

<!-- TWEE SPOREN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Twee sporen, één raakvlak

<p class="np-subtitle">Los van elkaar te ontwikkelen. Ze ontmoeten elkaar in de semantiek-MCP.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Spoor A &middot; apart project</span>
    <h3 style="margin-top: 0.5rem;">Uniform model + semantiek</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Instellingsdata mappen naar het informatiemodel van HORA/MORA. Een semantische laag die uitlegt wat tabellen, kolommen en codes betekenen.</p>
    <p style="font-size: 0.86rem; margin: 0.5rem 0 0;"><strong>Levert de betekenis en de data.</strong></p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Spoor B &middot; onderwijsdata-chat</span>
    <h3 style="margin-top: 0.5rem;">Tools als MCP</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De bestaande tools ontsluiten als MCP-servers, zodat elke chatbot ze kan gebruiken. Geschikt maken voor andere soorten data.</p>
    <p style="font-size: 0.86rem; margin: 0.5rem 0 0;"><strong>Levert de machine:</strong> ophalen, rekenen, controleren, verhelderen.</p>
  </div>
</div>

</div>

---

<!-- WAT IS EEN RIJ -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Definitie 1: wat is één rij?

<p class="np-subtitle">Een student is iets anders dan een inschrijving. De rij-eenheid van een tabel is zelf een definitie.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: center;">
<div>

```
pgn ; geslacht ; opleidingsvorm ; opleidingsfase
2   ; V        ; 1              ; B
7   ; M        ; 1              ; B
7   ; M        ; 1              ; M
10  ; V        ; 1              ; B
```

<p class="muted" style="font-size: 0.78rem; margin-top: 0.3rem;">1CijferHO, EV-bestand. Persoon 7 heeft twee inschrijvingen: bachelor én master.</p>

</div>
<div>
  <div class="np-card accent-orange">
    <h3>Vier rijen, drie studenten</h3>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Wie "hoeveel studenten?" beantwoordt door rijen te tellen, komt te hoog uit. Dit is precies de fout die een LLM maakt als niemand hem vertelt wat een rij is.
    </p>
  </div>
</div>
</div>

</div>

<!--
onderwijsdata-chat doet dit deels al: telling.py meldt of een bestand personen of inschrijvingen telt. Maar dat komt uit bronmetadata, niet uit een gecureerde laag.
-->

---

<!-- MCP-SET -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De MCP-set: vijf onderdelen

<p class="np-subtitle">Generiek gebouwd als MCP, zodat elke chatbot het kan inladen.</p>

<div class="np-pipeline" style="margin-top: 1rem; gap: 0.4rem;">
  <div class="np-step blue" style="flex: 1;">
    <strong style="font-size: 0.85rem;">1. Verhelderen</strong>
    <small>Wat bedoelt de gebruiker?</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step blue" style="flex: 1;">
    <strong style="font-size: 0.85rem;">2. Semantiek</strong>
    <small>Wat betekent wat ik heb?</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1;">
    <strong style="font-size: 0.85rem;">3. Data ophalen</strong>
    <small>Op basis van de semantiek</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1;">
    <strong style="font-size: 0.85rem;">4. Sandbox</strong>
    <small>Python op de data</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1;">
    <strong style="font-size: 0.85rem;">5. Controleren</strong>
    <small>Klopt het antwoord?</small>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1.4rem;">
  In een andere beschrijving heten ze <em>Search Catalog, Dataset Details, Get Data, Query Data, Compute KPI, Clarify Question</em>. Dat zijn letterlijk <strong>de toolnamen van onderwijsdata-chat</strong>.
</div>

</div>

---

<!-- MAPPING VISIE NAAR TOOLS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Visie naast bestaande tools

<div class="np-table" style="font-size: 0.76rem; margin-top: 0.3rem;">

| MCP uit de visie | In onderwijsdata-chat | Status |
|---|---|---|
| Semantiek bevragen | `search_catalog`, `dataset_details`, `dataset_counts`, `get_cbs_dimension`; `telling.py`, `definitie.py` | <span class="np-badge orange">Deels</span> |
| Data ophalen | `get_cbs_data`, `get_duo_data`, `get_rio_data`, `get_rio_instelling`, `query_data` | <span class="np-badge green">Aanwezig</span> |
| Sandbox | `run_analysis` in eigen proces: geen netwerk, niet schrijven, CPU/geheugenlimiet, AST-controle | <span class="np-badge green">Aanwezig</span> |
| Antwoorden controleren | `grounding.py`, selectie, labels, jaar/instelling; één correctieronde; `compute_kpi` | <span class="np-badge yellow">In de loop</span> |
| Vraagverheldering | `clarify_scope`: 2–3 keuzes | <span class="np-badge yellow">Eigen UI</span> |

</div>

<div class="np-bottomline" style="margin-top: 0.7rem;">
  Semantiek komt nu uit <strong>bronmetadata</strong>, niet uit een gecureerde laag. Dat is het gat dat spoor A vult.
</div>

</div>

---

<!-- ONTWERPVRAGEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat verandert er in MCP?

<div class="np-table" style="font-size: 0.74rem; margin-top: 0.2rem;">

| Onderwerp | Nu | In MCP |
|---|---|---|
| **Controle** | Code controleert het antwoord vóór de gebruiker het ziet | De client-LLM schrijft het antwoord; de server ziet het niet. `check_answer` werkt alleen als de client hem aanroept |
| **Verheldering** | `clarify_scope` toont een keuzemenu | Via MCP-elicitation, of een tool die keuzes teruggeeft; hangt af van de client |
| **Data in de store** | Per sessie op de server | Server houdt sessiestatus bij, zodat <code>data_key</code>s tussen aanroepen geldig blijven |
| **Reproduceerbaarheid** | Snippet per toolaanroep in de UI | Snippet in het toolresultaat of als MCP-resource |
| **System prompt** | Stuurt de toolvolgorde | Als MCP-prompt of in de toolbeschrijvingen |

</div>

<div class="np-bottomline" style="margin-top: 0.6rem;">
  Controle is de <strong>kernvraag</strong>: in MCP wordt een garantie een verzoek.
</div>

</div>

---

<!-- HET CONTRACT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Het contract tussen de sporen

<p class="np-subtitle">Per tabel en kolom minimaal deze velden. Vroeg afspreken.</p>

<div class="np-table" style="font-size: 0.78rem; margin-top: 0.2rem;">

| Veld | Voorbeeld |
|---|---|
| Naam en tabel | `inschrijving.aantal_inschrijvingen_student_jaar` |
| Rij-eenheid van de tabel | inschrijving |
| Definitie | aantal inschrijvingen van deze student in dit studiejaar |
| Omschrijving voor gebruikers | gebruik om van inschrijvingen naar studenten te tellen |
| Toegestaan gebruik | benchmark / intern / gebruiker |
| Gevoeligheidsklasse | bijv. 1–3 |
| Validatiestatus | voorgesteld (AI) / gevalideerd (data) / vastgesteld (domein) |

</div>

<p class="muted" style="font-size: 0.8rem; margin-top: 0.5rem;">Formaat: een Malloy-model als #128 positief uitvalt. Anders een eenvoudig YAML- of JSON-schema dat de bron-adapter inleest.</p>

</div>

---

<!-- WAAR BEGINNEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Voorstel</p>

# Beginnen bij 1CijferHO en bekostiging

<p class="np-subtitle">Daar hebben we het halve werk van een semantische laag al gedaan.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">1CijferHO</span>
    <ul style="font-size: 0.82rem; line-height: 1.55; margin: 0.5rem 0 0;">
      <li><code>eencijferho</code> decodeert al: DEC-tabellen en variabelemetadata maken van <code>opleidingsfase: B</code> → <code>bachelor</code></li>
      <li>EV is een inschrijvingenbestand met <code>pgn</code>: het rij-eenheidprobleem zit erin</li>
      <li>Synthetische 1CijferHO-data bestaat al als testset</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Bekostigingsbestanden</span>
    <ul style="font-size: 0.82rem; line-height: 1.55; margin: 0.5rem 0 0;">
      <li>Ons advies aan DUO: schema per bestand en codelijst als tabel. Dat <strong>is</strong> een contract</li>
      <li>De 34 HO-statuscodes in groepen: dat is semantiek</li>
      <li>Mbo én ho, per inschrijving, koppelbaar aan 1CijferHO binnen één instelling</li>
    </ul>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Bekende data, bij instellingen al aanwezig, en we kennen de valkuilen. <strong>Inschrijvingen</strong> als eerste tabelgroep.
</div>

</div>

<!--
Bronnen: 260319_1cho_nfwa_update (decoding: _decoded en _enriched), 260921_bekostigingsbestanden_mbo_ho (bijlage C: schema en codelijst, F.7: statuscodes in groepen, B.10: koppelen binnen één instelling).
Dit is een voorstel van ons, nog geen besluit.
-->

---

<!-- DISCUSSIE 1-3 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Discussie: de machine

<div style="display: flex; flex-direction: column; gap: 0.6rem; margin-top: 0.3rem;">
  <div class="np-card accent-orange" style="padding: 0.6rem 1.1rem;">
    <h3 style="font-size: 0.98rem;">1. Accepteren we een zwakkere controle in externe clients?</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0;"><strong>Voorstel:</strong> elk toolresultaat draagt bron, <code>data_key</code> en snippet mee, zodat ook een externe client herleidbaar blijft. <code>check_answer</code> als tool, en onze app als strenge referentie.</p>
  </div>
  <div class="np-card accent-blue" style="padding: 0.6rem 1.1rem;">
    <h3 style="font-size: 0.98rem;">2. Eerst MCP, of eerst de bron-adapter?</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0;"><strong>Voorstel:</strong> eerst een dunne MCP-wrapper op open data; snel te testen. Ontwerp de adapter pas met een tweede soort bron (1CijferHO) ernaast. Twee bronnen dwingen de goede abstractie af.</p>
  </div>
  <div class="np-card accent-green" style="padding: 0.6rem 1.1rem;">
    <h3 style="font-size: 0.98rem;">3. Wachten we op Malloy (#128)?</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0;"><strong>Voorstel:</strong> nee. Leg het contract vast als tabellen (YAML of CSV), in dezelfde vorm als ons schema-advies aan DUO. Malloy kan dat later lezen of genereren.</p>
  </div>
</div>

</div>

---

<!-- DISCUSSIE 4-7 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Discussie: de betekenis

<div class="np-grid-2" style="margin-top: 0.3rem; gap: 0.6rem; align-items: start;">
  <div class="np-card accent-blue" style="padding: 0.6rem 1rem;">
    <h3 style="font-size: 0.92rem;">4. Welke pilot?</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.2rem 0 0;">Inschrijvingen uit 1CijferHO + bekostiging, bij een instelling waar 1CijferHO al draait. Of eerst op synthetische data?</p>
  </div>
  <div class="np-card accent-orange" style="padding: 0.6rem 1rem;">
    <h3 style="font-size: 0.92rem;">5. Waar draait de data-MCP?</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.2rem 0 0;">1CijferHO bevat persoonsgegevens. Lokaal bij de instelling (geen data naar ons), of centraal met toegang in de database?</p>
  </div>
  <div class="np-card accent-green" style="padding: 0.6rem 1rem;">
    <h3 style="font-size: 0.92rem;">6. Wie stelt definities vast?</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.2rem 0 0;">#117 laat zien dat het nodig is. Wie mag "vastgesteld" zetten, en wie beheert na de eerste oplevering: instelling, CEDA of beide?</p>
  </div>
  <div class="np-card accent-pink" style="padding: 0.6rem 1rem;">
    <h3 style="font-size: 0.92rem;">7. Welke benchmarkkolommen?</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.2rem 0 0;">Een kleine vaste set, zodat instellingen hetzelfde meten. Wie beslist welke, en hoe komen er nieuwe bij?</p>
  </div>
</div>

</div>

<!--
Ook open: hoe worden gevoeligheidsklassen bepaald? Dat hangt samen met punt 5.
-->

---

<!-- VOLGENDE STAPPEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Voorgestelde volgende stappen

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Spoor B &middot; onderwijsdata-chat</span>
    <ol style="font-size: 0.82rem; line-height: 1.6; margin: 0.5rem 0 0; padding-left: 1.1rem;">
      <li>Ontwerpvragen MCP meenemen in de go/no-go van #128</li>
      <li>MCP-server die de bestaande tools hergebruikt, met <code>check_answer</code> als expliciete tool</li>
      <li>Testen vanuit een standaard chatclient op CBS/DUO/RIO</li>
      <li>Bron-adapter uitwerken, testen op synthetische 1CijferHO-data</li>
    </ol>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Spoor A &middot; apart project</span>
    <ol style="font-size: 0.82rem; line-height: 1.6; margin: 0.5rem 0 0; padding-left: 1.1rem;">
      <li>Contract vastleggen, samen met spoor B</li>
      <li>Eén instelling en één tabelgroep (inschrijvingen) als pilot</li>
      <li>AI stelt mapping naar HORA/MORA voor; specialisten valideren</li>
      <li>Tabel- en kolomdefinities schrijven met domeinexperts</li>
    </ol>
  </div>
</div>

<p class="muted" style="font-size: 0.8rem; margin-top: 0.7rem;">Kleinere punten uit de repo-analyse staan als potentiële issues in een aparte deck.</p>

</div>

---

<!-- VASTE AFSLUITSLIDE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">Tot slot</p>
  <h1 style="font-size: 2.6rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Blijf in contact</h1>
  <p style="font-size: 1.05rem; color: var(--np-dark-gray); max-width: 600px; line-height: 1.5;">Vragen, feedback of zin om mee te bouwen? We horen graag van je.</p>
  <div style="display: flex; gap: 1rem; margin-top: 1.6rem; flex-wrap: wrap; justify-content: center;">
    <div class="np-card accent-blue" style="padding: 0.9rem 1.4rem; text-align: center;">
      <span class="np-badge blue">GitHub</span>
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">github.com/cedanl</p>
    </div>
    <div class="np-card accent-green" style="padding: 0.9rem 1.4rem; text-align: center;">
      <span class="np-badge green">Community</span>
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">community.npuls.nl/groups/data-ai</p>
    </div>
    <div class="np-card accent-orange" style="padding: 0.9rem 1.4rem; text-align: center;">
      <span class="np-badge orange">Email</span>
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">ceda@surf.nl</p>
    </div>
  </div>
</div>
