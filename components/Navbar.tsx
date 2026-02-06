import Link from "next/link";
import { BRAND_NAME } from "../lib/constants";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900"
        >
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-brandPurple to-baseBlue shadow-glowPurple" />
          {BRAND_NAME}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <Link href="#bridge" className="transition-colors hover:text-slate-900">
            Alur Jembatan
          </Link>
          <Link href="#how" className="transition-colors hover:text-slate-900">
            Cara Kerja
          </Link>
          <Link href="#faq" className="transition-colors hover:text-slate-900">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Masuk</Button>
          <Button variant="primary">Buka Aplikasi</Button>
        </div>
      </div>
    </header>
  );
}
