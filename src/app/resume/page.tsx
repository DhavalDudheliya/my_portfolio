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
              className="hover:text-primary/70 gap-2 pl-0 hover:bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
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
