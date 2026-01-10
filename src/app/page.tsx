import AboutMe from "@/components/about";
import Container from "@/components/core/Container";
import Experiences from "@/components/experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <Container className="min-h-screen py-12">
      <Hero />
      <Experiences />
      <Projects />
      <AboutMe />
    </Container>
  );
}
