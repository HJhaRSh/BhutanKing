import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00FF88",
          fontWeight: "bold",
          fontSize: 20,
          border: "2px solid #D4AF37",
          borderRadius: "8px",
        }}
      >
        D×D
      </div>
    ),
    { ...size }
  );
}
