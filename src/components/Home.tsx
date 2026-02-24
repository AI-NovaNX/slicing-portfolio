import Image from "next/image";

function HomeIntroText({
  headingClassName,
  headingId,
  introRowId,
  introTextId,
}: {
  headingClassName: string;
  headingId?: string;
  introRowId?: string;
  introTextId?: string;
}) {
  return (
    <>
      <div id={introRowId} className="flex items-center gap-3">
        <Image
          src="/icon/header/line5.svg"
          alt=""
          width={24}
          height={1}
          className="h-px w-6 object-contain md:hidden"
          priority
        />
        <Image
          src="/icon/header/line5-114.svg"
          alt=""
          width={114}
          height={1}
          className="hidden h-px object-contain md:block"
          style={{ width: 60 }}
          priority
        />
        <p
          id={introTextId}
          className="relative font-sans text-base font-medium leading-6 tracking-normal text-neutral-25 md:text-xl md:leading-8.5 md:text-center"
          style={{ zIndex: 80 }}
        >
          Hi, I am Antonius Frontend Developer
        </p>
      </div>

      <h1
        id={headingId}
        className={`relative mt-6 [font-family:var(--font-display)] text-5xl font-extrabold uppercase leading-[1.05] tracking-normal text-neutral-25 ${headingClassName}`}
        style={{ zIndex: 80 }}
      >
        <span className="block">BUILDING FAST &amp;</span>
        <span className="block">
          <span className="text-primary-200">INTERACTIVE</span> WEB
        </span>
        <span className="block">EXPERIENCES.</span>
      </h1>

      <p className="mt-6 w-full text-left font-sans text-lg font-medium leading-7 tracking-normal text-neutral-400 md:w-[clamp(0px,50vw,597px)] md:text-xl md:leading-8.5">
        Bridging creativity and functionality to deliver stunning, user-friendly
        web applications
      </p>
    </>
  );
}

function HomeCta() {
  return (
    <div className="relative">
      <a
        href="#contact"
        className="relative z-75 mx-auto inline-flex h-12 w-full max-w-90.25 items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-sm font-bold uppercase leading-5 tracking-normal text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266] md:h-14 md:max-w-75 md:text-md"
      >
        HIRE ME
      </a>
    </div>
  );
}

export function Home() {
  return (
    <>
      <section className="relative w-full bg-base-black md:hidden">
        <div className="mx-auto h-117.5 w-full max-w-160 px-6">
          <div className="flex h-full flex-col pt-10">
            <div>
              <HomeIntroText headingClassName="" />
            </div>

            <div className="relative mt-auto pb-10">
              <HomeCta />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative hidden w-full bg-base-black md:block md:h-198.5 md:overflow-hidden"
        style={{ borderBottom: "1px solid var(--Neutral-800, #252B37)" }}
      >
        <div className="mx-auto w-full max-w-160 px-6 pb-14 pt-12 md:max-w-288 md:px-12 md:pt-35.25">
          <HomeIntroText
            headingClassName="sm:text-6xl md:text-[80px] md:leading-[1]"
            headingId="home-heading-md"
            introRowId="home-intro-row-md"
            introTextId="home-intro-text-md"
          />
          <div className="mt-10">
            <HomeCta />
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 top-175.5 z-40 grid h-23 w-34.5 grid-cols-3 grid-rows-2 gap-0 contrast-100 brightness-200">
          <span className="col-start-2 row-start-1 h-11.5 w-11.5 bg-primary-400" />
          <span className="col-start-1 row-start-2 h-11.5 w-11.5 bg-primary-400" />
          <span className="col-start-3 row-start-2 h-11.5 w-11.5 bg-primary-400" />
        </div>

        <div
          id="home-guides-end"
          aria-hidden
          className="pointer-events-none absolute inset-x-0 h-0"
          style={{ bottom: -1 }}
        />
      </section>
    </>
  );
}

export default Home;
