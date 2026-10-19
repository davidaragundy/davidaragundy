import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { projects } from "@/features/projects/data/projects";

const linkClassName =
  "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground";

export const Projects = () => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {projects.map(({ name, description, url, repository }) => (
      <li key={url}>
        <Card className="h-full">
          <CardHeader className="gap-2">
            <CardTitle className="text-lg tracking-tight">{name}</CardTitle>
            <CardDescription className="leading-6">
              {description}
            </CardDescription>
          </CardHeader>

          <CardFooter className="gap-4">
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
                source
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}
          </CardFooter>
        </Card>
      </li>
    ))}
  </ul>
);
