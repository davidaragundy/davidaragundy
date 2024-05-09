import { ImageResponse } from "next/og";

export const alt = "David's Portfolio 🔥";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          fontSize: 128,
          background: "#111",
          color: "#fff",
          textAlign: "center",
          fontWeight: 900,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Best portfolio in town 🚀🔥
      </div>
    ),
    {
      ...size,
    }
  );
}
