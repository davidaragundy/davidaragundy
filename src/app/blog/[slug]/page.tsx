import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

      <nav
        aria-label="Breadcrumb"
        className="text-muted-foreground flex items-center gap-2 text-sm"
      >
        <Link
          href="/blog"
          className="hover:text-foreground cursor-pointer transition-colors"
        >
          Blog
        </Link>

        {post.metadata.tags[0] ? (
          <>
            <span aria-hidden>/</span>
            <span>{post.metadata.tags[0]}</span>
          </>
        ) : null}
      </nav>

      <header className="mt-6 flex flex-col gap-6">
        <h1 className="title text-4xl leading-[1.1] font-[450] tracking-[-0.06em] md:text-5xl">
          {title}
        </h1>

        <p className="text-muted-foreground text-xl leading-8 text-balance">
          {summary}
        </p>

        <div className="flex items-center gap-2.5 text-sm">
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
