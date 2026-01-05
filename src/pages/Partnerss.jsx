import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const PartnersData = [
  {
    id: 1,
    name: "E-TMTL",
    logo: "/GENLOGO.jpg",
  },
  {
    id: 2,
    name: "Phylion",
    logo: "https://phylion.com/static/addons/cms/images/phylion_logo.png",
  },
  {
    id: 3,
    name: "Sunvida",
    logo: "/sunvida.png",
  },
  {
    id: 4,
    name: "Saera Electric",
    logo: "/saera.png",
  },
];

const Partnerss = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-20" id="partners">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2
          ref={elementRef}
          className={`text-center text-3xl md:text-4xl font-semibold text-gray-900 transition-all duration-700 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          Our Trusted Partners
        </h2>

        <p
          className={`text-center text-gray-600 mt-3 mb-12 transition-all duration-700 delay-200 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          Collaborating with leading brands to deliver high-quality electric mobility solutions.
        </p>

        {/* Partners Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center transition-all duration-700 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center group"
            >
              <div className="bg-gray-100 w-32 h-32 rounded-xl shadow-md flex items-center justify-center 
                  transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 p-4">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain max-h-full"
                />
              </div>

              <p className="mt-3 text-gray-800 font-medium">{partner.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partnerss;
