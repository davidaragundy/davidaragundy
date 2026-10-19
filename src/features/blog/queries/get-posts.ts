import path from "path";

import type { PostSummary } from "@/features/blog/types/post-summary";
import { getMDXData } from "@/features/blog/utils/get-mdx-data";

const POSTS_DIR = path.join(process.cwd(), "src", "features", "blog", "posts");

export const getPosts = async () => {
  const posts = await getMDXData(POSTS_DIR);

  return posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
};

export type Post = Awaited<ReturnType<typeof getPosts>>[number];

export const getPostSummaries = async (): Promise<PostSummary[]> => {
  const posts = await getPosts();

  return posts.map(({ slug, metadata }) => ({
    slug,
    title: metadata.title,
    summary: metadata.summary,
    publishedAt: metadata.publishedAt,
    tags: metadata.tags,
  }));
};
