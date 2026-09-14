"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/content";

const DESKTOP_MQ = "(min-width: 1024px)";

function currentSection() {
  const marker = window.scrollY + 120;
  let href = "#top";
  for (const link of navLinks) {
    const el = document.querySelector<HTMLElement>(link.href);
    if (el && el.offsetTop <= marker) href = link.href;
  }
  return href;
}

function NavLink({
  href,
  label,
  active,
  stacked,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  stacked?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      aria-current={active ? "location" : undefined}
      onClick={onNavigate}
      className={`rounded-full font-medium transition-colors duration-150 ${
        stacked
          ? "block px-4 py-3 text-base"
          : "px-[11px] py-[7px] text-[13.5px]"
      } ${
        active
          ? "bg-accent text-accent-ink hover:bg-accent-hover hover:text-accent-ink active:bg-[oklch(0.72_0.16_148)] active:text-accent-ink"
          : "text-[oklch(0.74_0.01_160)] hover:bg-white/8 hover:text-fg active:bg-white/14 active:text-fg"
      }`}
    >
      {label}
    </a>
  );
}

export function SiteHeader() {
  const menuId = useId();
  const lastY = useRef(0);
  const ignoreHideUntil = useRef(0);
  const [active, setActive] = useState("#top");
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const holdVisible = () => {
    setHidden(false);
    ignoreHideUntil.current = Date.now() + 900;
  };

  useEffect(() => {
    lastY.current = window.scrollY;
    setActive(currentSection());

    const onScroll = () => {
      const y = window.scrollY;
      setActive(currentSection());

      if (menuOpen || y < 12 || Date.now() < ignoreHideUntil.current) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;
      if (Math.abs(delta) < 8) return;
      setHidden(delta > 0);
      lastY.current = y;
    };

    const onResize = () => {
      if (window.matchMedia(DESKTOP_MQ).matches) setMenuOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    holdVisible();
  };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 border-b border-white/9 bg-ink/86 backdrop-blur-[14px] transition-transform duration-300 ease-out ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-6 px-[clamp(16px,4vw,40px)]">
          <a
            href="#top"
            className="flex-none text-inherit hover:text-inherit"
            onClick={closeMenu}
          >
            <Logo />
          </a>

          <nav
            id="ggnav"
            className="hidden flex-1 flex-wrap items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={active === link.href}
                onNavigate={holdVisible}
              />
            ))}
          </nav>

          <a
            href="#quote"
            onClick={holdVisible}
            className="ml-auto hidden rounded-full bg-accent px-5 py-[11px] text-[13.5px] font-bold tracking-[-0.01em] text-accent-ink hover:bg-accent-hover hover:text-accent-ink active:bg-[oklch(0.72_0.16_148)] active:text-accent-ink lg:inline-flex"
          >
            Request a Quote
          </a>

          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-fg hover:bg-white/8 active:bg-white/14 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-3.5 w-[18px]" aria-hidden>
              <span
                className={`absolute top-0 left-0 h-0.5 w-full bg-current transition ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-[6px] left-0 h-0.5 w-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-[12px] left-0 h-0.5 w-full bg-current transition ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id={menuId}
          hidden={!menuOpen}
          className="border-t border-white/9 bg-ink lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-[1280px] flex-col gap-1 px-[clamp(16px,4vw,40px)] py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={active === link.href}
                stacked
                onNavigate={closeMenu}
              />
            ))}
            <a
              href="#quote"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-accent px-5 py-3.5 text-center text-[15px] font-bold text-accent-ink hover:bg-accent-hover hover:text-accent-ink active:bg-[oklch(0.72_0.16_148)] active:text-accent-ink"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      </header>
      <div aria-hidden className="h-[72px]" />
    </>
  );
}
