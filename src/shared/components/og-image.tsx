import { SITE_DOMAIN } from "@/shared/constants/app";

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_CONTENT_TYPE = "image/png";

const truncate = (value: string, max: number) =>
  value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;

export const OGImage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#ffffff",
      fontFamily: "Geist",
      padding: 80,
    }}
  >
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: 60,
          fontWeight: 700,
          letterSpacing: -2,
          lineHeight: 1.15,
          color: "#000000",
        }}
      >
        {truncate(title, 80)}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 30,
          lineHeight: 1.4,
          color: "#525252",
        }}
      >
        {truncate(description, 140)}
      </div>
    </div>

    <div style={{ display: "flex", fontSize: 26, color: "#a3a3a3" }}>
      {SITE_DOMAIN}
    </div>
  </div>
);
