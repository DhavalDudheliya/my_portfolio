import { BookOpen, Code, TrendingUp, User2 } from "lucide-react";

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
    id: "whitestone",
    companyName: "WhiteStone InfoTech Pvt. Ltd.",
    companyLogo: "/assets/whitestoneinfotech.png",
    links: {
      website: "https://whitestoneinfotech.com",
      linkedin: "https://linkedin.com/company/whitestone-infotech",
    },
    positions: [
      {
        id: "whitestone-fsd",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "09.2024",
          end: "Present",
        },
        employmentType: "Full-time",
        description: `- Integrated **Redis** and **BullMQ** for scalable background processing, boosting app performance and reliability.
- Enabled secure, scalable media storage and retrieval with **AWS-S3** integration.
- Developed a **Voice Copilot** feature for hands-free website interaction, enhancing accessibility.
- Built an **AI-powered** outbound calling system using **ElevenLabs** and **Twilio**, automating follow-ups and marketing.
- Managed automatic calling using queue-based **worker-slave** architecture, ensuring reliable, distributed task execution.
- Worked on an **e-commerce app**, integrating **Stripe** for seamless payments and building features like **cart** management and a **blog** section for enhanced user engagement.
- Developed a video management and claim management app for e-commerce sellers using **ElectronJS**, supporting both desktop and web platforms.`,
        icon: <Code className="size-4" />,
        skills: [
          "Redis",
          "BullMQ",
          "AWS S3",
          "ElevenLabs",
          "Twilio",
          "ElectronJS",
          "Stripe",
          "React",
          "Node.js",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "rethink",
    companyName: "ReThink Financials",
    positions: [
      {
        id: "rethink-intern",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "12.2023",
          end: "03.2024",
        },
        employmentType: "Internship",
        description: `- Automated PDF reports with **Puppeteer** for enhanced data presentation.
- Built robust, validated forms using **Formik** and **Yup**.
- Enhanced user engagement with interactive **Motion** animations.
- Utilized **Redux** for seamless, real-time data management across components.`,
        icon: <TrendingUp className="size-4" />,
        skills: [
          "Formik",
          "Framer Motion",
          "Redux",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
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
        title: "Trainee Full Stack Developer",
        employmentPeriod: {
          start: "05.2023",
          end: "06.2023",
        },
        employmentType: "Trainee",
        description: `- Developed and deployed responsive Full-Stack web apps using modern frameworks.
- Applied best practices in **Git** and collaborative workflows for efficient teamwork.
- Designed and implemented **RESTful APIs** for scalable backend solutions.
- Built a feature-rich **Airbnb clone** as part of **MERN** Stack training.`,
        icon: <BookOpen className="size-4" />,
        skills: ["React", "Node.js", "Express", "MongoDB", "Git"],
        isExpanded: false,
      },
    ],
  },
];
