import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsModern = () => {
return ( <section className="bg-gray-50 py-24"> <div className="container mx-auto px-6 md:px-20 text-center">
{/* Unique Heading */} <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-600 mb-8">
Powering Progress. Driving Innovation. </h2>


    {/* Intro Paragraph */}
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto">
      At General Enterprises Pvt. Ltd., headquartered in Durbar Marg, Kathmandu, Nepal, we are committed to transforming
      power, energy, and commercial mobility solutions across the nation. Backed by innovation, globally trusted products,
      and dedicated professionals, we deliver unmatched reliability and efficiency to our clients.
    </p>

    {/* Features / Key Points */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-cyan-600 text-xl mb-3">E-TMTL Silent Gensets & Engines</h3>
        <p className="text-gray-700 text-sm">
          High-performance diesel generators and engines designed for uninterrupted power and utilities.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-cyan-600 text-xl mb-3">Phylion Lithium Battery Solutions</h3>
        <p className="text-gray-700 text-sm">
          Advanced energy storage systems for sustainable and modern applications.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-cyan-600 text-xl mb-3">Piaggio Commercial Vehicles</h3>
        <p className="text-gray-700 text-sm">
          Smart, robust mobility solutions supporting businesses nationwide with efficiency.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <Link
      to="/about"
      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition duration-200"
    >
      Learn More About Us
    </Link>
  </div>
</section>


);
};

export default AboutUsModern;
