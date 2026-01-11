import { MDXRemote } from "next-mdx-remote/rsc";

import { BlogMDXComponents } from "@/components/blog/MDXComponents";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={BlogMDXComponents} />
    </div>
  );
}
