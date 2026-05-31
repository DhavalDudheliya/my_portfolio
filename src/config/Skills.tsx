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
        name: "C++",
        icon: { light: "/svgs/c-plusplus.svg", dark: "/svgs/c-plusplus.svg" },
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
        name: "GraphQL",
        icon: { light: "/svgs/graphql.svg", dark: "/svgs/graphql.svg" },
      },
    ],
  },
  {
    category: "Frontend",
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
        name: "Tailwind CSS",
        icon: { light: "/svgs/tailwindcss.svg", dark: "/svgs/tailwindcss.svg" },
      },
      {
        name: "Bootstrap",
        icon: { light: "/svgs/bootstrap.svg", dark: "/svgs/bootstrap.svg" },
      },
      {
        name: "Redux",
        icon: { light: "/svgs/redux.svg", dark: "/svgs/redux.svg" },
      },
      {
        name: "MUI",
        icon: { light: "/svgs/materialui.svg", dark: "/svgs/materialui.svg" },
      },
      {
        name: "Motion React",
        icon: {
          light: "/svgs/Motion_light.svg",
          dark: "/svgs/Motion_dark.svg",
        },
      },
      {
        name: "Shadcn UI",
        icon: { light: "/svgs/ui_light.svg", dark: "/svgs/ui_dark.svg" },
      },
      {
        name: "Tanstack Query",
        icon: { light: "/svgs/tanstack.svg", dark: "/svgs/tanstack.svg" },
      },
      {
        name: "ElectronJs",
        icon: { light: "/svgs/electron.svg", dark: "/svgs/electron.svg" },
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
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
        name: "NestJS",
        icon: { light: "/svgs/nestjs.svg", dark: "/svgs/nestjs.svg" },
      },
      {
        name: "Prisma ORM",
        icon: {
          light: "/svgs/Prisma_light.svg",
          dark: "/svgs/Prisma_dark.svg",
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
        name: "Socket.IO",
        icon: {
          light: "/svgs/socketio-icon-light.svg",
          dark: "/svgs/socketio-icon-dark.svg",
        },
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
    category: "DevOps & Cloud",
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
        name: "Turborepo",
        icon: {
          light: "/svgs/turborepo-icon-light.svg",
          dark: "/svgs/turborepo-icon-dark.svg",
        },
      },
      {
        name: "AWS",
        icon: { light: "/svgs/aws_light.svg", dark: "/svgs/aws_dark.svg" },
      },
      {
        name: "Docker",
        icon: { light: "/svgs/docker.svg", dark: "/svgs/docker.svg" },
      },
      {
        name: "Vercel",
        icon: {
          light: "/svgs/Vercel_light.svg",
          dark: "/svgs/Vercel_dark.svg",
        },
      },
      {
        name: "Netlify",
        icon: { light: "/svgs/netlify.svg", dark: "/svgs/netlify.svg" },
      },
    ],
  },
  {
    category: "Tools & Services",
    technologies: [
      {
        name: "VS Code",
        icon: { light: "/svgs/vscode.svg", dark: "/svgs/vscode.svg" },
      },
      {
        name: "Cursor",
        icon: {
          light: "/svgs/Cursor_light.svg",
          dark: "/svgs/Cursor_dark.svg",
        },
      },
      {
        name: "Antigravity",
        icon: { light: "/svgs/antigravity.svg", dark: "/svgs/antigravity.svg" },
      },
      {
        name: "Postman",
        icon: { light: "/svgs/postman.svg", dark: "/svgs/postman.svg" },
      },
      {
        name: "Stripe",
        icon: { light: "/svgs/stripe.svg", dark: "/svgs/stripe.svg" },
      },
      {
        name: "Razorpay",
        icon: { light: "/svgs/razorpay.svg", dark: "/svgs/razorpay.svg" },
      },
      {
        name: "Clerk",
        icon: { light: "/svgs/Clerk_light.svg", dark: "/svgs/Clerk_dark.svg" },
      },
      {
        name: "Better Auth",
        icon: {
          light: "/svgs/better-auth_light.svg",
          dark: "/svgs/better-auth_dark.svg",
        },
      },
      {
        name: "11Labs",
        icon: { light: "/svgs/elevenlabs.svg", dark: "/svgs/elevenlabs.svg" },
      },
      {
        name: "Twilio",
        icon: { light: "/svgs/twilio.svg", dark: "/svgs/twilio.svg" },
      },
      {
        name: "OpenAI",
        icon: { light: "/svgs/openai.svg", dark: "/svgs/openai_dark.svg" },
      },
      {
        name: "Claude",
        icon: {
          light: "/svgs/claude-ai-icon.svg",
          dark: "/svgs/claude-ai-icon.svg",
        },
      },
      {
        name: "Gemini",
        icon: { light: "/svgs/gemini.svg", dark: "/svgs/gemini.svg" },
      },
    ],
  },
];
