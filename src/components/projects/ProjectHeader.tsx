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
              : project.status === "In Progress"
                ? "secondary"
                : "outline"
          }
          className="h-8 shrink-0 px-3 text-sm"
        >
          {project.status}
        </Badge>
      </div>
      <p className="text-muted-foreground text-lg">{project.description}</p>
    </div>
  );
}
