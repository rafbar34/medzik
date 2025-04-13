import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "../components/common/top-bar/top-bar";

export const metadata: Metadata = {
  title: "LookRem – Profesjonalne Usługi Remontowe",
  description:
    "Profesjonalne usługi remontowe – kompleksowe remonty mieszkań, domów i biur.",
  keywords:
    "remonty, usługi remontowe, remont mieszkań, remonty domów, remont biur, wykończenia wnętrz, Podkarpacie, Debica, Rzeszow, profesjonalne usługi remontowe",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/logo-favicon.svg", 
    apple: "/logo-favicon.svg",
  },
  openGraph: {
    title: "LookRem – Profesjonalne Usługi Remontowe",
    description: "Profesjonalne usługi remontowe – kompleksowe remonty mieszkań, domów i biur.",
    url: "https://lookme-gold.vercel.app/",
    type: "website",

    locale: "pl_PL"
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        style={{
          backgroundImage: "url('/pictures/mock10.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
