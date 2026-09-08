import { MDXRemote } from "next-mdx-remote/rsc";

import { Code } from "@/shared/components/code";
import { CustomLink } from "@/shared/components/custom-link";
import { RoundedImage } from "@/shared/components/rounded-image";
import { Table } from "@/shared/components/table";
import { createHeading } from "@/shared/utils/create-heading";

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export const CustomMDX = (props: React.ComponentProps<typeof MDXRemote>) => (
  <MDXRemote
    {...props}
    components={{ ...components, ...props.components }}
    options={{ blockJS: false, ...props.options }}
  />
);
