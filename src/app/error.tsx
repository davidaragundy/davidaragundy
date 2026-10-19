"use client";

import { useEffect } from "react";

import { Button } from "@/shared/components/ui/button";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-start gap-4 py-16">
      <h1 className="title text-3xl font-semibold tracking-tight md:text-4xl">
        something broke
      </h1>

      <p className="text-muted-foreground max-w-md">
        An unexpected error occurred. Try again, and if it keeps happening it is
        probably my fault.
      </p>

      <Button variant="outline" onClick={() => retry()} className="mt-2">
        try again
      </Button>

      {error.digest ? (
        <p className="text-muted-foreground mt-4 font-mono text-xs">
          {error.digest}
        </p>
      ) : null}
    </section>
  );
}
