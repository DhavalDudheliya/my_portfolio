import { SKILLS } from "@/config/Skills";

import { SkillCategorySection } from "./SkillCategorySection";

export default function Skills() {
  return (
    <section className="mx-auto mt-20">
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {SKILLS.map((category) => (
          <SkillCategorySection key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}
