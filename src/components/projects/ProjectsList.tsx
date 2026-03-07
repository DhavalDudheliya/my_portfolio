"use client";

import { useState } from "react";

import { FadeInView } from "@/components/core/FadeInView";
import { Badge } from "@/components/ui/badge";
import { type Project, PROJECTS } from "@/config/Projects";
import { cn } from "@/lib/utils";

import { ProjectCard } from "./ProjectCard";

type FilterStatus = "All" | Project["status"];

const FILTER_OPTIONS: FilterStatus[] = ["All", "Completed", "Building"];

export function ProjectsList() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");

  const filteredProjects = (
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.status === activeFilter)
  ).sort((a, b) => {
    if (a.status === "Building" && b.status !== "Building") return -1;
    if (a.status !== "Building" && b.status === "Building") return 1;
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Filter Badges */}
      <div className="flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((status) => (
          <FadeInView key={status}>
            <Badge
              variant={activeFilter === status ? "default" : "outline"}
              className={cn(
                "cursor-pointer px-3 py-2.5 text-sm transition-all select-none",
                activeFilter === status ? "shadow-sm" : "hover:bg-accent/50",
              )}
              onClick={() => setActiveFilter(status)}
            >
              {status}
              {status !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({PROJECTS.filter((p) => p.status === status).length})
                </span>
              )}
            </Badge>
          </FadeInView>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <FadeInView key={project.id}>
            <ProjectCard project={project} />
          </FadeInView>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-muted-foreground py-12 text-center">
          No projects found with the selected filter.
        </div>
      )}
    </div>
  );
}
