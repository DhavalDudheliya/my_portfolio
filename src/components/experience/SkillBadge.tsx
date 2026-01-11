import Image from "next/image";
import { SiFigma } from "react-icons/si";

import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

type SkillIconType =
  | {
      type: "svg";
      src: string;
      darkSrc?: string;
    }
  | {
      type: "component";
      component: React.ReactNode;
    };

const SKILL_ICONS: Record<string, SkillIconType> = {
  React: {
    type: "svg",
    src: "/svgs/React_light.svg",
    darkSrc: "/svgs/React_dark.svg",
  },
  "Next.js": {
    type: "svg",
    src: "/svgs/nextjs_icon_dark.svg",
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
  PostgreSQL: {
    type: "svg",
    src: "/svgs/postgresql.svg",
  },
  MongoDB: {
    type: "svg",
    src: "/svgs/MongoDB.svg",
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
  "Framer Motion": {
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
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
  const iconConfig =
    typeof children === "string" ? SKILL_ICONS[children] : null;

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-300 ease-out",
        "bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-100",
        "border border-zinc-200 dark:border-zinc-700",
        "group cursor-default",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        {iconConfig ? (
          <span className="shrink-0 text-sm">
            {iconConfig.type === "svg" ? (
              <>
                <Image
                  src={iconConfig.src}
                  alt={children as string}
                  width={14}
                  height={14}
                  className={cn(
                    "h-3.5 w-3.5 object-contain",
                    iconConfig.darkSrc && "dark:hidden",
                  )}
                />
                {iconConfig.darkSrc && (
                  <Image
                    src={iconConfig.darkSrc}
                    alt={children as string}
                    width={14}
                    height={14}
                    className="hidden h-3.5 w-3.5 object-contain dark:block"
                  />
                )}
              </>
            ) : (
              iconConfig.component
            )}
          </span>
        ) : (
          <span className="size-1.5 rounded-full bg-zinc-400 transition-colors duration-300 dark:bg-zinc-500" />
        )}
        {children}
      </span>
    </span>
  );
}
