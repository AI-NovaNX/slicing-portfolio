"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const testimonials = [
  {
    name: "Thom Haye",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/upwork.svg",
    companyLogoAlt: "Upwork",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Thom Haye",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/zapier.svg",
    companyLogoAlt: "Zapier",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Thom Haye",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/zoom.svg",
    companyLogoAlt: "Zoom",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Thom Haye",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/trello.svg",
    companyLogoAlt: "Trello",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Thom Haye",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/Adobe.svg",
    companyLogoAlt: "Adobe",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Thom Haye",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/Spotify.svg",
    companyLogoAlt: "Spotify",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
] as const;

const testimonialsMdPlus = [
  {
    name: "Thom Haye",
    role: "Project Manager",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/upwork.svg",
    companyLogoAlt: "Upwork",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Emily Carter",
    role: "Head of Product",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/trello1.svg",
    companyLogoAlt: "Trello",
    quote:
      "An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!",
  },
  {
    name: "Sarah Lee",
    role: "Engineering Manager",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/zapier.svg",
    companyLogoAlt: "Zapier",
    quote:
      "An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/zoom.svg",
    companyLogoAlt: "Zoom",
    quote:
      "A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!",
  },
  {
    name: "Ava Johnson",
    role: "Product Designer",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/Adobe.svg",
    companyLogoAlt: "Adobe",
    quote:
      "Strong attention to detail and consistent delivery. Communication was clear and timelines were met without sacrificing quality.",
  },
  {
    name: "Daniel Kim",
    role: "Founder",
    companyLogoSrc: "/company-logo/Work%20Experience%20Card/Spotify.svg",
    companyLogoAlt: "Spotify",
    quote:
      "Brought great energy to the project and helped refine the UX along the way. The end result feels polished and fast.",
  },
] as const;

export function Testimonials() {
  const perPage = 3;
  const pageCount = Math.ceil(testimonials.length / perPage);
  const [pageIndex, setPageIndex] = useState(0);

  const perPageMdPlus = 4;
  const pageCountMdPlus = Math.ceil(testimonialsMdPlus.length / perPageMdPlus);
  const [pageIndexMdPlus, setPageIndexMdPlus] = useState(0);

  const maskIconBaseStyle = {
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
  } as const;

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < pageCount - 1;

  const visibleTestimonials = useMemo(() => {
    const startIndex = pageIndex * perPage;
    return testimonials.slice(startIndex, startIndex + perPage);
  }, [pageIndex]);

  const canGoPrevMdPlus = pageIndexMdPlus > 0;
  const canGoNextMdPlus = pageIndexMdPlus < pageCountMdPlus - 1;

  const visibleTestimonialsMdPlus = useMemo(() => {
    const startIndex = pageIndexMdPlus * perPageMdPlus;
    return testimonialsMdPlus.slice(startIndex, startIndex + perPageMdPlus);
  }, [pageIndexMdPlus]);

  return (
    <>
      {/* md+ */}
      <section className="hidden w-full bg-base-black md:block">
        <div className="mx-auto w-full max-w-[1303px] px-12 pb-24 pt-24">
          <p
            className="text-center font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px]"
            style={{ color: "var(--Primary-200, #91FF02)" }}
          >
            TESTIMONIALS
          </p>

          <h2
            className="mt-2 text-center [font-family:var(--font-display)] text-[48px] font-extrabold leading-[60px] tracking-[0px]"
            style={{ color: "var(--Neutral-25, #FDFDFD)" }}
          >
            PEOPLE SAYS ABOUT ME
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-8">
            {visibleTestimonialsMdPlus.map((t, idx) => (
              <article
                key={`md-${t.companyLogoSrc}-${pageIndexMdPlus}-${idx}`}
                className="flex w-full flex-col gap-3 overflow-hidden rounded-3xl border border-neutral-800 bg-base-black p-6 opacity-100"
                style={{ aspectRatio: "580 / 270" }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div
                      className="font-sans text-xl font-bold leading-(--text-xl--line-height) tracking-[0px]"
                      style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="mt-1 font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px]"
                      style={{ color: "var(--Neutral-400, #A4A7AE)" }}
                    >
                      {t.role}
                    </div>
                  </div>

                  <Image
                    src={t.companyLogoSrc}
                    alt={t.companyLogoAlt}
                    width={114}
                    height={48}
                    className="mt-0.5 h-[48px] w-[114px] shrink-0 rounded-none object-contain opacity-100"
                  />
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Image
                      key={starIdx}
                      src="/star.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-none opacity-100"
                    />
                  ))}
                </div>

                <p
                  className="mt-4 font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px]"
                  style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                >
                  “{t.quote}”
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonials"
              disabled={!canGoPrevMdPlus}
              aria-disabled={!canGoPrevMdPlus}
              onClick={() =>
                setPageIndexMdPlus((prev) => Math.max(0, prev - 1))
              }
              className={[
                "inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-800 bg-base-black",
                !canGoPrevMdPlus && "cursor-not-allowed",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ border: "1px solid var(--Neutral-800, #252B37)" }}
            >
              <span
                aria-hidden
                className={[
                  "h-6 w-6",
                  canGoPrevMdPlus ? "bg-primary-200" : "bg-neutral-800",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  ...maskIconBaseStyle,
                  WebkitMaskImage: 'url("/icon/arrow-left.svg")',
                  maskImage: 'url("/icon/arrow-left.svg")',
                }}
              />
            </button>

            <button
              type="button"
              aria-label="Next testimonials"
              disabled={!canGoNextMdPlus}
              aria-disabled={!canGoNextMdPlus}
              onClick={() =>
                setPageIndexMdPlus((prev) =>
                  Math.min(pageCountMdPlus - 1, prev + 1),
                )
              }
              className={[
                "inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-800 bg-base-black",
                !canGoNextMdPlus && "cursor-not-allowed",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ border: "1px solid var(--Neutral-800, #252B37)" }}
            >
              <span
                aria-hidden
                className={[
                  "h-6 w-6",
                  canGoNextMdPlus ? "bg-primary-200" : "bg-neutral-800",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  ...maskIconBaseStyle,
                  WebkitMaskImage: 'url("/icon/arrow-right.svg")',
                  maskImage: 'url("/icon/arrow-right.svg")',
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Mobile (unchanged) */}
      <section className="w-full bg-base-black md:hidden">
        <div className="mx-auto w-full max-w-160 px-6 pb-12 pt-12">
          <p className="text-center font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px] text-primary-200">
            TESTIMONIALS
          </p>

          <h2 className="mt-2 text-center [font-family:var(--font-display)] text-4xl font-extrabold leading-(--text-4xl--line-height) tracking-[0px] text-neutral-25">
            <span className="block">PEOPLE SAYS</span>
            <span className="block">ABOUT ME</span>
          </h2>

          <div className="mt-10 space-y-4">
            {visibleTestimonials.map((t, idx) => (
              <article
                key={`${t.companyLogoSrc}-${pageIndex}-${idx}`}
                className="flex w-full flex-col gap-3 rounded-2xl border border-base-white/20 bg-base-black p-4 opacity-100"
                style={{ aspectRatio: "361 / 262" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="font-sans text-lg font-bold leading-(--text-lg--line-height) tracking-[0px] text-neutral-25">
                      {t.name}
                    </div>
                    <div className="font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-400">
                      {t.role}
                    </div>
                  </div>

                  <Image
                    src={t.companyLogoSrc}
                    alt={t.companyLogoAlt}
                    width={76}
                    height={32}
                    className="mt-0.5 h-8 w-19 opacity-100"
                  />
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Image
                      key={starIdx}
                      src="/star.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-none opacity-100"
                    />
                  ))}
                </div>

                <p className="font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px] text-neutral-25">
                  “{t.quote}”
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              disabled={!canGoPrev}
              aria-disabled={!canGoPrev}
              onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
              className={[
                "inline-flex h-12 w-12 items-center justify-center rounded-full border-[0.86px] border-neutral-800 bg-neutral-950",
                !canGoPrev && "cursor-not-allowed opacity-40",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                aria-hidden
                className={[
                  "h-6 w-6",
                  canGoPrev ? "bg-primary-200" : "bg-neutral-800",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  ...maskIconBaseStyle,
                  WebkitMaskImage: 'url("/icon/arrow-left.svg")',
                  maskImage: 'url("/icon/arrow-left.svg")',
                }}
              />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              disabled={!canGoNext}
              aria-disabled={!canGoNext}
              onClick={() =>
                setPageIndex((prev) => Math.min(pageCount - 1, prev + 1))
              }
              className={[
                "inline-flex h-12 w-12 items-center justify-center rounded-full border-[0.86px] border-neutral-800 bg-neutral-950",
                !canGoNext && "cursor-not-allowed opacity-40",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                aria-hidden
                className={[
                  "h-6 w-6",
                  canGoNext ? "bg-primary-200" : "bg-neutral-800",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  ...maskIconBaseStyle,
                  WebkitMaskImage: 'url("/icon/arrow-right.svg")',
                  maskImage: 'url("/icon/arrow-right.svg")',
                }}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
