"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, Rows3, Rss, Search } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

import { PostCard } from "@/features/blog/components/post-card";
import { usePostView } from "@/features/blog/hooks/use-post-view";
import type { PostSummary } from "@/features/blog/types/post-summary";
import { formatDate } from "@/features/blog/utils/format-date";

const ALL_TAG = "All";

export const PostsExplorer = ({ posts }: { posts: PostSummary[] }) => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(ALL_TAG);
  const [view, setView] = usePostView();

  const tags = useMemo(
    () => [ALL_TAG, ...new Set(posts.flatMap((post) => post.tags))],
    [posts],
  );

  const visiblePosts = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesTag = activeTag === ALL_TAG || post.tags.includes(activeTag);

      if (!matchesTag) return false;
      if (!needle) return true;

      return [post.title, post.summary, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [posts, query, activeTag]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {tags.map((tag) => (
            <Button
              key={tag}
              size="sm"
              variant={tag === activeTag ? "secondary" : "ghost"}
              aria-pressed={tag === activeTag}
              onClick={() => setActiveTag(tag)}
              className="cursor-pointer rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1 lg:w-56 lg:flex-none">
            <Search
              aria-hidden
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search…"
              aria-label="Search posts"
              className="rounded-full pl-9"
            />
          </div>

          <div className="border-border flex items-center gap-1 rounded-full border p-1">
            <Button
              size="icon-sm"
              variant={view === "grid" ? "secondary" : "ghost"}
              aria-pressed={view === "grid"}
              aria-label="Grid view"
              onClick={() => setView("grid")}
              className="cursor-pointer rounded-full"
            >
              <LayoutGrid />
            </Button>

            <Button
              size="icon-sm"
              variant={view === "timeline" ? "secondary" : "ghost"}
              aria-pressed={view === "timeline"}
              aria-label="Timeline view"
              onClick={() => setView("timeline")}
              className="cursor-pointer rounded-full"
            >
              <Rows3 />
            </Button>
          </div>

          <Button
            size="icon"
            variant="outline"
            render={<a href="/rss" aria-label="RSS feed" />}
            className="cursor-pointer rounded-full"
          >
            <Rss />
          </Button>
        </div>
      </div>

      {visiblePosts.length === 0 ? (
        <div className="border-border rounded-xl border border-dashed py-16 text-center">
          <p className="text-muted-foreground text-sm">
            No posts match that search.
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {visiblePosts.map((post) => (
            <PostCard key={post.slug} post={post} className="min-h-72" />
          ))}
        </div>
      ) : (
        <ol className="flex flex-col">
          {visiblePosts.map((post, index) => (
            <li
              key={post.slug}
              className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <time
                dateTime={post.publishedAt}
                className="text-muted-foreground pt-1 text-sm tabular-nums sm:text-right"
              >
                {formatDate(post.publishedAt)}
              </time>

              <div
                className={cn(
                  "border-border/60 relative pb-8 sm:border-l sm:pl-8",
                  index === visiblePosts.length - 1 &&
                    "sm:border-l-transparent",
                )}
              >
                <span
                  aria-hidden
                  className="bg-border ring-background absolute top-2.5 -left-[4.5px] hidden size-2 rounded-full ring-4 sm:block"
                />

                <PostCard post={post} showDate={false} />
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
