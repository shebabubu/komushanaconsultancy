// Client logos shown in the "Who we work with" section on the About page.
//
// To add a client:
//   1. Put the logo file in src/assets/clients/ (PNG, JPG, SVG or WebP are fine).
//   2. Import it at the top of this file, e.g.
//        import acmeLogo from "@/assets/clients/acme.png";
//   3. Add an entry below:  { name: "Acme Ltd", logo: acmeLogo }
//
// An entry with no logo yet shows a "Client logo" placeholder tile, so the
// layout still looks complete while logos are being collected.

import limelightLogo from "@/assets/clients/limelight.png.asset.json";
import dawinciLogo from "@/assets/clients/dawinci.png.asset.json";

export interface Client {
  name: string;
  logo?: string | { url: string };
}

export const clients: Client[] = [
  {
    name: "Limelight Chemicals and Equipment Limited",
    logo: limelightLogo,
  },
  {
    name: "DaWinçi Architecture | Civil Engineering",
    logo: dawinciLogo,
  },
];

export function clientLogoUrl(client: Client): string | undefined {
  if (!client.logo) return undefined;
  return typeof client.logo === "string" ? client.logo : client.logo.url;
}
