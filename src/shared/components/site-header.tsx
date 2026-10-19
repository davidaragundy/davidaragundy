"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

import { AUTHOR_NAME, AVATAR_URL, navItems } from "@/shared/constants/app";

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-medium tracking-tight transition-opacity hover:opacity-80"
        >
          <Image
            src={AVATAR_URL}
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full object-cover"
            priority
          />
          <span className="hidden sm:inline">{AUTHOR_NAME}</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ href, name }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm transition-colors",
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
