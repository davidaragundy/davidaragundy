import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";

import { Card } from "@/shared/components/ui/card";
import { AUTHOR_NAME, AVATAR_URL } from "@/shared/constants/app";

import type { PostSummary } from "@/features/blog/types/post-summary";
import { formatDate } from "@/features/blog/utils/format-date";

export const PostCard = ({
  post,
  showDate = true,
  className,
}: {
  post: PostSummary;
  showDate?: boolean;
  className?: string;
}) => (
  <Card
    className={cn(
      "group hover:bg-card-hover relative flex h-full flex-col gap-0 rounded-sm p-6 pb-8 transition-colors duration-150",
      className,
    )}
  >
    <div className="flex flex-wrap items-center gap-x-3 text-sm leading-5">
      {showDate ? (
        <time dateTime={post.publishedAt} className="text-foreground">
          {formatDate(post.publishedAt)}
        </time>
      ) : null}

      {post.tags.map((tag) => (
        <span key={tag} className="text-muted-foreground">
          {tag}
        </span>
      ))}
    </div>

    <h3 className="mt-6 text-[2rem] leading-10 font-[450] tracking-[-0.04em] text-balance">
      <Link
        href={`/blog/${post.slug}`}
        className="cursor-pointer after:absolute after:inset-0"
      >
        {post.title}
      </Link>
    </h3>

    <p className="text-muted-foreground mt-auto pt-12 text-sm leading-5">
      {post.summary}
    </p>

    <div className="mt-5 flex items-center gap-2 text-sm leading-5">
      <Image
        src={AVATAR_URL}
        alt=""
        width={24}
        height={24}
        className="size-6 rounded-full object-cover"
      />

      <span className="text-foreground">{AUTHOR_NAME}</span>
    </div>
  </Card>
);
