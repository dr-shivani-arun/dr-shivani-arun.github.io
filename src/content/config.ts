import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string().optional(),
    date: z.coerce.date(),
    category: z.enum([
      'Oral-Systemic Link',
      'Health Literacy',
      'Epidemiology',
      'IISc Project',
      'MOOC Development',
      'Community Health',
    ]),
    abstract: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
  }),
});

export const collections = { research };
