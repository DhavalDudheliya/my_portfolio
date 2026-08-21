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
    <Container className="relative mx-auto pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-foreground/[0.06] absolute -top-10 left-1/4 size-72 -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-foreground/[0.04] absolute top-24 right-0 size-80 rounded-full blur-3xl" />
      </div>
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
