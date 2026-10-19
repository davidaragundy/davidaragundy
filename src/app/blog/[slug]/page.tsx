import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { JsonLd } from "@/shared/components/json-ld";
import {
  AUTHOR_NAME,
  AVATAR_URL,
  BASE_URL,
  SITE_LOCALE,
  SITE_NAME,
  X_HANDLE,
} from "@/shared/constants/app";
import { PERSON_REFERENCE } from "@/shared/constants/schema";

import { CustomMDX } from "@/features/blog/components/custom-mdx";
import { getPost, getPosts } from "@/features/blog/queries/get-posts";
import { formatDate } from "@/features/blog/utils/format-date";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) return {};

  const { title, publishedAt, summary } = post.metadata;
  const url = `/blog/${slug}`;

  return {
    title,
    description: summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      authors: [AUTHOR_NAME],
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      site: X_HANDLE,
      creator: X_HANDLE,
    },
  };
}

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) notFound();

  const { title, publishedAt, summary } = post.metadata;

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          datePublished: publishedAt,
          dateModified: publishedAt,
          description: summary,
          keywords: post.metadata.tags,
          image: `${BASE_URL}/blog/${slug}/opengraph-image`,
          url: `${BASE_URL}/blog/${slug}`,
          author: PERSON_REFERENCE,
          publisher: PERSON_REFERENCE,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${slug}`,
          },
        }}
      />

      <Link
        href="/blog"
        className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="size-3.5" />
        all posts
      </Link>

      <header className="mt-8 flex flex-col gap-4">
        {post.metadata.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        <h1 className="title text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>

        <p className="text-muted-foreground text-lg leading-8">{summary}</p>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <Image
            src={AVATAR_URL}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full object-cover"
          />

          <span className="text-foreground">{AUTHOR_NAME}</span>

          <span className="text-muted-foreground/50">·</span>

          <time dateTime={publishedAt} className="text-muted-foreground">
            {formatDate(publishedAt)}
          </time>
        </div>
      </header>

      <Separator className="my-10" />

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
