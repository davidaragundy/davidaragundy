import { ImageResponse } from "next/og";

import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  OGImage,
} from "@/shared/components/og-image";
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/app";
import { loadOGFonts } from "@/shared/utils/load-og-fonts";

import { getPost, getPosts } from "@/features/blog/queries/get-posts";

export const alt = SITE_NAME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return new ImageResponse(
    <OGImage
      title={post?.metadata.title ?? SITE_NAME}
      description={post?.metadata.summary ?? SITE_DESCRIPTION}
    />,
    { ...size, fonts: await loadOGFonts() },
  );
}
