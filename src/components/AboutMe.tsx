import Image from "next/image";

export function AboutMe() {
  return (
    <div id="about" className="w-full">
      {/* Mobile */}
      <section
        id="about-me"
        className="relative w-full bg-base-black md:hidden"
      >
        <div className="mx-auto w-full max-w-160 px-6 pb-6 pt-12">
          <p
            className="text-center font-sans text-md font-medium uppercase leading-(--text-md--line-height) tracking-normal"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--Primary-200, #91FF02)",
            }}
          >
            ABOUT ME
          </p>

          <h2 className="mt-3 text-center [font-family:var(--font-display)] text-4xl font-extrabold uppercase leading-(--text-4xl--line-height) tracking-normal text-neutral-25">
            <span className="block">CRAFTING SEAMLESS</span>
            <span
              className="block"
              style={{ color: "var(--Primary-200, #91FF02)" }}
            >
              HIGH-PERFORMANCE
            </span>
            <span className="block">
              <span style={{ color: "var(--Primary-200, #91FF02)" }}>WEB</span>{" "}
              <span className="text-neutral-25">EXPERIENCES</span>
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-86 text-center font-sans text-md font-medium leading-(--text-md--line-height) tracking-normal"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--Neutral-400, #A4A7AE)",
            }}
          >
            I love turning designs into interactive, high-performance websites.
            With a keen eye for detail and a deep understanding of frontend
            technologies, I create smooth and visually appealing user
            experiences.
          </p>

          <div className="relative mt-10 h-[264px] w-[calc(100%+48px)] -mx-6">
            <div
              className="absolute top-0"
              style={{ left: 40, width: 170, height: 127, opacity: 1 }}
            >
              <Image
                src="/AboutMe/image.svg"
                alt="About me preview"
                fill
                sizes="170px"
                className="rounded-none object-contain"
                priority
              />
            </div>

            <div
              className="absolute"
              style={{ top: 45, left: 224, width: 134, height: 99, opacity: 1 }}
            >
              <Image
                src="/AboutMe/image22.svg"
                alt="About me preview"
                fill
                sizes="134px"
                className="rounded-none object-contain"
              />
            </div>

            <div
              className="absolute"
              style={{
                top: 164,
                left: 144,
                width: 132.467529296875,
                height: 100,
                opacity: 1,
              }}
            >
              <Image
                src="/AboutMe/image32.svg"
                alt="Portfolio preview"
                fill
                sizes="133px"
                className="rounded-none object-contain"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -left-4 z-10 grid grid-cols-3 grid-rows-2 gap-0"
          style={{
            top: 635,
            width: 103.5,
            height: 69,
            opacity: 1,
            transform: "rotate(90deg)",
          }}
        >
          <span
            className="col-start-2 row-start-1 h-[34.5px] w-[34.5px]"
            style={{ background: "var(--Primary-400, #1D3300)" }}
          />
          <span
            className="col-start-1 row-start-2 h-[34.5px] w-[34.5px]"
            style={{ background: "var(--Primary-400, #1D3300)" }}
          />
          <span
            className="col-start-3 row-start-2 h-[34.5px] w-[34.5px]"
            style={{ background: "var(--Primary-400, #1D3300)" }}
          />
        </div>
      </section>

      {/* md+ */}
      <section
        id="about-me-md"
        className="relative hidden h-[604px] w-full overflow-hidden bg-base-black md:block"
      >
        <div className="relative mx-auto h-full w-full max-w-288 px-12">
          <div className="relative z-10 mx-auto flex h-full max-w-[980px] flex-col items-center text-center">
            <p className="mt-30 font-sans text-lg font-medium uppercase leading-(--text-lg--line-height) tracking-[0px] text-center text-primary-200">
              ABOUT ME
            </p>

            <h2 className="mt-10 [font-family:var(--font-display)] text-7xl font-extrabold uppercase leading-[1.05] tracking-normal text-neutral-25">
              <span className="block leading-(--text-7xl--line-height) tracking-[0px] text-neutral-25">
                CRAFTING SEAMLESS
              </span>
              <span className="block leading-(--text-7xl--line-height) tracking-[0px] text-primary-200">
                HIGH-PERFORMANCE WEB
              </span>
              <span className="block leading-(--text-7xl--line-height) tracking-[0px] text-neutral-25">
                EXPERIENCES
              </span>
            </h2>

            <p className="mx-auto mt-14 max-w-[980px] font-sans text-xl font-medium leading-(--text-xl--line-height) tracking-normal text-neutral-400">
              I love turning designs into interactive, high-performance
              websites. With a keen eye for detail and a deep understanding of
              frontend technologies, I create smooth and visually appealing user
              experiences.
            </p>
          </div>

          {/* Floating previews */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div className="pointer-events-auto absolute left-[72px] top-[60px] h-[178px] w-[238px] opacity-100">
              <Image
                src="/AboutMe/image.svg"
                alt=""
                fill
                sizes="238px"
                className="rounded-none object-contain"
                priority
              />
            </div>

            <div className="pointer-events-auto absolute right-[40px] top-[80px] h-[187px] w-[250px] opacity-100">
              <Image
                src="/AboutMe/image22.svg"
                alt=""
                fill
                sizes="250px"
                className="rounded-none object-contain"
              />
            </div>

            <div className="pointer-events-auto absolute right-[250px] top-[320px] h-[88px] w-[117px] opacity-100">
              <Image
                src="/AboutMe/image32.svg"
                alt=""
                fill
                sizes="117px"
                className="rounded-none object-contain"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -left-4 bottom-6 z-10 grid grid-cols-3 grid-rows-2 gap-0"
          style={{
            width: 137.9961700439453,
            height: 92.00027465820312,
            opacity: 1,
            transform: "rotate(90deg)",
          }}
        >
          <span
            className="col-start-2 row-start-1"
            style={{
              width: 45.99872334798177,
              height: 46.00013732910156,
              opacity: 1,
              background: "var(--Primary-400, #1D3300)",
            }}
          />
          <span
            className="col-start-1 row-start-2"
            style={{
              width: 45.99872334798177,
              height: 46.00013732910156,
              opacity: 1,
              background: "var(--Primary-400, #1D3300)",
            }}
          />
          <span
            className="col-start-3 row-start-2"
            style={{
              width: 45.99872334798177,
              height: 46.00013732910156,
              opacity: 1,
              background: "var(--Primary-400, #1D3300)",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
