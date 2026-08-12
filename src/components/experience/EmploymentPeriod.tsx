"use client";

import { calculateDuration } from "@/lib/utils";

interface EmploymentPeriodProps {
  start: string;
  end?: string;
}

export function EmploymentPeriod({ start, end }: EmploymentPeriodProps) {
  const isOngoing = !end;

  return (
    <dl>
      <dt className="sr-only">Employment Period</dt>
      <dd className="flex flex-wrap items-center gap-x-2 gap-y-0.5 sm:gap-0.5">
        <div className="flex items-center gap-0.5">
          <span>{start}</span>
          <span className="font-mono">—</span>
          <span>{isOngoing ? "Present" : end}</span>
        </div>
        <span className="text-muted-foreground/80 text-xs lowercase sm:ml-2">
          ({calculateDuration(start, end)})
        </span>
      </dd>
    </dl>
  );
}
