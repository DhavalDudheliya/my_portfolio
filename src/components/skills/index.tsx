import { SKILLS } from "@/config/Skills";

import { SkillCategorySection } from "./SkillCategorySection";

export default function Skills() {
  return (
    <section className="space-y-8 py-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {SKILLS.map((category) => (
          <SkillCategorySection key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}
