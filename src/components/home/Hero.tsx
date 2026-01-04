import Image from "next/image";

import { heroConfig, socialLinks } from "@/config/Hero";
import { cn } from "@/lib/utils";

import Container from "../core/Container";
import SocialLink from "../core/SocialLink";

const Hero = () => {
  const { name, title, avatar, description } = heroConfig;

  return (
    <Container className="mx-auto">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Image
          className="rounded-lg"
          src={avatar}
          alt={name}
          height={120}
          width={120}
        />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className={cn("text-3xl font-bold", "md:text-5xl lg:text-6xl")}>
            {name}
          </h1>
          <h1
            className={cn(
              "from-foreground to-foreground/50 bg-linear-to-b bg-clip-text text-xl font-bold text-transparent",
              "md:text-2xl lg:text-3xl",
            )}
          >
            {title}
          </h1>
        </div>
      </div>
      <div className="mt-6 text-center text-base leading-9 text-neutral-500 md:text-left md:text-lg">
        {description}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </div>
    </Container>
  );
};

export default Hero;
