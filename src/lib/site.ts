// Site-wide data. Edit here; nothing else hardcodes this stuff.

export const site = {
  name: 'Philip Wilson',
  tagline: 'A small zine of software, games, and things that move on screens. First issue tuning in.',
  email: 'philipwilson@philipwilson.co.uk',
  region: 'United Kingdom',

  // Default social-share image, site-relative (1200x630).
  // Regenerate with `node scripts/gen-og.mjs` if the wordmark/palette changes.
  ogImage: '/og-default.png' as string | null,

  // Pre-launch toggle. When true, the homepage shows the COMING SOON stamp
  // and uses holding-state copy. Flip to false on launch.
  comingSoon: true,

  // Status pill in the contact card. null hides it.
  status: { label: 'PRE-LAUNCH · 2026', open: true } as { label: string; open: boolean } | null,

  // Bio. Short, deliberately. Replace when you've got better words.
  bio: [
    // Wrap any text in <em>...</em> to get the handwritten peach accent.
    "I'm <em>Phil</em>, a (primarily backend) software engineer in games with a graphics background. Comfortable from AWS to UI; happiest somewhere in the middle.",
    "This is a work in progress site for software, games and small experiments. <em>Slowly</em> populating with content whenever I have an original thought or build something <em>interesting</em>. I'm not a web developer by trade so expect a few bugs and poor optimisations here and there.",
  ],

  links: [
    { key: 'EMAIL', label: 'philipwilson@philipwilson.co.uk', href: 'mailto:philipwilson@philipwilson.co.uk' },
    { key: 'GITHUB', label: '@ThePhilipWilson', href: 'https://github.com/ThePhilipWilson' },
    { key: 'INSTAGRAM', label: '@ThePhilipWilson', href: 'https://instagram.com/ThePhilipWilson' },
  ],

  // "Now playing" page (/now): the cassette tracklist of what's currently on
  // the deck. Bump `updated` whenever you change a track. Notes accept <em> for
  // the handwritten peach accent.
  // Each track carries its own quest metadata: progress / region / status,
  // and an optional `locked` flag (redacts the title + swaps in a sealed note).
  // Notes accept <em> (peach accent) and <a> links.
  now: {
    updated: '17 June 2026',
    intro: "What's on the deck right now. A snapshot, not a CV; it goes out of date the moment I stop pressing record.",
    sides: [
      {
        side: 'A',
        label: 'Main quests',
        tracks: [
          { title: 'This site', note: "Building it out slowly. This very page is the newest track.", progress: 'ONGOING', region: 'THE WORKBENCH', status: 'ACTIVE', locked: false },
          { title: 'AI adventure', note: "An AI-driven choose-your-own-adventure, still at the prototype stage.", progress: 'PROTOTYPE', region: 'UNCHARTED', status: 'ACTIVE', locked: false },
          { title: 'Point &amp; click', note: "A point-and-click adventure demo, slowly taking shape.", progress: 'DEMO BUILD', region: 'THE DRAWING BOARD', status: 'ACTIVE', locked: false },
          { title: 'Day job', note: "Gladly working on a still-secret, under-NDA game with TKG.", progress: '▓▓▓ ▓▓▓▓', region: 'WITH TKG', status: 'SEALED', locked: true },
        ],
      },
      {
        side: 'B',
        label: 'Side quests',
        tracks: [
          { title: 'Playing', note: "Slay the Spire 2, and <em>more League of Legends than is healthy.</em>", progress: '240H+', region: 'THE ARENA', status: 'ENGAGED', locked: false },
          { title: 'Learning', note: "To <em>rest</em> and actually pause. Also various tech skills, usually AI-shaped.", progress: 'LV. REST ↑', region: 'THE LONG PAUSE', status: 'ONGOING', locked: false },
          { title: 'Reading', note: "The Horus Heresy. About halfway, so <em>only thirty or forty books to go.</em>", progress: 'BK 14 / 64', region: 'THE HERESY', status: 'IN PROGRESS', locked: false },
          { title: 'Warhammer', note: 'Building, painting and playing it with Mrs Wilson, over at <a href="https://instagram.com/phataliewarhammer">@phataliewarhammer</a>.', progress: 'CO-OP', region: 'THE PAINTING DESK', status: 'ACTIVE', locked: false },
        ],
      },
    ],
  },

  // Issue framing — feeds the cover meta strip and nav badge.
  // Pre-launch is "issue 00 · pre-launch"; bump to a real issue once content lands.
  issue: { volume: 1, number: 0, season: 'PRE-LAUNCH 2026', version: 'v.0.0.1' },
} as const;

export type Site = typeof site;
