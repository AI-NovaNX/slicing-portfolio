"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skillIcons = [
  { src: "/icon/js.svg", alt: "JavaScript" },
  { src: "/icon/css.svg", alt: "CSS" },
  { src: "/icon/html5.svg", alt: "HTML5" },
  { src: "/icon/js-express.svg", alt: "Express" },
  { src: "/icon/mongoDB.svg", alt: "MongoDB" },
  { src: "/icon/React.svg", alt: "React" },
  { src: "/icon/ts.svg", alt: "TypeScript" },
  { src: "/icon/docker.svg", alt: "Docker" },
] as const;

const skillLevels = [
  { label: "React JS", percent: 50 },
  { label: "HTML", percent: 80 },
  { label: "Tailwind CSS", percent: 90 },
  { label: "HTML", percent: 100 },
  { label: "Docker", percent: 70 },
  { label: "Javascript", percent: 90 },
] as const;

function SkillBar({
  label,
  percent,
  animated = false,
  active = true,
  sequenceIndex,
  sequenceCount,
  labelSize = "sm",
  barHeight = "sm",
  percentSize = "sm",
}: {
  label: string;
  percent: number;
  animated?: boolean;
  active?: boolean;
  sequenceIndex?: number;
  sequenceCount?: number;
  labelSize?: "sm" | "lg";
  barHeight?: "sm" | "mdPlus";
  percentSize?: "sm" | "xl";
}) {
  const shouldReduceMotion = useReducedMotion();

  const shouldAnimate = animated && active && !shouldReduceMotion;
  const BarContainer = shouldAnimate ? motion.div : "div";
  const targetWidth = active ? `${percent}%` : "0%";

  const useSequential =
    typeof sequenceIndex === "number" && typeof sequenceCount === "number";

  const barProps = shouldAnimate
    ? useSequential
      ? (() => {
          const stepSeconds = 0.8;
          const fillSeconds = 0.55;
          const resetSeconds = 0.25;

          const cycleSeconds = Math.max(sequenceCount * stepSeconds, 0.01);
          const startSeconds = sequenceIndex * stepSeconds;
          const holdEndSeconds = Math.max(cycleSeconds - resetSeconds, 0);
          const fillEndSeconds = Math.min(
            startSeconds + fillSeconds,
            Math.max(holdEndSeconds - 0.05, startSeconds),
          );

          const widths: string[] = ["0%"];
          const times: number[] = [0];

          const startFrac = startSeconds / cycleSeconds;
          const fillFrac = fillEndSeconds / cycleSeconds;
          const holdFrac = holdEndSeconds / cycleSeconds;

          if (startFrac > 0) {
            widths.push("0%");
            times.push(startFrac);
          }

          widths.push(targetWidth);
          times.push(fillFrac);

          widths.push(targetWidth);
          times.push(holdFrac);

          widths.push("0%");
          times.push(1);

          return {
            initial: { width: 0 },
            animate: { width: widths },
            transition: {
              type: "tween",
              duration: cycleSeconds,
              ease: "easeOut",
              times,
              repeat: Infinity,
              repeatType: "loop",
            },
            style: { willChange: "width" },
          };
        })()
      : {
          initial: { width: 0 },
          animate: { width: ["0%", targetWidth, "0%"] },
          transition: {
            type: "tween",
            duration: 1.6,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.2,
          },
          style: { willChange: "width" },
        }
    : { style: { width: targetWidth } };

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-neutral-800"
        />

        <BarContainer
          className={`relative rounded-2xl ${barHeight === "mdPlus" ? "h-16" : "h-13"}`}
          {...(barProps as Record<string, unknown>)}
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "var(--Primary-300, #3A6601)",
              opacity: 1,
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundImage:
                "repeating-linear-gradient(65deg, var(--Neutral-25, #FDFDFD) 0, var(--Neutral-25, #FDFDFD) 0.65px, transparent 0.65px, transparent 10px)",
              opacity: 0.08,
            }}
          />

          <span
            className={`absolute left-4 top-1/2 -translate-y-1/2 font-sans font-semibold ${
              labelSize === "lg"
                ? "text-lg leading-(--text-lg--line-height) tracking-[0px]"
                : "text-sm leading-(--text-sm--line-height) tracking-normal"
            }`}
            style={{ color: "var(--Neutral-25, #FDFDFD)" }}
          >
            {label}
          </span>
        </BarContainer>
      </div>

      <span
        className={`text-right font-sans font-semibold ${
          percentSize === "xl"
            ? "w-16 text-xl leading-(--text-xl--line-height) tracking-[0px] text-base-white"
            : "w-12 text-sm leading-(--text-sm--line-height) tracking-normal text-neutral-25"
        }`}
      >
        {percent}%
      </span>
    </div>
  );
}

export function Skills() {
  const barsRef = useRef<HTMLDivElement | null>(null);
  const barsInView = useInView(barsRef, { amount: 0.2, once: true });

  const mdBarsRef = useRef<HTMLDivElement | null>(null);
  const mdBarsInView = useInView(mdBarsRef, { amount: 0.2, once: true });

  return (
    <section id="skills" className="w-full bg-base-black">
      {/* Mobile */}
      <div className="md:hidden">
        <div className="mx-auto w-full max-w-160 px-6 pb-14 pt-12">
          <p
            className="font-sans text-md font-medium uppercase leading-(--text-md--line-height) tracking-normal"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--Primary-200, #91FF02)",
            }}
          >
            SKILLS
          </p>

          <h2
            className="mt-3 [font-family:var(--font-display)] text-4xl font-extrabold uppercase leading-(--text-4xl--line-height) tracking-normal"
            style={{ color: "var(--Neutral-25, #FDFDFD)" }}
          >
            <span className="block">SKILLS THAT BRING</span>
            <span className="block">IDEAS TO LIFE</span>
          </h2>

          <div className="mt-8 grid grid-cols-4 justify-items-center gap-x-6 gap-y-6">
            {skillIcons.map((icon) => (
              <div
                key={icon.src}
                className="flex size-12 items-center justify-center rounded-full border border-neutral-800"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
            ))}
          </div>

          <div ref={barsRef} className="mt-10 flex flex-col gap-4">
            {skillLevels.map((skill, idx) => (
              <SkillBar
                key={`${skill.label}-${skill.percent}-${idx}`}
                label={skill.label}
                percent={skill.percent}
                animated
                sequenceIndex={idx}
                sequenceCount={skillLevels.length}
                active={barsInView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* md+ */}
      <div className="relative hidden md:block">
        <div className="mx-auto w-full max-w-288 px-12 pb-24 pt-24">
          <div className="grid grid-cols-2 items-start gap-20">
            <div className="min-w-0">
              <p className="font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px] text-primary-200">
                SKILLS
              </p>

              <h2 className="mt-3 [font-family:var(--font-display)] text-7xl font-extrabold uppercase leading-(--text-7xl--line-height) tracking-[0px] text-neutral-25">
                <span className="block">SKILLS THAT BRING</span>
                <span className="block">IDEAS TO LIFE</span>
              </h2>

              <div className="mt-10 grid w-fit grid-cols-4 gap-x-6 gap-y-6">
                {skillIcons.map((icon) => (
                  <div
                    key={`md-${icon.src}`}
                    className="flex size-16 items-center justify-center rounded-full border border-neutral-800"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 pt-16">
              <div ref={mdBarsRef} className="flex flex-col gap-6">
                {skillLevels.map((skill, idx) => (
                  <SkillBar
                    key={`md-${skill.label}-${skill.percent}-${idx}`}
                    label={skill.label}
                    percent={skill.percent}
                    animated
                    sequenceIndex={idx}
                    sequenceCount={skillLevels.length}
                    active={mdBarsInView}
                    labelSize="lg"
                    barHeight="mdPlus"
                    percentSize="xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
