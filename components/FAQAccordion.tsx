"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className="rounded-xl border border-black/10 bg-white p-5 text-center shadow-[0_12px_24px_rgba(0,0,0,0.05)]"
          >
            <button
              type="button"
              className="w-full text-center"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <p className="text-base font-medium text-black">{item.question}</p>
              <p className="mt-2 text-sm font-light text-baseBlue">{isOpen ? "Tutup" : "Buka"}</p>
            </button>

            {isOpen && (
              <p className="mt-4 text-sm font-normal leading-relaxed text-black/70">{item.answer}</p>
            )}
          </article>
        );
      })}
    </div>
  );
}

