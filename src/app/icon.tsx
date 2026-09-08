import { ImageResponse } from "next/og";

import { AppIcon } from "@/shared/components/app-icon";
import { loadOGFonts } from "@/shared/utils/load-og-fonts";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<AppIcon size={size.width} />, {
    ...size,
    fonts: await loadOGFonts(),
  });
}
