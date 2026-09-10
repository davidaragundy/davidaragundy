import { JsonLd } from "@/shared/components/json-ld";
import { AUTHOR_USERNAME, BASE_URL, SITE_NAME } from "@/shared/constants/app";
import {
  PERSON_ID,
  PERSON_SCHEMA,
  WEBSITE_ID,
} from "@/shared/constants/schema";

import { Posts } from "@/features/blog/components/posts";

export default function Page() {
  return (
    <section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": WEBSITE_ID,
              url: BASE_URL,
              name: SITE_NAME,
              alternateName: AUTHOR_USERNAME,
              publisher: { "@id": PERSON_ID },
            },
            {
              "@type": "ProfilePage",
              url: BASE_URL,
              name: SITE_NAME,
              isPartOf: { "@id": WEBSITE_ID },
              mainEntity: { "@id": PERSON_ID },
            },
            PERSON_SCHEMA,
          ],
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
        regards,
        <br />
        David Aragundy
      </p>

      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
