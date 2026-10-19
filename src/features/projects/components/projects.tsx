import { ArrowUpRight } from "lucide-react";

import { Card } from "@/shared/components/ui/card";

import { projects } from "@/features/projects/data/projects";

const linkClassName =
  "inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground";

export const Projects = () => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {projects.map(({ name, description, url, repository }) => (
      <li key={url}>
        <Card className="hover:bg-card-hover flex h-full flex-col gap-0 rounded-xl p-6 transition-colors duration-200 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">{name}</h2>

          <p className="text-muted-foreground mt-3 text-sm leading-6">
            {description}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-8">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              {new URL(url).hostname}
              <ArrowUpRight className="size-3.5" />
            </a>

            {repository ? (
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Source
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}
          </div>
        </Card>
      </li>
    ))}
  </ul>
);
