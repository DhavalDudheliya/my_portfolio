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
        title: "Project One",
        slug: "project-one",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit justo fringilla ultrices sem iaculis molestie pharetra.",
        thumbnail: "/assets/project-placeholder.png", // specific placeholder or a general one
        technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
        status: "Completed",
        links: {
            live: "https://example.com",
            github: "https://github.com/example/project-one",
        },
        featured: true,
    },
    {
        id: "2",
        title: "Project Two",
        slug: "project-two",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit justo fringilla ultrices sem iaculis molestie pharetra.",
        thumbnail: "/assets/project-placeholder.png",
        technologies: ["Node.js", "Express", "MongoDB"],
        status: "In Progress",
        links: {
            github: "https://github.com/example/project-two",
        },
        featured: true,
    },
    {
        id: "3",
        title: "Project Three",
        slug: "project-three",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit justo fringilla ultrices sem iaculis molestie pharetra.",
        thumbnail: "/assets/project-placeholder.png",
        technologies: ["React", "TypeScript", "PostgreSQL"],
        status: "Completed",
        links: {
            live: "https://example.com",
        },
        featured: true,
    },
    {
        id: "4",
        title: "Project Four",
        slug: "project-four",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit justo fringilla ultrices sem iaculis molestie pharetra.",
        thumbnail: "/assets/project-placeholder.png",
        technologies: ["Next.js", "React", "TailwindCSS"],
        status: "In Progress",
        links: {
            live: "https://example.com",
            github: "https://github.com/example/project-four",
        },
        featured: false,
    },
];
