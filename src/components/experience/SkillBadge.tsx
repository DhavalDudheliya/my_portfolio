import { cn } from "@/lib/utils";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFigma,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiGraphql,
    SiPrisma
} from "react-icons/si";

interface SkillBadgeProps {
    children: React.ReactNode;
    className?: string;
}

const SKILL_ICONS: Record<string, React.ReactNode> = {
    "React": <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="dark:text-white text-black" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Figma": <SiFigma className="text-[#F24E1E]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "HTML5": <SiHtml5 className="text-[#E34F26]" />,
    "CSS3": <SiCss3 className="text-[#1572B6]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Git": <SiGit className="text-[#F05032]" />,
    "GraphQL": <SiGraphql className="text-[#E10098]" />,
    "Prisma": <SiPrisma className="text-[#2D3748] dark:text-white" />,
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
    const icon = typeof children === 'string' ? SKILL_ICONS[children] : null;

    return (
        <span
            className={cn(
                "relative inline-flex items-center justify-center overflow-hidden rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-300 ease-out",
                "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100",
                "border border-zinc-200 dark:border-zinc-700",
                "group cursor-default",
                className
            )}
        >
            <span className="relative z-10 flex items-center gap-1.5">
                {icon ? (
                    <span className="text-sm shrink-0">{icon}</span>
                ) : (
                    <span className="size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 transition-colors duration-300" />
                )}
                {children}
            </span>
        </span>
    );
}
