import { ArrowIcon } from "@/shared/icons/arrow-icon";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  REPOSITORY_URL,
  X_URL,
} from "@/shared/constants/app";

const links = [
  { href: "/rss", label: "RSS" },
  { href: GITHUB_URL, label: "GitHub", rel: "me noopener noreferrer" },
  { href: X_URL, label: "X", rel: "me noopener noreferrer" },
  { href: LINKEDIN_URL, label: "LinkedIn", rel: "me noopener noreferrer" },
  { href: `mailto:${EMAIL}`, label: "Email" },
  { href: REPOSITORY_URL, label: "View Source", rel: "noopener noreferrer" },
];

export const SiteFooter = () => (
  <footer className="border-border/60 mt-24 border-t">
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <ul className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {links.map(({ href, label, rel }) => (
          <li key={href}>
            <a
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
              href={href}
              {...(rel ? { target: "_blank", rel } : {})}
            >
              <ArrowIcon />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </div>
  </footer>
);
