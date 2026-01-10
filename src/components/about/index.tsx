import { ProseMono } from "@/components/ui/typography";
import { ABOUT_ME_CONTENT } from "@/config/AboutMe";

import { Markdown } from "../core/Markdown";

export default function AboutMe() {
  return (
    <section className="mx-auto mt-12">
      <h2 className="mb-4 text-3xl font-bold">About Me</h2>
      <ProseMono>
        <Markdown>{ABOUT_ME_CONTENT}</Markdown>
      </ProseMono>
    </section>
  );
}
