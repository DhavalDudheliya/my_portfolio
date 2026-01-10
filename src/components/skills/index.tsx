import { SKILLS } from "@/config/Skills";

import { SkillCategorySection } from "./SkillCategorySection";

export default function Skills() {
  return (
    <section className="mx-auto space-y-8 px-4 py-12 md:px-0">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg">
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
