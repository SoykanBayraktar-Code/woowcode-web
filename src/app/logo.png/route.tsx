import { ImageResponse } from "next/og";
import { brandMarkDataUri } from "@/lib/brand-mark";

// 512×512 PNG logo — used by JSON-LD (Google) and anywhere a raster logo is needed.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={brandMarkDataUri()} width={512} height={512} alt="" />,
    { width: 512, height: 512 }
  );
}
