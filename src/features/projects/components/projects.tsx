import { ArrowIcon } from "@/shared/icons/arrow-icon";

import { projects } from "@/features/projects/data/projects";

const linkClassName =
  "flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100";

export const Projects = () => (
  <ul className="flex flex-col gap-8">
    {projects.map(({ name, description, url, repository }) => (
      <li key={url} className="flex flex-col gap-1">
        <h2 className="font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          {name}
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>

        <div className="mt-1 flex gap-4 text-sm text-neutral-600 dark:text-neutral-300">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            <ArrowIcon />
            {new URL(url).hostname}
          </a>

          {repository ? (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <ArrowIcon />
              source
            </a>
          ) : null}
        </div>
      </li>
    ))}
  </ul>
);
