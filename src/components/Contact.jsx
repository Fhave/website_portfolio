import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://your-email-server.com/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
            console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-20 px-8 max-w-xl mx-auto" id="contact">
      <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-zinc-800 border border-zinc-600 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-zinc-800 border border-zinc-600 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="p-3 rounded bg-zinc-800 border border-zinc-600 text-white"
        />
        <button type="submit" className="px-6 py-3 border border-beige text-beige rounded hover:bg-beige hover:text-black transition">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-center">{status}</p>}
    </section>
  );
}
