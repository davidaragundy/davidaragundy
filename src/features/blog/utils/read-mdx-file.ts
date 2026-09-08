import fs from "fs/promises";

import { parseFrontmatter } from "@/features/blog/utils/parse-frontmatter";

export const readMDXFile = async (filePath: string) => {
  const rawContent = await fs.readFile(filePath, "utf-8");

  return parseFrontmatter(rawContent);
};
