import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const tripsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/trips' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    slug: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    publishedAt: z.coerce.date(),
    type: z.enum(['viaje', 'escapada']),
    days: z.number(),
    km: z.number(),
    map: z.string().optional(),
    itinerary: z
      .array(
        z.object({
          day: z.number(),
          title: z.string(),
          description: z.string().optional(),
          km: z.number(),
          image: z.string().optional(),
          wikiloc: z.string().url().optional(),
          googleMaps: z.string().url().optional(),
        })
      )
      .optional(),
    tips: z.array(z.string()).optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
  }),
});

const resourcesCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/resources' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    publishedAt: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = {
  trips: tripsCollection,
  resources: resourcesCollection,
};
