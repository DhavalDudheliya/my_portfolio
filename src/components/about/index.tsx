import { ProseMono } from "@/components/ui/typography";
import { ABOUT_ME_CONTENT } from "@/config/AboutMe";

import { FadeInView } from "../core/FadeInView";
import { Markdown } from "../core/Markdown";
import PageHeader from "../core/PageHeader";

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto px-4 py-12">
      <PageHeader title="About Me" />
      <ProseMono className="prose-base md:prose-lg">
        <FadeInView>
          <Markdown>{ABOUT_ME_CONTENT}</Markdown>
        </FadeInView>
      </ProseMono>
    </section>
  );
}
