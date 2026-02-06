import { ReactNode } from "react";

type Tone = "purple" | "blue" | "slate";

interface Props {
  tone?: Tone;
  children: ReactNode;
}

export default function Badge({ tone = "slate", children }: Props) {
  const styles: Record<Tone, string> = {
    purple:
      "border border-brandPurple/40 bg-brandPurple/10 text-purple-700 shadow-glowPurple",
    blue: "border border-baseBlue/30 bg-baseBlue/10 text-blue-700 shadow-glowBlue",
    slate: "border border-slate-200 bg-white text-slate-600",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`}>
      {children}
    </span>
  );
}
