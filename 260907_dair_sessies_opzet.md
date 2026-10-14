---
theme: default
title: GenAI-sessies DAIR Seminar 2026
info: Toelichting op de opzet van de twee GenAI-sessies op 28 en 29 oktober 2026. Eén ritme, twee doelgroepen.
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- TITELSLIDE (Slide1.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">DAIR Seminar &middot; 28 en 29 oktober 2026</p>
  <h1 style="font-size: 3rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Twee GenAI-sessies</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 720px; line-height: 1.5; margin-bottom: 1rem;">
    Eén ritme, twee doelgroepen. Deelnemers werken zelf, wij houden de regie.
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>Corneel den Hartogh</strong> &middot; CEDA
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Toelichting aan de seminarcommissie</div>
</div>

<!--
Doel van dit deck: de commissie in tien minuten laten zien waar we staan, hoe beide sessies eruitzien
en welke besluiten en risico's nog openstaan. Kern: we hebben nu één gedeeld ritme voor beide sessies,
dat scheelt voorbereiding en maakt de sessies onderling vergelijkbaar.
-->

---

<!-- WAAR WE STAAN — drie kaarten (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Waar we staan

<p class="np-subtitle">Van losse ideeën naar twee sessies met dezelfde structuur.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Af</span>
    <h3 style="margin-top: 0.5rem;">Sessie 2 draait</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Web-app getest met ~10 gebruikers. Login werkt. Nieuwe testronde met meer gebruikers volgt.</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">In aanbouw</span>
    <h3 style="margin-top: 0.5rem;">Sessie 1 omgeving</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Container staat klaar: uitgeklede <em>dair-agentic-coding</em> met een set skills erbij.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Open</span>
    <h3 style="margin-top: 0.5rem;">Besluiten</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Definitieve dataset, verspreiding van de API-key en het bereiken van doelgroep 2.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  De grootste winst sinds de vorige versie: <strong>één gedeeld tijdsritme</strong> voor beide sessies.
</div>

</div>

<!--
Sessie 2 is het verst: de web-app is er, login werkt, en we hebben met ongeveer tien gebruikers getest.
Dat testen zetten we door met een grotere groep, want de sessie zelf is de grote groep.
Sessie 1 is technisch zwaarder: daar moet een werkende ontwikkelomgeving op de laptop van elke deelnemer staan.
De open punten zijn bewust klein gehouden: dataset, sleutelverspreiding en werving.
-->

---

<!-- HET GEDEELDE RITME — pipeline (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Eén ritme voor beide sessies

<p class="np-subtitle">Twee keer zelf aan de slag, met een centraal moment ertussen.</p>

<div class="np-pipeline" style="margin-top: 1.1rem;">
  <div class="np-step blue" style="flex: 1;">
    <strong style="font-size: 0.92rem;">Opening</strong>
    <small>CEDA &amp; transformatie &middot; 10 min</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step blue" style="flex: 1;">
    <strong style="font-size: 0.92rem;">Uitleg tool</strong>
    <small>Concreet, met demo &middot; 15 min</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1;">
    <strong style="font-size: 0.92rem;">Zelf spelen</strong>
    <small>In groepjes &middot; 20 min</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1;">
    <strong style="font-size: 0.92rem;">Centraal</strong>
    <small>Ophalen + nieuwe instructie &middot; 15 min</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1;">
    <strong style="font-size: 0.92rem;">Tweede ronde</strong>
    <small>Verdiepen &middot; 15 min</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Deelnemers werken zelf, twee keer</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Human-in-the-loop op het centrale moment</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Wrap-up met evaluatie aan het eind</div>
</div>

</div>

<!--
Dit is de belangrijkste slide. Het ritme is voor beide sessies gelijk: korte opening over CEDA en de transformatie,
dan vijftien minuten concrete uitleg van de tool, dan twintig minuten dat deelnemers zelf aan de slag gaan.
Daarna trekken we het weer centraal: ophalen wat er gebeurde, plus vijf minuten nieuwe instructie.
Tot slot nog een ronde van tien tot vijftien minuten en een gezamenlijke afsluiting.
Waarom dit ritme? Eén ronde is te kort om iets te bereiken; drie rondes maakt het rommelig.
Twee rondes met een centraal moment ertussen geeft ons het human-in-the-loop-moment op een natuurlijke plek.
-->

---

<!-- SESSIE 1 TIJDSCHEMA — tabel (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Sessie 1 &middot; woensdag 28 oktober

<p class="np-subtitle">Verantwoord hands-on Generatieve AI &mdash; voor collega's die met Python, R of SQL werken.</p>

<div style="font-size: 0.86rem; margin-top: 0.2rem;">

| Tijd | Onderdeel | Vorm |
|------|-----------|------|
| 15:15 – 15:25 | Opening: CEDA &amp; de transformatie | Plenair |
| 15:25 – 15:40 | Uitleg omgeving: container, Claude, skills | Plenair + demo |
| 15:40 – 16:00 | Ronde 1: synthetische data maken | Zelf, in duo's |
| 16:00 – 16:15 | Centraal: human-in-the-loop + nieuwe instructie | Plenair |
| 16:15 – 16:30 | Ronde 2: bouw de uitnodigingsregel-app | Zelf, in duo's |
| 16:30 – 16:45 | Wrap-up + evaluatie-skill | Plenair |

</div>

</div>

<!--
Sessie 1 is de technische sessie. Deelnemers programmeren niet zelf, ze geven de AI opdracht te programmeren.
Ronde 1 is synthetische data maken: dat is laagdrempelig, geeft snel een visueel resultaat en zet de toon.
Ronde 2 is de sprong die Steven Ramondt wil maken: niet handmatig analyseren, maar meteen een applicatie bouwen.
De evaluatie-skill aan het eind is bewust onderdeel van de omgeving, zodat we gestructureerde feedback terugkrijgen
in plaats van een rondje meningen.
-->

---

<!-- SESSIE 1 INHOUD — twee kolommen (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Sessie 1: Responsible Agentic Data Science

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <h3>Wat staat er klaar</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.4rem 0 0; line-height: 1.6;">
      Uitgeklede versie van <strong>cedanl-dair-agentic-coding</strong>, aangeboden via Codespaces.
      VS Code opent, de README opent, één knop voor Claude. Geen ENTIRE, geen installatiegedoe.
      Foundry API-key wordt daags ervoor toegevoegd.
    </p>
  </div>
  <div class="np-card accent-green">
    <h3>Waar de skills in zitten</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.4rem 0 0; line-height: 1.6;">
      Niet alleen prompten, maar herbruikbare <strong>skills</strong>: git goed doen, codestandaarden,
      dashboardindeling, Streamlit of NiceGUI, branding en privacygevoeligheid.
      Dat maakt het modulair en aanpasbaar.
    </p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem;">
  De opdracht landt op <strong>1CijferHO</strong>: van interactie naar rapport, en van analyse naar applicatie.
</div>

</div>

<!--
Twee dingen om hier te benoemen. Eén: de developer experience is het echte werk. Als een deelnemer twintig minuten
kwijt is aan installeren, is de sessie mislukt. Vandaar Codespaces, vandaar dat VS Code en de README vanzelf opengaan.
Twee: waarom skills en niet alleen prompten. Vrij prompten geeft geen standaardisatie en het resultaat is niet modulair,
dus niet aan te passen. Skills leggen vast hoe we git doen, hoe een dashboard eruitziet, hoe we met privacygevoeligheid
omgaan. Dat is precies het 'responsible' deel van de titel.
-->

---

<!-- SESSIE 2 TIJDSCHEMA — tabel (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Sessie 2 &middot; donderdag 29 oktober

<p class="np-subtitle">IR-chat en rapport &mdash; voor beleidsmedewerkers en IR'ers die zelf niet programmeren.</p>

<div style="font-size: 0.86rem; margin-top: 0.2rem;">

| Tijd | Onderdeel | Vorm |
|------|-----------|------|
| 15:15 – 15:25 | Opening: CEDA &amp; de transformatie | Plenair |
| 15:25 – 15:40 | Demo web-app: chatten met de data | Plenair + demo |
| 15:40 – 16:00 | Ronde 1: chat naar een onderzoeksvraag | In groepjes |
| 16:00 – 16:15 | Centraal: bespreken per groepje + nieuwe instructie | Plenair |
| 16:15 – 16:30 | Ronde 2: doorwerken aan het rapport | In groepjes |
| 16:30 – 16:45 | Wrap-up + evaluatie | Plenair |

</div>

<div class="np-bottomline" style="margin-top: 0.6rem;">
  Dit is de <strong>grote groep</strong>: het werk gebeurt hier nadrukkelijk in groepjes aan tafel.
</div>

</div>

<!--
Sessie 2 verwachten we als de grootste groep, en die groep programmeert niet. Daarom werken we hier in groepjes
aan tafel: dat verlaagt de drempel en zorgt dat niemand alleen naar een scherm zit te staren.
Het patroon is stapsgewijs: je chat, daar komt een onderzoeksvraag uit, en die bespreek je weer met je groepje.
De datasets staan al klaar in de web-app, dus er is geen installatie nodig.
-->

---

<!-- RISICO'S — drie kaarten (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie risico's, met een antwoord

<div class="np-grid-3" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Techniek</span>
    <h3 style="margin-top: 0.5rem;">Codespaces op wifi</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0; line-height: 1.6;">
      Werkt het seminarnetwerk niet, dan valt sessie 1 stil.
      <br/><strong>Antwoord:</strong> vooraf testen op locatie, hotspot achter de hand, en een lokale route via gh en uv.
    </p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Didactiek</span>
    <h3 style="margin-top: 0.5rem;">Mentaal afhaken</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0; line-height: 1.6;">
      Mensen tikken iets over en haken innerlijk af.
      <br/><strong>Antwoord:</strong> ze zelf laten prompten, en het centrale moment gebruiken om te toetsen of het landde.
    </p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Werving</span>
    <h3 style="margin-top: 0.5rem;">Doelgroep 2 bereiken</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0; line-height: 1.6;">
      Niet-programmeurs denken dat dit niet over hen gaat.
      <br/><strong>Antwoord:</strong> titel en uitnodiging op hun vraag richten, niet op de techniek.
    </p>
  </div>
</div>

</div>

<!--
Het wifi-risico is het scherpst: Codespaces vraagt een stabiele verbinding en een seminarnetwerk met tachtig laptops
is dat zelden. Daarom willen we vooraf op locatie testen en een terugvalroute hebben.
Het tweede risico is subtieler en in mijn ogen het echte risico: mensen typen braaf de voorbeeldinstructie over,
er komt iets uit, en ze hebben niets geleerd. Zelf laten prompten is het antwoord, en het centrale moment
is onze meetlat of het gelukt is.
Het derde is een wervingsvraag, geen ontwerpvraag. Die ligt bij de commissie.
-->

---

<!-- OPEN PUNTEN — tabel (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat er nog moet gebeuren

<p class="np-subtitle">Zeven weken tot het seminar. Dit staat nog open.</p>

<div style="font-size: 0.9rem;">

| Wat | Wanneer | Wie |
|-----|---------|-----|
| Web-app testen met een grotere groep | September | CEDA |
| Codespaces testen op het seminarnetwerk | Vóór half oktober | CEDA + locatie |
| Veilige manier om de Foundry API-key te delen | Vóór half oktober | CEDA |
| Definitieve dataset kiezen voor sessie 1 | Nu | Commissie |
| Uitnodigingstekst voor doelgroep sessie 2 | Nu | Commissie |
| Logistiek: ruimte, beamer, tafelopstelling | Nu | Annemiek |

</div>

</div>

<!--
Zeven weken klinkt ruim, maar de netwerktest moet echt op locatie en die plannen we niet in de laatste week.
Twee dingen wil ik vandaag van de commissie: een besluit over de dataset voor sessie 1, want daar hangt de
voorbereiding van de opdracht aan vast, en iemand die de uitnodigingstekst voor sessie 2 schrijft.
De rest ligt bij ons.
-->

---

<!-- KERNBOODSCHAP — citaat (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <p class="eyebrow">Waar het om draait</p>
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.7rem; line-height: 1.5; color: var(--np-blue); max-width: 760px;">
    "Niet laten zien dat AI het kan. Deelnemers het zelf laten doen &mdash; en zelf laten controleren."
  </div>
</div>

<div class="np-grid-2" style="margin-top: 1.6rem; align-items: start;">
  <div class="np-card accent-green">
    <h3>Wat we willen bereiken</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Iedereen gaat naar huis met iets dat werkt en dat zij zelf hebben aangestuurd.</p>
  </div>
  <div class="np-card accent-blue">
    <h3>Wat we meten</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Een evaluatie aan het eind van beide sessies, zodat we weten wat werkte en wat niet.</p>
  </div>
</div>

</div>

<!--
Afsluiten met waar het om gaat. Een demo waarin ik laat zien hoe knap AI is, levert bewondering op en verder niets.
Als deelnemers zelf de opdracht geven, zelf zien wat er terugkomt en zelf ontdekken waar het misgaat,
dan hebben ze iets in handen. Daarom zit de human-in-the-loop niet aan het eind als waarschuwing,
maar in het midden als werkmoment.
Vragen?
-->

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
