import { ReactNode } from "react";

type Tone = "blue" | "purple";

interface Props {
  tone?: Tone;
  children: ReactNode;
}

export default function Badge({ tone = "blue", children }: Props) {
  const styles: Record<Tone, string> = {
    blue: "border border-baseBlue bg-baseBlue/5 text-baseBlue",
    purple: "border border-brandPurple bg-brandPurple/10 text-black",
  };

  return (
    <span className={`inline-flex rounded-xl px-4 py-2 text-xs font-normal ${styles[tone]}`}>
      {children}
    </span>
  );
}

