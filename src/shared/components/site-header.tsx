"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

import { AUTHOR_NAME, AVATAR_URL, navItems } from "@/shared/constants/app";
import { useScrolled } from "@/shared/hooks/use-scrolled";

export const SiteHeader = () => {
  const pathname = usePathname();
  const isScrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        isScrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "bg-background border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2.5 text-sm font-medium tracking-tight transition-opacity hover:opacity-80"
        >
          <Image
            src={AVATAR_URL}
            alt=""
            width={26}
            height={26}
            className="size-[26px] rounded-full object-cover"
            priority
          />
          <span className="hidden sm:inline">{AUTHOR_NAME}</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map(({ href, name }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "cursor-pointer text-sm transition-colors",
                  isActive
                    ? "text-foreground"
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
