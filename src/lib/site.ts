// Site-wide data. Edit here; nothing else hardcodes this stuff.

export const site = {
  name: 'Philip A Wilson',
  tagline: 'A small zine of software, games, and things that move on screens. First issue tuning in.',
  email: 'philipwilson@philipwilson.co.uk',
  region: 'United Kingdom',

  // Pre-launch toggle. When true, the homepage shows the COMING SOON stamp
  // and uses holding-state copy. Flip to false on launch.
  comingSoon: true,

  // Status pill in the contact card. null hides it.
  status: { label: 'PRE-LAUNCH · 2026', open: true } as { label: string; open: boolean } | null,

  // Bio. Short, deliberately. Replace when you've got better words.
  bio: [
    "I'm Philip, a software engineer with a games and graphics background. Comfortable from shaders to UI; happiest somewhere in the middle.",
    "This is the holding sleeve for a small zine of software, games, and small experiments. The first issue is on the desk; tuning in soon. If you'd like a heads-up when it lands, please say hello.",
  ],

  links: [
    { key: 'EMAIL', label: 'philipwilson@philipwilson.co.uk', href: 'mailto:philipwilson@philipwilson.co.uk' },
    { key: 'GITHUB', label: '@philipwilson', href: 'https://github.com/philipwilson' },
    { key: 'MASTODON', label: '@philipwilson', href: '#' },
  ],

  // Issue framing — feeds the cover meta strip and nav badge.
  // Pre-launch is "issue 00 · pre-launch"; bump to a real issue once content lands.
  issue: { volume: 1, number: 0, season: 'PRE-LAUNCH 2026', version: 'v.0.0.1' },
} as const;

export type Site = typeof site;
