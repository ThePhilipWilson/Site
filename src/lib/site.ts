// Site-wide data. Edit here; nothing else hardcodes this stuff.

export const site = {
  name: 'Philip A Wilson',
  tagline: 'A small zine of software, games, and things that move on screens.',
  email: 'philipwilson@philipwilson.co.uk',
  region: 'United Kingdom',

  // Status pill in the contact card. null hides it.
  status: { label: 'OPEN · 2026', open: true } as { label: string; open: boolean } | null,

  // Bio. Short, deliberately. Replace when you've got better words.
  bio: [
    "I'm Philip, a software engineer with a games and graphics background. Comfortable from shaders to UI; happiest somewhere in the middle.",
    "I take on a small number of projects each year. The rest of the time goes into the things above. If we'd get on, please say hello.",
  ],

  links: [
    { key: 'EMAIL', label: 'philipwilson@philipwilson.co.uk', href: 'mailto:philipwilson@philipwilson.co.uk' },
    { key: 'GITHUB', label: '@philipwilson', href: 'https://github.com/philipwilson' },
    { key: 'MASTODON', label: '@philipwilson', href: '#' },
  ],

  // Issue framing — feeds the cover meta strip and nav badge.
  issue: { volume: 1, number: 4, season: 'SPRING 2026', version: 'v.2026.04' },
} as const;

export type Site = typeof site;
