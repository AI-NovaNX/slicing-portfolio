import Image from "next/image";

const socialLinks = [
  {
    href: "#",
    iconSrc: "/icon/Social%20Media/Dribble.svg",
    label: "Dribbble",
  },
  {
    href: "#",
    iconSrc: "/icon/Social%20Media/Instagram.svg",
    label: "Instagram",
  },
  {
    href: "#",
    iconSrc: "/icon/Social%20Media/Linkedin.svg",
    label: "LinkedIn",
  },
] as const;

export function MediaSocial() {
  return (
    <section
      className="w-full md:hidden"
      style={{ background: "var(--Base-Black, #000000)" }}
    >
      <div className="mx-auto w-full max-w-160 px-4 py-10">
        <div
          className="relative w-full overflow-hidden bg-base-black"
          style={{ aspectRatio: "361 / 520" }}
        >
          <Image
            src="/Portrait of a Young Man 1.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 393px"
            className="object-cover grayscale contrast-95 brightness-50"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-black/25 to-black opacity-90"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-4 z-40 grid h-17.25 w-[103.5px] rotate-180 grid-cols-3 grid-rows-2 gap-0 opacity-100 contrast-100 brightness-200"
          >
            <span className="col-start-2 row-start-1 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
            <span className="col-start-1 row-start-2 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
            <span className="col-start-3 row-start-2 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
          </div>

          <div className="absolute inset-x-0 bottom-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex"
                >
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 opacity-100"
                  />
                </a>
              ))}
            </div>

            <div className="mt-4 text-center">
              <div className="font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] text-base-white">
                Antonius
              </div>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-primary-200"
                />
                <span className="font-sans text-sm font-semibold leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSocial;
