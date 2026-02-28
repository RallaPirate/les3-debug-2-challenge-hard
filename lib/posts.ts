import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-development-2025",
    title: "AI Development in 2025: Wat Verandert Er?",
    excerpt: "Een overzicht van de grootste veranderingen in AI-assisted development dit jaar.",
    date: "2025-02-20",
    author: "Tim",
    readTime: 5,
    tags: ["AI", "Development", "Cursor"],
  },
  {
    slug: "nextjs-vs-remix",
    title: "Next.js vs Remix: Welke Kies Je?",
    excerpt: "Een eerlijke vergelijking tussen de twee populairste React frameworks.",
    date: "2025-02-15",
    author: "Lisa",
    readTime: 8,
    tags: ["Next.js", "Remix", "React"],
  },
  {
    slug: "tailwind-tips",
    title: "10 Tailwind CSS Tips Die Je Moet Kennen",
    excerpt: "Van responsive design tot custom utilities — word een Tailwind pro.",
    date: "2025-02-10",
    author: "Mark",
    readTime: 6,
    tags: ["Tailwind", "CSS", "Tips"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
