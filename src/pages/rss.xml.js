import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../lib/site.ts';

// Feed for the writing section. context.site comes from `site:` in astro.config.
export async function GET(context) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: site.name,
    description: site.tagline,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/writing/${post.id}/`,
    })),
  });
}
