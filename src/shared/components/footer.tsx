import { ArrowIcon } from "@/shared/icons/arrow-icon";
import { GITHUB_URL, X_URL } from "@/shared/constants/app";

const links = [
  { href: "/rss", label: "rss", external: false },
  { href: GITHUB_URL, label: "github", external: true },
  { href: X_URL, label: "x", external: true },
  {
    href: `${GITHUB_URL}/davidaragundy`,
    label: "view source",
    external: true,
  },
];

export const Footer = () => (
  <footer className="mb-16">
    <ul className="font-sm mt-8 flex flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300">
      {links.map(({ href, label, external }) => (
        <li key={href}>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
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
