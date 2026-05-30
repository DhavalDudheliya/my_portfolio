import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist_Mono, Quicksand } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/Navbar";
import { ThemeProvider } from "@/components/core/ThemeProviders";
import { generateLayoutMetadata } from "@/config/seo.config";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateLayoutMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${quicksand.variable} ${geistMono.variable} font-sans antialiased`}
        >
          {/* Subtle and sober dot background pattern */}
          <div
            className="animate-pulse-dots pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-30"
            aria-hidden="true"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
