import { PROJECTS } from "@/config/Projects";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
    const featuredProjects = PROJECTS.filter((project) => project.featured);

    return (
        <section className="space-y-8 py-20">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                <p className="text-muted-foreground text-lg">
                    Check out some of the projects I&apos;ve worked on.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 pr-14">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="flex justify-center pt-4">
                <Button variant="outline" size="lg" className="group text-base" render={<Link href="/projects" />}>
                    Show All Projects
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </section>
    );
}
