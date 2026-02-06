import Link from "next/link";
import { APP_URL, BRAND_NAME } from "../lib/constants";
import Button from "./Button";

const menu = [
  { href: "#home", label: "Beranda" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#parameter", label: "Parameter" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="#home" className="text-base font-medium text-black">
            {BRAND_NAME}
          </Link>
          <Button href={APP_URL} variant="primary">
            Buka Aplikasi
          </Button>
        </div>

        <nav className="mt-3 flex items-center justify-center gap-2 text-xs font-normal text-black md:gap-5 md:text-sm">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-1 transition hover:bg-baseBlue/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

