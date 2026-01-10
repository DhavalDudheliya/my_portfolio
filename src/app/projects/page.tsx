import Container from "@/components/core/Container";
import { ProjectsList } from "@/components/projects/ProjectsList";

export const metadata = {
    title: "Projects | Dhaval Dudheliya",
    description: "A showcase of my projects and work.",
};

export default function ProjectsPage() {
    return (
        <Container className="min-h-screen py-12 space-y-8">
            <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Here is a complete list of projects I have worked on, from personal experiments to production-ready web applications.
                </p>
            </div>

            <ProjectsList />
        </Container>
    );
}
