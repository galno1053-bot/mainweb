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
  title: `${BRAND_NAME} | Crypto ↔ Fiat Bridge`,
  description:
    "Bridge ETH & USDC into Indonesian Rupiah with clear onchain/offramp visibility.",
  metadataBase: new URL(APP_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} font-sans bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
