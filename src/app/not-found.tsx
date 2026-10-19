import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export const metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-start gap-4 py-16">
      <p className="text-muted-foreground font-mono text-sm">404</p>

      <h1 className="title text-3xl font-semibold tracking-tight md:text-4xl">
        this page does not exist
      </h1>

      <p className="text-muted-foreground max-w-md">
        The link is wrong, or I deleted something I probably should not have.
      </p>

      <Button variant="outline" render={<Link href="/" />} className="mt-2">
        go home
      </Button>
    </section>
  );
}
