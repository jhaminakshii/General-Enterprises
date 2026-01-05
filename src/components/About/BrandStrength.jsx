import React from "react";


const BrandStrength = () => {
  const items = [
    {
      title: "E-TMTL Silent Gensets & Engines",
      desc: "High-performance diesel generators ensuring uninterrupted power.",
    },
    {
      title: "Phylion Lithium Batteries",
      desc: "Advanced energy storage for modern and sustainable applications.",
    },
    {
      title: "Piaggio Commercial Vehicles",
      desc: "Smart, reliable, and robust mobility solutions for businesses.",
    },
  ];

  return (
    <section className="mt-20 px-6 md:px-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Trusted <span className="text-cyan-600">Global Brands</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((b, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-cyan-200 shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-2">{b.title}</h3>
            <p className="text-gray-600 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandStrength;
