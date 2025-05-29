import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-cyan-400 text-center">Contact Me</h2>
        <p className="text-gray-400 text-center mt-2">Got a project or question? Let's connect.</p>

        <form 
          action="https://formsubmit.co/snoe.prsvr@gmail.com"
          method="POST"
          className="mt-6 space-y-6"
        >

          <div>
            <label htmlFor="name" className="block text-gray-300">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full mt-1 p-3 bg-gray-700 text-white border border-gray-600 rounded"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full mt-1 p-3 bg-gray-700 text-white border border-gray-600 rounded"
              placeholder="Your Email"
            />
          </div>

 
          <div>
            <label htmlFor="message" className="block text-gray-300">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              className="w-full mt-1 p-3 bg-gray-700 text-white border border-gray-600 rounded"
              placeholder="Write your message..."
            />
          </div>

 
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />


          <button 
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;