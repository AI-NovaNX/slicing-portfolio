"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useId, useState } from "react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
] as const;

const faqsMdPlus = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!",
  },
] as const;

const faqDividerInsetsMdPlus = [
  { top: 40, bottom: 40 },
  { top: 40, bottom: 40 },
  { top: 40, bottom: 40 },
] as const;

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const maskIconBaseStyle = {
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
  } as const;

  return (
    <>
      {/* md+ */}
      <section className="hidden w-full bg-base-black md:block">
        <div className="mx-auto w-full max-w-[1303px] px-12 pb-24 pt-24">
          <p
            id="faq-md"
            className="text-center font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px]"
            style={{ color: "var(--Primary-200, #91FF02)" }}
          >
            FAQ
          </p>

          <h2
            className="mt-2 text-center [font-family:var(--font-display)] text-7xl font-extrabold leading-(--text-7xl--line-height) tracking-[0px]"
            style={{ color: "var(--Neutral-25, #FDFDFD)" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="mt-16 grid grid-cols-[1fr_1px_1fr]"
            style={{ borderColor: "var(--Neutral-800, #252B37)" }}
          >
            {Array.from({ length: Math.ceil(faqsMdPlus.length / 2) }).map(
              (_, rowIdx) => {
                const rowCount = Math.ceil(faqsMdPlus.length / 2);
                const isLastRow = rowIdx === rowCount - 1;
                const leftIdx = rowIdx * 2;
                const rightIdx = leftIdx + 1;
                const leftItem = faqsMdPlus[leftIdx];
                const rightItem = faqsMdPlus[rightIdx];

                const dividerInsets =
                  faqDividerInsetsMdPlus[rowIdx] ?? faqDividerInsetsMdPlus[0];

                return (
                  <Fragment key={`md-faq-row-${rowIdx}`}>
                    <AccordionItem
                      key={`md-faq-left-${leftIdx}`}
                      value={`item-${leftIdx + 1}`}
                      className={[
                        "m-0 p-12",
                        isLastRow ? "border-b-0" : "border-b",
                      ].join(" ")}
                      style={{ borderColor: "var(--Neutral-800, #252B37)" }}
                    >
                      <AccordionTrigger className="w-full rounded-none py-0 text-left hover:no-underline [&>svg]:hidden">
                        <div className="flex w-full items-start gap-6">
                          <span
                            aria-hidden
                            className="mt-1 h-6 w-6 shrink-0 opacity-100"
                            style={{
                              ...maskIconBaseStyle,
                              background: "var(--Primary-200, #91FF02)",
                              WebkitMaskImage: 'url("/icon/green-star.svg")',
                              maskImage: 'url("/icon/green-star.svg")',
                            }}
                          />

                          <span
                            className="min-w-0 [font-family:var(--font-display)] text-2xl font-bold leading-(--text-2xl--line-height) tracking-[0px]"
                            style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                          >
                            {leftItem.question}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-0 pt-0">
                        <div
                          className="mt-4 font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px]"
                          style={{ color: "var(--Neutral-400, #A4A7AE)" }}
                        >
                          {leftItem.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <div
                      key={`md-faq-divider-${rowIdx}`}
                      aria-hidden
                      className={[
                        "relative",
                        isLastRow ? "border-b-0" : "border-b",
                      ].join(" ")}
                      style={{ borderColor: "var(--Neutral-800, #252B37)" }}
                    >
                      <div
                        className="pointer-events-none absolute inset-x-0 w-px"
                        style={{
                          top: dividerInsets.top,
                          bottom: dividerInsets.bottom,
                          background: "var(--Neutral-800, #252B37)",
                        }}
                      />
                    </div>

                    {rightItem ? (
                      <AccordionItem
                        key={`md-faq-right-${rightIdx}`}
                        value={`item-${rightIdx + 1}`}
                        className={[
                          "m-0 p-12",
                          isLastRow ? "border-b-0" : "border-b",
                        ].join(" ")}
                        style={{ borderColor: "var(--Neutral-800, #252B37)" }}
                      >
                        <AccordionTrigger className="w-full rounded-none py-0 text-left hover:no-underline [&>svg]:hidden">
                          <div className="flex w-full items-start gap-6">
                            <span
                              aria-hidden
                              className="mt-1 h-6 w-6 shrink-0 opacity-100"
                              style={{
                                ...maskIconBaseStyle,
                                background: "var(--Primary-200, #91FF02)",
                                WebkitMaskImage: 'url("/icon/green-star.svg")',
                                maskImage: 'url("/icon/green-star.svg")',
                              }}
                            />

                            <span
                              className="min-w-0 [font-family:var(--font-display)] text-2xl font-bold leading-(--text-2xl--line-height) tracking-[0px]"
                              style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                            >
                              {rightItem.question}
                            </span>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="pb-0 pt-0">
                          <div
                            className="mt-4 font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px]"
                            style={{ color: "var(--Neutral-400, #A4A7AE)" }}
                          >
                            {rightItem.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={`md-faq-right-empty-${rowIdx}`} />
                    )}
                  </Fragment>
                );
              },
            )}
          </Accordion>
        </div>
      </section>

      {/* mobile */}
      <section className="w-full bg-base-black md:hidden">
        <div
          className="mx-auto flex w-full max-w-160 flex-col gap-6 px-4 py-10 opacity-100"
          style={{ aspectRatio: "393 / 500" }}
        >
          <p
            id="faq"
            className="text-center font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px] text-primary-200"
          >
            FAQ
          </p>

          <h2 className="text-center [font-family:var(--font-display)] text-4xl font-bold leading-(--text-4xl--line-height) tracking-[-0.02em] text-neutral-25">
            <span className="block">FREQUENTLY</span>
            <span className="block">ASKED</span>
            <span className="block">QUESTIONS</span>
          </h2>

          <div>
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              const contentId = `${baseId}-faq-${idx}`;

              return (
                <div
                  key={`${item.question}-${idx}`}
                  className="border-b border-neutral-800 py-6"
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-3 text-left"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() =>
                      setOpenIndex((prev) => (prev === idx ? null : idx))
                    }
                  >
                    <span
                      aria-hidden
                      className="mt-1 h-6 w-6 bg-primary-200 opacity-100"
                      style={{
                        ...maskIconBaseStyle,
                        WebkitMaskImage: 'url("/icon/green-star.svg")',
                        maskImage: 'url("/icon/green-star.svg")',
                      }}
                    />

                    <span className="font-sans text-lg font-bold leading-(--text-lg--line-height) tracking-[0px] text-neutral-25">
                      {item.question}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-400">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
