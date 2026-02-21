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
  status: "Completed" | "In Progress";
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
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    status: "Completed",
    links: {
      github: "https://github.com/DhavalDudheliya/my_portfolio",
      live: "https://dhavaldudheliya.site",
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
    },
    featured: true,
  },
];
