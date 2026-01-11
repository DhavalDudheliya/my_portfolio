import { ChevronsUpDown } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { ProseMono } from "@/components/ui/typography";
import { ExperiencePosition } from "@/config/Experiences";
import { cn } from "@/lib/utils";

import { Markdown } from "../core/Markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { EmploymentPeriod } from "./EmploymentPeriod";
import { SkillBadge } from "./SkillBadge";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;

  return (
    <Collapsible defaultOpen={position.isExpanded}>
      <div className="last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-3">
        <CollapsibleTrigger
          className={cn(
            "block w-full text-left",
            "hover:before:bg-accent relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-8 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out",
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-4">
            <div
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-lg",
                "bg-muted text-muted-foreground",
                "border-muted-foreground/15 ring-edge ring-offset-background border ring-1 ring-offset-1",
              )}
              aria-hidden
            >
              {position.icon}
            </div>

            <h4 className="flex-1 font-medium text-balance">
              {position.title}
            </h4>

            <div
              className="text-muted-foreground shrink-0 [&_svg]:size-4"
              aria-hidden
            >
              <ChevronsUpDown />
            </div>
          </div>

          <div className="text-muted-foreground flex flex-col gap-1 pl-10 text-sm sm:flex-row sm:items-center sm:gap-2">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="hidden data-[orientation=vertical]:h-4 sm:block"
                  orientation="vertical"
                />
              </>
            )}

            <EmploymentPeriod start={start} end={end} />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down overflow-hidden duration-300">
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
