import Link from "next/link";

import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import type { PostSummary } from "@/features/blog/types/post-summary";
import { formatDate } from "@/features/blog/utils/format-date";

export const PostCard = ({
  post,
  showDate = true,
}: {
  post: PostSummary;
  showDate?: boolean;
}) => (
  <Card className="group hover:border-border hover:bg-accent/40 relative h-full gap-0 transition-colors">
    <CardHeader className="gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {showDate ? (
          <time
            dateTime={post.publishedAt}
            className="text-muted-foreground text-xs tabular-nums"
          >
            {formatDate(post.publishedAt)}
          </time>
        ) : null}

        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <CardTitle className="text-lg leading-snug tracking-tight text-balance">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0"
        >
          {post.title}
        </Link>
      </CardTitle>

      <CardDescription className="leading-6">{post.summary}</CardDescription>
    </CardHeader>
  </Card>
);
