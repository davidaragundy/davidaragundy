import Link from "next/link";

import { getPosts } from "@/features/blog/queries/get-posts";
import { formatDate } from "@/features/blog/utils/format-date";

export const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4"
          href={`/blog/${post.slug}`}
        >
          <time
            dateTime={post.metadata.publishedAt}
            className="shrink-0 text-sm whitespace-nowrap text-neutral-600 tabular-nums md:w-36 dark:text-neutral-400"
          >
            {formatDate(post.metadata.publishedAt)}
          </time>

          <span className="tracking-tight text-neutral-900 dark:text-neutral-100">
            {post.metadata.title}
          </span>
        </Link>
      ))}
    </div>
  );
};
