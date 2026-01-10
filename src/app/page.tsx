import AboutMe from "@/components/about";
import Container from "@/components/core/Container";
import Experiences from "@/components/experience";
import { GitHubContributions } from "@/components/github-contrubution";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <Container className="min-h-screen py-12">
      <Hero />
      <Experiences />
      <Projects />
      <AboutMe />
      <Skills />
      <GitHubContributions />
    </Container>
  );
}
