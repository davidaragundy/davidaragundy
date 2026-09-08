export const OG_SIZE = { width: 1200, height: 630 };

export const OG_CONTENT_TYPE = "image/png";

export const OGImage = ({
  title,
  footer,
}: {
  title: string;
  footer: string;
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
    <div
      style={{
        display: "flex",
        fontSize: 64,
        fontWeight: 700,
        letterSpacing: -2,
        lineHeight: 1.15,
        color: "#000000",
      }}
    >
      {title}
    </div>

    <div style={{ display: "flex", fontSize: 30, color: "#737373" }}>
      {footer}
    </div>
  </div>
);
