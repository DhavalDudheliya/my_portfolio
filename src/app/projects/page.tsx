import Container from "@/components/core/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/config/Projects";

export const metadata = {
    title: "Projects | Dhaval Dudheliya",
    description: "A showcase of my projects and work.",
};

export default function ProjectsPage() {
    return (
        <Container className="min-h-screen py-12 space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Here is a complete list of projects I have worked on, ranging from web applications to open-source tools.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Container>
    );
}
