// Frontmatter `minutes` accepts a number or an "N-M" range string.
// These helpers turn either into the bits the UI needs.

export type Minutes = number | string;

function parseRange(value: Minutes): [number, number] {
  if (typeof value === 'number') return [value, value];
  const [lo, hi] = value.split('-').map((n) => parseInt(n, 10));
  return [lo, hi];
}

// The big number on the cassette face. Number for a single read time,
// "5–7" (en-dash) for a range so it still feels like a tape spec.
export function displayMinutes(value: Minutes): string {
  const [lo, hi] = parseRange(value);
  return lo === hi ? String(lo) : `${lo}–${hi}`;
}

// C-XX label for the now-playing strip. Uses the upper bound for a range,
// since real cassette specs are also a length ceiling.
export function cAxis(value: Minutes): string {
  const [, hi] = parseRange(value);
  return `C-${String(hi).padStart(2, '0')}`;
}

// Human read-time for the meta chip.
export function readTimeLabel(value: Minutes): string {
  return `${displayMinutes(value)} min read`;
}
