import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/shared/components/navbar";
import { Footer } from "@/shared/components/footer";
import {
  AUTHOR_NAME,
  BASE_URL,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  X_HANDLE,
} from "@/shared/constants/app";
import { cx } from "@/shared/utils/cx";

import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: BASE_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${BASE_URL}/rss`,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: X_HANDLE,
    creator: X_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="mx-4 mt-8 max-w-xl antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
