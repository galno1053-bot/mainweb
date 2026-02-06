import type { Metadata } from "next";
import { Chakra_Petch, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap"
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nexa - Crypto to Rupiah Lending",
  description: "Nexa memudahkan pinjam IDR dengan jaminan crypto ETH/USDC di Base."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sora.variable} ${chakra.variable}`}>
      <body>{children}</body>
    </html>
  );
}
