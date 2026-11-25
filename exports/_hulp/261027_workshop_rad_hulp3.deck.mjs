// Hulpdeck 3: programma met rondes van 20 minuten (v4). Geen sprekersnotities op verzoek.
export default {
  title: 'Hulpslides workshop DAIR v4',
  author: 'CEDA',
  slides: [
    // 1 → vervangt v3-slide 3
    {
      type: 'timeline', variant: 'licht-blauw',
      title: 'Zo loopt de middag',
      blocks: [
        { minutes: 12, title: 'Intro, data en casus', text: 'CEDA, demodata en de opdracht', color: 'geel' },
        { minutes: 10, title: 'Skills en Codespace', text: 'Wat is een skill, opstarten', color: 'geel' },
        { minutes: 20, title: 'Ronde 1: data verkennen', text: 'Jullie gebruiken de skill', tag: '/1-verkennen', color: 'blauw' },
        { minutes: 10, title: 'Spiegel-\nmoment 1', text: 'Wat deed de skill?', color: 'oranje' },
        { minutes: 20, title: 'Ronde 2: dashboard bouwen', text: 'Andere rol, twee skills', tag: '/2-schetsen /3-bouwen', color: 'blauw' },
        { minutes: 10, title: 'Spiegel-\nmoment 2', text: 'Wat deden de skills?', color: 'oranje' },
        { minutes: 8, title: 'Evaluatie', text: '/4-review, rondje', color: 'groen' },
      ],
      legend: [
        { color: 'geel', label: 'Uitleg' },
        { color: 'blauw', label: 'Werken met de skills' },
        { color: 'oranje', label: 'Spiegelmoment' },
        { color: 'groen', label: 'Evaluatie en afsluiting' },
      ],
    },
  ],
};
