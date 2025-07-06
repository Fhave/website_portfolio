// src/components/Navbar.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/yourgithub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourlinkedin' },
  { icon: <FaEnvelope />, href: 'mailto:you@example.com' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary border-b border-zinc-800 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
        <motion.h1
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-bold text-accent tracking-tight"
        >
          {'<Iyobosa />'}
        </motion.h1>

        <div className="flex gap-8 items-center">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm text-subtle hover:text-accent transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex gap-3 ml-4 text-subtle">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition"
                whileHover={{ scale: 1.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
