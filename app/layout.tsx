import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { BRAND_NAME, APP_URL } from "../lib/constants";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Jembatan Kripto ke Rupiah`,
  description:
    "Kunci ETH dan USDC di Base, salurkan Rupiah, lalu lunasi untuk membuka jaminan.",
  metadataBase: new URL(APP_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${sora.variable} font-sans bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
