import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    genre: z.array(z.string()),
    platforms: z.array(z.enum(["Windows", "macOS", "Linux", "Steam Deck"])),
    releaseStatus: z.enum([
      "In Development",
      "Coming Soon",
      "Released",
      "Early Access",
    ]),
    storeUrl: z.string().url(),
    trailerYoutubeId: z.string(),
    pressKitUrl: z.string().url(),
    headerImage: z.string(),
    heroImage: z.string(),
    libraryImage: z.string(),
    screenshots: z.array(z.string()),
    featured: z.boolean().default(true),
  }),
});

export const collections = { games };
