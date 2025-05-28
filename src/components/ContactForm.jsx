import React from 'react';

const ContactForm = () => {
  return (
    <>
    <div>
      <h1>ContactForm</h1>
     
    <section className="min-h-screen p-10 bg-plum text-black">
      <img src="https://via.placeholder.com/200" alt="Contact Pic" className="mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <form className="text-black max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="text-black w-full p-3 rounded bg-white"
          />
        <input
          type="email"
          placeholder="Your Email"
          className="text-black w-full p-3 rounded bg-white"
          />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="text-black w-full p-3 rounded bg-white"
          ></textarea>
          Send Message
        <button
          type="submit"
          className="text-black w-full bg-lavender text-black p-3 rounded hover:bg-blush transition"
          >
        </button>
      </form>
    </section>
    </div>
            </>
  );
};

export default ContactForm;