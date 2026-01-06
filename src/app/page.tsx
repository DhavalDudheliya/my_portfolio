import Container from "@/components/core/Container";
import Experiences from "@/components/experience";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <Container className="min-h-screen py-12">
      <Hero />
      <Experiences />
    </Container>
  );
}
