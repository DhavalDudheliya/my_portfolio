import { unstable_cache } from "next/cache";

import { Activity } from "@/components/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
  total: { [year: string]: number };
};

export const getGitHubContributions = unstable_cache(
  async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/DhavalDudheliya?y=last`,
    );
    const data = (await res.json()) as GitHubContributionsResponse;

    // Fetch all years to get total count
    const allRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/DhavalDudheliya`,
    );
    const allData = (await allRes.json()) as GitHubContributionsResponse;

    // Calculate total contributions from all years
    const totalContributions = Object.values(allData.total).reduce(
      (sum, count) => sum + count,
      0,
    );

    return {
      contributions: data.contributions,
      totalContributions,
    };
  },
  ["github-contributions"],
  { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
);
