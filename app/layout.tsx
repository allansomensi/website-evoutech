import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Evoutech | Máquinas de embalagem e automação industrial",
    template: "%s | Evoutech",
  },
  description: site.description,
  keywords: [
    "máquinas de embalagem",
    "embaladora",
    "extrusora de biscoitos",
    "rotuladora",
    "datador",
    "automação industrial",
    "Bento Gonçalves",
    "Evoutech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Evoutech | Máquinas de embalagem e automação industrial",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/svg/logo.svg`,
  email: site.email,
  telephone: "+55-54-99153-5354",
  foundingDate: "1996",
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="text-ink fixed top-3 left-3 z-[100] -translate-y-20 rounded-md bg-white px-4 py-2 text-sm font-semibold focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
