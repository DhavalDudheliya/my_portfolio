import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Container from "@/components/core/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { resumeConfig } from "@/config/Resume";

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="relative flex items-center justify-center">
          <Link href="/" className="absolute top-1/2 left-0 -translate-y-1/2">
            <Button
              variant="ghost"
              className="hover:text-primary/70 group gap-2 pl-2 hover:bg-transparent"
            >
              <ArrowLeft className="size-5 transition duration-300 ease-in-out group-hover:-translate-x-1 md:size-4" />
              <span className="hidden md:inline">Back to Home</span>
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
