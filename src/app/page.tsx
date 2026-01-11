import AboutMe from "@/components/about";
import { FeaturedBlogs } from "@/components/blog";
import Contact from "@/components/contact";
import Container from "@/components/core/Container";
import Experiences from "@/components/experience";
import { GitHubContributions } from "@/components/github-contrubution";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
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
  );
}
