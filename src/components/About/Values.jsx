import React from "react";


const Values = () => {
  const values = [
    "Innovation & Technology Leadership",
    "Superior Service & Customer Trust",
    "Nationwide Accessibility & Quick Support",
    "Sustainable Energy & Modern Mobility",
  ];

  return (
    <section className="mt-20 px-6 md:px-14 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our Core <span className="text-cyan-600">Values</span>
      </h2>

      <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <li
            key={i}
            className="p-5 bg-cyan-200 rounded-xl shadow text-gray-800 font-medium"
          >
            {v}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Values;
