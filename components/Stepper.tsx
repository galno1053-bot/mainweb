type Step = {
  title: string;
  description: string;
};

interface Props {
  steps: Step[];
}

export default function Stepper({ steps }: Props) {
  return (
    <ol className="relative border-l border-white/10 pl-5 space-y-6">
      {steps.map((step, idx) => (
        <li key={step.title} className="relative">
          <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-gradient-to-r from-brandPurple to-baseBlue shadow-glowBlue" />
          <div className="flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300/80">
              Step {idx + 1}
            </p>
            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
