import { ImageResponse } from "next/og";
import { brandMarkDataUri } from "@/lib/brand-mark";

// iPhone "Ana Ekrana Ekle" ikonu. iOS köşeleri kendisi yuvarlattığı için kare zemin kullanılır.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <img src={brandMarkDataUri({ squircle: false })} width={180} height={180} alt="" />,
    size
  );
}
