import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { BlogMDXComponents } from "@/components/blog/MDXComponents";

interface MDXContentProps {
  source: string;
}

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: true,
  defaultLang: "typescript",
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        components={BlogMDXComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypePrettyCode, rehypePrettyCodeOptions],
            ],
          },
        }}
      />
    </div>
  );
}
