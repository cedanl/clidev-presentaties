// Hulpdeck 2: minder kaartslides in 261005_workshop_rad_uitvoering (v3). Geen sprekersnotities op verzoek.
export default {
  title: 'Hulpslides workshop DAIR v3',
  author: 'CEDA',
  slides: [
    // 1 → vervangt v2-slide 15
    {
      type: 'split', variant: 'licht-geel', side: 'left',
      title: 'Waar let je op tijdens de rondes?',
      lede: 'Voor prompter en checker. We bespreken het per stap bij de spiegelmomenten.',
      bullets: [
        '**Gebruiksgemak:** hoe gebruiksvriendelijk is het?',
        '**Stappen:** zijn ze logisch, en mist er een stap?',
        '**Resultaat:** sluit het aan bij wat je vroeg?',
        '**Bruikbaar:** is het informatief genoeg om te gebruiken?',
      ],
      illustration: 'verrekijker',
    },
    // 2 → vervangt v2-slide 20
    {
      type: 'table', variant: 'licht-groen',
      title: 'Andere casus, dezelfde stappen: dat is een skill',
      columns: ['Stap', 'Wat de skill doet', 'Wat hij voor je afvangt'],
      rows: [
        ['1  Kolommen', 'Wat een rij is en welke kolom niet vergelijkt', 'Eén waarde: kolom zonder variatie valt weg'],
        ['2  Definities en privacy', 'Wat je telt, drempel kleine groepen', 'Kleine groepen: drempel van 30 afgesproken'],
        ['3  Kwaliteit', 'Eén keer per jaar, lege waarden', 'Laatste cohort: nog niet af, valt weg'],
        ['4  Ideeën en aannames', 'Waarop het profiel leunt', 'Geen oorzaak: verschil is geen effect'],
      ],
      widths: [0.26, 0.37, 0.37],
    },
    // 3 → vervangt v2-slide 26
    {
      type: 'split', variant: 'licht-roze',
      title: '/2-schetsen: eerst de opzet, dan de cijfers',
      bullets: [
        '**Twee vragen:** waarop wil je filteren, en wat komt bovenaan?',
        '**Schets:** schets.html, je dashboard in grijs, nog zonder getallen',
        '**Bijsturen:** vergelijking, filter, volgorde of titel aanpassen',
      ],
      illustration: 'Document',
    },
    // 4 → vervangt v2-slide 28
    {
      type: 'list', variant: 'licht-blauw',
      title: '/3-bouwen: bouwen, controleren, één vraag',
      items: [
        { title: 'Bouwt', text: 'Uit je schets en keuzes, zonder vragen vooraf', status: 'Stap 1', color: 'blauw' },
        { title: 'Controleert', text: 'Volgt het je schets precies? Privacydrempel erin', status: 'Stap 2', color: 'oranje' },
        { title: 'Eén vraag', text: 'Klopt het? Iets anders gaat via de schets', status: 'Stap 3', color: 'groen' },
        { title: 'Geen conclusies', text: 'Interpreteren blijft mensenwerk', status: 'Altijd', color: 'geel' },
      ],
      footer: 'Levert: **dashboard.html**, om te downloaden. Er gaat niets naar GitHub.',
    },
    // 5 → vervangt v2-slide 30
    {
      type: 'cards', variant: 'licht-blauw',
      title: 'Als AI het werk doet: hoe weet je dat het klopt?',
      items: [
        { title: '/1-verkennen', sections: [{ label: 'Privacy', text: 'Drempel voor kleine groepen vastgelegd' }, { label: 'Betrouwbaarheid', text: 'Definities vastgelegd' }] },
        { title: '/2-schetsen', sections: [{ label: 'Privacy', text: 'Drempel meegenomen in de opzet' }, { label: 'Betrouwbaarheid', text: 'Verband, geen oorzaak' }] },
        { title: '/3-bouwen', sections: [{ label: 'Privacy', text: 'In de code: onder 30 niet getoond' }, { label: 'Betrouwbaarheid', text: 'Nagerekend, bron erbij' }] },
        { title: 'Menselijke regie', sections: [{ label: 'Jij valideert', text: 'Code, formules, definities en cijfers' }, { label: 'De AI', text: 'Trekt geen conclusies' }] },
      ],
      footer: '**En de data:** synthetisch. Er ging geen echte studentdata naar AI-aanbieders in de VS of China.',
    },
    // 6 → nieuw, direct na v2-slide 30
    {
      type: 'quote', variant: 'blauw',
      text: 'Oog 1 en 2 zijn van AI. Oog 3 en 4 blijven van ons.',
      by: 'Het vierogenprincipe',
      illustration: 'hersenen',
    },
  ],
};
