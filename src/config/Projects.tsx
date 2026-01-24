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
  // {
  //   id: "1",
  //   title: "Hostel Management System",
  //   slug: "hostel-management-system",
  //   description:
  //     "A user-centric platform designed using MERN Stack for hostel authorities to efficiently manage operations, reducing reliance on Excel by 75%.",
  //   // thumbnail: "/projects/p1.png",
  //   thumbnail: "/projects/project-1.png",
  //   technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  //   status: "Completed",
  //   links: {
  //     github: "https://github.com/DhavalDudheliya/Hostel_Management",
  //   },
  //   featured: true,
  // },
  // {
  //   id: "2",
  //   title: "Lost and Found Helper System",
  //   slug: "lost-and-found-helper-system",
  //   description:
  //     "A platform designed to help students retrieve lost items efficiently. This system streamlines the process of managing lost and found items, significantly reducing the need for physical office visits.",
  //   thumbnail: "/projects/p2.png",
  //   technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  //   status: "Completed",
  //   links: {
  //     github: "https://github.com/DhavalDudheliya/LoastAndFound",
  //   },
  //   featured: true,
  // },
  {
    id: "3",
    title: "Duolingo Clone",
    slug: "duolingo-clone",
    description:
      "A Duolingo-inspired language learning website built with Next.js, featuring AI-generated voices, Clerk authentication, Stripe payments, PostgreSQL, and Drizzle ORM. Includes admin dashboard, units, lessons, points, hearts, quests, leaderboards, and a shop.",
    thumbnail: "/projects/project-1.png",
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
