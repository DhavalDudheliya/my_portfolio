"use client";

import { format } from "date-fns";
import { LoaderIcon } from "lucide-react";

import type { Activity } from "@/components/contribution-graph/index";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph/index";

// import { GITHUB_USERNAME } from "@/config/site";
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "../ui/tooltip";

export function GitHubContributionGraph({
  contributions,
  totalContributions,
}: {
  contributions: Activity[];
  totalContributions: number;
}) {
  return (
    <TooltipProvider>
      <ContributionGraph className="py-2" data={contributions} blockRadius={2}>
        <ContributionGraphCalendar
          className="no-scrollbar"
          title="GitHub Contributions"
        >
          {({ activity, dayIndex, weekIndex }) => (
            <TooltipRoot>
              <TooltipTrigger render={<g />}>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </TooltipTrigger>

              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                  on {format(new Date(activity.date), "dd.MM.yyyy")}
                </p>
              </TooltipContent>
            </TooltipRoot>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2">
          <ContributionGraphTotalCount>
            {() => (
              <div className="text-muted-foreground">
                {totalContributions.toLocaleString("en")} total contributions on{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href={`https://github.com/DhavalDudheliya`}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                .
              </div>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="text-muted-foreground animate-spin" />
    </div>
  );
}
