import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200";

  const styles: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-brandPurple to-baseBlue text-slate-950 shadow-lg shadow-baseBlue/25 hover:brightness-110",
    ghost: "text-slate-100 bg-white/5 hover:bg-white/10 border border-white/10",
    outline:
      "text-white border border-white/30 hover:border-white/60 bg-transparent",
  };

  const cx = (...parts: (string | undefined)[]) =>
    parts.filter(Boolean).join(" ");

  return (
    <button className={cx(base, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}
