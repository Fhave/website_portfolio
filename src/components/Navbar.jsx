import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-70 backdrop-blur z-50 cursor-pointer">
      <h1 className="text-xl font-bold">Iyobosa.dev</h1>
      <ul className="flex gap-6">
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#resume" className="hover:underline">Resume</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
        <li><a href="mailto:iyobosa@example.com"><FaEnvelope /></a></li>
      </ul>
    </nav>
  );
}
