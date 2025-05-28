import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen p-10 bg-plum text-black">
      <img src="https://via.placeholder.com/200" alt="Contact Pic" className="mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <form className="text-blackmax-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="text-black w-full p-3 rounded bg-white text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="text-black w-full p-3 rounded bg-white text-black"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="text-black w-full p-3 rounded bg-white text-black"
        ></textarea>
        <button
          type="submit"
          className="text-black w-full bg-lavender text-black p-3 rounded hover:bg-blush transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
// import { useState } from "react";

// const ContactMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Replace with your preferred contact method (e.g., API, email service)
//     console.log("Submitted Form:", formData);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
//       <h2 className="text-2xl font-semibold text-center mb-4">Contact Me</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           onChange={handleChange}
//           required
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           onChange={handleChange}
//           required
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="4"
//           onChange={handleChange}
//           required
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactMe;