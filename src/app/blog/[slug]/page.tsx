import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { JsonLd } from "@/shared/components/json-ld";
import {
  AUTHOR_NAME,
  AVATAR_URL,
  BASE_URL,
  SITE_LOCALE,
  SITE_NAME,
  X_HANDLE,
} from "@/shared/constants/app";

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
    <section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          datePublished: publishedAt,
          dateModified: publishedAt,
          description: summary,
          image: `${BASE_URL}/blog/${slug}/opengraph-image`,
          url: `${BASE_URL}/blog/${slug}`,
          author: {
            "@type": "Person",
            name: AUTHOR_NAME,
            url: BASE_URL,
            image: `${BASE_URL}${AVATAR_URL}`,
          },
          publisher: { "@type": "Person", name: AUTHOR_NAME, url: BASE_URL },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${slug}`,
          },
        }}
      />

      <h1 className="title text-2xl font-semibold tracking-tighter">{title}</h1>

      <div className="mt-4 mb-8 flex items-center gap-2 text-sm">
        <Image
          src={AVATAR_URL}
          alt=""
          width={28}
          height={28}
          className="size-7 rounded-full object-cover"
        />

        <span className="text-neutral-900 dark:text-neutral-100">
          {AUTHOR_NAME}
        </span>

        <span className="text-neutral-400 dark:text-neutral-600">·</span>

        <time
          dateTime={publishedAt}
          className="text-neutral-600 dark:text-neutral-400"
        >
          {formatDate(publishedAt)}
        </time>
      </div>

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
