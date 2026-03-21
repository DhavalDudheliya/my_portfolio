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
          className="flex shrink-0 items-center gap-1.5 px-2 py-1"
        >
          {project.status === "Building" && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-600" />
            </span>
          )}
          {project.status}
        </Badge>
      </CardHeader>
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={1920}
        height={1080}
        className="object-cover transition-transform duration-300 hover:scale-105"
        unoptimized
      />
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
