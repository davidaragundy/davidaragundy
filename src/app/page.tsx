import { JsonLd } from "@/shared/components/json-ld";
import {
  AUTHOR_NAME,
  BASE_URL,
  GITHUB_URL,
  SITE_DESCRIPTION,
  X_URL,
} from "@/shared/constants/app";

import { Posts } from "@/features/blog/components/posts";

export default function Page() {
  return (
    <section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: AUTHOR_NAME,
          url: BASE_URL,
          description: SITE_DESCRIPTION,
          sameAs: [GITHUB_URL, X_URL],
        }}
      />

      <h1 className="title mb-8 text-2xl font-semibold tracking-tighter">
        i do and build stuff. results may vary.
      </h1>

      <p className="mb-4">
        {`i guess this space is supposed to be full of deep revelations,
        but talk is cheap. i like to think i know how to build stuff and
        occasionally, it actually works. if you are curious, check out my
        profiles to see the proof (or the wreckage).`}
      </p>

      <p className="mb-4">
        regards, or whatever,
        <br />
        David Aragundy
      </p>

      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
