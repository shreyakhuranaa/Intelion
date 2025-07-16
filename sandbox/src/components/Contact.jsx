import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12">
      <h3 className="text-3xl font-bold text-center text-indigo-600">Contact Us</h3>
      <form className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-md rounded-md">
        <input type="text" placeholder="Your Name" className="w-full p-3 border mb-4 rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border mb-4 rounded-md" />
        <textarea placeholder="Your Message" className="w-full p-3 border mb-4 rounded-md"></textarea>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
