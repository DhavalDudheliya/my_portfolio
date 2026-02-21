export type Technology = {
  name: string;
  icon: {
    light: string;
    dark: string;
  };
};

export type SkillCategory = {
  category: string;
  technologies: Technology[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    technologies: [
      {
        name: "JavaScript",
        icon: { light: "/svgs/javascript.svg", dark: "/svgs/javascript.svg" },
      },
      {
        name: "TypeScript",
        icon: { light: "/svgs/typescript.svg", dark: "/svgs/typescript.svg" },
      },
      {
        name: "HTML",
        icon: { light: "/svgs/html5.svg", dark: "/svgs/html5.svg" },
      },
      {
        name: "CSS",
        icon: { light: "/svgs/css_old.svg", dark: "/svgs/css_old.svg" },
      },
      {
        name: "C++",
        icon: { light: "/svgs/c-plusplus.svg", dark: "/svgs/c-plusplus.svg" },
      },
      {
        name: "GraphQL",
        icon: { light: "/svgs/graphql.svg", dark: "/svgs/graphql.svg" },
      },
    ],
  },
  {
    category: "Databases",
    technologies: [
      {
        name: "MongoDB",
        icon: {
          light: "/svgs/Mongodatabase.svg",
          dark: "/svgs/Mongodatabase.svg",
        },
      },
      {
        name: "PostgreSQL",
        icon: { light: "/svgs/postgresql.svg", dark: "/svgs/postgresql.svg" },
      },
      {
        name: "Redis",
        icon: { light: "/svgs/redis.svg", dark: "/svgs/redis.svg" },
      },
    ],
  },
  {
    category: "Frameworks",
    technologies: [
      {
        name: "React",
        icon: { light: "/svgs/React_light.svg", dark: "/svgs/React_dark.svg" },
      },
      {
        name: "NextJS",
        icon: {
          light: "/svgs/nextjs_icon_dark.svg",
          dark: "/svgs/nextjs_icon_dark.svg",
        },
      },
      {
        name: "NodeJS",
        icon: { light: "/svgs/nodejs.svg", dark: "/svgs/nodejs.svg" },
      },
      {
        name: "ExpressJS",
        icon: {
          light: "/svgs/Express.js_light.svg",
          dark: "/svgs/Express.js_dark.svg",
        },
      },
      {
        name: "ElectronJs",
        icon: { light: "/svgs/electron.svg", dark: "/svgs/electron.svg" },
      },
      {
        name: "NestJS",
        icon: { light: "/svgs/nestjs.svg", dark: "/svgs/nestjs.svg" },
      },
      {
        name: "Tailwind CSS",
        icon: { light: "/svgs/tailwindcss.svg", dark: "/svgs/tailwindcss.svg" },
      },
      {
        name: "Bootstrap",
        icon: { light: "/svgs/bootstrap.svg", dark: "/svgs/bootstrap.svg" },
      },
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: [
      {
        name: "Git",
        icon: { light: "/svgs/git.svg", dark: "/svgs/git.svg" },
      },
      {
        name: "GitHub",
        icon: {
          light: "/svgs/github_light.svg",
          dark: "/svgs/github_dark.svg",
        },
      },
      {
        name: "Gitlab",
        icon: { light: "/svgs/gitlab.svg", dark: "/svgs/gitlab.svg" },
      },
      {
        name: "VS Code",
        icon: { light: "/svgs/vscode.svg", dark: "/svgs/vscode.svg" },
      },
      {
        name: "AWS",
        icon: { light: "/svgs/aws_light.svg", dark: "/svgs/aws_dark.svg" },
      },
      {
        name: "Postman",
        icon: { light: "/svgs/postman.svg", dark: "/svgs/postman.svg" },
      },
      {
        name: "Cursor",
        icon: {
          light: "/svgs/Cursor_light.svg",
          dark: "/svgs/Cursor_dark.svg",
        },
      },
      {
        name: "Docker",
        icon: { light: "/svgs/docker.svg", dark: "/svgs/docker.svg" },
      },
      {
        name: "Stripe",
        icon: { light: "/svgs/stripe.svg", dark: "/svgs/stripe.svg" },
      },
    ],
  },
  {
    category: "Useful Libraries",
    technologies: [
      {
        name: "Redux",
        icon: { light: "/svgs/redux.svg", dark: "/svgs/redux.svg" },
      },
      {
        name: "MUI",
        icon: { light: "/svgs/materialui.svg", dark: "/svgs/materialui.svg" },
      },
      {
        name: "Prisma ORM",
        icon: {
          light: "/svgs/Prisma_light.svg",
          dark: "/svgs/Prisma_dark.svg",
        },
      },
      {
        name: "Motion React",
        icon: {
          light: "/svgs/Motion_light.svg",
          dark: "/svgs/Motion_dark.svg",
        },
      },
      {
        name: "Drizzle ORM",
        icon: {
          light: "/svgs/Drizzle ORM_light.svg",
          dark: "/svgs/Drizzle ORM_dark.svg",
        },
      },
      {
        name: "Clerk",
        icon: { light: "/svgs/Clerk_light.svg", dark: "/svgs/Clerk_dark.svg" },
      },
      {
        name: "Shadcn UI",
        icon: { light: "/svgs/ui_light.svg", dark: "/svgs/ui_dark.svg" },
      },
      {
        name: "Tanstack Query",
        icon: { light: "/svgs/tanstack.svg", dark: "/svgs/tanstack.svg" },
      },
    ],
  },
  {
    category: "APIs",
    technologies: [
      {
        name: "11Labs",
        icon: { light: "/svgs/elevenlabs.svg", dark: "/svgs/elevenlabs.svg" },
      },
      {
        name: "Twilio",
        icon: { light: "/svgs/twilio.svg", dark: "/svgs/twilio.svg" },
      },
    ],
  },
];
