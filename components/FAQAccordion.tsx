"use client";

import { useState } from "react";
import Badge from "./Badge";

type FAQ = {
  question: string;
  answer: string;
};

interface Props {
  items: FAQ[];
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.question}
            className="glass rounded-xl border border-slate-200/80 p-4 md:p-5"
          >
            <button
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <div className="flex items-center gap-3">
                <Badge tone="blue">{`P${idx + 1}`}</Badge>
                <p className="font-semibold text-slate-900">{faq.question}</p>
              </div>
              <span className="text-xl text-slate-600">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
