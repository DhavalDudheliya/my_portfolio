import { Suspense } from "react";

import { getGitHubContributions } from "@/config/github-contribution";

import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export async function GitHubContributions() {
  const { contributions, totalContributions } = await getGitHubContributions();

  return (
    <>
      <section className="space-y-8 py-12">
        <h2 className="text-3xl font-bold tracking-tight">
          GitHub Contributions
        </h2>
        <Suspense fallback={<GitHubContributionFallback />}>
          <GitHubContributionGraph
            contributions={contributions}
            totalContributions={totalContributions}
          />
        </Suspense>
      </section>
    </>
  );
}
