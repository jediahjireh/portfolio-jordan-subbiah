"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

import { headerContent, navLinks } from "@/config/header";
import {
  DEFAULT_THEME,
  THEMES,
  THEME_COLORS,
  type Theme,
} from "@/config/theme";
import { HiBars3, HiSwatch } from "react-icons/hi2";

// Generate SVG favicon dynamically
const generateFavicon = (logo: string, color: string): string => {
  const fontSize = logo.length > 3 ? 9 : 11;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#0a0a0f"/>
    <text x="16" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="${fontSize}" font-weight="700" fill="${color}" text-anchor="middle">${logo}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const updateFavicon = (logo: string, color: string) => {
  const faviconUrl = generateFavicon(logo, color);

  // Remove existing favicon links
  const existingLinks = document.querySelectorAll('link[rel="icon"]');
  existingLinks.forEach((link) => link.remove());

  // Add new favicon
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = faviconUrl;
  document.head.appendChild(link);
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);
  const [showThemePicker, setShowThemePicker] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update favicon when theme changes
  useEffect(() => {
    updateFavicon(headerContent.logo, THEME_COLORS[currentTheme]);
  }, [currentTheme]);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    setShowThemePicker(false);
  };
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || isOpen
          ? "bg-[var(--background)]/70 shadow-[0_0_30px_var(--glow-primary)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-[var(--accent-hover)]"
        >
          {headerContent.logo}
        </Link>

        {/* desktop navigation menu */}
        <nav className="hidden space-x-10 text-lg font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 ease-out hover:text-[var(--accent-secondary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme picker */}
          <div className="relative">
            <button
              title="Change theme"
              onClick={() => setShowThemePicker(!showThemePicker)}
              className="rounded p-2 text-white/80 transition-colors duration-300 ease-out hover:text-[var(--accent-secondary)]"
            >
              <HiSwatch className="size-5" />
            </button>

            {showThemePicker && (
              <div className="absolute right-0 mt-2 min-w-[200px] rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[0_8px_32px_var(--glow-primary)] backdrop-blur-md">
                <p className="mb-3 text-xs font-medium text-white/50">
                  {headerContent.themePickerLabel}
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {THEMES.map((theme) => (
                    <button
                      key={theme}
                      title={theme.charAt(0).toUpperCase() + theme.slice(1)}
                      onClick={() => handleThemeChange(theme)}
                      className={`group relative size-8 rounded-full border-2 transition-all duration-300 ease-out hover:scale-105 ${
                        currentTheme === theme
                          ? "scale-105 border-white shadow-[0_0_12px_var(--glow-primary)]"
                          : "border-transparent hover:border-white/30"
                      }`}
                      style={{
                        backgroundColor: THEME_COLORS[theme],
                      }}
                    >
                      {currentTheme === theme && (
                        <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            title="Open menu"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded p-2 text-white/80 transition-colors duration-300 ease-out hover:text-[var(--accent-secondary)] md:hidden"
          >
            <HiBars3 className="size-6" />
          </button>
        </div>
      </div>

      {/* mobile menu  */}
      {isOpen && (
        <div className="px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-3 text-base font-medium text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 ease-out hover:text-[var(--accent-secondary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
