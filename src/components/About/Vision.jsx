import React from "react";

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mt-16 px-6 md:px-14">
      {/* LEFT IMG */}
      <div className="w-full md:w-1/2">
        <img
          src="/originalTMTL.jpg"
          alt="Vision"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Vision
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
          To empower Nepal with sustainable power solutions, modern mobility
          technologies, and innovative engineering excellence.
        </p>

        <p className="text-gray-600 text-sm md:text-base">
          We aim to redefine national standards in the energy and mobility
          sectors by delivering globally trusted products backed by innovation,
          efficiency, and long-term reliability.
        </p>
      </div>
    </div>
  );
};

export default Vision;
