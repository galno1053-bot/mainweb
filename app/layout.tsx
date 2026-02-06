import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { APP_URL, BRAND_NAME } from "../lib/constants";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Website Utama`,
  description:
    "Jaminkan ETH atau USDC untuk menerima pinjaman Rupiah dengan alur hybrid onchain dan transfer bank manual.",
  metadataBase: new URL(APP_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${sora.variable} bg-white font-sans text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}

