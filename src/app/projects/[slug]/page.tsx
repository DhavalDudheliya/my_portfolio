import Container from "@/components/core/Container";
import { FadeInView } from "@/components/core/FadeInView";
import { BackToProjects } from "@/components/projects/BackToProjects";
import { ProjectActions } from "@/components/projects/ProjectActions";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { ProjectMDXContent } from "@/components/projects/ProjectMDXContent";
import { ProjectTechnologies } from "@/components/projects/ProjectTechnologies";
import { PROJECTS } from "@/config/Projects";
import { getProjectContent } from "@/lib/projects";
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

  const projectContent = getProjectContent(slug);

  return (
    <Container className="min-h-screen space-y-8 py-12">
      <FadeInView>
        <BackToProjects />
      </FadeInView>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <FadeInView>
            <ProjectHeader project={project} />
          </FadeInView>
          <FadeInView>
            <ProjectTechnologies technologies={project.technologies} />
          </FadeInView>
          <FadeInView>
            <ProjectActions links={project.links} />
          </FadeInView>
        </div>

        <FadeInView>
          <ProjectImage src={project.thumbnail} alt={project.title} />
        </FadeInView>
      </div>

      {projectContent && (
        <FadeInView>
          <ProjectMDXContent source={projectContent} />
        </FadeInView>
      )}
    </Container>
  );
}
