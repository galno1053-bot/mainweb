import { ReactNode } from "react";

interface Props {
  id?: string;
  kicker?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export default function Section({
  id,
  kicker,
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <section id={id} className={`px-6 py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-4xl text-center">
        {kicker && (
          <p className="text-sm font-light uppercase tracking-[0.16em] text-baseBlue">{kicker}</p>
        )}
        {title && <h2 className="mt-3 text-3xl font-medium text-black md:text-4xl">{title}</h2>}
        {description && (
          <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-relaxed text-black/70">
            {description}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

