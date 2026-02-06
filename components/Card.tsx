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
    <div className="glass rounded-2xl p-5 md:p-6 border border-white/10 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="h-10 w-10 rounded-full bg-white/5 grid place-items-center text-lg">
            {icon}
          </div>
        )}
        <div className="space-y-1">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300/80">
              {eyebrow}
            </p>
          )}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      {description && <p className="text-slate-300 text-sm">{description}</p>}
      {children}
    </div>
  );
}
