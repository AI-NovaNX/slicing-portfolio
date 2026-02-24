import Image from "next/image";

const workingWithMe = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
] as const;

const anotherTalent = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
] as const;

function BulletRow({
  text,
  muted = false,
  iconSize = 24,
  textClassName,
}: {
  text: string;
  muted?: boolean;
  iconSize?: number;
  textClassName?: string;
}) {
  const iconClassName = `${iconSize === 32 ? "h-8 w-8" : "h-6 w-6"}${muted ? " opacity-40" : ""}`;

  return (
    <li className="flex items-center gap-4 border-b border-neutral-800 py-4 last:border-b-0">
      <Image
        src="/icon/green-star.svg"
        alt=""
        width={iconSize}
        height={iconSize}
        className={iconClassName}
      />
      <span
        className={
          textClassName ??
          (muted
            ? "font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-400"
            : "font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] text-neutral-25")
        }
      >
        {text}
      </span>
    </li>
  );
}

export function Working() {
  return (
    <section id="working" className="relative w-full bg-base-black">
      {/* Mobile */}
      <div className="relative md:hidden">
        <div className="mx-auto w-full max-w-160 px-6 pb-12 pt-12">
          <p className="text-center font-sans text-md font-medium uppercase leading-(--text-md--line-height) tracking-[0px] text-primary-200">
            WORKING
          </p>

          <h2 className="mt-2 text-center [font-family:var(--font-display)] text-4xl font-extrabold uppercase leading-(--text-4xl--line-height) tracking-[0px] text-neutral-25">
            WHY CHOOSE ME?
          </h2>

          <div className="mt-4">
            <p className="text-center font-sans text-xl font-bold uppercase leading-(--text-xl--line-height) tracking-[0px] text-neutral-25">
              WORKING WITH ME
            </p>

            <div className="mt-6 flex items-center justify-center">
              <div className="relative size-16 overflow-hidden rounded-full border border-neutral-800 bg-neutral-900">
                <Image
                  src="/Portrait of a Young Man 1.svg"
                  alt=""
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
            </div>

            <ul className="mt-6">
              {workingWithMe.map((item) => (
                <BulletRow key={item} text={item} />
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-center font-sans text-md font-bold uppercase leading-(--text-md--line-height) tracking-normal text-neutral-25">
              ANOTHER TALENT
            </p>

            <div className="mt-6 flex items-center justify-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
                <Image
                  src="/icon/Working%20with%20me/Avatar.svg"
                  alt="Avatar of another talent"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            <ul className="mt-6">
              {anotherTalent.map((item) => (
                <BulletRow key={item} text={item} muted />
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="relative z-75 mx-auto inline-flex h-12 w-full max-w-[361px] items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-sm font-bold uppercase leading-5 tracking-normal text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266]"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>

      {/* md+ */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-288 px-12 pb-24 pt-24">
          <p className="text-center font-sans text-lg font-medium uppercase leading-(--text-lg--line-height) tracking-[0px] text-primary-200">
            WORKING
          </p>

          <h2 className="mt-3 text-center [font-family:var(--font-display)] text-[48px] font-extrabold uppercase leading-[60px] tracking-[0px] text-neutral-25">
            WHY CHOOSE ME?
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-20">
            <div className="min-w-0">
              <p className="text-center [font-family:var(--font-display)] text-3xl font-bold uppercase leading-(--text-3xl--line-height) tracking-[0px] text-neutral-25">
                WORKING WITH ME
              </p>

              <div className="mt-8 flex justify-center">
                <div className="relative size-20 overflow-hidden rounded-full border border-neutral-800 bg-neutral-900">
                  <Image
                    src="/Portrait of a Young Man 1.svg"
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <ul className="mt-10">
                {workingWithMe.map((item) => (
                  <BulletRow
                    key={`md-working-${item}`}
                    text={item}
                    iconSize={32}
                    textClassName="font-sans text-xl font-bold leading-(--text-xl--line-height) tracking-[0px] text-neutral-25"
                  />
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <p className="text-center [font-family:var(--font-display)] text-3xl font-bold uppercase leading-(--text-3xl--line-height) tracking-[0px] text-neutral-25">
                ANOTHER TALENT
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex size-20 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
                  <Image
                    src="/icon/Working%20with%20me/Avatar.svg"
                    alt="Avatar of another talent"
                    width={80}
                    height={80}
                    className="h-20 w-20"
                  />
                </div>
              </div>

              <ul className="mt-10">
                {anotherTalent.map((item) => (
                  <BulletRow
                    key={`md-another-${item}`}
                    text={item}
                    muted
                    iconSize={32}
                    textClassName="[font-family:var(--font-display)] text-[24px] font-normal leading-[36px] tracking-[0px] text-neutral-400"
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="#contact"
              className="relative z-75 inline-flex h-14 w-[240px] items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-md font-bold uppercase leading-(--text-md--line-height) tracking-[0px] text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266]"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Working;
