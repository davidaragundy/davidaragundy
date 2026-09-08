"use client";

import { useEffect } from "react";

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
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        something broke
      </h1>

      <p className="mb-4">
        An unexpected error occurred. Try again, and if it keeps happening it is
        probably my fault.
      </p>

      <button
        type="button"
        onClick={() => retry()}
        className="underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 transition-all dark:decoration-neutral-600"
      >
        try again
      </button>

      {error.digest ? (
        <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
          Error ID: {error.digest}
        </p>
      ) : null}
    </section>
  );
}
