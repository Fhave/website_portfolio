// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await fetch('https://your-email-server.com/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-accent mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="p-3 bg-zinc-800 text-white rounded border border-zinc-600 placeholder:text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="p-3 bg-zinc-800 text-white rounded border border-zinc-600 placeholder:text-sm"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="p-3 bg-zinc-800 text-white rounded border border-zinc-600 placeholder:text-sm"
        />
        <button
          type="submit"
          className="border border-accent text-accent py-2 rounded hover:bg-accent hover:text-black transition"
        >
          Send
        </button>
      </form>
      {status && <p className="text-center text-sm mt-3 text-subtle">{status}</p>}
    </section>
  );
}
