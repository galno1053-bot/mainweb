import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: Variant;
  children: ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-baseBlue/40";

  const styles: Record<Variant, string> = {
    primary:
      "border border-brandPurple bg-brandPurple text-white shadow-[0_14px_28px_rgba(185,156,255,0.32)] hover:bg-brandPurple/90",
    secondary: "border border-baseBlue bg-white text-baseBlue hover:bg-baseBlue/10",
  };

  const classes = [base, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

