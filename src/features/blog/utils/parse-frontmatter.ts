import type { PostMetadata } from "@/features/blog/types/metadata";

const FRONTMATTER_REGEX = /---\s*([\s\S]*?)\s*---/;

const REQUIRED_KEYS = ["title", "publishedAt", "summary"] as const;

export const parseFrontmatter = (fileContent: string) => {
  const frontmatterBlock = FRONTMATTER_REGEX.exec(fileContent)?.[1];

  if (!frontmatterBlock) {
    throw new Error("Post is missing a frontmatter block.");
  }

  const content = fileContent.replace(FRONTMATTER_REGEX, "").trim();
  const metadata: Partial<PostMetadata> = {};

  for (const line of frontmatterBlock.trim().split("\n")) {
    const [key, ...valueParts] = line.split(": ");

    if (!key || valueParts.length === 0) continue;

    metadata[key.trim() as keyof PostMetadata] = valueParts
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1");
  }

  for (const key of REQUIRED_KEYS) {
    if (!metadata[key]) {
      throw new Error(`Post frontmatter is missing "${key}".`);
    }
  }

  return { metadata: metadata as PostMetadata, content };
};
