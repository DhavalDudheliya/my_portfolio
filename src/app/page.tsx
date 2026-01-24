import type { Metadata } from "next";

import AboutMe from "@/components/about";
import { FeaturedBlogs } from "@/components/blog";
import Contact from "@/components/contact";
import Container from "@/components/core/Container";
import Experiences from "@/components/experience";
import { GitHubContributions } from "@/components/github-contrubution";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import Skills from "@/components/skills";
import { generatePageMetadata, seoConfig } from "@/config/seo.config";

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <>
      <PersonJsonLd
        name={seoConfig.author.name}
        url={seoConfig.baseUrl}
        jobTitle={seoConfig.author.jobTitle}
        description={seoConfig.siteDescription}
        sameAs={[...seoConfig.socialLinks]}
      />
      <Container className="min-h-screen px-2 py-12 md:px-0">
        <Hero />
        <Experiences />
        <Projects />
        <AboutMe />
        <Skills />
        <GitHubContributions />
        <Contact />
        <FeaturedBlogs />
      </Container>
    </>
  );
}
