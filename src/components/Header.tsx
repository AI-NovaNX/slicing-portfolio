"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const activeDesktopNavHrefs = [
  "#home",
  "#about",
  "#skills",
  "#portfolio-md",
  "#faq-md",
  "#contact-md",
] as const;
const activeMobileNavHrefs = [
  "#home",
  "#about",
  "#skills",
  "#portfolio",
  "#faq",
  "#contact",
] as const;

function isActiveDesktopNavHref(href: string) {
  return (activeDesktopNavHrefs as readonly string[]).includes(href);
}

function isActiveMobileNavHref(href: string) {
  return (activeMobileNavHrefs as readonly string[]).includes(href);
}

function getDesktopHref(href: string) {
  if (href === "#portfolio") return "#portfolio-md";
  if (href === "#faq") return "#faq-md";
  if (href === "#contact") return "#contact-md";
  return href;
}

export function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMdPlus, setIsMdPlus] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMdPlus(mql.matches);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isMdPlus ? window.scrollY >= 40 : window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMdPlus]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevMenuOpen = document.body.dataset.menuOpen;

    document.body.dataset.menuOpen = "true";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      if (prevMenuOpen === undefined) {
        delete document.body.dataset.menuOpen;
      } else {
        document.body.dataset.menuOpen = prevMenuOpen;
      }
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToHash = (href: string, offsetTop: number) => {
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - offsetTop;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
    window.history.replaceState(null, "", href);
  };

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    if (!isActiveMobileNavHref(href)) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    closeMenu();

    window.setTimeout(() => {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl
        ? headerEl.getBoundingClientRect().height
        : 0;

      scrollToHash(href, headerHeight);
    }, 0);
  };

  const handleDesktopNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    if (!isActiveDesktopNavHref(href)) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    const headerEl = document.querySelector("header");
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;

    scrollToHash(
      href,
      href === "#portfolio-md" || href === "#faq-md" || href === "#contact-md"
        ? headerHeight
        : 0,
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full bg-base-black md:bg-transparent",
          isScrolled &&
            "bg-base-black/40 backdrop-blur-xl md:bg-base-black/70 md:backdrop-blur-md",
          className,
        )}
        style={{
          zIndex: 100,
          borderBottom: "1px solid var(--Neutral-800, #252B37)",
        }}
      >
        <div className="mx-auto flex h-20 w-full max-w-160 items-center justify-between px-6 md:max-w-288 md:px-12">
          <div
            className="inline-flex shrink-0 items-center gap-3"
            aria-label="Go to homepage"
            onClick={closeMenu}
          >
            <Image
              src="/icon/header/line5.svg"
              alt=""
              width={40}
              height={1}
              className="h-px w-6 object-contain md:w-10"
              priority
            />
            <span className="text-center font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] text-base-white md:text-xl md:leading-normal md:tracking-normal md:text-primary-200">
              Antonius.
            </span>
          </div>

          <nav
            className="hidden text-base font-semibold tracking-normal text-base-white md:flex md:items-center md:gap-10 lg:font-sans lg:font-normal lg:text-md lg:tracking-normal"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const desktopHref = getDesktopHref(item.href);

              return (
                <a
                  key={`desktop-${item.label}`}
                  href={desktopHref}
                  onClick={(e) => handleDesktopNavClick(e, desktopHref)}
                  aria-disabled={!isActiveDesktopNavHref(desktopHref)}
                  className="transition-colors hover:text-primary-200"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div
            className="relative flex h-full w-56 items-center pl-10 md:hidden"
            aria-hidden={false}
          >
            <button
              type="button"
              className="ml-auto inline-flex size-14 items-center justify-center bg-transparent"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Image
                src="/icon/header/menu-4.svg"
                alt=""
                width={40}
                height={40}
                className="h-6 w-6 sm:h-6 sm:w-6"
                priority
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-80 flex flex-col bg-base-black md:hidden overscroll-contain"
          style={{ zIndex: 9999 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="flex h-20 w-full items-center justify-between px-6"
            style={{ borderBottom: "1px solid var(--Neutral-800, #252B37)" }}
          >
            <div className="inline-flex items-center gap-3">
              <Image
                src="/icon/header/line5.svg"
                alt=""
                width={40}
                height={1}
                className="h-px w-6 object-contain"
                priority
              />
              <span className="text-center font-sans text-md font-bold leading-(--text-md--line-height) tracking-[0px] text-base-white">
                Antonius.
              </span>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex size-14 items-center justify-center bg-transparent text-neutral-25"
              aria-label="Close menu"
            >
              <Image
                src="/icon/header/Close.svg"
                alt=""
                width={40}
                height={40}
                className="h-6 w-6"
                priority
              />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div
              className="min-h-0 flex-1 overflow-y-auto px-6 pt-4 pb-6"
              style={{
                paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))",
              }}
            >
              <nav aria-label="Mobile primary">
                <ul className="flex flex-col gap-8">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleMobileNavClick(e, item.href)}
                        aria-disabled={!isActiveMobileNavHref(item.href)}
                        className="block font-sans text-md font-normal tracking-normal text-base-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
