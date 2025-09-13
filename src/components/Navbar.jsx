// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Fhave' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/iyobosa-omoruyi' },
  { icon: <FaEnvelope />, href: 'mailto:omosiyobo@gmail.com' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-800 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
        <motion.h1
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-accent tracking-tight cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          {'<iyobosa.dev/>'}
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
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
          <div className="flex gap-3 ml-2 text-subtle">
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

        {/* Mobile Menu Button */}
        <div className="sm:hidden text-accent text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black border-t border-zinc-800 py-4 px-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 text-subtle">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:text-accent text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex gap-4 mt-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition text-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
