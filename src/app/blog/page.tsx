import type { Metadata } from "next";

import { SITE_LOCALE, SITE_NAME, X_HANDLE } from "@/shared/constants/app";

import { Posts } from "@/features/blog/components/posts";

const title = "Blog";
const description = "Things I wrote down before I forgot them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/blog",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
