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
      "bg-gradient-to-r from-brandPurple to-baseBlue text-white shadow-lg shadow-baseBlue/20 hover:brightness-110",
    ghost:
      "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900",
    outline:
      "border border-slate-300 bg-transparent text-slate-700 hover:border-slate-400 hover:text-slate-900",
  };

  const cx = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(" ");

  return (
    <button className={cx(base, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}
