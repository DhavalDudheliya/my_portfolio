import { ClipboardList, Infinity, Layers, Users } from "lucide-react";

export type SkillIconType =
  | {
      type: "svg";
      src: string;
      darkSrc?: string;
    }
  | {
      type: "component";
      component: React.ReactNode;
    };

export const SKILL_ICONS: Record<string, SkillIconType> = {
  React: {
    type: "svg",
    src: "/svgs/React_light.svg",
    darkSrc: "/svgs/React_dark.svg",
  },
  "Next.js": {
    type: "svg",
    src: "/svgs/nextjs_icon_dark.svg",
  },
  Angular: {
    type: "svg",
    src: "/svgs/angular.svg",
  },
  TypeScript: {
    type: "svg",
    src: "/svgs/typescript.svg",
  },
  "Tailwind CSS": {
    type: "svg",
    src: "/svgs/tailwindcss.svg",
  },
  Figma: {
    type: "svg",
    src: "/svgs/figma.svg",
  },
  JavaScript: {
    type: "svg",
    src: "/svgs/javascript.svg",
  },
  HTML5: {
    type: "svg",
    src: "/svgs/html5.svg",
  },
  CSS3: {
    type: "svg",
    src: "/svgs/css_old.svg",
  },
  "Node.js": {
    type: "svg",
    src: "/svgs/nodejs.svg",
  },
  PHP: {
    type: "svg",
    src: "/svgs/php.svg",
    darkSrc: "/svgs/php_dark.svg",
  },
  PostgreSQL: {
    type: "svg",
    src: "/svgs/postgresql.svg",
  },
  MySQL: {
    type: "svg",
    src: "/svgs/mysql-icon-light.svg",
    darkSrc: "/svgs/mysql-icon-dark.svg",
  },
  MongoDB: {
    type: "svg",
    src: "/svgs/Mongodatabase.svg",
  },
  Docker: {
    type: "svg",
    src: "/svgs/docker.svg",
  },
  Git: {
    type: "svg",
    src: "/svgs/git.svg",
  },
  GraphQL: {
    type: "svg",
    src: "/svgs/graphql.svg",
  },
  Prisma: {
    type: "svg",
    src: "/svgs/Prisma_light.svg",
    darkSrc: "/svgs/Prisma_dark.svg",
  },
  Redis: {
    type: "svg",
    src: "/svgs/redis.svg",
  },
  RabbitMQ: {
    type: "svg",
    src: "/svgs/RabbitMQ.svg",
  },
  BullMQ: {
    type: "component",
    component: <span className="text-zinc-500">🐂</span>, // Placeholder or use a generic if no icon
  },
  "AWS S3": {
    type: "svg",
    src: "/svgs/aws_light.svg",
    darkSrc: "/svgs/aws_dark.svg",
  },
  ElevenLabs: {
    type: "svg",
    src: "/svgs/elevenlabs.svg",
  },
  Twilio: {
    type: "svg",
    src: "/svgs/twilio.svg",
  },
  ElectronJS: {
    type: "svg",
    src: "/svgs/electron.svg",
  },
  Stripe: {
    type: "svg",
    src: "/svgs/stripe.svg",
  },
  Puppeteer: {
    type: "component",
    component: <span className="text-zinc-500">🎭</span>, // Placeholder
  },
  Formik: {
    type: "component",
    component: <span className="font-bold text-[#0160FE]">f</span>, // Simple text fallback
  },
  Yup: {
    type: "component",
    component: <span className="font-bold text-zinc-500">Yup</span>, // Simple text fallback
  },
  "Motion React": {
    type: "svg",
    src: "/svgs/Motion_light.svg",
    darkSrc: "/svgs/Motion_dark.svg",
  },
  Redux: {
    type: "svg",
    src: "/svgs/redux.svg",
  },
  Express: {
    type: "svg",
    src: "/svgs/Express.js_light.svg",
    darkSrc: "/svgs/Express.js_dark.svg",
  },
  "MERN Stack": {
    type: "component",
    component: <span className="text-zinc-500">MERN</span>,
  },
  "REST APIs": {
    type: "component",
    component: <span className="text-zinc-500">API</span>,
  },
  "Better Auth": {
    type: "svg",
    src: "/svgs/better-auth_light.svg",
    darkSrc: "/svgs/better-auth_dark.svg",
  },
  Razorpay: {
    type: "svg",
    src: "/svgs/razorpay.svg",
  },
  Strapi: {
    type: "svg",
    src: "/svgs/strapi.svg",
  },
  "Team Leadership": {
    type: "component",
    component: <Users className="size-3.5 text-blue-500" />,
  },
  "Project Management": {
    type: "component",
    component: <ClipboardList className="size-3.5 text-emerald-500" />,
  },
  "Technical Architecture": {
    type: "component",
    component: <Layers className="size-3.5 text-purple-500" />,
  },
  Clerk: {
    type: "svg",
    src: "/svgs/Clerk_light.svg",
    darkSrc: "/svgs/Clerk_dark.svg",
  },
  Drizzle: {
    type: "svg",
    src: "/svgs/Drizzle ORM_light.svg",
    darkSrc: "/svgs/Drizzle ORM_dark.svg",
  },
  Zustand: {
    type: "svg",
    src: "/svgs/zustand.svg",
  },
  Shiki: {
    type: "svg",
    src: "/svgs/shiki.svg",
  },
  Mermaid: {
    type: "svg",
    src: "/svgs/mermaid_light_icon.svg",
    darkSrc: "/svgs/mermaid_dark_icon.svg",
  },
  CodeMirror: {
    type: "svg",
    src: "/svgs/codemirror.svg",
  },
  NestJS: {
    type: "svg",
    src: "/svgs/nestjs.svg",
  },
  "TanStack Query": {
    type: "svg",
    src: "/svgs/tanstack.svg",
  },
  Vercel: {
    type: "svg",
    src: "/svgs/Vercel_light.svg",
    darkSrc: "/svgs/Vercel_dark.svg",
  },
  AWS: {
    type: "svg",
    src: "/svgs/aws_light.svg",
    darkSrc: "/svgs/aws_dark.svg",
  },
  "CI/CD": {
    type: "component",
    component: <Infinity className="size-3.5 text-blue-500" />,
  },
  "Shadcn UI": {
    type: "svg",
    src: "/svgs/shadcn-ui-light.svg",
    darkSrc: "/svgs/shadcn-ui_dark.svg",
  },
  Turborepo: {
    type: "svg",
    src: "/svgs/turborepo-icon-light.svg",
    darkSrc: "/svgs/turborepo-icon-dark.svg",
  },
  "Socket.io": {
    type: "svg",
    src: "/svgs/socketio-icon-light.svg",
    darkSrc: "/svgs/socketio-icon-dark.svg",
  },
};
