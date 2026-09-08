import { AUTHOR_INITIALS } from "@/shared/constants/app";

export const AppIcon = ({ size }: { size: number }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000000",
      color: "#ffffff",
      fontFamily: "Geist",
      fontSize: size * 0.5,
      fontWeight: 700,
      letterSpacing: -size * 0.035,
      borderRadius: "50%",
    }}
  >
    {AUTHOR_INITIALS}
  </div>
);
