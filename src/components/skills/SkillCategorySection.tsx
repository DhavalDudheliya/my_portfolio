import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillCategory } from "@/config/Skills";

import { SkillIcon } from "./SkillIcon";

interface SkillCategorySectionProps {
  category: SkillCategory;
}

export function SkillCategorySection({ category }: SkillCategorySectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.technologies.map((tech) => (
          <SkillIcon key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}
