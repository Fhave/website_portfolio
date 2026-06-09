// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-subtle text-xs border-t border-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:gap-0">
        <p className="text-sm">© {new Date().getFullYear()} Iyobosa Esther Omoruyi. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
