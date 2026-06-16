// Astro integration: inject a "← back to the lab" link into every
// public/lab/*/index.html at build time, so static lab toys get site
// chrome without each one having to remember it. The toys keep their
// own theming; the link sits as a fixed pill in the top-left corner.

import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const SNIPPET = `<style>
  .__paw-back{position:fixed;top:18px;left:18px;z-index:2147483647;
    font:14px/1 'VT323',ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;
    background:#F4EDDF;color:#9F5F33;padding:7px 13px;border:2px solid #2A2722;
    box-shadow:3px 3px 0 #2A2722;text-decoration:none;transform:rotate(-3deg);transition:transform .15s,box-shadow .15s}
  .__paw-back:hover{color:#2A2722;box-shadow:5px 5px 0 #2A2722;transform:translate(-1px,-1px) rotate(-3deg)}
  @media print { .__paw-back{display:none} }
</style>
<a class="__paw-back" href="/#lab">← back to the arcade</a>`;

const MARKER = '__paw-back';

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (e.isFile() && e.name.toLowerCase().endsWith('.html')) out.push(p);
  }
  return out;
}

export default function labBackLink(): AstroIntegration {
  return {
    name: 'lab-back-link',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = fileURLToPath(dir);
        const labDir = join(distDir, 'lab');
        try { await stat(labDir); } catch { return; }
        const files = await walk(labDir);
        let touched = 0;
        for (const file of files) {
          const html = await readFile(file, 'utf8');
          if (html.includes(MARKER)) continue;
          const closing = html.lastIndexOf('</body>');
          const next = closing >= 0
            ? html.slice(0, closing) + SNIPPET + html.slice(closing)
            : html + SNIPPET;
          await writeFile(file, next, 'utf8');
          touched++;
        }
        logger.info(`lab-back-link: injected into ${touched} file${touched === 1 ? '' : 's'}`);
      },
    },
  };
}
