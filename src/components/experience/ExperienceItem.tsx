import { cn } from "@/lib/utils";
import { Experience } from "@/config/Experiences";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Globe, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { ExperiencePositionItem } from "./ExperiencePositionItem";

export function ExperienceItem({ experience }: { experience: Experience }) {
    const hasLinks =
        experience.links && Object.values(experience.links).some(Boolean);

    return (
        <div className="space-y-6 py-4">
            <div
                className={cn(
                    "flex gap-3",
                    hasLinks ? "items-start" : "items-center",
                )}
            >
                <div
                    className={cn(
                        "flex size-10 shrink-0 items-center justify-center select-none",
                        hasLinks && "mt-0.5",
                    )}
                >
                    {experience.companyLogo ? (
                        <Image
                            src={experience.companyLogo}
                            alt={experience.companyName}
                            width={40}
                            height={40}
                            quality={100}
                            className="rounded-full"
                            unoptimized
                            aria-hidden
                        />
                    ) : (
                        <span className="flex size-10 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg leading-snug font-medium">
                            {experience.companyName}
                        </h3>

                        {experience.isCurrentEmployer && (
                            <span className="relative flex items-center justify-center">
                                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-emerald-500 opacity-50" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                                <span className="sr-only">Current Employer</span>
                            </span>
                        )}
                    </div>

                    {experience.links && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <>
                                {experience.links.website && (
                                    <Tooltip>
                                        <TooltipTrigger
                                            render={
                                                <Link
                                                    href={experience.links.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-foreground transition-colors"
                                                >
                                                    <Globe className="size-3.5" />
                                                    <span className="sr-only">Website</span>
                                                </Link>
                                            }
                                        />
                                        <TooltipContent>Visit Website</TooltipContent>
                                    </Tooltip>
                                )}
                                {experience.links.linkedin && (
                                    <Tooltip>
                                        <TooltipTrigger
                                            render={
                                                <Link
                                                    href={experience.links.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-foreground transition-colors"
                                                >
                                                    <Linkedin className="size-3.5" />
                                                    <span className="sr-only">LinkedIn</span>
                                                </Link>
                                            }
                                        />
                                        <TooltipContent>Connect on LinkedIn</TooltipContent>
                                    </Tooltip>
                                )}
                                {experience.links.x && (
                                    <Tooltip>
                                        <TooltipTrigger
                                            render={
                                                <Link
                                                    href={experience.links.x}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-foreground transition-colors"
                                                >
                                                    <FaXTwitter className="size-3.5" />
                                                    <span className="sr-only">X</span>
                                                </Link>
                                            }
                                        />
                                        <TooltipContent>Follow on X</TooltipContent>
                                    </Tooltip>
                                )}
                                {experience.links.github && (
                                    <Tooltip>
                                        <TooltipTrigger
                                            render={
                                                <Link
                                                    href={experience.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-foreground transition-colors"
                                                >
                                                    <Github className="size-3.5" />
                                                    <span className="sr-only">GitHub</span>
                                                </Link>
                                            }
                                        />
                                        <TooltipContent>View GitHub</TooltipContent>
                                    </Tooltip>
                                )}
                            </>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border ml-3 md:ml-13">
                {experience.positions.map((position) => (
                    <ExperiencePositionItem key={position.id} position={position} />
                ))}
            </div>
        </div>
    );
}
