import { cn } from "cn";

import { PostActions } from "@/features/blog/components/post-actions";
import { formatDate } from "@/features/blog/utils/format-date";

export const PostMeta = ({
  publishedAt,
  readTime,
  slug,
  className,
}: {
  publishedAt: string;
  readTime: number;
  slug: string;
  className?: string;
}) => (
  <div
    className={cn(
      "text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 text-sm",
      className,
    )}
  >
    <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>

    <span>{readTime} min read</span>

    <PostActions slug={slug} />
  </div>
);
