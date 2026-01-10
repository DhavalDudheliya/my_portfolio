import React from "react";

import { EXPERIENCES } from "@/config/Experiences";

import Container from "../core/Container";
import { ExperienceItem } from "./ExperienceItem";

const Experiences = () => {
  return (
    <Container className="mx-auto mt-20">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">Experiences</h2>

      <div>
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
