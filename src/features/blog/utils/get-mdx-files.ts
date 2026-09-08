import fs from "fs/promises";
import path from "path";

export const getMDXFiles = async (dir: string) => {
  const files = await fs.readdir(dir);

  return files.filter((file) => path.extname(file) === ".mdx");
};
