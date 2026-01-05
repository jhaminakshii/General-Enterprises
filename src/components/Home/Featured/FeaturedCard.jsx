import React from "react";

const FeaturedCard = ({ img, video, name, specs }) => {
  return (
    <div
      className="bg-white/60 backdrop-blur-md shadow-xl border border-gray-200 
      rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 
      transition-all duration-300 mx-3"
    >
      {/* MEDIA */}
      <div className="h-56 w-full overflow-hidden bg-white relative">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={img}
            alt={name}
            className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-1">{specs}</p>

        <button
          className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white 
          px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
