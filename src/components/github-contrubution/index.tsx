import { Suspense } from "react";

import { getGitHubContributions } from "@/config/github-contribution";

import { FadeInView } from "../core/FadeInView";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export async function GitHubContributions() {
  const { contributions, totalContributions } = await getGitHubContributions();

  return (
    <>
      <section
        id="contributions"
        className="mx-auto space-y-8 px-2 py-12 md:px-4"
      >
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          GitHub Contributions
        </h2>
        <FadeInView>
          <Suspense fallback={<GitHubContributionFallback />}>
            <GitHubContributionGraph
              contributions={contributions}
              totalContributions={totalContributions}
            />
          </Suspense>
        </FadeInView>
      </section>
    </>
  );
}
