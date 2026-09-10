import { EMAIL, GITHUB_URL, LINKEDIN_URL, X_URL } from "@/shared/constants/app";
import { ArrowIcon } from "@/shared/icons/arrow-icon";

const links = [
  { href: "/rss", label: "rss" },
  { href: GITHUB_URL, label: "github", rel: "me noopener noreferrer" },
  { href: X_URL, label: "x", rel: "me noopener noreferrer" },
  { href: LINKEDIN_URL, label: "linkedin", rel: "me noopener noreferrer" },
  { href: `mailto:${EMAIL}`, label: "email" },
  {
    href: `${GITHUB_URL}/davidaragundy`,
    label: "view source",
    rel: "noopener noreferrer",
  },
];

export const Footer = () => (
  <footer className="mb-16">
    <ul className="font-sm mt-8 flex flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300">
      {links.map(({ href, label, rel }) => (
        <li key={href}>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href={href}
            {...(rel ? { target: "_blank", rel } : {})}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{label}</p>
          </a>
        </li>
      ))}
    </ul>

    <p className="mt-8 text-neutral-600 dark:text-neutral-300">
      © {new Date().getFullYear()} MIT Licensed
    </p>
  </footer>
);
