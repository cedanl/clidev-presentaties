---
theme: default
title: Uitnodigingsregel - Vroegtijdig signaleren van studentuitval
info: Stand van zaken van het MBO Datacoalitie-traject De Uitnodigingsregel. Resultaten, onderhanden werk, de CEDA-toolkit en het vervolg.
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- Slide: Titelslide -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">MBO Datacoalitie &middot; Stand van zaken</p>
  <h1 style="font-size: 2.8rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Vroegtijdig signaleren van studentuitval</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 720px; line-height: 1.5; margin-bottom: 1rem;">
    De Uitnodigingsregel: resultaten, onderhanden werk en het vervolg in 2026-2027
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>Datacoalitie Datagedreven Onderzoek mbo</strong> &middot; <strong>CEDA</strong>
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; najaar 2026</div>
</div>

<!--
Stand van zaken van het traject Vroegtijdig signaleren van studentuitval, een traject van de MBO Datacoalitie
(Datacoalitie Datagedreven Onderzoek mbo), met CEDA als technische partner.
-->

---

<!-- Slide: Leeswijzer -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Leeswijzer</p>
  <h1 style="font-size: 2.1rem !important; margin-bottom: 1.1rem;">In dit document</h1>
  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Aanleiding en methode</strong><br/><span class="muted" style="font-size: 0.8rem;">Waarom, en hoe de Uitnodigingsregel werkt</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Resultaten februari t/m juli 2026</strong><br/><span class="muted" style="font-size: 0.8rem;">Toolkit, pilotvoorbereiding, sectorbrede DPIA</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Onderhanden werk</strong><br/><span class="muted" style="font-size: 0.8rem;">Wat nu loopt bij instellingen en in de werkgroep</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">4</span>
      <div><strong>De CEDA-toolkit</strong><br/><span class="muted" style="font-size: 0.8rem;">Machine learning binnen bereik van elke instelling</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">5</span>
      <div><strong>Aanbod en vervolg 2026-2027</strong><br/><span class="muted" style="font-size: 0.8rem;">CEDA op locatie, en de vervolgstappen van de werkgroep</span></div>
    </div>
  </div>
</div>

---

<!-- Slide: Aanleiding -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<span class="np-badge blue">Een traject van de MBO Datacoalitie</span>

# Aanleiding

<p class="np-subtitle">Jaarlijks verlaten nog te veel studenten voortijdig het mbo. Hoe eerder we ingrijpen, hoe beter.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
  <div style="font-size: 0.88rem; line-height: 1.6;">
    <ul>
      <li>Elk gemist diploma betekent <strong>gemiste kansen</strong> op persoonlijke groei en een minder stabiele start op de arbeidsmarkt.</li>
      <li>De impact reikt verder: uitval vergroot de <strong>krapte op de arbeidsmarkt</strong> en daarmee de druk op de maatschappij.</li>
      <li>Instellingen worstelen al jaren om <strong>meer grip op uitval</strong> te krijgen.</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <h3>De vraag achter het traject</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0.4rem 0 0;">
      Hoe krijgen we studentuitval <strong>eerder in beeld</strong>, zodat onderwijsteams op tijd het gesprek aangaan en passende begeleiding bieden? En wat is nodig om dat <strong>verantwoord, effectief en schaalbaar</strong> te doen binnen mbo-instellingen?
    </p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Het is een traject binnen de <strong>Datacoalitie Datagedreven Onderzoek mbo</strong>, Npuls (CEDA) levert Data & AI expertise
</div>

</div>

---

<!-- Slide: Een stukje geschiedenis -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Een stukje geschiedenis

<p class="np-subtitle">Van promotieonderzoek naar praktijkpilots in de sector: zes jaar doorbouwen op elkaars werk.</p>

<div style="display: flex; justify-content: center; margin-top: 0.3rem;">
  <img src="/pictures/uitnodigingsregel/tijdlijn.png" style="max-height: 290px; width: auto; background: white; padding: 0.6rem; border: 1px solid var(--np-light-gray); border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.10);" />
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Onderzoek (Irene Eegdeman, ROC TOP) &rarr; replicatie bij 6 Datacoalitie-instellingen &rarr; praktijkpilots &rarr; <strong>technisch model breed beschikbaar via CEDA</strong>.
</div>

</div>

<!-- Bron tijdlijn: datagedrevenonderzoekmbo.nl -->

---

<!-- Slide: De Uitnodigingsregel -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De Uitnodigingsregel

<p class="np-subtitle">Een signaal voor de SLB'er, geen oordeel over de student.</p>

<div class="np-grid-2" style="margin-top: 0.2rem; align-items: center;">
  <div style="font-size: 0.86rem; line-height: 1.55;">
    <p style="margin-top: 0;">De Uitnodigingsregel ondersteunt onderwijsprofessionals bij het <strong>vroegtijdig signaleren</strong> van studenten die mogelijk risico lopen om uit te vallen.</p>
    <ul>
      <li>Op basis van beschikbare <strong>studiedata</strong> en machine learning ontstaat een geordend studentoverzicht.</li>
      <li>Het overzicht helpt teams om <strong>tijdig in gesprek</strong> te gaan en passende begeleiding te bieden.</li>
      <li>Gebaseerd op het promotieonderzoek van <strong>Irene Eegdeman</strong> (VU).</li>
      <li>Ingeschaald als <strong>beperkt risico</strong> onder de AI-verordening (onderbouwing in de toolkit).</li>
    </ul>
  </div>
  <div style="display: flex; justify-content: center;">
    <img src="/pictures/uitnodigingsregel/methode_praatplaat.png" style="max-height: 290px; width: auto; border-radius: 8px;" />
  </div>
</div>

</div>

<!-- Afbeelding: praatplaat 'Propositie data-ondersteund onderwijs' van de Datacoalitie -->

---

<!-- Slide: Doel, scope en aanpak praktijkpilot -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Doel, scope en aanpak van de praktijkpilot

<p class="np-subtitle">Onderzoeken wat nodig is om de Uitnodigingsregel verantwoord, effectief en schaalbaar toe te passen.</p>

<div class="np-grid-3" style="margin-top: 0.3rem; align-items: stretch;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Doel</span>
    <ul class="np-compact" style=" line-height: 1.45; margin: 0.5rem 0 0; padding-left: 1rem;">
      <li>Methode testen in de praktijk: datalevering, interpretatie en integratie in de studentbegeleiding</li>
      <li>Ervaringen ophalen over techniek, organisatie, begeleiding en ethiek</li>
      <li>Datageletterdheid en handelingsperspectief van teams versterken</li>
      <li>Producten en documentatie verbeteren</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Scope</span>
    <ul class="np-compact" style=" line-height: 1.45; margin: 0.5rem 0 0; padding-left: 1rem;">
      <li>Bepaald door de deelnemende instelling zelf</li>
      <li>Leidend: beschikbare interne begeleidingscapaciteit</li>
      <li>Deelnemende opleidingen hebben een voldoende grote groep studenten én daadwerkelijk uitval</li>
    </ul>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Aanpak</span>
    <p style="font-size: 0.78rem; margin: 0.5rem 0 0.2rem;">De Datacoalitie begeleidt instellingen met:</p>
    <ul class="np-compact" style=" line-height: 1.45; margin: 0; padding-left: 1rem;">
      <li>Begeleiding in de voorbereidingsfase</li>
      <li>Vraagbaak en voortgangsmonitoring</li>
      <li>Bevindingen ophalen voor de toolkit</li>
      <li>Evaluatie en effectmeting</li>
    </ul>
  </div>
</div>

</div>

---

<!-- Slide: Hoofdstuk - Resultaten -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: var(--np-white, #fff) !important; font-size: 3rem;">Recente Resultaten</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Februari t/m juli 2026</p>
  </div>
</div>

---

<!-- Slide: Toolkit Uitnodigingsregel -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Resultaat 1: Toolkit Uitnodigingsregel

<p class="np-subtitle">Eén samenhangende set materialen voor voorbereiden, uitvoeren en evalueren van een praktijkpilot.</p>

<div class="np-grid-2" style="margin-top: 0.2rem; align-items: center; grid-template-columns: 45% 55%;">
  <div style="font-size: 0.84rem; line-height: 1.55;">
    <ul style="margin-top: 0;">
      <li>Ontwikkeld op basis van <strong>ervaringen uit eerdere pilots</strong>.</li>
      <li>Houvast bij elke stap: van <strong>draagvlak</strong> en datavoorbereiding tot het trainen van teams en het borgen van interventies.</li>
      <li>Maakt inzichtelijk <strong>wie wat nodig heeft, op welk moment</strong>.</li>
      <li>Bruikbaar bij oriëntatie, bij een eerste pilot én bij opschalen.</li>
      <li>De technische kant zit erin als <strong>Codebase CEDA</strong>: open source op GitHub.</li>
    </ul>
  </div>
  <div style="display: flex; justify-content: center;">
    <img src="/pictures/uitnodigingsregel/toolkit_overzicht.png" style="max-height: 320px; width: auto; background: white; padding: 0.4rem; border: 1px solid var(--np-light-gray); border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.10);" />
  </div>
</div>

</div>

---

<!-- Slide: Pilotvoorbereiding en DPIA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Resultaat 2 en 3: pilots en sectorbrede DPIA

<p class="np-subtitle">Tweewekelijks voortgangsoverleg met (potentiële) pilotdeelnemers over de status van de voorbereiding.</p>

<div class="np-grid-3" style="margin-top: 0.3rem; align-items: stretch;">
  <div class="np-card accent-green">
    <span class="np-badge green">Positief advies</span>
    <h3 style="margin-top: 0.45rem;">Talland College</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Informatiepresentatie over de Uitnodigingsregel en deelname aan de praktijkpilot. Resultaat: <strong>positief advies</strong> voor deelname aan een pilot in studiejaar 2026/2027.</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">Besluitvorming loopt</span>
    <h3 style="margin-top: 0.45rem;">Zadkine</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Kiest voor een uitgebreid, onderbouwd besluitproces. Presentaties voor Onderwijs &amp; Kwaliteit, opleidingsmanagers, IM/ICT en studentbegeleiders. Pilot in 2026/2027 komt nog te vroeg.</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Gestart mei 2026</span>
    <h3 style="margin-top: 0.45rem;">Sectorbrede DPIA</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Samen met <strong>MBO Digitaal</strong> uitbesteed aan <strong>Privacy Company</strong>. Eén juridische toetsing voor de sector, inclusief impact van en maatregelen voor de <strong>AI Act</strong>. Voorkomt dubbel werk per instelling.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Eerdere periode (aug 2025 &ndash; jan 2026): <strong>pilotevaluatie en business case</strong>, update-notitie, template business case en onderbouwing risicoklasse opgeleverd.
</div>

</div>

---

<!-- Slide: Onderhanden werk -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 3</p>

# Onderhanden werk

<p class="np-subtitle">Waar de werkgroep en de instellingen nu mee bezig zijn.</p>

<div class="np-grid-3" style="margin-top: 0.3rem; align-items: stretch;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">1</span>
    <h3 style="margin-top: 0.45rem;">Sectorbrede DPIA</h3>
    <p class="muted" style="font-size: 0.8rem; line-height: 1.5; margin: 0;">Met MBO Digitaal en Privacy Company. Alle documentatie wordt doorgenomen en interviews worden ingepland.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">2</span>
    <h3 style="margin-top: 0.45rem;">Pilots met echte data</h3>
    <p class="muted" style="font-size: 0.8rem; line-height: 1.5; margin: 0;">Twee pilots gedaan met data van startende studenten bij o.a. <strong>ROC van Amsterdam</strong>, <strong>ROC Mondriaan</strong>, <strong>Albeda</strong>, <strong>Noorderpoort</strong> en <strong>ROC Nijmegen</strong>. De derde pilot loopt nu bij <strong>ROC van Amsterdam</strong> en <strong>ROC Mondriaan</strong>, met een effectmeting via de ervaring van SLB'ers en een vaste questionnaire voor alle deelnemende instellingen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">3</span>
    <h3 style="margin-top: 0.45rem;">PoC's bij 2 instellingen</h3>
    <p class="muted" style="font-size: 0.8rem; line-height: 1.5; margin: 0;"><strong>Talland College</strong>: kick-off geweest met diverse opleidingen, sessies over ethiek en spelregels volgen. <strong>Zadkine</strong>: sessies met IT/IM over technische adoptie en met een grote groep SLB'ers over kansen.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Een goed model is een eerste stap. Het doel is <strong>minder uitval</strong>, en de bijdrage van één instrument is lastig te isoleren. Daarom meten we ook <strong>kwalitatief</strong>.
</div>

</div>

---

<!-- Slide: Hoofdstuk - CEDA-toolkit -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 4</p>
    <h1 style="color: var(--np-white, #fff) !important; font-size: 3rem;">De CEDA-toolkit</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Machine learning binnen bereik van elke instelling</p>
  </div>
</div>

---

<!-- Slide: Van maatwerk naar installeerbare tool -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Van maatwerk naar installeerbare tool

<p class="np-subtitle">Het technische deel was de hoogste drempel. CEDA heeft die drempel flink verlaagd.</p>

<div class="np-grid-2" style="margin-top: 0.2rem; align-items: stretch;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Voorheen</span>
    <ul class="np-compact" style=" line-height: 1.5; margin: 0.5rem 0 0; padding-left: 1rem;">
      <li>Elke instelling bouwde het model <strong>zelf na</strong>, met eigen scripts</li>
      <li>Onduidelijk welke velden, jaren en definities in de dataset zaten</li>
      <li>Lijsten handmatig samenstellen, bijvoorbeeld uit QlikView</li>
      <li>Modelkwaliteit lastig uit te leggen of te vergelijken</li>
      <li>Alleen haalbaar met een ervaren data scientist in huis</li>
    </ul>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Nu, met de CEDA-toolkit</span>
    <ul class="np-compact" style=" line-height: 1.5; margin: 0.5rem 0 0; padding-left: 1rem;">
      <li><strong>Installeren met één commando</strong> (Scoop op Windows, of uv)</li>
      <li><strong>SQL-voorbeeldcode</strong> en een <strong>data dictionary</strong> voor de invoerdata</li>
      <li>Automatisch <strong>rapport over datakwaliteit en modelprestaties</strong></li>
      <li><strong>Streamlit-app</strong> om de uitkomsten te verkennen</li>
      <li><strong>Synthetische demodata</strong>: eerst oefenen, zonder echte studentgegevens</li>
    </ul>
  </div>
</div>

<div class="np-pipeline" style="margin-top: 0.9rem;">
  <div class="np-step blue" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.88rem;">1. Datapreparatie</strong>
    <small>Data inladen en voorbereiden</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.88rem;">2. Model</strong>
    <small>Trainen, controleren, voorspellen</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.88rem;">3. App</strong>
    <small>Resultaten bekijken</small>
  </div>
</div>

</div>

---

<!-- Slide: Voorbeelduitkomst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Zo ziet de uitkomst eruit

<p class="np-subtitle">Een geordende lijst per opleiding en klas, als startpunt voor het gesprek met de student.</p>

<div class="np-grid-2" style="margin-top: 0.2rem; align-items: center; grid-template-columns: 55% 45%;">
  <div style="display: flex; justify-content: center;">
    <img src="/pictures/uitnodigingsregel/voorbeeld_output.png" style="max-height: 290px; width: auto; border: 1px solid var(--np-light-gray); border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
  </div>
  <div style="font-size: 0.84rem; line-height: 1.55;">
    <ul style="margin-top: 0;">
      <li>Draait op <strong>je eigen data, op je eigen machine</strong>: niets verlaat de instelling.</li>
      <li><strong>Open source</strong>: code, keuzes en modelprestaties zijn na te lezen en intern uit te leggen.</li>
      <li>Werkt volgens de <strong>CEDA-standaard</strong>, getest en onderhouden, samen gebouwd met ROC Mondriaan.</li>
      <li>De techniek is niet langer het knelpunt. De aandacht kan naar <strong>begeleiding, ethiek en borging</strong>.</li>
    </ul>
  </div>
</div>

<p class="muted" style="font-size: 0.72rem; margin-top: 0.5rem;">Voorbeeld op synthetische data (ROC Mondriaan). Namen en scores zijn fictief. Code: github.com/cedanl/Uitnodigingsregel</p>

</div>

---

<!-- Slide: Aanbod CEDA op locatie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 5 &middot; Aanbod</p>

# CEDA helpt bij de eerste technische stappen

<p class="np-subtitle">Een data scientist van CEDA komt twee dagen bij je op locatie om samen de Uitnodigingsregel werkend te krijgen.</p>

<div class="np-grid-2" style="margin-top: 0.2rem; align-items: stretch;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Dag 1</span>
    <h3 style="margin-top: 0.45rem;">Data verzamelen en klaarzetten</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Samen met BI/IM de benodigde gegevens uit de eigen systemen halen, voorbereiden met de SQL-voorbeeldcode en de data dictionary, en de datakwaliteit beoordelen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Dag 2</span>
    <h3 style="margin-top: 0.45rem;">Machine learning toepassen</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Het model trainen op de eigen data, modelprestaties duiden, de eerste voorspellingen draaien en de uitkomst leren lezen. Kennis blijft achter in het eigen team.</p>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 0.9rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Op locatie, op je eigen omgeving</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Aansluitend op de Datacoalitie-pilot</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Voor instellingen die willen starten</div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Randvoorwaarde: de instelling regelt vooraf de juridische basis (DPIA) en toegang tot de data. De toolkit van de Datacoalitie helpt daarbij.
</div>

</div>

<!--
Aanbod CEDA: inzet op locatie van een CEDA data scientist voor 2 dagen, voor de eerste technische stappen:
data verzamelen en het gebruik van machine learning. Dagindeling is indicatief.
-->

---

<!-- Slide: Vervolgstappen 2026-2027 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Vervolgstappen 2026-2027

<p class="np-subtitle">Wat de werkgroep de komende periode oppakt.</p>

<div class="np-grid-2" style="margin-top: 0.2rem; align-items: stretch;">
  <div class="np-card accent-blue">
    <h3>Begeleiden en toetsen</h3>
    <ul class="np-compact" style=" line-height: 1.5; margin: 0.4rem 0 0; padding-left: 1rem;">
      <li><strong>Volgende praktijkpilot</strong> begeleiden: vraagbaak, voortgangsmonitoring, bevindingen voor de toolkit, evaluatie en effectmeting</li>
      <li>Vervolg geven aan de uitkomsten van de <strong>sectorbrede DPIA</strong></li>
      <li><strong>Onderzoek effectmeting</strong>: toegevoegde waarde vanuit de ervaring van SLB'ers</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <h3>Het model verbeteren</h3>
    <ul class="np-compact" style=" line-height: 1.5; margin: 0.4rem 0 0; padding-left: 1rem;">
      <li><strong>Nieuwe data ontginnen</strong>: het model draait nu op "laaghangend fruit". Welke extra data zit in andere systemen, of via <strong>process mining</strong> van aanmeld-, onderwijs- en begeleidingsproces?</li>
      <li><strong>Advies data veiligstellen</strong>: wat moet je nu gaan registreren, en hoe bewaar je bestaande data zorgvuldig voor onderzoek?</li>
    </ul>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Plus: <strong>CEDA op locatie</strong> voor instellingen die de technische eerste stap willen zetten.
</div>

</div>

---

<!-- Slide: Vragen aan de stuurgroep -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Vragen aan de stuurgroep

<p class="np-subtitle">Om te bepalen waar de volgende pilots en de inzet van CEDA het meeste opleveren.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: center;">
  <div style="display: flex; flex-direction: column; gap: 0.7rem; font-size: 0.9rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;"><span class="np-num">1</span><span>Is studentuitval binnen jouw instelling een belangrijk thema?</span></div>
    <div style="display: flex; align-items: center; gap: 0.8rem;"><span class="np-num" style="background: var(--np-orange);">2</span><span>Hebben jullie veel last van studentuitval?</span></div>
    <div style="display: flex; align-items: center; gap: 0.8rem;"><span class="np-num" style="background: var(--np-green);">3</span><span>Wat doen jullie nu om uitval zo veel mogelijk te voorkomen?</span></div>
    <div style="display: flex; align-items: center; gap: 0.8rem;"><span class="np-num">4</span><span>Wil je ermee aan de slag, en daarvoor de Uitnodigingsregel inzetten?</span></div>
  </div>
  <div style="display: flex; justify-content: center;">
    <img src="/pictures/uitnodigingsregel/toolkit_icoon.png" style="width: 200px;" />
  </div>
</div>

</div>

---

<!-- Slide: Meer informatie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">Meer weten of meedoen?</p>
  <h1 style="font-size: 2.4rem; margin-bottom: 1.2rem; color: var(--np-ink);">Meer informatie</h1>
  <div class="np-grid-3" style="width: 100%; max-width: 820px; text-align: left;">
    <div class="np-card accent-blue">
      <span class="np-badge blue">Datacoalitie</span>
      <p style="font-size: 0.8rem; margin: 0.5rem 0 0;">Factsheet, plan van aanpak en toolkit:<br/><strong>datagedrevenonderzoekmbo.nl</strong></p>
    </div>
    <div class="np-card accent-orange">
      <span class="np-badge orange">Code</span>
      <p style="font-size: 0.8rem; margin: 0.5rem 0 0;">Open source model en app:<br/><strong>github.com/cedanl/ Uitnodigingsregel</strong></p>
    </div>
    <div class="np-card accent-green">
      <span class="np-badge green">Documentatie</span>
      <p style="font-size: 0.8rem; margin: 0.5rem 0 0;">Handleiding en pipeline:<br/><strong>cedanl.github.io/ Uitnodigingsregel</strong></p>
    </div>
  </div>
</div>
