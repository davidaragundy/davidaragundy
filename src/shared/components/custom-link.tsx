import type { ComponentProps } from "react";
import Link from "next/link";

export const CustomLink = ({ href, ...props }: ComponentProps<typeof Link>) => {
  const target = href.toString();

  if (target.startsWith("/")) return <Link href={href} {...props} />;

  if (target.startsWith("#")) return <a href={target} {...props} />;

  return (
    <a href={target} target="_blank" rel="noopener noreferrer" {...props} />
  );
};
