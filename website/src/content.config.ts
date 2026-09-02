import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per lab member. The body (below the frontmatter) is an
// optional short bio shown on the People page.
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    group: z.enum(['leadership', 'phd', 'masters', 'collaborators']),
    role: z.string().optional(),
    school: z.string().optional(),
    university: z.string().optional(),
    photo: z.string().optional(),
    email: z.string().optional(),
    linkedin: z.string().optional(),
    homepage: z.string().optional(),
    uts: z.string().optional(),
    github: z.string().optional(),
    scholar: z.string().optional(),
    order: z.number().default(99),
    alumni: z.boolean().default(false),
  }),
});

// One YAML file per publication.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'preprint', 'dataset']),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    code: z.string().optional(),
    demo: z.string().optional(),
    video: z.string().optional(),
    slides: z.string().optional(),
    abstract: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

// One markdown file per research theme. The body is the theme page content.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    card: z.string(),
    order: z.number().default(99),
  }),
});

// One YAML file per talk/video.
const videos = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    youtubeId: z.string(),
    start: z.number().optional(),
    section: z.enum(['getting-started', 'conferences', 'training']),
    speakers: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

// One YAML file per code/software project shown on the Projects page.
const code = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/code' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.string(),
    paper: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

// One markdown file per tutorial.
const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { people, publications, projects, videos, tutorials, code };
