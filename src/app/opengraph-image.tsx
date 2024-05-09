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
          fontSize: 128,
          background: "#111",

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
