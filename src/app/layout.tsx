import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "../components/common/top-bar/top-bar";
export const metadata: Metadata = {
  title: "LookRem – Profesjonalne Usługi Remontowe",
  description: "Profesjonalne usługi remontowe – kompleksowe remonty mieszkań, domów i biur. Gwarantujemy wysoką jakość, terminowość i atrakcyjne ceny. Skontaktuj się z nami i odmień swoje wnętrze!",
  keywords: "remonty, usługi remontowe, remont mieszkań, remonty domów, remont biur, wykończenia wnętrz, remonty Warszawa, profesjonalne usługi remontowe",
  robots: "index, follow", 
  viewport: "width=device-width, initial-scale=1.0",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
