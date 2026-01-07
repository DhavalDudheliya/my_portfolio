import { ChevronsUpDown, InfinityIcon } from "lucide-react";

// import { Markdown } from "@/components/markdown";
import { Separator } from "@/components/ui/separator";
// import { Tag } from "@/components/ui/tag";
// import { ProseMono } from "@/components/ui/typography";
import { cn, calculateDuration } from "@/lib/utils";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ExperiencePosition } from "@/config/Experiences";
import { SkillBadge } from "./SkillBadge";
import { Markdown } from "../core/Markdown";
import { ProseMono } from "@/components/ui/typography";

export function ExperiencePositionItem({
    position,
}: {
    position: ExperiencePosition;
}) {
    const { start, end } = position.employmentPeriod;
    const isOngoing = !end;

    return (
        <Collapsible defaultOpen={position.isExpanded}>
            <div className="relative last:before:absolute last:before:h-full last:before:w-3 last:before:bg-background">
                <CollapsibleTrigger
                    className={cn(
                        "block w-full text-left",
                        "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-8 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent"
                    )}
                >
                    <div className="relative z-1 mb-1 flex items-center gap-4">
                        <div
                            className={cn(
                                "flex size-6 shrink-0 items-center justify-center rounded-lg",
                                "bg-muted text-muted-foreground",
                                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
                            )}
                            aria-hidden
                        >
                            {position.icon}
                        </div>

                        <h4 className="flex-1 font-medium text-balance">
                            {position.title}
                        </h4>

                        <div
                            className="shrink-0 text-muted-foreground [&_svg]:size-4"
                            aria-hidden
                        >
                            <ChevronsUpDown />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 pl-10 text-sm text-muted-foreground">
                        {position.employmentType && (
                            <>
                                <dl>
                                    <dt className="sr-only">Employment Type</dt>
                                    <dd>{position.employmentType}</dd>
                                </dl>

                                <Separator
                                    className="hidden sm:block data-[orientation=vertical]:h-4"
                                    orientation="vertical"
                                />
                            </>
                        )}

                        <dl>
                            <dt className="sr-only">Employment Period</dt>
                            <dd className="flex flex-wrap items-center gap-x-2 gap-y-0.5 sm:gap-0.5">
                                <div className="flex items-center gap-0.5">
                                    <span>{start}</span>
                                    <span className="font-mono">—</span>
                                    {isOngoing ? (
                                        <>
                                            <InfinityIcon
                                                className="size-4.5 translate-y-[0.5px]"
                                                aria-hidden
                                            />
                                            <span className="sr-only">Present</span>
                                        </>
                                    ) : (
                                        <span>{end}</span>
                                    )}
                                </div>
                                <span className="text-xs text-muted-foreground/80 lowercase sm:ml-2">
                                    ({calculateDuration(start, end)})
                                </span>
                            </dd>
                        </dl>
                    </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
                    {position.description && (
                        <ProseMono className="pt-2 pl-9">
                            <Markdown>{position.description}</Markdown>
                        </ProseMono>
                    )}
                </CollapsibleContent>

                {Array.isArray(position.skills) && position.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                        {position.skills.map((skill, index) => (
                            <li key={index} className="flex">
                                <SkillBadge>{skill}</SkillBadge>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Collapsible>
    );
}
