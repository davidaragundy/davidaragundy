import type { Metadata } from "next";

import {
  PROJECTS_DESCRIPTION,
  PROJECTS_TITLE,
  SITE_LOCALE,
  SITE_NAME,
  X_HANDLE,
} from "@/shared/constants/app";

import { Projects } from "@/features/projects/components/projects";

export const metadata: Metadata = {
  title: PROJECTS_TITLE,
  description: PROJECTS_DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: PROJECTS_TITLE,
    description: PROJECTS_DESCRIPTION,
    type: "website",
    url: "/projects",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title: PROJECTS_TITLE,
    description: PROJECTS_DESCRIPTION,
    site: X_HANDLE,
    creator: X_HANDLE,
  },
};

export default function Page() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="title text-4xl font-semibold tracking-tight md:text-5xl">
          the proof, or the wreckage
        </h1>

        <p className="text-muted-foreground max-w-xl">{PROJECTS_DESCRIPTION}</p>
      </header>

      <Projects />
    </section>
  );
}
