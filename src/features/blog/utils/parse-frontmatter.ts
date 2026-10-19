import type { PostMetadata } from "@/features/blog/types/metadata";

const FRONTMATTER_REGEX = /---\s*([\s\S]*?)\s*---/;

const REQUIRED_KEYS = ["title", "publishedAt", "summary"] as const;

const unquote = (value: string) => value.replace(/^['"](.*)['"]$/, "$1");

export const parseFrontmatter = (fileContent: string) => {
  const frontmatterBlock = FRONTMATTER_REGEX.exec(fileContent)?.[1];

  if (!frontmatterBlock) {
    throw new Error("Post is missing a frontmatter block.");
  }

  const content = fileContent.replace(FRONTMATTER_REGEX, "").trim();
  const entries: Record<string, string> = {};

  for (const line of frontmatterBlock.trim().split("\n")) {
    const [key, ...valueParts] = line.split(": ");

    if (!key || valueParts.length === 0) continue;

    entries[key.trim()] = unquote(valueParts.join(": ").trim());
  }

  const missing = REQUIRED_KEYS.filter((key) => !entries[key]);

  if (missing.length > 0) {
    throw new Error(`Post frontmatter is missing: ${missing.join(", ")}.`);
  }

  const { title, publishedAt, summary } = entries as Record<
    (typeof REQUIRED_KEYS)[number],
    string
  >;

  const tags = (entries.tags ?? "")
    .replace(/^\[(.*)\]$/, "$1")
    .split(",")
    .map((tag) => unquote(tag.trim()))
    .filter(Boolean);

  const metadata: PostMetadata = {
    title,
    publishedAt,
    summary,
    tags,
    ...(entries.image ? { image: entries.image } : {}),
  };

  return { metadata, content };
};
