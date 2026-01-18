import { Badge } from "@/components/ui/badge";

interface ProjectTechnologiesProps {
  technologies: string[];
}

export function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
