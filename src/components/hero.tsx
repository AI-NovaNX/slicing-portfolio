import Image from "next/image";

import UserFeedbackCard from "@/components/UserFeedbackCard";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-neutral-950 md:hidden"
    >
      <div className="mx-auto w-full max-w-160 px-6 md:max-w-288 md:px-12">
        <div className="relative">
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden aspect-[348.07/461.02] min-h-128.25 [--green-start:53%] isolate">
            <div className="pointer-events-none absolute inset-0 z-0 rotate-[-1.45deg]">
              <div className="relative h-full w-full">
                <Image
                  src="/Portrait of a Young Man 1.svg"
                  alt="Portrait"
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="object-fill grayscale contrast-95 brightness-70"
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 top-[42%] bottom-0 bg-linear-to-b from-transparent via-neutral-950/80 to-black mix-blend-multiply opacity-90" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 -right-px left-(--green-start) z-10 bg-primary-200 opacity-40 mix-blend-color" />

            <div className="pointer-events-none absolute inset-y-0 -right-px left-(--green-start) z-10 bg-linear-to-b from-primary-200 to-black to-100% mix-blend-color" />

            <div className="pointer-events-none absolute top-[42%] bottom-0 -right-px left-(--green-start) z-15 bg-linear-to-b from-transparent via-black/60 to-black mix-blend-multiply opacity-90" />

            <div className="pointer-events-none absolute inset-0 z-20 bg-black opacity-26" />

            <div className="pointer-events-none absolute top-75 left-0 z-50 grid h-17.25 w-[103.5px] grid-cols-3 grid-rows-2 gap-0 contrast-100 brightness-200">
              <span className="col-start-2 row-start-1 h-[34.5px] w-[34.5px] bg-primary-400" />
              <span className="col-start-1 row-start-2 h-[34.5px] w-[34.5px] bg-primary-400" />
              <span className="col-start-3 row-start-2 h-[34.5px] w-[34.5px] bg-primary-400" />
            </div>
          </div>

          <UserFeedbackCard className="absolute inset-x-0 top-100 min-w-87.5 opacity-100" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
