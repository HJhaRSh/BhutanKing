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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/HJhaRSh/BhutanKing/main/public/dralha-dataviv-logo-v2.png"
          alt="logo"
          width={32}
          height={32}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
