"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { type Project, PROJECTS } from "@/config/Projects";
import { cn } from "@/lib/utils";

import { ProjectCard } from "./ProjectCard";

type FilterStatus = "All" | Project["status"];

const FILTER_OPTIONS: FilterStatus[] = ["All", "Completed", "In Progress"];

export function ProjectsList() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.status === activeFilter);

  return (
    <div className="space-y-6">
      {/* Filter Badges */}
      <div className="flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((status) => (
          <Badge
            key={status}
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
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
