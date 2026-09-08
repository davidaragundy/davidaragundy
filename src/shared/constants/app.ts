import type { Route } from "next";

export const BASE_URL = "https://davidaragundy.com";

export const SITE_DOMAIN = "davidaragundy.com";

export const AUTHOR_NAME = "David Aragundy";

export const AUTHOR_INITIALS = "DA";

export const AVATAR_URL = "/pfp.jpeg";

export const X_HANDLE = "@davidaragundy";

export const X_URL = "https://x.com/davidaragundy";

export const GITHUB_URL = "https://github.com/davidaragundy";

export const SITE_NAME = "David Aragundy";

export const SITE_DESCRIPTION =
  "I like to think I know how to build stuff, and occasionally it actually works.";

export const BLOG_TITLE = "Blog";

export const BLOG_DESCRIPTION = "Things I wrote down before I forgot them.";

export const SITE_LOCALE = "en_US";

export const navItems: { href: Route; name: string }[] = [
  { href: "/", name: "home" },
  { href: "/blog", name: "blog" },
];
