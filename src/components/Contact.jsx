import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen p-10 bg-plum text-white">
      <img src="https://via.placeholder.com/200" alt="Contact Pic" className="mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white text-black"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded bg-white text-black"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-lavender text-white p-3 rounded hover:bg-blush transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
