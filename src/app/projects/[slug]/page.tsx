import Container from "@/components/core/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/Projects";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Projects`,
        description: project.description,
    };
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <Container className="min-h-screen py-12 space-y-8">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" render={<Link href="/projects" />}>
                    <ArrowLeft className="size-4 mr-2" />
                    Back to Projects
                </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between gap-4">
                            <h1 className="text-4xl font-bold tracking-tight">
                                {project.title}
                            </h1>
                            <Badge
                                variant={
                                    project.status === "Completed"
                                        ? "default"
                                        : project.status === "In Progress"
                                            ? "secondary"
                                            : "outline"
                                }
                                className="shrink-0 h-8 text-sm px-3"
                            >
                                {project.status}
                            </Badge>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            {project.description}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        {project.links?.live && (
                            <Button size="lg" render={<Link href={project.links.live} target="_blank" rel="noopener noreferrer" />}>
                                <Globe className="mr-2 size-5" />
                                Visit Website
                            </Button>
                        )}
                        {project.links?.github && (
                            <Button size="lg" variant="outline" render={<Link href={project.links.github} target="_blank" rel="noopener noreferrer" />}>
                                <Github className="mr-2 size-5" />
                                View Source
                            </Button>
                        )}
                    </div>
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </Container>
    );
}
