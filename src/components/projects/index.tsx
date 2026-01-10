import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/Projects";

import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section className="mx-auto space-y-8 px-4 py-20 md:px-0">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg">
          Check out some of the projects I&apos;ve worked on.
        </p>
      </div>

      <div className="grid gap-6 pr-0 md:grid-cols-2 md:pr-14 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
