"use client";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <title>something broke</title>
      </head>

      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          colorScheme: "light dark",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <main style={{ maxWidth: "36rem" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            something broke
          </h1>

          <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
            The site failed to load. Try again, and if it keeps happening it is
            probably my fault.
          </p>

          <button
            type="button"
            onClick={() => retry()}
            style={{
              font: "inherit",
              color: "inherit",
              background: "none",
              border: 0,
              padding: 0,
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            try again
          </button>

          {error.digest ? (
            <p
              style={{ marginTop: "2rem", fontSize: "0.875rem", opacity: 0.6 }}
            >
              Error ID: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
