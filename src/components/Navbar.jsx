// src/components/Navbar.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Fhave", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/iyobosa-omoruyi",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:omosiyobo@gmail.com",
    label: "Email",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-6xl z-50 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 py-3">
        {/* Brand Logo */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3 text-accent font-semibold text-base sm:text-lg cursor-pointer select-none"
          onClick={() => (window.location.href = "/")}
          aria-label="Home"
        >
          <span className="text-lg sm:text-xl">{"<"}</span>
          <span className="tracking-tight">iyobosa.dev</span>
          <span className="text-lg sm:text-xl">{"/ >"}</span>
        </motion.button>

        {/* Desktop Menu (Visible on Large screens) */}
        <div className="hidden lg:flex items-center gap-8">
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

          <div className="flex items-center gap-2 text-subtle">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:text-accent hover:bg-white/5 transition"
                whileHover={{ scale: 1.05 }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden text-accent text-xl sm:text-2xl p-2 rounded-md hover:bg-white/5 transition active:scale-95"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-black/95 border-t border-zinc-800 px-5 py-4 rounded-b-xl max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1 text-subtle">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 px-4 rounded-lg hover:text-accent hover:bg-white/5 text-base font-medium transition"
                  whileTap={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex items-center justify-around mt-4 pt-4 border-t border-zinc-800">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition text-2xl p-3 rounded-lg hover:bg-white/5"
                    aria-label={s.label}
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