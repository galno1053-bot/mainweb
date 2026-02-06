type Step = {
  title: string;
  description: string;
};

interface Props {
  steps: Step[];
}

export default function Stepper({ steps }: Props) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <span className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-baseBlue/30" />

      <ol className="relative flex flex-col gap-8">
        {steps.map((step, index) => (
          <li key={step.title} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-baseBlue bg-white text-baseBlue text-lg font-medium">
              {index + 1}
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-white p-5 shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-medium text-black">{step.title}</h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-black/70">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

