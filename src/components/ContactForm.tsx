"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const socialLinksMdPlus = [
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

const SUCCESS_ICON_SRC = "/icon/SuccessMessage.svg";
const ERROR_ICON_SRC = "/icon/ErrorSending.svg";

const SUCCESS_ICON_FALLBACK_SRC = "/icon/SuccessMessage.fallback.svg";
const ERROR_ICON_FALLBACK_SRC = "/icon/ErrorSending.fallback.svg";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    try {
      const formEl = e.currentTarget;
      const formData = new FormData(formEl);

      const res = await fetch("https://formspree.io/f/xzdakekn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        formEl.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const handleBackToHome = () => {
    setStatus("idle");
    window.history.replaceState(null, "", "#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTryAgain = () => {
    setStatus("idle");
  };

  return (
    <>
      {/* md+ (combined: Media Social + Contact Form) */}
      <section
        className="hidden w-full md:block"
        style={{ background: "var(--Base-Black, #000000)" }}
      >
        <div className="mx-auto w-full max-w-[1303px] px-12">
          <div
            aria-hidden
            className="w-full"
            style={{ borderTop: "1px solid var(--Neutral-800, #252B37)" }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1303px] px-12 pb-24 pt-24">
          <div className="grid grid-cols-2 gap-16">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 -top-[calc(6rem+1px)] z-10 grid h-[92px] w-[138px] rotate-180 grid-cols-3 grid-rows-2 gap-0 opacity-100 contrast-100 brightness-200"
              >
                <span
                  className="col-start-2 row-start-1 h-[46px] w-[46px] rounded-none opacity-100"
                  style={{ background: "var(--Primary-400, #1D3300)" }}
                />
                <span
                  className="col-start-1 row-start-2 h-[46px] w-[46px] rounded-none opacity-100"
                  style={{ background: "var(--Primary-400, #1D3300)" }}
                />
                <span
                  className="col-start-3 row-start-2 h-[46px] w-[46px] rounded-none opacity-100"
                  style={{ background: "var(--Primary-400, #1D3300)" }}
                />
              </div>

              <div className="absolute bottom-4 left-0 z-10 w-[420.8924865722656px] px-12">
                <div className="flex w-full items-center justify-center gap-4">
                  {socialLinksMdPlus.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-neutral-800"
                      style={{ background: "var(--Neutral-25, #FDFDFD)" }}
                    >
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={24}
                        height={24}
                        className="h-16 w-16 opacity-100"
                      />
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  <div
                    className="text-center font-sans text-xl font-bold leading-(--text-xl--line-height) tracking-[0px]"
                    style={{ color: "#FFFFFF" }}
                  >
                    Antonius
                  </div>
                  <div className="mt-2 flex w-full items-center justify-center gap-2">
                    <span
                      aria-hidden
                      className="h-3 w-3 rounded-full"
                      style={{ background: "var(--Primary-200, #91FF02)" }}
                    />
                    <span
                      className="font-sans text-md font-semibold leading-(--text-md--line-height) tracking-[0px]"
                      style={{ color: "var(--Neutral-400, #A4A7AE)" }}
                    >
                      Available for Work
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative h-[640px] w-[420.8924865722656px] overflow-hidden rounded-none bg-base-black">
                <div className="relative h-full w-full">
                  <Image
                    src="/Portrait of a Young Man 1.png"
                    alt=""
                    fill
                    sizes="420.8924865722656px"
                    className="object-cover grayscale contrast-95 brightness-25 opacity-100"
                  />

                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-black/25 to-black opacity-90"
                  />
                </div>
              </div>
            </div>

            <div className="relative -translate-x-30">
              <p
                id="contact-md"
                className="font-sans text-lg font-medium leading-(--text-lg--line-height) tracking-[0px]"
                style={{ color: "var(--Primary-200, #91FF02)" }}
              >
                CONTACT
              </p>

              <h2
                className="mt-4 uppercase [font-family:var(--font-display)] text-7xl font-extrabold leading-(--text-7xl--line-height) tracking-[0px]"
                style={{ color: "var(--Neutral-25, #FDFDFD)" }}
              >
                LET&apos;S GET IN TOUCH
              </h2>

              <form
                action="https://formspree.io/f/xzdakekn"
                method="POST"
                className="mt-10 flex flex-col gap-8"
                onSubmit={handleSubmit}
              >
                <label className="flex flex-col gap-2">
                  <span
                    className="font-sans text-md font-semibold leading-(--text-md--line-height) tracking-[0px]"
                    style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                  >
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="aspect-[641.11/56] h-auto w-full rounded-2xl border border-neutral-800 bg-base-black px-4 py-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-25 outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span
                    className="font-sans text-md font-semibold leading-(--text-md--line-height) tracking-[0px]"
                    style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="aspect-[641.11/56] h-auto w-full rounded-2xl border border-neutral-800 bg-base-black px-4 py-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-25 outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span
                    className="font-sans text-md font-semibold leading-(--text-md--line-height) tracking-[0px]"
                    style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                  >
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={7}
                    required
                    className="aspect-[641.11/180] h-auto w-full resize-none rounded-2xl border border-neutral-800 bg-base-black px-4 py-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-25 outline-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex aspect-[641.11/56] h-auto w-full items-center justify-center gap-2 rounded-full p-2 font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] shadow-[0px_4px_40px_0px_#91FF0266]"
                  style={{
                    background: "var(--Primary-200, #91FF02)",
                    color: "var(--Neutral-950, #0A0D12)",
                  }}
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="relative mt-30">
            <div
              aria-hidden
              className="w-full"
              style={{ borderTop: "1px solid var(--Neutral-800, #252B37)" }}
            />

            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 z-0 grid h-[92px] w-[138px] -translate-y-full grid-cols-3 grid-rows-2 gap-0 opacity-100 contrast-100 brightness-200"
            >
              <span className="col-start-2 row-start-1 h-[46px] w-[46px] rounded-none bg-primary-400 opacity-100" />
              <span className="col-start-1 row-start-2 h-[46px] w-[46px] rounded-none bg-primary-400 opacity-100" />
              <span className="col-start-3 row-start-2 h-[46px] w-[46px] rounded-none bg-primary-400 opacity-100" />
            </div>

            <div className="pt-8">
              <p
                className="text-center font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px]"
                style={{ color: "var(--Neutral-400, #A4A7AE)" }}
              >
                © 2025 Edwin Anderson. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* mobile (unchanged) */}
      <section
        className="w-full md:hidden"
        style={{ background: "var(--Base-Black, #000000)" }}
      >
        <div className="relative mx-auto w-full max-w-160 overflow-hidden px-4 py-10">
          <div className="relative z-10">
            <p
              id="contact"
              className="scroll-mt-20 font-sans text-md font-medium leading-(--text-md--line-height) tracking-[0px] md:scroll-mt-0"
              style={{ color: "var(--Primary-200, #91FF02)" }}
            >
              CONTACT
            </p>

            <h2
              className="mt-4 uppercase [font-family:var(--font-display)] text-4xl font-extrabold leading-(--text-4xl--line-height) tracking-[0px]"
              style={{ color: "var(--Neutral-25, #FDFDFD)" }}
            >
              LET&apos;S GET IN TOUCH
            </h2>

            <form
              ref={formRef}
              action="https://formspree.io/f/xzdakekn"
              method="POST"
              className="mt-6 flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-3">
                <span
                  className="font-sans text-sm font-semibold leading-(--text-sm--line-height) tracking-[0px]"
                  style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                >
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="h-12 w-full rounded-xl border border-neutral-800 bg-base-black px-4 py-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-25 outline-none"
                />
              </label>

              <label className="flex flex-col gap-3">
                <span
                  className="font-sans text-sm font-semibold leading-(--text-sm--line-height) tracking-[0px]"
                  style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                >
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-xl border border-neutral-800 bg-base-black px-4 py-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-25 outline-none"
                />
              </label>

              <label className="flex flex-col gap-3">
                <span
                  className="font-sans text-sm font-semibold leading-(--text-sm--line-height) tracking-[0px]"
                  style={{ color: "var(--Neutral-25, #FDFDFD)" }}
                >
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full aspect-[361/120] resize-none rounded-xl border border-neutral-800 bg-base-black px-4 py-2 font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-25 outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-full aspect-[361/48] items-center justify-center gap-2 rounded-full p-2 font-sans text-sm font-bold leading-(--text-sm--line-height) tracking-[0px] shadow-[0px_4px_40px_0px_#91FF0266]"
                style={{
                  background: "var(--Primary-200, #91FF02)",
                  color: "var(--Neutral-950, #0A0D12)",
                }}
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>

          <div className="relative mt-0">
            <div
              aria-hidden
              className="pointer-events-none absolute right-4 top-0 z-0 grid h-17.25 w-[103.5px] grid-cols-3 grid-rows-2 gap-0 opacity-100 contrast-100 brightness-200"
            >
              <span className="col-start-2 row-start-1 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
              <span className="col-start-1 row-start-2 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
              <span className="col-start-3 row-start-2 h-[34.5px] w-[34.5px] rounded-none bg-primary-400 opacity-100" />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-[69px] z-0 w-full"
              style={{ borderTop: "1px solid var(--Neutral-800, #252B37)" }}
            />

            <div className="pt-[100px] pb-4">
              <p
                className="text-center font-sans text-xs font-normal leading-(--text-xs--line-height) tracking-[0px]"
                style={{ color: "var(--Neutral-400, #A4A7AE)" }}
              >
                © 2025 Edwin Anderson. All rights reserved.
              </p>
            </div>
          </div>

          {status === "success" ? (
            <div
              className="fixed inset-0 z-[99999] flex items-center justify-center px-4 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Message sent"
            >
              <div aria-hidden className="absolute inset-0 bg-black/70" />

              <div className="relative w-[361px] h-[272px]">
                <div className="relative w-full rounded-2xl border border-neutral-800 bg-base-black px-6 pb-6 pt-16">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    {/* Use <img> with a local-file fallback. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SUCCESS_ICON_SRC}
                      alt=""
                      width={119.39}
                      height={110}
                      loading="eager"
                      fetchPriority="high"
                      className="h-[110px] w-[119.39px] select-none"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (!img.src.includes(SUCCESS_ICON_FALLBACK_SRC)) {
                          img.src = SUCCESS_ICON_FALLBACK_SRC;
                        }
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <div className="text-center font-sans text-lg font-bold leading-(--text-lg--line-height) tracking-[0px] text-neutral-25">
                      Message Sent Successfully!
                    </div>
                    <div className="mt-3 text-center font-sans text-sm font-normal leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                      Thank you for reaching out. I’ll get back to you as soon
                      as possible
                    </div>

                    <button
                      type="button"
                      onClick={handleBackToHome}
                      className="mt-8 inline-flex h-12 w-[313px] items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-sm font-bold leading-(--text-sm--line-height) tracking-[0px] text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266]"
                    >
                      BACK TO HOME
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {status === "error" ? (
            <div
              className="fixed inset-0 z-[99999] flex items-center justify-center px-4 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Message not sent"
            >
              <div aria-hidden className="absolute inset-0 bg-black/70" />

              <div className="relative w-[361px] h-[272px]">
                <div className="relative w-full rounded-2xl border border-neutral-800 bg-base-black px-6 pb-6 pt-16">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ERROR_ICON_SRC}
                      alt=""
                      width={133}
                      height={110}
                      loading="eager"
                      fetchPriority="high"
                      className="h-[107.32px] w-[119.45px] select-none"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (!img.src.includes(ERROR_ICON_FALLBACK_SRC)) {
                          img.src = ERROR_ICON_FALLBACK_SRC;
                        }
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <div className="text-center font-sans text-lg font-bold leading-(--text-lg--line-height) tracking-[0px] text-neutral-25">
                      Message not sent!
                    </div>
                    <div className="mt-3 text-center font-sans text-sm font-normal leading-(--text-sm--line-height) tracking-[0px] text-neutral-400">
                      Something went wrong on our end. Please try again in a
                      moment
                    </div>

                    <button
                      type="button"
                      onClick={handleTryAgain}
                      className="mt-8 inline-flex h-12 w-[313px] items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-sm font-bold leading-(--text-sm--line-height) tracking-[0px] text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266]"
                    >
                      TRY AGAIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {status === "success" ? (
        <div
          className="fixed inset-0 z-[99999] hidden items-center justify-center px-4 md:flex"
          role="dialog"
          aria-modal="true"
          aria-label="Message sent"
        >
          <div aria-hidden className="absolute inset-0 bg-black/70" />

          <div className="relative w-[479px] h-[286px]">
            <div className="relative w-full rounded-2xl border border-neutral-800 bg-base-black px-6 pb-6 pt-16">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                {/* Use <img> with a local-file fallback. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SUCCESS_ICON_SRC}
                  alt=""
                  width={147.68}
                  height={132.68}
                  loading="eager"
                  fetchPriority="high"
                  className="h-[132.68px] w-[147.68px] select-none"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes(SUCCESS_ICON_FALLBACK_SRC)) {
                      img.src = SUCCESS_ICON_FALLBACK_SRC;
                    }
                  }}
                />
              </div>

              <div className="text-center">
                <div className="font-sans text-xl font-bold leading-(--text-xl--line-height) tracking-[0px] text-neutral-25">
                  Message Sent Successfully!
                </div>
                <div className="mt-3 text-center font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-400">
                  Thank you for reaching out. I’ll get back to you as soon as
                  possible
                </div>

                <button
                  type="button"
                  onClick={handleBackToHome}
                  className="mt-8 inline-flex h-12 w-[361px] items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-sm font-bold leading-(--text-sm--line-height) tracking-[0px] text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266]"
                >
                  BACK TO HOME
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          className="fixed inset-0 z-[99999] hidden items-center justify-center px-4 md:flex"
          role="dialog"
          aria-modal="true"
          aria-label="Message not sent"
        >
          <div aria-hidden className="absolute inset-0 bg-black/70" />

          <div className="relative w-[479px] h-[286px]">
            <div className="relative w-full rounded-2xl border border-neutral-800 bg-base-black px-6 pb-6 pt-16">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ERROR_ICON_SRC}
                  alt=""
                  width={147.68}
                  height={132.68}
                  loading="eager"
                  fetchPriority="high"
                  className="h-[132.68px] w-[147.68px] select-none"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes(ERROR_ICON_FALLBACK_SRC)) {
                      img.src = ERROR_ICON_FALLBACK_SRC;
                    }
                  }}
                />
              </div>

              <div className="text-center">
                <div className="text-center font-sans text-xl font-bold leading-(--text-xl--line-height) tracking-[0px] text-neutral-25">
                  Message not sent!
                </div>
                <div className="mt-3 text-center font-sans text-md font-normal leading-(--text-md--line-height) tracking-[0px] text-neutral-400">
                  Something went wrong on our end. Please try again in a moment.
                </div>

                <button
                  type="button"
                  onClick={handleTryAgain}
                  className="mt-8 inline-flex h-12 w-[361px] items-center justify-center gap-2 rounded-full bg-primary-200 p-2 font-sans text-sm font-bold leading-(--text-sm--line-height) tracking-[0px] text-neutral-950 shadow-[0px_4px_40px_0px_#91FF0266]"
                >
                  TRY AGAIN
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ContactForm;
