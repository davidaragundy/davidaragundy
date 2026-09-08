import type { ReactNode } from "react";

import { slugify } from "@/shared/utils/slugify";

const toText = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) return node.map(toText).join("");

  if (typeof node === "object" && "props" in node) {
    return toText((node.props as { children?: ReactNode }).children);
  }

  return "";
};

export const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Tag = `h${level}` as const;

  const Heading = ({ children }: { children?: ReactNode }) => {
    const text = toText(children);
    const slug = slugify(text);

    return (
      <Tag id={slug}>
        <a
          href={`#${slug}`}
          className="anchor"
          aria-label={`Link to ${text}`}
        />
        {children}
      </Tag>
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
};
