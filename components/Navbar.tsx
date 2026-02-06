import Link from "next/link";
import { BRAND_NAME } from "../lib/constants";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-slate-950/65 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg text-white flex items-center gap-2"
        >
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-brandPurple to-baseBlue shadow-glowPurple" />
          {BRAND_NAME}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <Link href="#bridge" className="hover:text-white transition-colors">
            Bridge
          </Link>
          <Link href="#how" className="hover:text-white transition-colors">
            How it works
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost">Log in</Button>
          <Button variant="primary">Launch app</Button>
        </div>
      </div>
    </header>
  );
}
