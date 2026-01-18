import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function BackToProjects() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="sm" render={<Link href="/projects" />}>
        <ArrowLeft className="mr-2 size-4" />
        Back to Projects
      </Button>
    </div>
  );
}
