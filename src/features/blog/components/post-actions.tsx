"use client";

import { useState } from "react";
import { Check, ChevronDown, FileText, Link2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

type CopyTarget = "url" | "markdown";

export const PostActions = ({ slug }: { slug: string }) => {
  const [copied, setCopied] = useState<CopyTarget | null>(null);

  const copy = async (target: CopyTarget) => {
    const url = `${window.location.origin}/blog/${slug}`;

    try {
      const text =
        target === "url"
          ? url
          : await fetch(`/blog/${slug}.md`).then((response) => {
              if (!response.ok) throw new Error("Markdown is unavailable.");

              return response.text();
            });

      await navigator.clipboard.writeText(text);

      setCopied(target);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1 text-sm transition-colors">
        {copied ? "Copied" : "Copy"}
        {copied ? (
          <Check className="size-3.5" />
        ) : (
          <ChevronDown className="size-3.5" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => copy("url")}>
          <Link2 />
          Copy URL
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => copy("markdown")}>
          <FileText />
          Copy Markdown
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
