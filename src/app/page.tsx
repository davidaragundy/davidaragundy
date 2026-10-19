import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/shared/components/json-ld";
import { AUTHOR_USERNAME, BASE_URL, SITE_NAME } from "@/shared/constants/app";
import {
  PERSON_ID,
  PERSON_SCHEMA,
  WEBSITE_ID,
} from "@/shared/constants/schema";

import { PostCard } from "@/features/blog/components/post-card";
import { getPostSummaries } from "@/features/blog/queries/get-posts";

const LATEST_POSTS_COUNT = 2;

export default async function Page() {
  const posts = await getPostSummaries();
  const latestPosts = posts.slice(0, LATEST_POSTS_COUNT);

  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": WEBSITE_ID,
              url: BASE_URL,
              name: SITE_NAME,
              alternateName: AUTHOR_USERNAME,
              publisher: { "@id": PERSON_ID },
            },
            {
              "@type": "ProfilePage",
              url: BASE_URL,
              name: SITE_NAME,
              isPartOf: { "@id": WEBSITE_ID },
              mainEntity: { "@id": PERSON_ID },
            },
            PERSON_SCHEMA,
          ],
        }}
      />

      <section className="flex max-w-2xl flex-col gap-6">
        <h1 className="title text-4xl font-semibold tracking-tight md:text-5xl">
          i do and build stuff. results may vary.
        </h1>

        <p className="text-muted-foreground text-lg leading-8">
          {`i guess this space is supposed to be full of deep revelations,
          but talk is cheap. i like to think i know how to build stuff and
          occasionally, it actually works. if you are curious, check out my
          profiles to see the proof (or the wreckage).`}
        </p>

        <p className="text-muted-foreground">
          regards,
          <br />
          David Aragundy
        </p>
      </section>

      {latestPosts.length > 0 ? (
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
              Latest Posts
            </h2>

            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              All posts
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
