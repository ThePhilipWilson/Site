import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lab = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['canvas', 'webgl', 'audio', 'svg', 'js', 'shaders', 'other']),
    stars: z.number().int().min(1).max(5),
    description: z.string().max(120),
    // demo accepts both absolute URLs and site-relative paths (e.g. for static
    // toys that live under public/). repo stays a fully-qualified URL.
    demo: z.string().optional(),
    repo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    minutes: z.number().int().min(1),
    tape: z.enum(['NORMAL', 'CHROME', 'METAL']).default('NORMAL'),
    side: z.enum(['A', 'B']).default('A'),
    excerpt: z.string().max(180).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lab, writing };
