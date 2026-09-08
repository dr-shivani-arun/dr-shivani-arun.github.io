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
    // Cover image path relative to /public (e.g. /assets/research/my-paper.jpg)
    // Leave empty to use the category placeholder.
    cover: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
  }),
});

const healthEducation = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'Oral Health',
      'Digital Health Literacy',
      'NCD Prevention',
      'Community Health',
      'Mental Health',
      'Health Policy',
    ]),
    // 'article' | 'video' | 'interactive' | 'course' | 'webinar'
    format: z.enum(['article', 'video', 'interactive', 'course', 'webinar']),
    duration: z.string().optional(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    targetAudience: z.string().optional(),
    // Cover image path relative to /public
    cover: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { research, healthEducation };
