import { readFileSync } from "node:fs";
import { join } from "node:path";

import { z } from "astro/zod";
import { parse } from "yaml";

export const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

export const entrySchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string().url().optional(),
  urlLabel: z.string().optional(),
  links: z.array(linkSchema).optional(),
  role: z.string().optional(),
  period: z.string().optional(),
  summary: z.string().optional(),
  body: z.string().optional(),
});

export const sectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  intro: z.string().optional(),
  entries: z.array(entrySchema),
});

export const cvSchema = z.object({
  profile: z.object({
    name: z.string(),
    headline: z.string(),
    email: z.string().email(),
    links: z.array(linkSchema),
    about: z.string(),
  }),
  sections: z.array(sectionSchema),
});

export type CV = z.infer<typeof cvSchema>;
export type Entry = z.infer<typeof entrySchema>;
export type Section = z.infer<typeof sectionSchema>;

export function getCV(): CV {
  const raw = readFileSync(join(process.cwd(), "src/data/cv.yaml"), "utf-8");
  return cvSchema.parse(parse(raw));
}
