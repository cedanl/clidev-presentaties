---
theme: default
title: EDUdata – Ask a question. Get the data.
info: Pecha Kucha (20 x 20 s) for directors and policy workers. Draft for preview.
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: fade
mdc: true
---

<!-- PECHA KUCHA: 20 slides x 20 seconds = 6:40. Speaker notes = the 20-second script (~45 words).
     Auto-advance is NOT built in: rehearse with a timer, or export to video. -->

<!-- 1 · TITLE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <h1 style="font-size: 3.4rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Ask a question.<br/>Get the data.</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    EDUdata: an AI assistant for open Dutch education data
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

<!--
Every policy question starts with a hunt for the right dataset. What if you could just ask? That is what we have built, and today I want to show you what it does, why you can trust it, and how you can try it with your own institution.
-->

---

<!-- 2 · FIXED CEDA SLIDE (translated to English) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide16.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 50% 50%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2.2rem 2.2rem 3rem;">
    <p class="eyebrow">Who is CEDA</p>
    <h1 style="font-size: 1.7rem;">Centre of Educational Data Analytics</h1>
    <p class="np-subtitle" style="margin-top: 0.4rem; max-width: 100%;">One team within Npuls. From raw data to AI application, open source.</p>
    <ul style="font-size: 0.88rem; line-height: 1.7;">
      <li>Data, analytics and generative AI in one chain</li>
      <li>Always co-created with mbo, hbo and wo institutions</li>
      <li>Open source, for every institution</li>
    </ul>
  </div>
  <div></div>
</div>

<!--
Who we are: one team within Npuls, building open source together with mbo, hbo and wo institutions. EDUdata is one of the things we build.
-->

---

<!-- 3 · THE DATA HUNT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">The problem</p>

# The data is open.<br/>Finding it is not.

<div class="np-grid-3" style="margin-top: 0.8rem; align-items: start;">
  <div class="np-card accent-blue"><span class="np-badge blue">CBS</span><h3 style="margin-top: 0.5rem;">StatLine</h3></div>
  <div class="np-card accent-orange"><span class="np-badge orange">DUO</span><h3 style="margin-top: 0.5rem;">Education</h3></div>
  <div class="np-card accent-green"><span class="np-badge green">RIO</span><h3 style="margin-top: 0.5rem;">Register</h3></div>
</div>

<p class="muted" style="margin-top: 0.8rem;">Three sources. Three structures. Three vocabularies.</p>

</div>

<!--
The data is open, but finding the right table is hard. CBS, DUO and RIO each have their own structure and vocabulary. You need an expert just to know where to look.
-->

---

<!-- 4 · ONE QUESTION, THREE SOURCES -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <p class="eyebrow">A real question</p>
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.9rem; line-height: 1.5; color: var(--np-blue); max-width: 760px;">
    "How is first-year intake in our programmes developing compared with similar institutions?"
  </div>
  <p class="muted" style="margin-top: 1.2rem;">Today: a specialist, several sources, days of work.</p>
</div>

</div>

<!--
Take a question every director recognises: how is our intake developing compared with similar institutions? Today that means a specialist, several sources and days of work. And the answer is hard to reproduce.
-->

---

<!-- 5 · WHAT IS EDUDATA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">The answer</p>

# EDUdata

<p class="np-subtitle">An AI assistant for open Dutch education data, for mbo, hbo and wo.</p>

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: center;">
<div style="font-size: 1.05rem; line-height: 1.9;">

- You **ask** in plain language
- It **finds** and retrieves the data
- It **shows** a dashboard

</div>
<div style="display: flex; justify-content: center;">
  <img src="/npuls/powerpoint_illustrations/kunstmatigeintelligentie.svg" style="width: 190px;" />
</div>
</div>

</div>

<!--
EDUdata is an AI assistant for open Dutch education data, for mbo, hbo and wo. You ask in plain language, it finds and retrieves the data, and it shows you a dashboard.
-->

---

<!-- 6 · ASK -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Step 1 · Ask</p>

# In your own words

<div class="np-card accent-blue" style="margin-top: 0.8rem; max-width: 720px; margin-left: auto; margin-right: auto;">
  <span class="np-badge blue">You</span>
  <p style="font-size: 1.15rem; line-height: 1.6; margin: 0.6rem 0 0; color: var(--np-ink);">
    Compare first-year enrolment in business programmes at universities of applied sciences over the last five years.
  </p>
</div>

<p class="muted" style="text-align: center; margin-top: 0.8rem;">No query language. No dataset knowledge.</p>

</div>

<!--
Step one: you ask. No query language, no need to know which dataset holds what. Just the question, in your own words.
-->

---

<!-- 7 · FIND -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Step 2 · Find</p>

# It picks the source and retrieves the figures

<div class="np-pipeline" style="margin-top: 1.2rem;">
  <div class="np-step blue" style="flex: 1; max-width: 200px;"><strong>Understand</strong><small>the question</small></div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 200px;"><strong>Select</strong><small>the right source</small></div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 200px;"><strong>Retrieve</strong><small>the figures</small></div>
</div>

</div>

<!--
Step two: the assistant works out what you mean, selects the right source among CBS, DUO and RIO, and retrieves the figures. And it keeps track of where every number came from.
-->

---

<!-- 8 · SHOW (illustrative dashboard) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Step 3 · Show</p>

# A dashboard you can share

<div class="np-card accent-orange" style="margin-top: 0.6rem; max-width: 760px; margin-left: auto; margin-right: auto;">
  <h3>First-year intake by institution <span class="np-badge ghost" style="background: var(--np-mid-gray);">illustrative</span></h3>
  <div style="display: flex; align-items: flex-end; gap: 1.2rem; height: 170px; margin-top: 0.8rem;">
    <div style="flex: 1; text-align: center; font-size: 0.8rem;"><div style="height: 120px; background: var(--np-blue); border-radius: 6px 6px 0 0;"></div>Your institution</div>
    <div style="flex: 1; text-align: center; font-size: 0.8rem;"><div style="height: 95px; background: var(--np-orange); border-radius: 6px 6px 0 0;"></div>Peer A</div>
    <div style="flex: 1; text-align: center; font-size: 0.8rem;"><div style="height: 140px; background: var(--np-orange); border-radius: 6px 6px 0 0;"></div>Peer B</div>
    <div style="flex: 1; text-align: center; font-size: 0.8rem;"><div style="height: 70px; background: var(--np-orange); border-radius: 6px 6px 0 0;"></div>Peer C</div>
  </div>
</div>

</div>

<!--
Step three: the answer is a dashboard, not a wall of text. You can compare your institution with peers, check it, and share it with colleagues. This chart is illustrative; the real one uses the source data.
-->

---

<!-- 9 · SPEED -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div class="np-grid-2" style="align-items: center;">
  <div>
    <p class="eyebrow">The gain</p>

# From request queue to self-service

<p class="np-subtitle">Faster answers, less dependence on a few experts.</p>
  </div>
  <div style="display: flex; justify-content: center;">
    <img src="/npuls/powerpoint_illustrations/learninganalystics.svg" style="width: 200px;" />
  </div>
</div>

</div>

<!--
The gain is speed and independence. Answers no longer wait in a queue for the few people who know the sources. Policy workers can explore themselves, and directors get better-grounded answers sooner.
-->

---

<!-- 10 · DIVIDER: TRUST -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Part 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Can we trust<br/>an AI with figures?</h1>
  </div>
</div>

<!--
The question every director asks, and the right one: can we trust an AI with figures? This is the most important part of the story.
-->

---

<!-- 11 · MODEL vs CODE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Design principle</p>

# The AI talks. Code counts.

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Language model</span>
    <h3 style="margin-top: 0.5rem;">Understands and explains</h3>
    <p class="muted" style="font-size: 0.9rem; margin: 0;">Chooses the tool. Words the answer.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Deterministic code</span>
    <h3 style="margin-top: 0.5rem;">Looks up and calculates</h3>
    <p class="muted" style="font-size: 0.9rem; margin: 0;">Catalogue, codes, calculations.</p>
  </div>
</div>

</div>

<!--
The key design choice: the language model only understands your question and words the answer. Looking up data, codes and all calculations are done by ordinary, deterministic code. The AI does not do the maths.
-->

---

<!-- 12 · TRACEABLE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Traceability</p>

# Every figure points to its source

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.2rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Open sources only</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Source shown</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Known limits stated</div>
</div>

<p class="muted" style="text-align: center; margin-top: 1rem;">E.g. preliminary CBS figures can be revised.</p>

</div>

<!--
Every figure points back to its open source, and we state the known limits. For example, preliminary CBS figures can be revised later. You can always check where a number came from.
-->

---

<!-- 13 · SCOPE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deliberate scope</p>

# It says no instead of guessing

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">In scope</span>
    <h3 style="margin-top: 0.5rem;">mbo · hbo · wo</h3>
  </div>
  <div class="np-card accent-pink">
    <span class="np-badge ghost" style="background: var(--np-mid-gray);">Closed</span>
    <h3 style="margin-top: 0.5rem;">po · so · vo</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">One gated exception: vo-context for higher-education questions.</p>
  </div>
</div>

</div>

<!--
The scope is deliberate: mbo, hbo and wo. Outside that scope the tool refuses instead of guessing. There is one gated exception, secondary-education context for higher-education questions.
-->

---

<!-- 14 · QUALITY -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Quality</p>

# Tested, evaluated, reviewed

<div class="np-grid-3" style="margin-top: 0.8rem; align-items: start;">
  <div class="np-card accent-blue"><h3>Automated tests</h3><p class="muted" style="font-size: 0.84rem; margin: 0;">On every change.</p></div>
  <div class="np-card accent-orange"><h3>Evaluation set</h3><p class="muted" style="font-size: 0.84rem; margin: 0;">Critical questions with expected answers.</p></div>
  <div class="np-card accent-green"><h3>Controlled release</h3><p class="muted" style="font-size: 0.84rem; margin: 0;">Test first, then promote.</p></div>
</div>

</div>

<!--
Quality is built in: automated tests on every change, an evaluation set of critical questions, and a controlled release process. I will be honest about what is not covered yet in a moment.
-->

---

<!-- 15 · DIVIDER: STATUS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Part 3</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Where we stand</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Demo phase</p>
  </div>
</div>

<!--
Where do we stand? We are in the demo phase.
-->

---

<!-- 16 · HONEST: WORKS / NOT YET -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Honest status</p>

# What works, and what does not yet

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-green">
    <h3>Works</h3>
    <ul style="font-size: 0.9rem; line-height: 1.7; margin: 0.3rem 0 0;">
      <li>Questions across CBS, DUO, RIO</li>
      <li>Dashboards with sources</li>
      <li>Controlled releases</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <h3>Not yet</h3>
    <ul style="font-size: 0.9rem; line-height: 1.7; margin: 0.3rem 0 0;">
      <li>No institutional login</li>
      <li>No live vacancy data (snapshot May 2023)</li>
      <li>No own institution data</li>
    </ul>
  </div>
</div>

</div>

<!--
What works: questions across CBS, DUO and RIO, dashboards with sources, controlled releases. What does not yet: no institutional login, the vacancy data is a frozen snapshot from May 2023, and your own institution data is not in there. That last point is exactly where we need you.
-->

---

<!-- 17 · ROADMAP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Next steps</p>

# From demo to something you can use

<div class="np-timeline">
  <div class="np-timeline-point"><div class="np-timeline-dot"></div></div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point"><div class="np-timeline-marker">NOW</div><div class="np-timeline-dot now"></div></div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point"><div class="np-timeline-dot blue"></div></div>
  <div class="np-timeline-line dashed"></div>
  <div class="np-timeline-point"><div class="np-timeline-dot open"></div></div>
</div>

<div class="np-timeline-labels">
  <div><strong class="mid-gray">Built</strong><span>Open-data demo</span></div>
  <div></div>
  <div><strong class="orange">Now</strong><span class="ink">Pilot with an institution</span></div>
  <div></div>
  <div><strong class="blue">Next</strong><span>Harden and extend</span></div>
  <div></div>
  <div><strong class="green">Later</strong><span>For all institutions</span></div>
</div>

</div>

<!--
The path is clear: we built the open-data demo, now we need a pilot with a real institution, then we harden and extend, and later make it available for all institutions. The next step is the pilot.
-->

---

<!-- 18 · THE ASK -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">What we ask</p>

# Run a pilot with us

<p class="np-subtitle">CEDA &middot; Npuls &times; your institution, using your own data.</p>

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">We bring</span>
    <ul style="font-size: 0.9rem; line-height: 1.7; margin: 0.4rem 0 0;">
      <li>The assistant, open source</li>
      <li>Engineers and data experts</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">You bring</span>
    <ul style="font-size: 0.9rem; line-height: 1.7; margin: 0.4rem 0 0;">
      <li>A sponsor and a use case</li>
      <li>Your own institution data</li>
    </ul>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  First use case: <strong>student acquisition, benchmarked against peers</strong>.
</div>

</div>

<!--
Our ask: run a pilot with us. CEDA and Npuls bring the assistant and the expertise. You bring a sponsor, a use case, and your own institution data. We suggest starting with student acquisition: how does our intake compare with peer institutions? We agree upfront where your data lives and who may see it.
-->

---

<!-- 19 · WHO BENEFITS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Who benefits</p>

# Better decisions, sooner

<div class="np-grid-3" style="margin-top: 0.8rem; align-items: start;">
  <div class="np-card accent-blue">
    <img src="/npuls/powerpoint_illustrations/bestuurder.svg" style="height: 90px;" />
    <h3 style="margin-top: 0.5rem;">Directors</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Grounded, traceable answers.</p>
  </div>
  <div class="np-card accent-orange">
    <img src="/npuls/powerpoint_illustrations/onderwijsprofessional.svg" style="height: 90px;" />
    <h3 style="margin-top: 0.5rem;">Policy workers</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Self-service exploration.</p>
  </div>
  <div class="np-card accent-green">
    <img src="/npuls/powerpoint_illustrations/data.svg" style="height: 90px;" />
    <h3 style="margin-top: 0.5rem;">Analysts</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Time for the hard questions.</p>
  </div>
</div>

</div>

<!--
Who benefits? Directors get grounded, traceable answers sooner. Policy workers can explore for themselves. Analysts get time back for the hard questions. Open data only helps when people can actually use it.
-->

---

<!-- 20 · FIXED CLOSING SLIDE (translated to English) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">In closing</p>
  <h1 style="font-size: 2.6rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Stay in touch</h1>
  <p style="font-size: 1.05rem; color: var(--np-dark-gray); max-width: 600px; line-height: 1.5;">Questions, feedback, or keen to build with us? We would love to hear from you.</p>
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
Close: where to find us, and the invitation. Who wants to run the pilot?
-->
