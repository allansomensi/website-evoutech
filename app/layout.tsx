import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/ui/Loader";

export const metadata: Metadata = {
  title: "Evoutech",
  description: "Evoutech website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={"antialiased"}>
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
