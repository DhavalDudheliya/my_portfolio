import { User2 } from "lucide-react";

export type ExperiencePosition = {
    id: string;
    title: string;
    /**
     * Employment period of the position.
     * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
     */
    employmentPeriod: {
        /** Start date (e.g., "10.2022" or "2020"). */
        start: string;
        /** End date; leave undefined for "Present". */
        end?: string;
    };
    /** Full-time | Part-time | Contract | Internship, etc. */
    employmentType?: string;
    description?: string;
    /** UI icon to represent the role type. */
    icon?: React.ReactNode;
    skills?: string[];
    /** Whether the position is expanded by default in the UI. */
    isExpanded?: boolean;
};

export type Experience = {
    id: string;
    companyName: string;
    /** URL to the company logo (absolute URL or path under /public). */
    companyLogo?: string;
    /** Roles held at this company; keep newest first for display. */
    positions: ExperiencePosition[];
    links?: {
        website?: string;
        linkedin?: string;
        x?: string;
        github?: string;
    };
    /** Marks the company as the current employer for highlighting. */
    isCurrentEmployer?: boolean;
};

export const EXPERIENCES: Experience[] = [
    {
        id: "1",
        companyName: "WhiteStone Infotech",
        companyLogo: "/assets/whitestoneinfotech.png",
        links: {
            website: "https://whitestoneinfotech.com",
            linkedin: "https://linkedin.com/company/whitestone",
            x: "https://x.com/whitestone",
            github: "https://github.com/whitestone",
        },
        positions: [
            {
                id: "1",
                title: "Full Stack Developer",
                employmentPeriod: {
                    start: "10.2022",
                    end: "Present",
                },
                employmentType: "Full-time",

                // Markdown description (Dummy Description)
                description: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                icon: <User2 />,
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                isExpanded: true,
            },
            {
                id: "2",
                title: "Full Stack Developer",
                employmentPeriod: {
                    start: "10.2022",
                    end: "Present",
                },
                employmentType: "Full-time",

                // Markdown description (Dummy Description)
                description: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                icon: <User2 />,
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                isExpanded: true,
            },
        ],
        isCurrentEmployer: true,
    },
    {
        id: "2",
        companyName: "WhiteStone Infotech",
        companyLogo: "/assets/whitestoneinfotech.png",
        positions: [
            {
                id: "1",
                title: "Full Stack Developer",
                employmentPeriod: {
                    start: "10.2022",
                    end: "Present",
                },
                employmentType: "Full-time",

                // Markdown description (Dummy Description)
                description: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                icon: <User2 />,
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                isExpanded: false,
            },
            {
                id: "2",
                title: "Full Stack Developer",
                employmentPeriod: {
                    start: "10.2022",
                    end: "Present",
                },
                employmentType: "Full-time",

                // Markdown description (Dummy Description)
                description: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                icon: <User2 />,
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                isExpanded: false,
            },
        ],
        isCurrentEmployer: true,
    },
];