import { ReactNode } from "react";

interface Props {
  kicker?: string;
  title?: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function Section({
  kicker,
  title,
  description,
  align = "left",
  id,
  children,
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "";

  return (
    <section id={id} className="space-y-6">
      <div className={`flex flex-col gap-3 ${alignClass}`}>
        {kicker && (
          <p className="uppercase tracking-[0.28em] text-xs text-slate-300/80">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-slate-300 max-w-3xl text-base">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
