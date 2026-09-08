import path from "path";

import { getMDXFiles } from "@/features/blog/utils/get-mdx-files";
import { readMDXFile } from "@/features/blog/utils/read-mdx-file";

export const getMDXData = async (dir: string) => {
  const mdxFiles = await getMDXFiles(dir);

  return Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata, content } = await readMDXFile(path.join(dir, file));

      return {
        metadata,
        slug: path.basename(file, path.extname(file)),
        content,
      };
    }),
  );
};
