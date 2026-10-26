---
theme: default
title: SkillsRadar en CompetentNL
info: Opbouw van CompetentNL voor de projectgroep SkillsRadar, met de Doktersassistent als rode draad.
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
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">SkillsRadar en CompetentNL</h1>
  <p style="opacity: 1; font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Wat we deden, wat we zagen en hoe de skillstaal van Nederland in elkaar zit
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>Projectgroep SkillsRadar</strong> &middot; 26 oktober 2026
  </div>
  <div style="font-size: 0.82rem; color: var(--np-dark-gray); margin-top: 0.3rem;">CEDA &middot; Npuls &middot; 2026</div>
</div>

<!--
[0:30]

**Zeg:** Welkom. Vandaag drie dingen: wat we deden en zagen, hoe CompetentNL in elkaar zit, en wat we nu doen en van jullie nodig hebben.

**Overgang:** Eerst: waarom doen we dit?
-->

---

<!-- Slide: Waarom - Pain en Gain -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Waar doen we het voor?

<p class="np-subtitle" style="opacity: 1;">Opleidingsteams willen sturen op de arbeidsmarkt, maar missen een instrument.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">De pijn</span>
    <ul style="font-size: 0.88rem; line-height: 1.6; margin: 0.5rem 0 0;">
      <li>De arbeidsmarkt verandert <strong>sneller dan opleidingen</strong> kunnen volgen</li>
      <li>Informatie over skills is <strong>versnipperd</strong></li>
      <li>Geen <strong>gedeelde taal</strong> tussen onderwijs en werk</li>
      <li>Wel een verantwoordingsplicht, <strong>geen instrument</strong></li>
    </ul>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">De winst</span>
    <ul style="font-size: 0.88rem; line-height: 1.6; margin: 0.5rem 0 0;">
      <li>Eén gedeelde skillstaal: <strong>CompetentNL</strong></li>
      <li><strong>Automatisch vergelijken</strong> van vraag en aanbod</li>
      <li>Vroeg inzicht, per opleiding, instelling en regio</li>
      <li>Snellere, <strong>beter onderbouwde</strong> aanpassingen</li>
    </ul>
  </div>
</div>

</div>

<!--
[1:30]

**Zeg:** Opleidingsteams zien de arbeidsmarkt sneller veranderen dan hun opleiding kan volgen. Informatie over wat er gevraagd wordt staat verspreid over vacatures, sectorrapporten en trendanalyses. Onderwijs en werk gebruiken niet dezelfde woorden. Teams moeten wel verantwoorden, maar hebben geen concreet instrument.

**Zeg (winst):** Eén gedeelde skillstaal, CompetentNL, en een automatische vergelijking van wat de markt vraagt met wat de opleiding aanbiedt. Per opleiding, per instelling en per regio.

**Overgang:** Voor wie, en met wie?
-->

---

<!-- Slide: Voor en met wie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Voor en met wie?

<p class="np-subtitle" style="opacity: 1;">Voor wie onderwijs ontwikkelt, samen met drie instellingen.</p>

<div class="np-pipeline" style="margin-top: 0.4rem;">
  <div class="np-step"><strong>Onderzoeken</strong><br/><span style="font-size: 0.8rem;">wat vraagt de (regionale) arbeidsmarkt?</span></div>
  <div class="np-arrow">→</div>
  <div class="np-step"><strong>Ontwikkelen</strong><br/><span style="font-size: 0.8rem;">en voorbereiden van onderwijs</span></div>
  <div class="np-arrow">→</div>
  <div class="np-step"><strong>Informeren en werven</strong><br/><span style="font-size: 0.8rem;">optioneel</span></div>
</div>

<div class="np-grid-3" style="margin-top: 0.9rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Kopgroep</span>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0.4rem 0 0;">ROC Nijmegen, Curio en Deltion. Talland en ROC van Twente worden gevraagd.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Drie opleidingen</span>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0.4rem 0 0;">Software developer, Technicus en Mbo-Verpleegkundige.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Projectorganisatie</span>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0.4rem 0 0;">Datacoalitie en Npuls-CEDA.</p>
  </div>
</div>

</div>

<!--
[1:00]

**Zeg:** Voor de mensen die onderwijs ontwikkelen. In de referentiearchitectuur MORA is dat de keten onderwijsontwikkeling: onderzoeken wat de regionale arbeidsmarkt vraagt, het onderwijs ontwikkelen en voorbereiden, en eventueel informeren en werven.

**Zeg (met wie):** Een kleine kopgroep: ROC Nijmegen, Curio en Deltion. Talland en ROC van Twente worden gevraagd. Drie opleidingen die passen bij de Talentstrategie van het Rijk: Software developer, Technicus en Mbo-Verpleegkundige.

**Zeg:** We beginnen klein en pragmatisch. Het is voor iedereen een leertraject.

**Overgang:** Zo bouwen we het stap voor stap op.
-->

---

<!-- Slide: Een gefaseerde opbouw -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Een stap voor stap opbouw

<p class="np-subtitle" style="opacity: 1;">Eerst koppelen, dan het onderwijs en de arbeidsmarkt verrijken.</p>

<div style="display: flex; justify-content: center; margin-top: 0.8rem;">
  <img src="/presentations/261026_competentnl/fasering.png" style="width: 100%; max-width: 880px; height: auto;" />
</div>

<p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin-top: 0.8rem;">Doel: in januari 2027 een werkende versie voor de drie opleidingen.</p>

</div>

<!--
[1:00]

**Zeg:** Fase 1 was de koppeling van de kwalificatiedossiers aan CompetentNL: de mapping tool. Fase 2 heeft twee delen. 2A is de onderwijskant: doorvertalen naar wat een instelling echt aanbiedt, in de onderwijs- en examenregeling. 2B is de arbeidskant: verrijken met vacaturedata. Aan het eind staat een dynamisch skills platform voor het mbo.

**Doel:** een werkende versie in januari 2027, voor drie opleidingen.

**Overgang:** Waar staan we nu? Met fase 1 begonnen we in juni.
-->

---

<!-- Slide: Eerste poging -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Onze eerste poging, juni 2026

<p class="np-subtitle" style="opacity: 1;">Skills van een beroep naast skills van de opleiding gelegd.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: center; grid-template-columns: 55% 45%;">
  <div style="display: flex; justify-content: center;">
    <img src="/presentations/261026_competentnl/eerste-poging.png" style="max-height: 400px; width: auto; border: 1px solid var(--np-light-gray); border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
  </div>
  <div style="font-size: 0.92rem; line-height: 1.7;">
    <p class="muted" style="color: var(--np-dark-gray); margin: 0 0 0.3rem;">Wat we zagen</p>
    <ul>
      <li>Groot verschil tussen beroep en opleiding</li>
      <li>Twijfel of dat klopt</li>
      <li>Een te eenvoudige vergelijking</li>
      <li>Onduidelijk hoe CompetentNL werkt</li>
    </ul>
  </div>
</div>

</div>

<!--
[2:00]

**Zeg:** In juni zochten we de skills van een beroep, bijvoorbeeld Doktersassistent, en de skills van de bijbehorende opleiding, en legden die naast elkaar. Afspraak: CompetentNL is de enige bron.

**Laat zien:** Links de eerste versie, die live staat. Wat kwam eruit: (1) een groot verschil tussen beroep en opleiding, (2) twijfel of dat klopt, (3) een te eenvoudige vergelijking, (4) onduidelijk hoe CompetentNL zelf werkt.

**Let op:** het scherm toont de actuele radar: 110 skills, 14% zeker, en een gele melding dat crebo 25695 wordt opgevolgd door 27142. In CompetentNL zelf heeft het beroep 111 skills (het verschil van 1 is niet uitgezocht). Zeg dat zo als iemand ernaar vraagt.

**Overgang:** Daarom hebben we eerst uitgezocht hoe CompetentNL in elkaar zit.
-->

---

<!-- Slide: CompetentNL - de landelijke skillstaal -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# CompetentNL nader bekeken

<p class="np-subtitle" style="opacity: 1;">De landelijke skillstaal: beroepen links, opleidingen rechts, skills als brug.</p>

<div style="display: flex; justify-content: center; margin-top: 0.2rem;">
  <img src="/presentations/261026_competentnl/knowledge-graph.png" style="max-height: 400px; width: auto; border: 1px solid var(--np-light-gray); border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

<p class="muted" style="color: var(--np-dark-gray); font-size: 0.8rem; text-align: center; margin-top: 0.4rem;">Bron: CompetentNL v13, 14 oktober 2026</p>

</div>

<!--
[2:00]

**Zeg:** CompetentNL is de landelijke skillstaal, beheerd door UWV, SBB, TNO en CBS. Geen app en geen vacaturesite, maar een gedeelde taal en een open dataset waar anderen op bouwen.

**Laat zien (van links naar rechts):** Links in blauw de arbeidsmarkt: 3.295 beroepen. Rechts in rood het onderwijs: 1.843 opleidingsnormen. In het midden in groen de skills. Een beroep vraagt beheersing van skills, een opleidingsnorm schrijft beheersing van skills voor. Beroep en opleiding zijn dus niet rechtstreeks gekoppeld, maar via de skills.

**Let op:** het plaatje is van CompetentNL en toont afgeronde getallen (±3.300, ±2.000, #72 talen). Wij tellen in de data: 3.295 beroepen, 1.843 opleidingsnormen, 46 talen. Bovenaan staan de internationale lijsten: ESCO, ISCO, ISCED-F, O*NET.

**Overgang (optioneel):** Wie wil, kan de kaart zelf aanklikken, dat laat ik zo zien. Anders direct door naar de volgende slide.
-->

---

<!-- Slide: Klik door de kaart (optioneel) -->
<div style="position: absolute; inset: 0; overflow: hidden; background: #f1f5f6;">
  <iframe src="/presentations/261026_competentnl/competentnl-in-beeld.html?embed#kaart" title="CompetentNL in beeld" style="width: 1280px; height: 720px; border: 0; transform: scale(0.7656); transform-origin: 0 0;"></iframe>
</div>

<!--
[optioneel, 2:00. Sla over bij tijdnood]

**Live:** deze slide bevat de interactieve pagina "CompetentNL in beeld". Klik op een blokje in het plaatje, bijvoorbeeld Skills (het midden) en Opleidingsnormen: 1.843 in drie soorten (438 kwalificaties, 1.266 keuzedelen, 139 certificaten).

**Als het scherm niet laadt:** open de pagina in de browser: https://claude.ai/artifact/VmWAxYVWvinLZWtGR8xJR8
Lokaal (zonder internet): /presentations/261026_competentnl/competentnl-in-beeld.html
Direct naar een onderdeel met een anker: #kaart, #skills, #beroepen, #opleidingen, #metadateren, #rode-draad, #beweging.

**Overgang:** Terug naar de slides: de drie soorten skills.
-->

---

<!-- Slide: Kunnen, weten, spreken -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Kunnen, weten, spreken

<p class="np-subtitle" style="opacity: 1;">Skills zijn er in drie soorten, elk met een eigen indeling.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Kunnen</span>
    <h3 style="margin-top: 0.5rem;">Vaardigheden</h3>
    <div class="np-big-number" style="font-size: 2.6rem; color: var(--np-green);">128</div>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0.3rem 0 0;">In drie lagen.</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Weten</span>
    <h3 style="margin-top: 0.5rem;">Kennisgebieden</h3>
    <div class="np-big-number" style="font-size: 2.6rem; color: var(--np-blue);">311</div>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0.3rem 0 0;">In vier lagen.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Spreken</span>
    <h3 style="margin-top: 0.5rem;">Talen</h3>
    <div class="np-big-number" style="font-size: 2.6rem;">46</div>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0.3rem 0 0;">Met activiteit en niveau.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Veel skills zijn <strong>algemeen</strong> en horen bij bijna elk beroep. Dat telt straks mee.
</div>

</div>

<!--
[1:30]

**Zeg:** Skills zijn er in drie soorten. Kunnen: 128 vaardigheden, in drie lagen (6 hoofdgroepen, 24 groepen, 128 vaardigheden). Weten: 311 kennisgebieden, in vier lagen. Spreken: 46 talen in onze data, elk met een activiteit en een niveau (de taxonomie beschrijft er ruim 70).

**Belangrijk:** elke soort heeft een eigen indeling, dus een skill is niet zomaar met een andere te vergelijken. Veel skills zijn algemeen: 74,5% van de skills bij beroepen hoort bij bijna elk beroep. Dat vertekent het beeld als je niet oppast.

**Live (optioneel):** https://claude.ai/artifact/VmWAxYVWvinLZWtGR8xJR8#skills, met de markering "wat de Doktersassistent nodig heeft".

**Overgang:** Wat betekent dat voor één beroep? Het voorbeeld Doktersassistent.
-->

---

<!-- Slide: Skills staan nooit alleen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Skills staan nooit alleen

<p class="np-subtitle" style="opacity: 1;">Voorbeeld: Doktersassistent, rechtstreeks uit CompetentNL, op dezelfde skill vergeleken.</p>

<div class="np-card accent-orange" style="margin-top: 0.4rem;">
  <p class="muted" style="color: var(--np-dark-gray); font-size: 0.85rem; margin: 0;">Het beroep vraagt <strong>111</strong> skills</p>
  <div style="display: flex; height: 2.3rem; margin: 0.3rem 0 0.8rem;">
    <div style="width: 60.8%; background: var(--np-orange); color: var(--np-ink); display: flex; align-items: center; justify-content: center; font-weight: 700;">76</div>
    <div style="width: 28%; background: var(--np-green); color: var(--np-ink); display: flex; align-items: center; justify-content: center; font-weight: 700;">35</div>
  </div>
  <div style="display: flex; height: 2.3rem; margin-left: 60.8%;">
    <div style="width: 28%; background: var(--np-green); color: var(--np-ink); display: flex; align-items: center; justify-content: center; font-weight: 700;">35</div>
    <div style="width: 11.2%; background: var(--np-blue); color: var(--np-white, #fff); display: flex; align-items: center; justify-content: center; font-weight: 700;">14</div>
  </div>
  <p class="muted" style="color: var(--np-dark-gray); font-size: 0.85rem; margin: 0.3rem 0 0;">De opleiding noemt <strong>49</strong> skills</p>
</div>

<div style="display: flex; gap: 1.2rem; flex-wrap: wrap; margin-top: 0.7rem; font-size: 0.82rem;">
  <span><span class="np-badge orange">76</span> alleen beroep</span>
  <span><span class="np-badge green">35</span> in beide</span>
  <span><span class="np-badge blue">14</span> alleen opleiding</span>
</div>

</div>

<!--
[2:00]

**Zeg:** Skills zijn de schakel tussen beroep en opleiding. Voorbeeld, rechtstreeks uit CompetentNL, zonder slimme matching: het beroep Doktersassistent vraagt 111 skills, de opleiding noemt er 49 (de actuele norm met code 27142, opvolger van 25695). Daarvan zijn er 35 gelijk. Dus 76 skills van het beroep staan niet in de opleiding, en 14 van de opleiding niet in het beroep (samen 125 verschillende skills).

**Let op:** alleen precies dezelfde skill telt. Een bijna gelijke skill telt als verschil. Dat is de reden dat we twijfelden aan de eerste uitkomst.

**Per soort (uit de pagina):** vaardigheden: beroep 96, opleiding 30, in beide 29. Kennis: 14, 18, 6. Taal: 1, 1, 0.

**Live (optioneel):** https://claude.ai/artifact/VmWAxYVWvinLZWtGR8xJR8#rode-draad. Alle 125 skills in de verkenner: https://claude.ai/artifact/TA7Gaasqb13YFQj7ewxyDt

**Overgang:** Maar is dat verschil dan betrouwbaar?
-->

---

<!-- Slide: Is het betrouwbaar -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Is het betrouwbaar?

<p class="np-subtitle" style="opacity: 1;">Er ontbreekt veel. Maar wat zegt dat?</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Zichtbaar</span>
    <h3 style="margin-top: 0.5rem;">Er ontbreekt veel</h3>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0;">Doktersassistent: 76 van de 111 skills staan niet in de opleiding.</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Let op</span>
    <h3 style="margin-top: 0.5rem;">Niet gelijk beschreven</h3>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0;">Doktersassistent: het beroep beschrijft 111 skills, de opleiding 49. Ruim twee keer zoveel.</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">Zwak</span>
    <h3 style="margin-top: 0.5rem;">Regels zijn niet genoeg</h3>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0;">Skills die "bijna hetzelfde" lijken, koppelen bij vaardigheden niet beter dan toeval.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Ook horen <strong>18 van de 57</strong> opleidingsdossiers waar we het zeker van weten (32%) bij meerdere beroepen. Alleen regels op gelijkenis is <strong>niet de weg</strong>. Wat wél klopt: <strong>exact dezelfde skill</strong>. Dat noemen we zeker.
</div>

</div>

<!--
[2:00]

**Zeg:** Drie waarschuwingen.

1. Doktersassistent: het beroep beschrijft 111 skills, de opleiding 49, ruim twee keer zoveel, en 74,5% van de skills bij beroepen is algemeen. Dat een skill ontbreekt is dus nog geen tekort.
2. Onze regels voor "bijna dezelfde skill" bleken bij vaardigheden niet beter dan toeval. Een willekeurig ander beroep scoort ongeveer even hoog.
3. De koppeling van opleiding aan beroep is minder eenduidig dan gehoopt: van de 57 opleidingsdossiers waarvan we het zeker weten, horen er 18 (32%) bij meerdere beroepen.

**Conclusie:** alleen regels op gelijkenis is niet de weg. Wat wel klopt: exact dezelfde skill. Dat noemen we zeker.

**Bij vragen:** "Waarom 57?" Alleen van die dossiers hebben we de koppeling met een mens gecontroleerd; de andere 111 zijn onbekend.

**Overgang:** Dus wat doen we nu?
-->

---

<!-- Slide: Wat nu en het risico -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat we nu doen

<p class="np-subtitle" style="opacity: 1;">Eerst begrijpen hoe CompetentNL in elkaar zit, daarna een beter model.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">1 · Begrijpen</span>
    <h3 style="margin-top: 0.5rem;">Hoe zit het in elkaar?</h3>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0;">De beroepenboom en de opleidingenboom. Skills in lagen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">2 · Model</span>
    <h3 style="margin-top: 0.5rem;">Een ander model</h3>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0;">Wat deelt een groep, wat is bijzonder?</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">3 · Vergelijken</span>
    <h3 style="margin-top: 0.5rem;">Een andere vergelijking</h3>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.84rem; margin: 0;">Naam kiest kandidaten, skills rangschikken, een mens beslist.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  <strong>Risico:</strong> CompetentNL verandert snel. Versie <strong>7 naar 13</strong> in ruim drie maanden, en <strong>33</strong> opleidingscodes in ons onderzoek vervielen.
</div>

<img src="/npuls/powerpoint_illustrations/Stopwatch.svg" style="position: absolute; top: 1.6rem; right: 3rem; width: 80px;" />

</div>

<!--
[2:00]

**Zeg:** Drie sporen. (1) Begrijpen hoe CompetentNL in elkaar zit: de beroepenboom en de opleidingenboom, en op welk niveau skills echt hetzelfde betekenen. (2) Een ander model: op het niveau van een opleidingsfamilie delen opleidingen mediaan 55% van hun skills, op het niveau van een heel domein 1%. Dat vraagt om een model dat laat zien wat een groep gemeen heeft en wat bijzonder is. (3) Een andere manier van vergelijken: de naam geeft de kandidaten, de skills rangschikken ze, en een mens beslist.

**Risico:** CompetentNL verandert snel. Versie 7 in juni, versie 13 in oktober. 33 opleidingscodes uit ons onderzoek bestaan niet meer. Concepten worden nooit verwijderd, wel gedeactiveerd, dus het is netjes geregeld. Maar bouwen op een bewegend doel vraagt een vaste controle bij elke nieuwe versie.

**Voorbeelden:** Mbo-Verpleegkundige heeft nu code 27145 (oud: 25655), Doktersassistent 27142 (oud: 25695). Laatste instroom op de oude code was 1 augustus 2026.

**Live (optioneel):** https://claude.ai/artifact/VmWAxYVWvinLZWtGR8xJR8#beweging: wat er met de skills veranderde tussen de vorige en de huidige versie (vaardigheden van 112 naar 128).

**Overgang:** Hoe gaat het verder, en wat heb ik van jullie nodig?
-->

---

<!-- Slide: Aanpak en planning -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Aanpak en planning

<p class="np-subtitle" style="opacity: 1;">Van vandaag naar een werkende versie in januari.</p>

<div class="np-timeline">
  <div class="np-timeline-point">
    <div class="np-timeline-marker">VANDAAG</div>
    <div class="np-timeline-dot now"></div>
  </div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point">
    <div class="np-timeline-dot blue"></div>
  </div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point">
    <div class="np-timeline-dot blue"></div>
  </div>
  <div class="np-timeline-line dashed"></div>
  <div class="np-timeline-point">
    <div class="np-timeline-dot green"></div>
  </div>
</div>

<div class="np-timeline-labels">
  <div>
    <strong class="orange">26 oktober</strong>
    <span class="ink">De opbouw van CompetentNL</span>
  </div>
  <div></div>
  <div>
    <strong class="blue">13 november</strong>
    <span class="ink">Gegevens van drie opleidingen binnen</span>
  </div>
  <div></div>
  <div>
    <strong class="blue">Begin december</strong>
    <span class="ink">Testfase met curriculumontwikkelaars</span>
  </div>
  <div></div>
  <div>
    <strong class="green">Januari 2027</strong>
    <span class="ink">Werkende versie voor de stuurgroep</span>
  </div>
</div>

<p class="eyebrow" style="margin: 1rem 0 0.3rem;">Wat we van jullie vragen</p>

<div class="np-grid-3" style="align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Gegevens</span>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.82rem; margin: 0.3rem 0 0;">Uiterlijk 13 november, per opleiding: <strong>werving</strong>, <strong>examinering (OER)</strong>, <strong>onderwijsprogramma met keuzedelen</strong>.</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Testers</span>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.82rem; margin: 0.3rem 0 0;">Curriculumontwikkelaars en opleidingsmanagers voor de testfase begin december.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Overleg</span>
    <p class="muted" style="color: var(--np-dark-gray); font-size: 0.82rem; margin: 0.3rem 0 0;">Om de week op maandagmiddag.</p>
  </div>
</div>

</div>

<!--
[1:30]

**Zeg:** Vandaag de opbouw van CompetentNL. Uiterlijk vrijdag 13 november ontvangen we de gegevens van de drie opleidingen. Per opleiding vragen we drie dingen: werving (teksten van website, folders, open dagen en KiesMBO), examinering (de algemene OER en het deel van de instelling) en uitvoering (het onderwijsprogramma of de studiegids en de keuzedelen). Alleen openbare en door jullie aangeleverde bronnen, zonder persoonsgegevens.

**Vraag (hier het doel van de presentatie):** help ons testers te vinden binnen jullie instelling. Begin december de testfase: een half uur demo en een uur zelf testen door curriculumontwikkelaars en opleidingsmanagers.

**Daarna:** januari 2027 een werkende versie voor de stuurgroep. We overleggen om de week op maandagmiddag.

**Overgang:** Kort wie wij zijn.
-->

---

<!-- Slide: Wie is CEDA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide16.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 50% 50%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2.2rem 2.2rem 3rem;">
    <p class="eyebrow">Wie is CEDA</p>
    <h1 style="font-size: 1.7rem;">Centre of Educational Data Analytics</h1>
    <p class="np-subtitle" style="opacity: 1; margin-top: 0.4rem; max-width: 100%;">Eén team binnen Npuls. Van ruwe data tot AI-toepassing, open source.</p>
    <ul style="font-size: 0.88rem; line-height: 1.7;">
      <li>Data, analytics en generatieve AI in één keten</li>
      <li>Altijd in co-creatie met mbo, hbo en wo</li>
      <li>Open source, voor elke instelling</li>
    </ul>
  </div>
  <div></div>
</div>

<!--
[0:20]

**Zeg:** Kort over wie wij zijn, voor wie CEDA nog niet kent. Daarna meteen door naar vragen.
-->

---
<!-- VASTE AFSLUITSLIDE (Slide1.PNG) — woordelijk overgenomen uit _template.md -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">Tot slot</p>
  <h1 style="font-size: 2.6rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Blijf in contact</h1>
  <p style="opacity: 1; font-size: 1.05rem; color: var(--np-dark-gray); max-width: 600px; line-height: 1.5;">Vragen, feedback of zin om mee te bouwen? We horen graag van je.</p>
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

<!--
[open]

**Zeg:** Vragen en discussie.

**Als er tijd over is:** open de interactieve pagina (https://claude.ai/artifact/VmWAxYVWvinLZWtGR8xJR8) en laat de ladder van de Doktersassistent zien (#beroepen), of de verkenner met alle 125 skills (https://claude.ai/artifact/TA7Gaasqb13YFQj7ewxyDt).

**Vragen die kunnen komen:** waarom 46 talen (de data) en geen 70 (de taxonomie)? Waarom 110 in de radar en 111 in CompetentNL (niet uitgezocht)? Wanneer krijgen we de radar zelf te zien (testfase begin december)?
-->
