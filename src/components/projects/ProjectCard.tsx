import { ArrowRight, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project } from "@/config/Projects";
import { getTechnologyIcon } from "@/config/Technologies";

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
          <div className="flex items-center">
            {project.technologies.map((tech) => {
              const Icon = getTechnologyIcon(tech);
              return (
                <div
                  key={tech}
                  className="group/icon bg-secondary relative ml-[-8px] flex items-center justify-center rounded-full border p-1.5 shadow-sm transition-all duration-300 ease-in-out first:ml-0 hover:z-10 hover:pr-3"
                >
                  <div className="size-5 shrink-0">
                    {Icon ? (
                      <Icon />
                    ) : (
                      <span className="text-[10px]">{tech.slice(0, 2)}</span>
                    )}
                  </div>
                  <span className="text-secondary-foreground max-w-0 overflow-hidden text-[10px] font-medium whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover/icon:ml-2 group-hover/icon:max-w-[100px] group-hover/icon:opacity-100">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-2!">
        <div className="flex gap-2">
          {project.links?.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    render={
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Github className="size-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>View Code</TooltipContent>
            </Tooltip>
          )}
          {project.links?.live && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    render={
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Globe className="size-4" />
                    <span className="sr-only">Live Demo</span>
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>View Live Site</TooltipContent>
            </Tooltip>
          )}
        </div>
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
