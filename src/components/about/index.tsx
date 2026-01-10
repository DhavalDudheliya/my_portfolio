import { ProseMono } from "@/components/ui/typography";
import { ABOUT_ME_CONTENT } from "@/config/AboutMe";

import { Markdown } from "../core/Markdown";

export default function AboutMe() {
  return (
    <section className="mx-auto px-4 py-12 md:px-0">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">About Me</h2>
      <ProseMono>
        <Markdown>{ABOUT_ME_CONTENT}</Markdown>
      </ProseMono>
    </section>
  );
}
