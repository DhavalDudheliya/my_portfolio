import AWS from "@/components/technologies/AWS";
import BootStrap from "@/components/technologies/BootStrap";
import CSS from "@/components/technologies/CSS";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import Github from "@/components/technologies/Github";
import Html from "@/components/technologies/Html";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import Motion from "@/components/technologies/Motion";
import Netlify from "@/components/technologies/Netlify";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Postman from "@/components/technologies/Postman";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";

export const TechnologyIcons: Record<string, React.ComponentType> = {
  AWS: AWS,
  Bootstrap: BootStrap,
  CSS: CSS,
  Express: ExpressJs,
  Figma: Figma,
  Github: Github,
  HTML: Html,
  JavaScript: JavaScript,
  MongoDB: MongoDB,
  "Motion React": Motion,
  Netlify: Netlify,
  "Next.js": NextJs,
  "Node.js": NodeJs,
  PostgreSQL: PostgreSQL,
  Postman: Postman,
  Prisma: Prisma,
  React: ReactIcon,
  Shadcn: Shadcn,
  TailwindCSS: TailwindCss,
  TypeScript: TypeScript,
  Vercel: Vercel,
};

export function getTechnologyIcon(name: string) {
  return TechnologyIcons[name] || null;
}
