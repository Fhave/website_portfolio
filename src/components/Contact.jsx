// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

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
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">

      {/* Section Intro (Centered Header Block) */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-subtle mb-4">
          Connection
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-4">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-2xl text-subtle text-sm md:text-base leading-7">
          Have an exciting project idea, a position breakdown, or simply want to chat about
          web architecture? Shoot me a message and let's construct something meaningful.
        </p>
      </motion.div>

      {/* Two-Column Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Left Column: Context Metadata (Spans 5 columns on desktop) */}
        <div className="md:col-span-5 space-y-6 text-sm">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-subtle/50 font-mono">Current Availability</span>
            <span className="text-accent flex items-center gap-2 mt-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to roles & freelance projects
            </span>
          </div>

          <div className="flex flex-col pt-4 border-t border-subtle/10">
            <span className="text-xs uppercase tracking-widest text-subtle/50 font-mono">Direct Communication</span>
            <a href="mailto:omosiyobo@gmail.com" className="text-subtle hover:text-accent transition-colors duration-200 mt-1.5 break-all">
              omosiyobo@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column: Premium Form Card (Spans 7 columns on desktop) */}
        <motion.div
          className="md:col-span-7 w-full"
          variants={itemVariants}
        >
          <div className="p-8 rounded-2xl border border-subtle/10 bg-subtle/[0.02] backdrop-blur-sm relative overflow-hidden group">

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-subtle/60">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="p-3.5 bg-zinc-900/50 text-white rounded-xl border border-subtle/20 placeholder:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-subtle/60">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="p-3.5 bg-zinc-900/50 text-white rounded-xl border border-subtle/20 placeholder:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-wider text-subtle/60">Your Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="p-3.5 bg-zinc-900/50 text-white rounded-xl border border-subtle/20 placeholder:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pt-2">
                <div className="min-h-[20px]">
                  {status && (
                    <p className={`text-sm ${status.includes('wrong') ? 'text-rose-400' : 'text-accent/80'}`}>
                      {status}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'Sending...'}
                  className="w-full sm:w-auto px-8 py-3.5 border border-accent text-accent font-medium text-sm rounded-xl hover:bg-accent hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}