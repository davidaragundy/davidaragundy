import { ImageResponse } from "next/og";

import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  OGImage,
} from "@/shared/components/og-image";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "@/shared/constants/app";
import { loadOGFonts } from "@/shared/utils/load-og-fonts";

export const alt = BLOG_TITLE;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    <OGImage title={BLOG_TITLE} description={BLOG_DESCRIPTION} />,
    { ...size, fonts: await loadOGFonts() },
  );
}
