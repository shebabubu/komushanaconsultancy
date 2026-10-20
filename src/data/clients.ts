// Client logos shown in the "Who we work with" section on the About page.
//
// To add a real logo:
//   1. Put the file in src/assets/clients/ (PNG, JPG, SVG or WebP are fine).
//   2. Import it at the top of this file, e.g.
//        import acmeLogo from "@/assets/clients/acme.png";
//   3. Add it to the entry below:  { name: "Acme Ltd", logo: acmeLogo }
//
// A tile with no logo yet shows a "Client logo" placeholder, so the layout
// looks complete at any number of entries.

export interface Client {
  name: string;
  logo?: string | { url: string };
}

export const clients: Client[] = [
  { name: "Client logo" },
  { name: "Client logo" },
  { name: "Client logo" },
  { name: "Client logo" },
  { name: "Client logo" },
  { name: "Client logo" },
  { name: "Client logo" },
  { name: "Client logo" },
];

export function clientLogoUrl(client: Client): string | undefined {
  if (!client.logo) return undefined;
  return typeof client.logo === "string" ? client.logo : client.logo.url;
}
