// Centralized SEO Configuration
// Update this file to change SEO settings across the entire site

export const seoConfig = {
  // Base URL - Change this when deploying to a new domain
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://dhavaldudheliya.site",

  // Site Information
  siteName: "Dhaval Dudheliya",
  siteTitle: "Dhaval Dudheliya | Full Stack Developer",
  siteDescription:
    "Full Stack Developer specializing in building exceptional web applications with TypeScript, Node.js, React, Next.js, and modern technologies.",

  // Author Information
  author: {
    name: "Dhaval Dudheliya",
    jobTitle: "Full Stack Developer",
    email: "dhavaldudheliya77@gmail.com", // Update with your email
  },

  // Social Links (used in JSON-LD and social sharing)
  socialLinks: [
    "https://github.com/DhavalDudheliya",
    "https://linkedin.com/in/dhavaldudheliya",
    "https://twitter.com/dhavaldudheliya",
  ],

  // Twitter Handle (without @)
  twitterHandle: "dhavaldudheliya",

  // Default Keywords
  defaultKeywords: [
    "Dhaval Dudheliya",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],

  // Open Graph Images
  // Add your images to the public/og folder and update these paths
  ogImages: {
    // Default OG image used site-wide (1200x630 recommended)
    default: "/og/og-default.png",

    // Page-specific OG images
    home: "/og/og-home.png",
    projects: "/og/og-projects.png",
    blog: "/og/og-blog.png",
    books: "/og/og-books.png",
    resume: "/og/og-resume.png",
  },

  // Page-specific SEO
  pages: {
    home: {
      title: "Dhaval Dudheliya | Full Stack Developer",
      description:
        "Full Stack Developer specializing in building exceptional web applications with TypeScript, Node.js, React, Next.js, and modern technologies. View my projects, experience, and skills.",
      keywords: [
        "Dhaval Dudheliya",
        "Full Stack Developer",
        "Portfolio",
        "TypeScript",
        "Node.js",
        "React",
        "Next.js",
        "Web Development",
      ],
    },
    projects: {
      title: "Projects",
      description: "A showcase of my projects and work.",
    },
    blog: {
      title: "Blog",
      description:
        "Thoughts, tutorials, and insights about web development, TypeScript, Node.js, React, Next.js, and software engineering.",
    },
    books: {
      title: "Books",
      description:
        "A collection of books I've read along with my thoughts and key takeaways.",
    },
    resume: {
      title: "Resume",
      description: "View and download Dhaval Dudheliya's professional resume.",
    },
  },
} as const;

// Helper function to get absolute URL for OG images
export function getOgImageUrl(imagePath: string): string {
  return `${seoConfig.baseUrl}${imagePath}`;
}

// Helper to generate metadata with OG image
export function generatePageMetadata(
  page: keyof typeof seoConfig.pages,
  ogImage?: string,
) {
  const pageConfig = seoConfig.pages[page];
  const image =
    ogImage || seoConfig.ogImages[page] || seoConfig.ogImages.default;

  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: [
      ...("keywords" in pageConfig
        ? pageConfig.keywords
        : seoConfig.defaultKeywords),
    ],
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      type: "website" as const,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageConfig.title,
      description: pageConfig.description,
      images: [image],
    },
  };
}

// Helper to generate metadata for root layout (with title template)
export function generateLayoutMetadata() {
  return {
    metadataBase: new URL(seoConfig.baseUrl),
    title: {
      default: seoConfig.siteTitle,
      template: `%s | ${seoConfig.siteName}`,
    },
    description: seoConfig.siteDescription,
    keywords: [...seoConfig.defaultKeywords],
    authors: [{ name: seoConfig.author.name, url: seoConfig.baseUrl }],
    creator: seoConfig.author.name,
    publisher: seoConfig.author.name,
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      url: seoConfig.baseUrl,
      siteName: seoConfig.siteName,
      title: seoConfig.siteTitle,
      description: seoConfig.siteDescription,
      images: [
        {
          url: seoConfig.ogImages.default,
          width: 1200,
          height: 630,
          alt: seoConfig.siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: seoConfig.siteTitle,
      description: seoConfig.siteDescription,
      creator: `@${seoConfig.twitterHandle}`,
      images: [seoConfig.ogImages.default],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}
