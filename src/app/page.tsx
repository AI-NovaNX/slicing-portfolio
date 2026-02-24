import Image from "next/image";

import HomeTop from "@/components/Home";
import HomeGuides from "@/components/HomeGuides";
import Hero from "@/components/hero";
import Service from "@/components/service";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import UserFeedbackCard from "@/components/UserFeedbackCard";
import Working from "@/components/Working";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MediaSocial from "@/components/MediaSocial";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <div id="home" className="relative -mt-20 pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 right-0 z-10 hidden overflow-hidden md:block"
        >
          <div className="relative h-full w-full [--green-start:53%] isolate">
            <div className="pointer-events-none absolute inset-0 z-0 rotate-[-1.45deg]">
              <div className="relative h-full w-full">
                <Image
                  src="/Portrait of a Young Man 1.png"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-fill grayscale contrast-95 brightness-70"
                />

                <div className="pointer-events-none absolute inset-x-0 top-[42%] bottom-0 bg-linear-to-b from-transparent via-neutral-950/80 to-black mix-blend-multiply opacity-90" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 -right-px left-(--green-start) z-10 bg-primary-200 opacity-90 mix-blend-color" />

            <div className="pointer-events-none absolute inset-y-0 -right-px left-(--green-start) z-10 bg-linear-to-b from-primary-200 to-black to-100% mix-blend-color" />

            <div className="pointer-events-none absolute top-[42%] bottom-0 -right-px left-(--green-start) z-15 bg-linear-to-b from-transparent via-black/60 to-black mix-blend-multiply opacity-90" />

            <div className="pointer-events-none absolute inset-0 z-20 bg-black opacity-26" />
          </div>
        </div>

        <UserFeedbackCard className="absolute bottom-[83.61px] left-3/4 z-30 hidden h-44.5 w-79 -translate-x-1/2 rounded-3xl border-neutral-800 bg-base-black p-(--spacing-2xl) opacity-100 md:block" />
        <HomeGuides containerId="hero" mdContainerId="home-guides-end" />
        <HomeTop />
        <Hero />
      </div>

      <Service />
      <AboutMe />
      <Skills />
      <Working />
      <Experience />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <MediaSocial />
      <ContactForm />
    </main>
  );
}
