import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";

import Container from "@/components/core/Container";
import { FadeInView } from "@/components/core/FadeInView";
import PageHeader from "@/components/core/PageHeader";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { generatePageMetadata } from "@/config/seo.config";

export const metadata: Metadata = generatePageMetadata("projects");

export default function ProjectsPage() {
  return (
    <Container className="min-h-screen space-y-8 py-12">
      <FadeInView>
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </FadeInView>
      <PageHeader
        title="All Projects"
        description="Here is a complete list of projects I have worked on, from personal experiments to production-ready web applications."
      />

      <ProjectsList />
    </Container>
  );
}
