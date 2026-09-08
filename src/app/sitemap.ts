import type { MetadataRoute } from "next";

import { BASE_URL } from "@/shared/constants/app";

import { getPosts } from "@/features/blog/queries/get-posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const lastModified = posts[0]?.metadata.publishedAt ?? "2024-01-01";

  const routes = ["", "blog"].map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified,
  }));

  const blogs = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [...routes, ...blogs];
}
