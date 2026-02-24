"use client";

import { useEffect, useRef, useState } from "react";

type HomeGuidesProps = {
  containerId?: string;
  mdContainerId?: string;
};

export default function HomeGuides({
  containerId = "home",
  mdContainerId,
}: HomeGuidesProps) {
  const [lineHeight, setLineHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMdPlus, setIsMdPlus] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mdLeftGuideX, setMdLeftGuideX] = useState<number | null>(null);
  const prevMdLineWidthRef = useRef<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");

    const update = () => setIsMdPlus(mql.matches);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const targetId = isMdPlus && mdContainerId ? mdContainerId : containerId;
    const el = document.getElementById(targetId);
    if (!el) {
      return;
    }

    let rafId = 0;

    const update = () => {
      rafId = 0;
      setIsAtTop(window.scrollY <= 0.5);
      const heroTop = el.getBoundingClientRect().top;
      const viewportBottom = window.innerHeight;

      if (isMdPlus) {
        const headingEl = document.getElementById("home-heading-md");
        if (headingEl) {
          const headingLeft = headingEl.getBoundingClientRect().left;
          const centerX = window.innerWidth / 2;
          const nextX = (headingLeft + centerX) / 2;
          if (Number.isFinite(nextX)) {
            setMdLeftGuideX((prev) =>
              prev === null || Math.abs(prev - nextX) > 0.25 ? nextX : prev,
            );
          } else {
            setMdLeftGuideX(null);
          }
        } else {
          setMdLeftGuideX(null);
        }

        const introRowEl = document.getElementById("home-intro-row-md");
        const introTextEl = document.getElementById("home-intro-text-md");

        if (introRowEl && introTextEl) {
          const rowLeft = introRowEl.getBoundingClientRect().left;
          const textWidth = introTextEl.getBoundingClientRect().width;
          const styles = window.getComputedStyle(introRowEl);
          const gapPx = parseFloat(styles.columnGap || styles.gap || "0") || 0;

          const desiredTextRight = window.innerWidth / 2 - 44;
          const nextLineWidth = Math.max(
            0,
            desiredTextRight - rowLeft - gapPx - textWidth,
          );

          const prevLineWidth = prevMdLineWidthRef.current;
          if (
            prevLineWidth === null ||
            Math.abs(prevLineWidth - nextLineWidth) > 0.25
          ) {
            document.documentElement.style.setProperty(
              "--home-line5-md-width",
              `${nextLineWidth}px`,
            );
            prevMdLineWidthRef.current = nextLineWidth;
          }
        }
      } else {
        setMdLeftGuideX(null);

        if (prevMdLineWidthRef.current !== null) {
          document.documentElement.style.removeProperty(
            "--home-line5-md-width",
          );
          prevMdLineWidthRef.current = null;
        }
      }

      const headerEl = document.querySelector("header");
      const nextHeaderHeight = headerEl
        ? headerEl.getBoundingClientRect().height
        : 0;

      const endOffset = isMdPlus ? 0 : 10;
      const maxHeight = Math.max(0, viewportBottom - endOffset);
      const targetHeight = Math.max(0, heroTop - endOffset);

      setLineHeight(Math.min(maxHeight, targetHeight));
      setHeaderHeight(nextHeaderHeight);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("load", onScrollOrResize);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("load", onScrollOrResize);
    };
  }, [containerId, mdContainerId, isMdPlus]);

  if (lineHeight <= 0) return null;

  return (
    <>
      {isMdPlus && mdLeftGuideX !== null && (
        <span
          aria-hidden
          className="pointer-events-none fixed top-0 z-70 hidden w-0 md:block"
          style={{
            left: mdLeftGuideX,
            height: lineHeight,
            borderLeft: "1px solid var(--Neutral-800, #252B37)",
          }}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-0 z-70 w-0 -translate-x-1/2"
        style={{
          height: lineHeight,
          borderLeft: "1px solid var(--Neutral-800, #252B37)",
        }}
      />
      {isAtTop && headerHeight > 0 && (
        <span
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-0 z-110 w-0 -translate-x-1/2"
          style={{
            height: Math.min(lineHeight, headerHeight),
            borderLeft: "1px solid var(--Neutral-800, #252B37)",
          }}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none fixed left-3/4 z-60 w-0 md:hidden"
        style={{
          top: headerHeight,
          height: Math.max(0, lineHeight - headerHeight),
          borderLeft: "1px solid var(--Neutral-800, #252B37)",
        }}
      />
    </>
  );
}
