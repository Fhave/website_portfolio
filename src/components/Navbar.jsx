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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mx-auto px-5 py-3">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-accent font-semibold text-lg cursor-pointer"
          onClick={() => (window.location.href = '/')}
          aria-label="Home"
        >
          <span className="text-xl">{'<'} </span>
          <span className="tracking-tight">iyobosa.dev</span>
          <span className="text-xl"> {'/>'}</span>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-subtle hover:text-accent transition-colors"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-subtle">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:text-accent hover:bg-white/5 transition"
                whileHover={{ scale: 1.05 }}
                aria-label={`Open social ${i}`}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-accent text-2xl p-2 rounded-md hover:bg-white/5"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-black/95 border-t border-zinc-800 px-6 py-4 rounded-b-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-3 text-subtle">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-md hover:text-accent hover:bg-white/3 transition"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex gap-4 mt-1">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition text-xl p-2 rounded-md hover:bg-white/5"
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
