import Image from "next/image";

const experiences = [
  {
    year: "2020 – 2022",
    role: "Frontend Developer",
    company: "upwork",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    year: "2020 – 2022",
    role: "Frontend Developer",
    company: "Trello",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    year: "2020 – 2022",
    role: "Frontend Developer",
    company: "zoom",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    year: "2020 – 2022",
    role: "Frontend Developer",
    company: "zapier",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
] as const;

const companyLogoSrc: Record<string, string> = {
  upwork: "/company-logo/Work%20Experience%20Card/upwork.svg",
  trello: "/company-logo/Work%20Experience%20Card/trello.svg",
  zoom: "/company-logo/Work%20Experience%20Card/zoom.svg",
  zapier: "/company-logo/Work%20Experience%20Card/zapier.svg",
};

export function Experience() {
  return (
    <section id="experience" className="w-full">
      {/* Mobile (unchanged) */}
      <div className="relative w-full bg-base-black md:hidden">
        <div className="mx-auto w-full max-w-160 px-6 pb-12 pt-12">
          <p className="text-center font-sans text-md font-medium uppercase leading-(--text-md--line-height) tracking-[0px] text-primary-200">
            EXPERIENCE
          </p>

          <h2 className="mt-2 text-center [font-family:var(--font-display)] text-4xl font-extrabold uppercase leading-(--text-4xl--line-height) tracking-[0px] text-neutral-25">
            <span className="block">PROFESIONAL</span>
            <span className="block">WORK</span>
          </h2>

          <div className="relative mt-10">
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-base-black"
            />

            <ul className="space-y-6">
              {experiences.map((exp, idx) => (
                <li
                  key={`${exp.company}-${idx}`}
                  className="relative flex gap-4"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-neutral-800 bg-neutral-950 font-sans text-sm font-bold leading-(--text-sm--line-height) tracking-[0px] text-primary-200">
                    {idx + 1}
                  </div>

                  <div
                    className="w-full min-w-0 flex-1 rounded-2xl border border-neutral-800 bg-base-black p-4 opacity-100"
                    style={{ aspectRatio: "305 / 342" }}
                  >
                    <p className="font-sans text-sm font-normal leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                      {exp.year}
                    </p>

                    <p className="mt-2 font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] text-neutral-25">
                      {exp.role}
                    </p>

                    {companyLogoSrc[exp.company.toLowerCase()] ? (
                      <div className="mt-1 flex items-center">
                        <Image
                          src={companyLogoSrc[exp.company.toLowerCase()]}
                          alt={`${exp.company} logo`}
                          width={76}
                          height={32}
                          className="h-8 w-19 object-contain"
                        />
                      </div>
                    ) : (
                      <p className="mt-1 font-sans text-lg font-bold leading-(--text-lg--line-height) tracking-[0px] text-primary-200">
                        {exp.company}
                      </p>
                    )}

                    <p className="mt-4 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-400">
                      {exp.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* md+ */}
      <div className="relative hidden w-full overflow-hidden bg-base-black md:block">
        <div className="mx-auto w-full max-w-288 px-12 pb-24 pt-24">
          <p className="text-center font-sans text-lg font-medium uppercase leading-(--text-lg--line-height) tracking-[0px] text-primary-200">
            EXPERIENCE
          </p>

          <h2 className="mt-2 text-center [font-family:var(--font-display)] text-7xl font-extrabold uppercase leading-(--text-7xl--line-height) tracking-[0px] text-neutral-25">
            PROFESIONAL WORK
          </h2>

          <div className="relative mt-16">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 w-px -translate-x-1/2 bg-base-black"
              style={{
                top: "calc(286px / 2 + 48px / 2 - 6px)",
                bottom: "calc(286px / 2 + 48px / 2 - 6px)",
              }}
            />

            <ul className="space-y-16">
              {experiences.map((exp, idx) => {
                const isRight = idx % 2 === 0;
                const logoSrc = companyLogoSrc[exp.company.toLowerCase()];

                const Card = (
                  <div
                    className="w-127.5 rounded-3xl border border-neutral-800 bg-base-black p-6 opacity-100"
                    style={{ aspectRatio: "510 / 286" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px] text-neutral-400">
                          {exp.year}
                        </p>
                        <p className="mt-2 [font-family:var(--font-display)] text-2xl font-bold leading-(--text-2xl--line-height) tracking-[0px] text-neutral-25">
                          {exp.role}
                        </p>
                      </div>

                      {logoSrc ? (
                        <Image
                          src={logoSrc}
                          alt={`${exp.company} logo`}
                          width={114}
                          height={48}
                          className="h-12 w-28.5 shrink-0 object-contain opacity-100"
                        />
                      ) : null}
                    </div>

                    <p className="mt-4 font-sans text-sm font-normal leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                      {exp.description}
                    </p>
                  </div>
                );

                return (
                  <li
                    key={`md-${exp.company}-${idx}`}
                    className="relative flex items-center"
                  >
                    <div className="flex w-1/2 justify-end pr-16">
                      {isRight ? null : Card}
                    </div>

                    <div className="flex w-1/2 justify-start pl-16">
                      {isRight ? Card : null}
                    </div>

                    <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full border border-neutral-800 bg-base-black p-2 font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] text-primary-200 opacity-100">
                      {idx + 1}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-12 right-0  z-40 grid h-23 w-34.5 -rotate-90 grid-cols-3 grid-rows-2 gap-0 contrast-100 brightness-200">
          <span className="col-start-2 row-start-1 h-11.5 w-11.5 bg-primary-400" />
          <span className="col-start-1 row-start-2 h-11.5 w-11.5 bg-primary-400" />
          <span className="col-start-3 row-start-2 h-11.5 w-11.5 bg-primary-400" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
