import React from "react";

const Approach = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-10 mt-20 px-6 md:px-14">
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Approach
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
          We believe in delivering reliable, future-ready solutions powered by
          engineering expertise, customer trust, and nationwide support.
        </p>

        <p className="text-gray-600 text-sm md:text-base">
          Our team of young engineers and technical professionals strive to
          provide accurate guidance, quality service, and dependable after-sales
          support—ensuring customers always experience the highest confidence in
          every product we deliver.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2">
        <img
          src="/power-generation-collarge-1754981640.jpg"
          alt="Approach"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Approach;
