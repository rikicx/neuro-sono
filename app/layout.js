import { DM_Sans, Instrument_Serif } from "next/font/google";
import SiteMotion from "@/components/SiteMotion";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--google-font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--google-font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://neurosono.com.br"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <SiteMotion />
      </body>
    </html>
  );
}
