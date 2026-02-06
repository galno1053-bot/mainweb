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
  const alignClass = align === "center" ? "items-center text-center" : "";

  return (
    <section id={id} className="space-y-6">
      <div className={`flex flex-col gap-3 ${alignClass}`}>
        {kicker && (
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{kicker}</p>
        )}
        {title && (
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
        )}
        {description && <p className="max-w-3xl text-base text-slate-600">{description}</p>}
      </div>
      {children}
    </section>
  );
}
