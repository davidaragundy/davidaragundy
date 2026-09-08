import fs from "fs/promises";
import path from "path";

/**
 * Satori (behind ImageResponse) needs raw TTF bytes. The `geist` package only
 * exposes a next/font object for the browser through its exports map, and ships
 * woff2, which satori cannot parse — so the TTFs are vendored here, as the
 * Next.js docs recommend. Build-time only; never shipped to the client.
 */
const FONTS_DIR = path.join(process.cwd(), "src", "shared", "fonts");

export const loadOGFonts = async () => {
  const [regular, bold] = await Promise.all([
    fs.readFile(path.join(FONTS_DIR, "Geist-Regular.ttf")),
    fs.readFile(path.join(FONTS_DIR, "Geist-Bold.ttf")),
  ]);

  return [
    {
      name: "Geist",
      data: regular,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: bold,
      weight: 700 as const,
      style: "normal" as const,
    },
  ];
};
