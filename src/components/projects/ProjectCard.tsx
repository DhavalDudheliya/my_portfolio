import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/config/Projects";

import { ProjectLinks } from "./ProjectLinks";
import { TechStack } from "./TechStack";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col gap-0 overflow-hidden pt-4 pb-2 transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="line-clamp-1 text-lg font-bold">
          {project.title}
        </CardTitle>
        <Badge
          variant={project.status === "Completed" ? "success" : "warning"}
          className="shrink-0 px-2 py-1"
        >
          {project.status}
        </Badge>
      </CardHeader>
      <div className="bg-muted relative h-48 w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex-1 space-y-4 px-6 py-4">
        <p className="text-muted-foreground line-clamp-3 text-sm">
          {project.description}
        </p>
        <div className="space-y-2">
          <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
            Technologies
          </p>
          <TechStack technologies={project.technologies} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-2!">
        {project.links && <ProjectLinks links={project.links} />}
        <Button
          variant="ghost"
          className="group text-xs!"
          render={<Link href={`/projects/${project.slug}`} />}
        >
          View Details
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
