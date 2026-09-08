import Link from "next/link";

import { navItems } from "@/shared/constants/app";

export const Navbar = () => (
  <aside className="mb-16 -ml-2 tracking-tight">
    <div className="lg:sticky lg:top-20">
      <nav
        className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
        id="nav"
      >
        <div className="flex flex-row space-x-0 pr-10">
          {navItems.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  </aside>
);
