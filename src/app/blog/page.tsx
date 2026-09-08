import type { Metadata } from "next";

import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  SITE_LOCALE,
  SITE_NAME,
  X_HANDLE,
} from "@/shared/constants/app";

import { Posts } from "@/features/blog/components/posts";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    type: "website",
    url: "/blog",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: X_HANDLE,
    creator: X_HANDLE,
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Blog</h1>

      <Posts />
    </section>
  );
}
