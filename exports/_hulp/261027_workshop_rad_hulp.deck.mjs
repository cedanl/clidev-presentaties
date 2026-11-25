// Hulpdeck: losse slides voor 261005_workshop_rad_uitvoering.pptx (review 27 okt).
// Wordt met edit.py importeer in het bestaande deck gezet; geen sprekersnotities op verzoek.
export default {
  title: 'Hulpslides workshop DAIR',
  author: 'CEDA',
  slides: [
    // 1 → vervangt slide 8
    {
      type: 'image', variant: 'licht-groen',
      title: 'AI bouwt: jij geeft de opdracht en keurt goed',
      image: 'exports/_hulp/anthropic_aibouwt.png',
      caption: 'Bron: Anthropic R&D Automation Index (waarden geschat)',
      text: '**Data-analist** "Welke eerstejaars stoppen binnen een jaar?" AI rekent en bouwt het dashboard.\n**Data scientist** "Voorspel uitval." AI doet het traject van data tot evaluatie.\n**Oog 1 en 2:** AI bouwt. **Oog 3 en 4:** jij keurt goed.',
      alt: 'Lijngrafiek: aandeel R&D-taken waarin AI assisteert, samenwerkt en bouwt',
    },
    // 2 → vervangt slide 9
    {
      type: 'cards', variant: 'licht-geel',
      title: 'Vandaag: bouwen op synthetische data',
      items: [
        { tag: 'Vooraf', title: 'Synthetische data', text: 'Nepdata met dezelfde kolommen en codes.', color: 'groen' },
        { tag: 'Deze workshop', title: 'Bouwen met de agent', text: 'De agent schrijft en test de code.', color: 'blauw' },
        { tag: 'Daarna', title: 'Echte data', text: 'Dezelfde code draait bij je instelling, zonder agent.', color: 'groen' },
      ],
      callout: '**CEDA helpt:** wil je bouwen op je eigen data? Wij helpen je een synthetische versie te maken: zelfde structuur, geen echte studenten.',
    },
    // 3 → vervangt slide 12
    {
      type: 'split', variant: 'licht-blauw',
      title: 'Werk in tweetallen, wissel per ronde',
      lede: 'Start nu alvast je Codespace: link op slide 14.',
      bullets: [
        '**Prompter:** typt de opdrachten aan de agent',
        '**Checker:** de menselijke controle. Leest wat de agent teruggeeft en vraagt: klopt dit, en kunnen we dit zo laten zien?',
        '**Wissel** na ronde 1, zodat beiden beide rollen doen',
        '**Loop je vast?** Vraag de agent: leg uit wat je net deed',
      ],
      illustration: 'gesprek',
    },
    // 4 → nieuw, vóór Ronde 1
    {
      type: 'cards', variant: 'licht-geel', numbered: true,
      title: 'Waar let je op tijdens de rondes?',
      items: [
        { title: 'Gebruiksgemak', text: 'Hoe gebruiksvriendelijk is het?' },
        { title: 'Stappen', text: 'Zijn de stappen logisch, en mist er een stap?' },
        { title: 'Resultaat', text: 'Sluit het resultaat aan bij wat je vroeg?' },
        { title: 'Bruikbaar', text: 'Is het informatief genoeg om te gebruiken?' },
      ],
      footer: 'Voor prompter en checker. We bespreken het per stap bij de spiegelmomenten.',
    },
    // 5 → vervangt slide 18
    {
      type: 'section', variant: 'oranje', number: 2,
      title: 'Spiegelmoment 1: wat deed de skill voor je?',
      text: 'Wat vroeg de agent, en wat koos jij?\nWat ving de skill af dat je zelf vergeten was?\nWaar wilde je bijsturen, en kon dat?\nLet op: de skills zijn voor vandaag bewust afgekaderd, gericht en kort.',
      illustration: 'Boek puzzelstuk',
    },
    // 6 → vervangt slide 19
    {
      type: 'cards', variant: 'licht-blauw', numbered: true,
      title: 'Andere casus, dezelfde stappen: dat is een skill',
      rows: [
        { label: 'Wat de skill doet', items: [
          { title: 'Kolommen', text: 'Wat een rij is en welke kolom niet vergelijkt', color: 'blauw' },
          { title: 'Definities en privacy', text: 'Wat je telt, drempel kleine groepen', color: 'blauw' },
          { title: 'Kwaliteit', text: 'Eén keer per jaar, lege waarden', color: 'blauw' },
          { title: 'Ideeën en aannames', text: 'Waarop het profiel leunt', color: 'blauw' },
        ] },
        { label: 'Wat hij voor je afvangt', items: [
          { title: 'Laatste cohort', text: 'Nog niet af: valt weg', color: 'oranje' },
          { title: 'Eén waarde', text: 'Kolom zonder variatie weg', color: 'oranje' },
          { title: 'Kleine groepen', text: 'Drempel van 30 afgesproken', color: 'oranje' },
          { title: 'Geen oorzaak', text: 'Verschil is geen effect', color: 'oranje' },
        ] },
      ],
    },
    // 7 → vervangt slide 24
    {
      type: 'section', variant: 'oranje', number: 4,
      title: 'Spiegelmoment 2: wat deden de skills voor je?',
      text: 'Wat vroeg de agent, en wat koos jij?\nWat ving de skill af dat je zelf vergeten was?\nWaar wilde je bijsturen, en kon dat?\nLet op: de skills zijn voor vandaag bewust afgekaderd, gericht en kort.',
      illustration: 'Puzzelstuk 3D',
    },
    // 8 → vervangt slide 29
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
      callout: '**Vierogenprincipe:** oog 1 en 2 van AI, oog 3 en 4 van ons.',
    },
    // 9 → nieuw, na de reviewvideo
    {
      type: 'section', variant: 'blauw',
      title: 'Hoe zien jullie de samenwerking verder?',
      text: 'Deze vraag staat ook in de vragenlijst. Vul hem serieus in, wij nemen contact op.',
      illustration: 'hands',
    },
  ],
};
