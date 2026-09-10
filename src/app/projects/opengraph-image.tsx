import { ImageResponse } from "next/og";

import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  OGImage,
} from "@/shared/components/og-image";
import { PROJECTS_DESCRIPTION, PROJECTS_TITLE } from "@/shared/constants/app";
import { loadOGFonts } from "@/shared/utils/load-og-fonts";

export const alt = PROJECTS_TITLE;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    <OGImage title={PROJECTS_TITLE} description={PROJECTS_DESCRIPTION} />,
    { ...size, fonts: await loadOGFonts() },
  );
}
