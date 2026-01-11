import { BlogMDXComponents } from "@/components/blog/MDXComponents";

// Required by Next.js MDX
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components: Record<string, any>) {
  return {
    ...components,
    ...BlogMDXComponents,
  };
}
