import React from "react";

const Services = () => {
  return (
    <section id="services" className="container mx-auto my-12 p-6">
      <h3 className="text-3xl font-bold text-center text-indigo-600">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 shadow-md bg-white rounded-lg">
          <h4 className="text-xl font-bold">Web Development</h4>
          <p>We build modern, scalable, and secure web applications.</p>
        </div>
        <div className="p-6 shadow-md bg-white rounded-lg">
          <h4 className="text-xl font-bold">AI Solutions</h4>
          <p>Leverage AI and ML to drive innovation in your business.</p>
        </div>
        <div className="p-6 shadow-md bg-white rounded-lg">
          <h4 className="text-xl font-bold">Cloud Services</h4>
          <p>Optimize and scale with cloud computing solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
