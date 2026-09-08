export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
