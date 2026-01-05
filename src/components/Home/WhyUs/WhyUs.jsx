import React from "react";
import { FaTruck, FaBatteryFull } from "react-icons/fa";
import { FaUsers, FaShippingFast } from "react-icons/fa";

import WhyUsCard from "./WhyUsCard";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const WhyUs = () => {
  const sectionAnim = useScrollAnimation("fade-up");

  const features = [
    {
      icon: <FaTruck className="text-yellow-500 mx-auto" size={50} />,
      title: "Financing Options",
      description:
        "Flexible and reliable financing solutions to support your investments in power and mobility.",
    },
    {
      icon: <FaUsers className="text-cyan-500 mx-auto" size={50} />,
      title: "Satisfied Customers",
      description:
        "Hear it from our clients: real stories, real experiences, and exceptional service quality.",
    },
    {
      icon: <FaShippingFast className="text-green-500 mx-auto" size={50} />,
      title: "Fast & Easy Delivery",
      description:
        "Nationwide delivery and prompt after-sales support for all products and services.",
    },
    {
      icon: <FaBatteryFull className="text-red-500 mx-auto" size={50} />,
      title: "Phylion Batteries",
      description:
        "Advanced lithium battery solutions for modern, sustainable applications.",
    },
    {
      icon: <FaTruck className="text-indigo-500 mx-auto" size={50} />,
      title: "Piaggio Vehicles",
      description:
        "Smart and robust commercial vehicles that support businesses nationwide.",
    },
    {
      icon: <FaBatteryFull className="text-teal-500 mx-auto" size={50} />,
      title: "E-TMTL Gensets & Engines",
      description:
        "High-performance diesel generators and engines for uninterrupted power supply.",
    },
  ];

  return (
    <section
      ref={sectionAnim.ref}
      className={`bg-gray-50 py-20 fade-up ${sectionAnim.isVisible ? "show" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
          Why Choose <span className="text-gray-800">General Enterprises?</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          General Enterprises Pvt. Ltd., headquartered in Kathmandu, is your trusted partner in delivering advanced power, energy,
          and commercial mobility solutions across Nepal. Our products, people, and nationwide presence ensure reliability, innovation,
          and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <WhyUsCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 150} // staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
