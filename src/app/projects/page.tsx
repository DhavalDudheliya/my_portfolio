import type { Metadata } from "next";

import Container from "@/components/core/Container";
import PageHeader from "@/components/core/PageHeader";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { generatePageMetadata } from "@/config/seo.config";

export const metadata: Metadata = generatePageMetadata("projects");

export default function ProjectsPage() {
  return (
    <Container className="min-h-screen space-y-8 py-12">
      <PageHeader
        title="All Projects"
        description="Here is a complete list of projects I have worked on, from personal experiments to production-ready web applications."
      />

      <ProjectsList />
    </Container>
  );
}
