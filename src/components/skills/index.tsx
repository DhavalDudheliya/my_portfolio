import { SKILLS } from "@/config/Skills";

import PageHeader from "../core/PageHeader";
import { SkillCategorySection } from "./SkillCategorySection";

export default function Skills() {
  return (
    <section className="mx-auto space-y-8 px-4 py-12 md:px-0">
      <PageHeader
        title="Skills & Technologies"
        description="Technologies and tools I use to bring ideas to life."
      />
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {SKILLS.map((category) => (
          <SkillCategorySection key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}
