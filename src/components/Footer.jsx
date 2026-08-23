// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-zinc-800/80 bg-black/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-subtle text-xs sm:flex-row sm:gap-0">
        <p className="text-center sm:text-left text-xs leading-relaxed">
          © {currentYear} Iyobosa Esther Omoruyi. All rights reserved.
        </p>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs font-medium"
        >
          <a
            href="#about"
            className="px-2 py-1 rounded-md transition hover:text-white hover:bg-white/5"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-2 py-1 rounded-md transition hover:text-white hover:bg-white/5"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-2 py-1 rounded-md transition hover:text-white hover:bg-white/5"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}