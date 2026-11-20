import { ImageResponse } from "next/og";

// Dinamik OG görseli — paylaşılan linklerde (WhatsApp, LinkedIn, X) önizleme.
// Ekstra paket/asset gerekmez; marka renkleriyle kod-üretimi.
export const alt = "WOOWCODE — iOS & Mobil Uygulama Stüdyosu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 0%, #1b3a7a 0%, #07090d 70%)",
          position: "relative",
        }}
      >
        {/* Üst aksan çizgisi */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "linear-gradient(90deg, #0A84FF, #A5A3FF)",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 800,
            color: "white",
            letterSpacing: -4,
          }}
        >
          WOOWCODE
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "rgba(255,255,255,0.92)",
            marginTop: 8,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {"Fikirden App Store'a · iOS & Mobil Uygulama Stüdyosu"}
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            fontSize: 26,
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            Yapay Zekâ
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            Mobil & Web
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            SaaS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
