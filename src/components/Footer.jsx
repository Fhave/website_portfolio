// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-subtle text-xs border-t border-zinc-800">
      <p className="px-4">© {new Date().getFullYear()} Iyobosa Esther Omoruyi. All rights reserved.</p>
    </footer>
  );
}
