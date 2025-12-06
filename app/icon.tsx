import { ImageResponse } from "next/og";

import { headerContent } from "@/config/header";
import { DEFAULT_THEME, THEME_COLORS } from "@/config/theme";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 32, height: 32 };

export default function Icon() {
  const logo = headerContent.logo;
  const color = THEME_COLORS[DEFAULT_THEME];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0f",
        borderRadius: 6,
      }}
    >
      <span
        style={{
          fontSize: logo.length > 3 ? 9 : 11,
          fontWeight: 700,
          color: color,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {logo}
      </span>
    </div>,
    { ...size },
  );
}
