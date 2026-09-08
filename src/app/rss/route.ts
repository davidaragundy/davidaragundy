import {
  AUTHOR_NAME,
  BASE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/shared/constants/app";

import { getPosts } from "@/features/blog/queries/get-posts";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      default:
        return "&quot;";
    }
  });

export async function GET() {
  const posts = await getPosts();

  const itemsXml = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.metadata.summary)}</description>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${BASE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <managingEditor>${escapeXml(AUTHOR_NAME)}</managingEditor>
    <atom:link href="${BASE_URL}/rss" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
