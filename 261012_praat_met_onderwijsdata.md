---
theme: default
title: Praat met je onderwijsdata - semantiek, HORA/MORA en MCP
info: Teamsessie CEDA. Visie op een betrouwbare onderwijsdata-chat, stand van onderwijsdata-chat, twee sporen (uniform model + semantiek, MCP) en discussiepunten.
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
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Teamsessie &middot; 12 oktober 2026</div>
</div>

<!--
Teamsessie, half informeren, half werksessie. Eerste helft: visie en stand van zaken. Tweede helft: discussiepunten.
Losse observaties uit de repo-analyse (verouderde docs, upload, auth) staan in een aparte deck: 261012_onderwijsdata_chat_issues.md.
-->

---

<!-- AGENDA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Wat gaan we bespreken</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.2rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 0.8rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>De visie</strong><br/><span class="muted" style="font-size: 0.82rem;">Uniform model, definities, semantiek, MCP-set</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Waar staat onderwijsdata-chat?</strong><br/><span class="muted" style="font-size: 0.82rem;">Wat er al is, en waar de grenzen liggen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Spoor B: naar MCP</strong><br/><span class="muted" style="font-size: 0.82rem;">Tools ontsluiten, bron-adapter, toegang</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">4</span>
      <div><strong>Spoor A en het contract</strong><br/><span class="muted" style="font-size: 0.82rem;">Beginnen bij 1CijferHO en bekostiging</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">5</span>
      <div><strong>Discussie</strong><br/><span class="muted" style="font-size: 0.82rem;">Zeven punten, en de volgende stappen</span></div>
    </div>
  </div>
</div>

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

<!-- HET DOEL -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Het doel

<p class="np-subtitle">Een chatbot die vragen over onderwijsdata betrouwbaar beantwoordt.</p>

<div class="np-pipeline" style="margin-top: 1.2rem;">
  <div class="np-step blue" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.95rem;">Vraag in gewone taal</strong>
    <small>"Hoeveel eerstejaars stoppen na een jaar?"</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.95rem;">Precieze datavraag</strong>
    <small>Welke tabel, welke kolom, welke filter</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.95rem;">Herleidbaar antwoord</strong>
    <small>Elk getal terug te voeren op de bron</small>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1.4rem;">
  De AI <strong>vertaalt en formuleert</strong>. Ophalen en rekenen gebeurt in code die we kunnen controleren.
</div>

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

<!-- DIVIDER 1 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">De visie</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Uniform model, definities, semantiek en de MCP-set</p>
  </div>
</div>

---

<!-- HORA/MORA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Eén uniform datamodel: HORA/MORA

<p class="np-subtitle">De referentiearchitecturen voor ho en mbo bevatten een informatiemodel met gedefinieerde tabellen.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <h3>De vraag per instelling</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Welke data heb je, en hoe map je die naar het uniforme model?</p>
  </div>
  <div class="np-card accent-orange">
    <h3>Strak en uitdagend</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">AI stelt de mapping voor. Dataspecialisten valideren alleen nog.</p>
  </div>
  <div class="np-card accent-green">
    <h3>Stapsgewijs</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Niet alles tegelijk. Begin met de tabellen die het meest opleveren voor informatievoorziening.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem;">
  Omdat de ontologie <strong>uniform</strong> is, kan de semantiek er strak op aansluiten, bij elke instelling hetzelfde.
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

<!-- DEFINITIES ALS KOLOMMEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Definitie 2: definities als kolommen

<p class="np-subtitle">Geen honderd tabellen, maar honderd kolommen. Kolommen bijmaken is goedkoop.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
<div style="font-size: 0.9rem; line-height: 1.7;">

- **Aantal inschrijvingen van deze student dit jaar.** Daarmee reken je van inschrijvingen terug naar studenten.
- **Internationale student.** Er bestaan tientallen definities. Elk wordt een kolom.

</div>
<div>
  <div class="np-card accent-blue">
    <h3>Wel spelregels</h3>
    <ul style="font-size: 0.86rem; line-height: 1.6; margin: 0.4rem 0 0;">
      <li>Voor <strong>benchmarken</strong> een beperkt aantal kolommen, zodat instellingen hetzelfde meten</li>
      <li>Per kolom vastleggen <strong>waarvoor</strong> hij gebruikt mag worden</li>
      <li>Sommige kolommen maken <strong>gebruikers zelf</strong></li>
    </ul>
  </div>
</div>
</div>

</div>

---

<!-- GEVOELIGHEID -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Splitsen op gevoeligheid

<p class="np-subtitle">Tabellen op hetzelfde niveau kun je opsplitsen. Het nut zit in toegang: tabel X wel, tabel Y niet.</p>

<div class="np-grid-4" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Klasse 1</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Student &middot; basis</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Opleiding, fase, vorm</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Klasse 2</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Student &middot; voortgang</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Resultaten, studiepunten</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Klasse 3</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Student &middot; achtergrond</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Herkomst, vooropleiding</p>
  </div>
  <div class="np-card accent-pink">
    <span class="np-badge pink">Klasse 3</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Student &middot; persoon</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Identificerende gegevens</p>
  </div>
</div>

<p class="muted" style="font-size: 0.78rem; margin-top: 0.5rem;">Indeling ter illustratie. De echte klassen zijn een open vraag.</p>

<div class="np-bottomline" style="margin-top: 0.6rem;">
  Een "student" bestaat zo uit <strong>vier of vijf tabellen</strong>, elk met een eigen gevoeligheidsklasse. Lijkt op master data management.
</div>

</div>

---

<!-- ONTOLOGIE VS SEMANTIEK -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Ontologie en semantische laag

<p class="np-subtitle">Twee lagen, twee soorten eigenaren.</p>

<div class="np-table" style="font-size: 0.88rem; margin-top: 0.4rem;">

| Laag | Doet | Wie |
|---|---|---|
| **Ontologie** | De harde tabellen en de relaties ertussen | IT en dataspecialisten |
| **Semantische laag** | Welke definitie (dus welke kolom) past bij welke vraag; wat statuscodes en cijfers betekenen; welke vragen je ermee kunt beantwoorden | Domeinexperts schrijven, datamensen valideren |

</div>

<div class="np-bottomline" style="margin-top: 1rem;">
  Gebruikers kennen de precieze definities niet. De semantische laag laat de AI een vraag vertalen naar <strong>de juiste tabel, kolom en filter</strong>.
</div>

</div>

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

<!-- DIVIDER 2 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Waar staat onderwijsdata-chat?</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Het meeste bestaat al, binnen de eigen agent-loop</p>
  </div>
</div>

---

<!-- KERNPRINCIPE EN ONTWERPKEUZES -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Kernprincipe en ontwerpkeuzes

<p class="np-subtitle">FastAPI + React over open data van CBS, DUO en RIO. Tool calling via LiteLLM.</p>

<div class="np-card accent-orange" style="margin-top: 0.2rem; padding: 0.7rem 1.2rem;">
  <p style="font-size: 1rem; margin: 0;"><strong>ADR-001:</strong> de server laadt en rekent; het model kiest en formuleert. De AI rekent nooit zelf.</p>
</div>

<div class="np-grid-2" style="margin-top: 0.7rem; font-size: 0.84rem; line-height: 1.55;">
<div>

- **data_key in plaats van rijen.** Het model krijgt sleutel, schema en preview; de data blijft op de server.
- **Gesloten selectie (ADR-006).** Model kiest codes per dimensie, server bouwt de filter. Onbenoemde dimensie wordt geweigerd: geen dubbeltellen via totaalrijen.

</div>
<div>

- **Canonieke aanroepen.** Zelfde selectie in andere spelling: zelfde identiteit, cache en load.
- **Scopeprofiel.** Alleen mbo, hbo en wo.
- **Reproduceerbaar (ADR-002).** Elke toolaanroep levert een Python-snippet.

</div>
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

<!-- GRENZEN EN LESSEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Grenzen en lessen

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-orange">
    <h3>Wat de controles niet vangen</h3>
    <ul style="font-size: 0.84rem; line-height: 1.6; margin: 0.4rem 0 0;">
      <li>Getallen onder vier cijfers en jaartallen worden niet getoetst</li>
      <li>Een getal dat elders in de data staat, telt als gedekt, ook bij de verkeerde groep</li>
      <li>Interpretatie en causale claims worden niet gecontroleerd</li>
    </ul>
  </div>
  <div class="np-card accent-blue">
    <h3>Definities vragen validatie</h3>
    <ul style="font-size: 0.84rem; line-height: 1.6; margin: 0.4rem 0 0;">
      <li><strong>#117:</strong> DUO-woordenlijst in <code>riodata</code> fout: STUDIEJAAR met verkeerde peildatum, LEERWEG als voltijd/deeltijd i.p.v. BOL/BBL</li>
      <li><strong>#118:</strong> aantal DUO-datasets verschilde tussen docs, prompt en portaal</li>
    </ul>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Lopend: <strong>#128</strong> verkent Malloy Publisher als semantische laag (REST én MCP). Go/no-go in iteratie 21, 10–23 november.
</div>

</div>

<!--
Grenzen komen uit docs/anti-hallucination-architecture.md.
De tweede grens (getal elders in de data telt als gedekt) wordt groter zodra we meer tabellen per vraag laden. Semantiek over de rij-eenheid helpt hier ook.
-->

---

<!-- DIVIDER 3 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Spoor B: naar MCP</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">De machine los van de eigen app</p>
  </div>
</div>

---

<!-- DRIE STAPPEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie stappen

<div class="np-grid-3" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Stap 1</span>
    <h3 style="margin-top: 0.5rem;">Tools als MCP</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">"MCP" komt nu nergens in de repo voor. Een eerste server hergebruikt de bestaande functies, zonder de app te wijzigen.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Stap 2</span>
    <h3 style="margin-top: 0.5rem;">Bron-adapter</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">CBS, DUO en RIO hebben nu elk eigen tools. Eén vaste vorm per bron maakt een nieuwe bron één adapter extra.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Stap 3</span>
    <h3 style="margin-top: 0.5rem;">Toegangsregels</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Voor niet-open data: wie vraagt, en welke tabellen mag die zien? <code>auth/</code> doet nu alleen inloggen (OIDC).</p>
  </div>
</div>

</div>

---

<!-- BRON-ADAPTER -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De bron-adapter: een vaste vorm

<p class="np-subtitle">Wat elke bron moet leveren, of het nu CBS is of 1CijferHO van één instelling.</p>

<div class="np-grid-4" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-blue">
    <h3 style="font-size: 1rem;">Catalogus en details</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Voedt de semantiek-MCP</p>
  </div>
  <div class="np-card accent-blue">
    <h3 style="font-size: 1rem;">Gesloten selectie</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Schema plus compiler, zoals ADR-006</p>
  </div>
  <div class="np-card accent-orange">
    <h3 style="font-size: 1rem;">Loader</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Levert een <code>data_key</code> op</p>
  </div>
  <div class="np-card accent-green">
    <h3 style="font-size: 1rem;">Metadata per key</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Rij-eenheid, volledigheid, periode</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1.2rem;">
  De metadata per key is waar spoor A binnenkomt: <strong>rij-eenheid en definities</strong> uit het contract.
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

<!-- STRENGE CLIENT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Twee soorten clients

<p class="np-subtitle">Dezelfde MCP-servers, verschillende garanties.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Streng</span>
    <h3 style="margin-top: 0.5rem;">Onze eigen chatapp</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Gebruikt de MCP-servers, maar houdt de controle vóór het antwoord. Hier blijft de garantie staan.</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">Best effort</span>
    <h3 style="margin-top: 0.5rem;">Elke andere client</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Claude, Copilot, een eigen bot van een instelling. Krijgt dezelfde data en controletool, maar bepaalt zelf of hij controleert.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem;">
  Afstemming met <strong>#128</strong>: als Malloy een go krijgt, levert die de semantiek-MCP. Neem deze ontwerpvragen mee in de go/no-go-notitie.
</div>

</div>

---

<!-- DIVIDER 4 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 4</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Spoor A en het contract</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Betekenis die beide sporen kunnen lezen</p>
  </div>
</div>

---

<!-- SPOOR A ONDERDELEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Spoor A in zes onderdelen

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start; gap: 0.7rem;">
  <div class="np-card accent-blue" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">1. Inventarisatie</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Welke datasets, welke tabellen zijn het belangrijkst?</p>
  </div>
  <div class="np-card accent-blue" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">2. Mapping</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Naar HORA/MORA. AI stelt voor, specialisten valideren.</p>
  </div>
  <div class="np-card accent-orange" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">3. Tabeldefinities</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Rij-eenheid per tabel: student, inschrijving, resultaat …</p>
  </div>
  <div class="np-card accent-orange" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">4. Kolomdefinities</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Afgeleide kolommen, met doel: benchmark, intern of gebruiker.</p>
  </div>
  <div class="np-card accent-green" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">5. Gevoeligheid</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Tabellen op hetzelfde niveau splitsen naar klasse.</p>
  </div>
  <div class="np-card accent-green" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">6. Semantiek</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Betekenis, statuscodes, voorbeeldvragen. Door domeinexperts.</p>
  </div>
</div>

<p class="muted" style="font-size: 0.8rem; margin-top: 0.7rem;">Testdata: <code>cedanl/synthetische-onderwijsdata</code> (gearchiveerd) heeft synthetische relationele 1CijferHO/CBS-data met referentiële integriteit.</p>

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

<!-- VOORBEELD CONTRACT MET 1CHO -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Illustratie</p>

# Zo zou het contract eruitzien

<div class="np-table" style="font-size: 0.72rem; margin-top: 0.3rem;">

| Kolom | Rij-eenheid | Definitie | Gebruik | Klasse | Status |
|---|---|---|---|---|---|
| `ev.opleidingsfase` | inschrijving | fase van de opleiding: bachelor, master, … (DEC-tabel) | benchmark | 1 | <em>voorgesteld</em> |
| `ev.pgn` | inschrijving | persoonsgebonden nummer; tel unieke waarden voor studenten | intern | 3 | <em>voorgesteld</em> |
| `ev.aantal_inschrijvingen_pgn_jaar` | inschrijving | aantal inschrijvingen van deze persoon in dit studiejaar | benchmark | 1 | <em>voorgesteld</em> |
| `bekostiging.statusgroep` | inschrijving | groep van <code>codeBekostigingstatus</code>, bijv. "Aanlevering" voor <code>ti</code> | intern | 1 | <em>voorgesteld</em> |

</div>

<p class="muted" style="font-size: 0.78rem; margin-top: 0.5rem;">Alle rijen staan op "voorgesteld": precies het punt waar AI ophoudt en dataspecialisten en domeinexperts het overnemen.</p>

</div>

<!--
Illustratief, niet gevalideerd. Klasse en gebruik zijn ingevuld als voorbeeld.
Statusgroep "Aanlevering" voor ti komt uit de bijlage C.4 van de bekostigingsdeck; die indeling is onze eigen.
-->

---

<!-- DIVIDER 5 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 5</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Discussie</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Zeven punten, elk met een voorstel om op te schieten</p>
  </div>
</div>

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
