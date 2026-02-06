import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  badge?: string;
  icon?: ReactNode;
}

export default function Card({ title, description, badge, icon }: Props) {
  return (
    <article className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      {badge && (
        <p className="text-xs font-light uppercase tracking-[0.14em] text-baseBlue">{badge}</p>
      )}
      {icon && <div className="mt-4 flex justify-center text-black">{icon}</div>}
      <h3 className="mt-4 text-xl font-medium text-black">{title}</h3>
      <p className="mt-3 text-sm font-normal leading-relaxed text-black/70">{description}</p>
    </article>
  );
}

