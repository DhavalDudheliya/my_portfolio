import React from "react";

import { EXPERIENCES } from "@/config/Experiences";

import Container from "../core/Container";
import PageHeader from "../core/PageHeader";
import { ExperienceItem } from "./ExperienceItem";

const Experiences = () => {
  return (
    <Container className="mx-auto mt-20">
      <PageHeader title="Experiences" />

      <div>
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
