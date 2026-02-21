import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";

import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/Projects";

import { FadeInView } from "../core/FadeInView";
import PageHeader from "../core/PageHeader";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section id="projects" className="mx-auto space-y-8 px-4 py-12">
      <PageHeader
        title="Featured Projects"
        description="Check out some of the projects I've worked on."
      />

      <div className="grid gap-6 pr-0 md:grid-cols-2 md:pr-14 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <FadeInView key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </FadeInView>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          variant="outline"
          size="lg"
          className="group text-base"
          render={<Link href="/projects" />}
        >
          Show All Projects
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
