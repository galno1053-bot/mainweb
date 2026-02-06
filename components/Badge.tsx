import { ReactNode } from "react";

type Tone = "purple" | "blue" | "slate";

interface Props {
  tone?: Tone;
  children: ReactNode;
}

export default function Badge({ tone = "slate", children }: Props) {
  const styles: Record<Tone, string> = {
    purple:
      "bg-brandPurple/15 text-brandPurple border border-brandPurple/40 shadow-glowPurple",
    blue: "bg-baseBlue/15 text-baseBlue border border-baseBlue/40 shadow-glowBlue",
    slate:
      "bg-white/5 text-slate-200 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[tone]}`}>
      {children}
    </span>
  );
}
