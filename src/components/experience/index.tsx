import { EXPERIENCES } from "@/config/Experiences";

import Container from "../core/Container";
import { FadeInView } from "../core/FadeInView";
import PageHeader from "../core/PageHeader";
import { ExperienceItem } from "./ExperienceItem";

const Experiences = () => {
  return (
    <Container id="experience" className="mx-auto py-12">
      <PageHeader title="Experiences" />

      <div>
        {EXPERIENCES.map((experience, index) => (
          <FadeInView key={experience.id} delay={index * 0.1}>
            <ExperienceItem experience={experience} />
          </FadeInView>
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
