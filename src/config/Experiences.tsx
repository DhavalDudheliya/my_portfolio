import { BookOpen, Code, TrendingUp, Users } from "lucide-react";

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
    id: "nexuslink",
    companyName: "NexusLink Services Pvt. Ltd.",
    companyLogo: "/assets/nexuslink_logo.png",
    links: {
      website: "https://nexuslinkservices.com",
      linkedin: "https://www.linkedin.com/company/nexuslink-services",
    },
    positions: [
      {
        id: "nexuslink-project-lead",
        title: "Project Lead & Full-Stack Developer",
        employmentPeriod: {
          start: "10.2025",
          end: "03.2026",
        },
        employmentType: "Full-time",
        description: `- Led a **3-developer team** as Project Lead, driving architecture decisions, conducting code reviews, mentoring juniors on clean code and API design patterns, and owning clear client communication end-to-end.
- Owned and built an end-to-end **IELTS platform** covering test paper creation UI, generation engine, test-taking interface, and AI-powered evaluation, reducing teacher workload by **75%**.
- Implemented **SEO** across the IELTS platform, improving search visibility across all pages.
- Integrated **[Razorpay](https://razorpay.com)** payment gateway end-to-end and implemented secure user authentication with **[BetterAuth](https://better-auth.com)**, including session management and OAuth flows.
- Architected a **Turborepo** monorepo consolidating **3 Next.js apps** and **1 Express API** with shared components and modules, eliminating code duplication across all products.
- Managed production infrastructure across **AWS** (EC2, S3) and **[Vercel](https://vercel.com)** for reliable deployments and operations.`,
        icon: <Users className="size-4" />,
        skills: [
          "Team Leadership",
          "Project Management",
          "Next.js",
          "Turborepo",
          "Express",
          "Tailwind CSS",
          "Shadcn UI",
          "Razorpay",
          "Better Auth",
          "AWS",
          "CI/CD",
          "Vercel",
        ],
        isExpanded: true,
      },
      {
        id: "nexuslink-fsd",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "11.2024",
          end: "10.2025",
        },
        employmentType: "Full-time",
        description: `- Engineered an **AI-powered calling system** covering the campaign builder UI in **React** and the backend calling engine using **[ElevenLabs](https://elevenlabs.io)** and **[Twilio](https://www.twilio.com)**, automating **1,000+** daily follow-up calls for marketing campaigns.
- Designed a **Master-Slave** architecture for outreach campaign execution, enabling parallel processing with reliable task distribution and fault tolerance.
- Implemented **Redis** caching and **BullMQ** background job processing, improving performance across multiple production systems.
- Developed RESTful APIs using **[NestJS](https://nestjs.com)** and **Express**, following clean backend architecture and reusable API design patterns.`,
        icon: <Code className="size-4" />,
        skills: [
          "Redis",
          "BullMQ",
          "React",
          "NestJS",
          "Express",
          "ElevenLabs",
          "Twilio",
          "Node.js",
          "TypeScript",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "vasundhara",
    companyName: "Vasundhara Infotech LLP",
    companyLogo: "/assets/vasundhara_infotech_logo.jpeg",
    links: {
      website: "https://www.vasundhara.io",
      linkedin: "https://www.linkedin.com/company/vasundhara-infotech",
    },
    positions: [
      {
        id: "vasundhara-fullstack",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "01.2024",
          end: "10.2024",
        },
        employmentType: "Full-time",
        description: `- Developed e-commerce features including shopping cart management and a **CMS-powered blog system** using **[Strapi](https://strapi.io)**, gaining hands-on experience with real-world product development.
- Built modules for a cross-platform desktop application using **ElectronJS**, implementing core UI workflows and **RESTful API** integrations.
- Managed server-state synchronization across React applications using **Redux** and **TanStack Query**.
- Developed and consumed **RESTful APIs** with robust validation, error handling, and scalable architecture patterns.
- Implemented end-to-end **[Stripe](https://stripe.com)** payment gateway integrations, handling payment flows, webhooks, and secure transaction management.`,
        icon: <Code className="size-4" />,
        skills: [
          "React",
          "ElectronJS",
          "Redux",
          "TanStack Query",
          "Node.js",
          "Express",
          "Stripe",
        ],
        isExpanded: false,
      },
      {
        id: "vasundhara-intern-pos",
        title: "Full-Stack Developer Intern",
        employmentPeriod: {
          start: "10.2023",
          end: "12.2023",
        },
        employmentType: "Internship",
        description: `- Automated PDF report generation using **Puppeteer** (headless browser), improving data presentation and reducing manual reporting effort.
- Developed robust, validated forms using **Formik** and **Yup** schema validation, improving data input reliability.
- Enhanced user engagement by implementing interactive UI animations with **Motion React**.
- Managed application state using **Redux** for seamless data flow across React components.`,
        icon: <TrendingUp className="size-4" />,
        skills: [
          "Puppeteer",
          "Formik",
          "Motion React",
          "Redux",
          "React",
          "Node.js",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "outamation",
    companyName: "Outamation Technologies Pvt. Ltd.",
    companyLogo: "/assets/outamation_logo.jpg",
    links: {
      website: "https://outamation.com",
      linkedin: "https://www.linkedin.com/company/outamation",
    },
    positions: [
      {
        id: "outamation-trainee",
        title: "Trainee Full-Stack Developer",
        employmentPeriod: {
          start: "05.2023",
          end: "06.2023",
        },
        employmentType: "Trainee",
        description: `- Developed and deployed responsive full-stack web applications using the **MERN** stack (MongoDB, Express.js, React, Node.js).
- Designed and implemented **RESTful APIs** for scalable backend solutions with Express.js.
- Built a feature-rich **Airbnb clone** with user authentication, listing management, and booking functionality.
- Applied best practices in **Git** version control and collaborative development workflows.`,
        icon: <BookOpen className="size-4" />,
        skills: ["React", "Node.js", "Express", "MongoDB", "Git"],
        isExpanded: false,
      },
    ],
  },
];
