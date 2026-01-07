import Skill from "@/components/core/Skill";
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import ReactIcon from "@/components/technologies/ReactIcon";
import TypeScript from "@/components/technologies/TypeScript";

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
      applications and develop <strong>reliable backend </strong> using{" "}
      <Skill name="TypeScript" href="https://www.typescriptlang.org/">
        <TypeScript />
      </Skill>
      ,{" "}
      <Skill name="React" href="https://react.dev/">
        <ReactIcon />
      </Skill>
      ,{" "}
      <Skill name="NextJs" href="https://nextjs.org/">
        <NextJs />
      </Skill>
      ,{" "}
      <Skill name="NodeJs" href="https://nodejs.org/">
        <NodeJs />
      </Skill>{" "}
      and{" "}
      <Skill name="MongoDB" href="https://www.mongodb.com/">
        <MongoDB />
      </Skill>
      , with a strong focus on performance, scalability, and clean UX.
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
