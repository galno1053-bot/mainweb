import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export default function Card({
  eyebrow,
  title,
  description,
  icon,
  children,
}: Props) {
  return (
    <div className="glass flex flex-col gap-3 rounded-2xl border border-slate-200/80 p-5 md:p-6">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
            {icon}
          </div>
        )}
        <div className="space-y-1">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
          )}
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
      </div>
      {description && <p className="text-sm text-slate-600">{description}</p>}
      {children}
    </div>
  );
}
