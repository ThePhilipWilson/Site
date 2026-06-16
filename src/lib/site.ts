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

  // Issue framing — feeds the cover meta strip and nav badge.
  // Pre-launch is "issue 00 · pre-launch"; bump to a real issue once content lands.
  issue: { volume: 1, number: 0, season: 'PRE-LAUNCH 2026', version: 'v.0.0.1' },
} as const;

export type Site = typeof site;
