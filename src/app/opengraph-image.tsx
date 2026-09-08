import { ImageResponse } from "next/og";

import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  OGImage,
} from "@/shared/components/og-image";
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/app";
import { loadOGFonts } from "@/shared/utils/load-og-fonts";

export const alt = SITE_NAME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    <OGImage title={SITE_NAME} footer={SITE_DESCRIPTION} />,
    { ...size, fonts: await loadOGFonts() },
  );
}
