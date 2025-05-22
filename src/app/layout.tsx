import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "../components/common/top-bar/top-bar";

export const metadata: Metadata = {
  title: "LookRem – Profesjonalne Usługi Remontowe",
  description:
    "Profesjonalne usługi remontowe – kompleksowe remonty mieszkań, domów i biur.",
  keywords:
    "remonty, usługi remontowe, remont mieszkań, remonty domów, Wykończeniowka Rzeszów, wykończenia wnętrz, Podkarpacie, Rzeszow, Glazurnictwo Rzeszów, Firma budowlana Rzeszów",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/logo-favicon.svg", 
    apple: "/logo-favicon.svg",
  },
  openGraph: {
    title: "LookRem – Profesjonalne Usługi Remontowe",
    description: "Profesjonalne usługi remontowe – kompleksowe remonty mieszkań, domów i biur.",
    url: "https://lookrem.pl/",
    type: "website",

    locale: "pl_PL"
  },
  other: {
    "google-site-verification": "JcIWGgrchnVHvOHUiIrePV9H1IJi9rsO21h9xggAwYw",
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

