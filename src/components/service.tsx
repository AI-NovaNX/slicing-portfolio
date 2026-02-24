import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    number: "02",
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for better.",
  },
  {
    number: "03",
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
] as const;

export function Service() {
  return (
    <section id="service" className="w-full bg-base-black">
      {/* Mobile */}
      <div className="md:hidden">
        <div className="mx-auto w-full max-w-160 px-6 pb-12 pt-10">
          <p className="font-sans text-md font-medium uppercase leading-(--text-md--line-height) tracking-normal text-primary-200">
            SERVICE
          </p>

          <h2 className="mt-2 [font-family:var(--font-display)] text-4xl font-extrabold uppercase leading-(--text-4xl--line-height) tracking-normal text-neutral-25">
            <span className="block">MY SERVICE</span>
            <span className="block">EXPERTISE</span>
          </h2>

          <p className="mt-4 font-sans text-md font-medium leading-(--text-md--line-height) tracking-normal text-neutral-400">
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>

          <div className="mt-8 flex flex-col">
            {services.map((item, idx) => (
              <div key={`${item.title}-${idx}`} className="py-6 first:pt-0">
                <div className="flex">
                  <div className="relative -top-2 flex w-full flex-col items-start">
                    <span className="font-sans text-md font-semibold leading-(--text-md--line-height) tracking-normal text-neutral-400">
                      {item.number}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 w-full border-t border-neutral-800"
                    />
                  </div>
                </div>

                <div className="mt-1 flex flex-col gap-1">
                  <div className="flex size-10 items-center justify-center rounded-lg">
                    <Image
                      src="/icon/Service Card/monitor-01.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-sans text-xl font-semibold leading-(--text-xl--line-height) tracking-normal text-neutral-25">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-normal text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* md+ */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-288 px-12 pb-24 pt-24">
          <div className="flex items-start justify-between gap-16">
            <div className="min-w-0">
              <p className="font-sans text-lg font-medium uppercase leading-(--text-lg--line-height) tracking-normal text-primary-200">
                SERVICE
              </p>

              <h2 className="mt-3 [font-family:var(--font-display)] text-7xl font-extrabold uppercase leading-(--text-7xl--line-height) tracking-normal text-neutral-25">
                <span className="block">MY SERVICE</span>
                <span className="block">EXPERTISE</span>
              </h2>
            </div>

            <p className="mt-10 max-w-126 text-right font-sans text-xl font-medium leading-(--text-xl--line-height) tracking-normal text-neutral-400">
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-16">
            {services.map((item, idx) => (
              <div key={`${item.title}-md-${idx}`} className="min-w-0">
                <div className="flex w-full flex-col items-start">
                  <span className="font-sans text-xl font-semibold leading-(--text-xl--line-height) tracking-normal text-neutral-400">
                    {item.number}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 w-full border-t border-neutral-800"
                  />
                </div>

                <div className="mt-6 flex size-10 items-center justify-center">
                  <Image
                    src="/icon/Service Card/monitor-01.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>

                <h3 className="mt-3 [font-family:var(--font-display)] text-3xl font-semibold leading-(--text-3xl--line-height) tracking-normal text-white">
                  {item.title}
                </h3>

                <p className="mt-6 font-sans text-xl font-normal leading-(--text-xl--line-height) tracking-normal text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
