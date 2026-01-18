import { MDXRemote } from "next-mdx-remote/rsc";

import { BlogMDXComponents } from "@/components/blog/MDXComponents";

interface ProjectMDXContentProps {
  source: string;
}

export function ProjectMDXContent({ source }: ProjectMDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={BlogMDXComponents} />
    </div>
  );
}
