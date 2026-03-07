import { Badge } from "@/components/ui/badge";
import type { Project } from "@/config/Projects";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <Badge
          variant={
            project.status === "Completed"
              ? "default"
              : project.status === "Building"
                ? "secondary"
                : "outline"
          }
          className="flex h-8 shrink-0 items-center gap-2 px-3 text-sm"
        >
          {project.status === "Building" && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500/80 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
            </span>
          )}
          {project.status}
        </Badge>
      </div>
      <p className="text-muted-foreground text-lg">{project.description}</p>
    </div>
  );
}
