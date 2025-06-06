import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-900 via-sky-500 to-pink-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-md text-white p-8 rounded-lg shadow-xl border border-white/20">
        <h2 
          className="text-4xl font-bold text-cyan-100 text-center mb-2"
          style={{ fontFamily: "inspiration, cursive", fontSize: "40px" }}
        >
          Hire Me
        </h2>
        <p className="text-cyan-200 text-center mt-2 mb-6" style={{ fontFamily: 'xanh-mono, cursive' }}>
          Got a project or question? Let's connect.
        </p>
        
        <form
          action="https://formsubmit.co/snoe.prsvr@gmail.com"
          method="POST"
          className="mt-6 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-cyan-100 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-3 bg-white/20 backdrop-blur-sm text-white border border-cyan-300/50 rounded-lg placeholder-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition duration-200"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-cyan-100 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 bg-white/20 backdrop-blur-sm text-white border border-cyan-300/50 rounded-lg placeholder-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition duration-200"
              placeholder="Your Email"
            />
          </div>
 
          <div>
            <label htmlFor="message" className="block text-cyan-100 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 p-3 bg-white/20 backdrop-blur-sm text-white border border-cyan-300/50 rounded-lg placeholder-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition duration-200 resize-none"
              placeholder="Write your message..."
            />
          </div>
 
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-cyan-500 hover:to-teal-600 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


