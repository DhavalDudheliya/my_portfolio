import { Github, Globe } from "lucide-react";
import { IconType } from "react-icons";

export type ProjectLink = {
  url: string;
  icon?: React.ElementType | IconType;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  status: "Completed" | "Building";
  links?: {
    live?: string;
    github?: string;
  };
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description:
      "My developer portfolio built with Next.js 16, featuring MDX-powered blog and book reviews, animated UI with Motion, dark mode, GitHub contribution graph, SEO optimization, and a contact form with Telegram integration.",
    thumbnail: "/projects/portfolio.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion React",
    ],
    status: "Completed",
    links: {
      github: "https://github.com/DhavalDudheliya/my_portfolio",
      live: "https://dhavaldudheliya.com",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Lingo - Language Learning Platform",
    slug: "lingo-language-learning-platform",
    description:
      "A Duolingo-inspired language learning website built with Next.js, featuring AI-generated voices, Clerk authentication, Stripe payments, PostgreSQL, and Drizzle ORM. Includes admin dashboard, units, lessons, points, hearts, quests, leaderboards, and a shop.",
    thumbnail: "/projects/lingo.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Drizzle",
      "PostgreSQL",
      "Stripe",
    ],
    status: "Completed",
    links: {
      github: "https://github.com/DhavalDudheliya/DuoLingo_Clone",
      live: "https://lingolearning.vercel.app",
    },
    featured: true,
  },
  {
    id: "3",
    title: "InkDown - Advanced Markdown Editor",
    slug: "inkdown",
    description:
      "A privacy-first, purely client-side Markdown editor built with Next.js 15, featuring pixel-perfect PDF exports, real-time Shiki syntax highlighting, KaTeX math blocks, and Mermaid diagrams. Includes deep customization with over 50 Google Fonts and 15+ syntax themes.",
    thumbnail: "/projects/inkdown.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Zustand",
      "Shiki",
      "Mermaid",
      "CodeMirror",
    ],
    status: "Completed",
    links: {
      github: "https://github.com/DhavalDudheliya/InkDown",
      live: "https://inkdownn.vercel.app",
    },
    featured: true,
  },
  {
    id: "4",
    title: "SupportHub",
    slug: "supporthub",
    description:
      "A Zendesk-inspired customer support web application currently in development. It features a comprehensive ticketing system and real-time chat capabilities to streamline customer service operations.",
    thumbnail: "/projects/supporthub.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    status: "Building",
    links: {
      github: "https://github.com/DhavalDudheliya/supportHub",
    },
    featured: true,
  },
];
