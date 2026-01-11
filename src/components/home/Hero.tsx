"use client";

import { heroConfig } from "@/config/Hero";

import Container from "../core/Container";
import HeroActions from "./hero/HeroActions";
import HeroDescription from "./hero/HeroDescription";
import HeroDetails from "./hero/HeroDetails";
import HeroImage from "./hero/HeroImage";
import HeroSocials from "./hero/HeroSocials";

const Hero = () => {
  const { name, title, avatar, description } = heroConfig;

  return (
    <Container className="mx-auto pb-12">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <HeroImage avatar={avatar} name={name} />
        <HeroDetails name={name} title={title} />
      </div>
      <HeroDescription description={description} />

      <HeroActions />

      <HeroSocials />
    </Container>
  );
};

export default Hero;
