import Image from "next/image";

const portfolioItems = [
  {
    imageSrc: "/Portfolio%20Card/Portfolio1.svg",
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo accumsan lorem.",
  },
  {
    imageSrc: "/Portfolio%20Card/Portfolio2.svg",
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo accumsan lorem.",
  },
  {
    imageSrc: "/Portfolio%20Card/Portfolio3.svg",
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo accumsan lorem.",
  },
  {
    imageSrc: "/Portfolio%20Card/Portfolio4.svg",
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo accumsan lorem.",
  },
  {
    imageSrc: "/Portfolio%20Card/Portfolio5.svg",
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo accumsan lorem.",
  },
  {
    imageSrc: "/Portfolio%20Card/Portfolio6.svg",
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo accumsan lorem.",
  },
] as const;

export function Portfolio() {
  return (
    <>
      {/* Mobile (unchanged) */}
      <section className="relative w-full bg-base-black md:hidden">
        <div className="mx-auto w-full max-w-160 px-6 pb-12 pt-12">
          <p className="text-center font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px] text-primary-200">
            PORTFOLIO
          </p>

          <h2 className="mt-2 text-center [font-family:var(--font-display)] text-4xl font-extrabold leading-(--text-4xl--line-height) tracking-[0px] text-neutral-25">
            SELECTED WORK
          </h2>

          <div className="mt-10 space-y-10">
            {portfolioItems.map((item, idx) => (
              <article key={`${item.imageSrc}-${idx}`} className="w-full">
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 opacity-100"
                  style={{ aspectRatio: "361 / 270" }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 361px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                <h3 className="mt-6 font-sans text-xl font-bold leading-(--text-xl--line-height) tracking-[0px] text-neutral-25">
                  {item.title}
                </h3>

                <p className="mt-2 font-sans text-sm font-normal leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          id="portfolio"
          aria-hidden
          className="pointer-events-none absolute left-81 top-[12.88px] z-40 h-0 w-0"
        />

        <div className="pointer-events-none absolute right-0 -rotate-90 top-[12.88px] z-40 grid h-17.25 w-[103.5px] grid-cols-3 grid-rows-2 gap-0 opacity-100 contrast-100 brightness-200">
          <span className="col-start-2 row-start-1 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
          <span className="col-start-1 row-start-2 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
          <span className="col-start-3 row-start-2 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
        </div>
      </section>

      {/* md+ */}
      <section className="relative hidden w-full bg-base-black md:block">
        <div className="mx-auto w-full max-w-[1303px] px-12 pb-24 pt-24">
          <p
            id="portfolio-md"
            className="text-center font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px] scroll-mt-24"
            style={{ color: "var(--Primary-200, #91FF02)" }}
          >
            PORTFOLIO
          </p>

          <h2
            className="mt-2 text-center [font-family:var(--font-display)] text-[48px] font-extrabold leading-[60px] tracking-[0px]"
            style={{ color: "var(--Neutral-25, #FDFDFD)" }}
          >
            SELECTED WORK
          </h2>

          <div className="mt-16 grid grid-cols-3 justify-items-center gap-x-8 gap-y-16">
            {portfolioItems.map((item, idx) => (
              <article
                key={`md-${item.imageSrc}-${idx}`}
                className="relative w-[381px]"
              >
                <div className="peer relative h-[284px] w-[381px] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 opacity-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="381px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-center opacity-0 scale-90 transform-gpu transition-[opacity,transform] duration-300 ease-out peer-hover:opacity-100 peer-hover:scale-100"
                >
                  <div
                    className="mt-[230px] flex h-[100px] w-[100px] items-center justify-center gap-2 rounded-[100px] p-2 font-sans text-lg font-bold leading-(--text-lg--line-height) tracking-[0px] opacity-100"
                    style={{
                      background: "var(--Neutral-25, #FDFDFD)",
                      color: "var(--Neutral-950, #0A0D12)",
                    }}
                  >
                    VISIT
                  </div>
                </div>

                <h3
                  className="relative z-0 mt-6 [font-family:var(--font-display)] text-[24px] font-bold leading-[36px] tracking-[0px]"
                  style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 font-sans text-sm font-normal leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
