import { SkillBadge } from "@/components/experience/SkillBadge";

interface ProjectTechnologiesProps {
  technologies: string[];
}

export function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Technologies</h3>
      <ul className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <li key={tech} className="flex">
            <SkillBadge>{tech}</SkillBadge>
          </li>
        ))}
      </ul>
    </div>
  );
}
