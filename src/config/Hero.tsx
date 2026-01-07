import { SkillBadge } from "@/components/experience/SkillBadge";
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";

export const heroConfig = {
  // Personal Information
  name: "Dhaval Dudheliya",
  title: "Full Stack Developer",
  avatar: "/assets/me.jpg",

  // Skills Configuration
  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "Node.js",
      href: "https://nodejs.org/",
      component: "NodeJs",
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/",
      component: "MongoDB",
    },
  ],

  // Description
  description: (
    <>
      I build <strong>pixel-perfect</strong>, <strong>user-friendly</strong> web
      applications and develop <strong>reliable backend</strong> using{" "}
      <SkillBadge className="align-middle px-2 py-1">TypeScript</SkillBadge>,{" "}
      <SkillBadge className="align-middle px-2 py-1">React</SkillBadge>,{" "}
      <SkillBadge className="align-middle px-2 py-1">Next.js</SkillBadge>,{" "}
      <SkillBadge className="align-middle px-2 py-1">Node.js</SkillBadge> and{" "}
      <SkillBadge className="align-middle px-2 py-1">MongoDB</SkillBadge>, with a strong
      focus on performance, scalability, and clean UX.
    </>
  ),
};

export const socialLinks = [
  {
    name: "X (formerly Twitter)",
    username: "@Dhaval_1364",
    href: "https://x.com/Dhaval_1364",
    icon: <X />,
  },
  {
    name: "LinkedIn",
    username: "@dhavaldudheliya1309",
    href: "www.linkedin.com/in/dhavaldudheliya1309",
    icon: <LinkedIn />,
  },
  {
    name: "Github",
    username: "@DhavalDudheliya",
    href: "https://github.com/DhavalDudheliya",
    icon: <Github />,
  },
  {
    name: "Email",
    username: "dhavaldudheliya77@gmail.com",
    href: "mailto:dhavaldudheliya77@gmail.com",
    icon: <Mail />,
  },
];
