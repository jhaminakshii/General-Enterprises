// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const slides = [
// {
// id: 1,
// title: "E-TMTL Silent Gensets and Engines",
// description: "High-performance diesel generators and engines designed for uninterrupted power.",
// image: "/tmtl-eicher-silent-genset-1.webp", // replace with your actual image path
// link: "/products/etmtl"
// },
// {
// id: 2,
// title: "Phylion Lithium Battery Solutions",
// description: "Advanced energy storage solutions for modern and sustainable applications.",
// image: "/lithium.jpg",
// link: "/products/phylion"
// },
// {
// id: 3,
// title: "Piaggio Commercial Vehicles",
// description: "Smart, robust mobility solutions supporting businesses nationwide.",

// image: "/battery-auto.png",
// link: "/products/piaggio"
// }
// ];

// const Herro = () => {
// const [current, setCurrent] = useState(0);

// useEffect(() => {
// const interval = setInterval(() => {
// setCurrent((prev) => (prev + 1) % slides.length);
// }, 5000); // change slide every 5 seconds
// return () => clearInterval(interval);
// }, []);

// return ( <section className="relative w-full h-screen">
// {slides.map((slide, index) => (
// <div
// key={slide.id}
// className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
// style={{
// backgroundImage: `url(${slide.image})`,
// backgroundSize: "cover",
// backgroundPosition: "center",
// }}
// > <div className="absolute inset-0 bg-black/60"></div> {/* dark overlay */} <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-20"> <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1> <p className="text-white text-lg md:text-2xl mb-6 max-w-2xl">{slide.description}</p> <Link
//            to={slide.link}
//            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-md transition duration-200"
//          >
// Explore </Link> </div> </div>
// ))}


//   {/* Pagination Dots */}
//   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
//     {slides.map((_, index) => (
//       <button
//         key={index}
//         className={`w-3 h-3 rounded-full ${
//           index === current ? "bg-yellow-400" : "bg-white/50"
//         }`}
//         onClick={() => setCurrent(index)}
//       />
//     ))}
//   </div>
// </section>

// );
// };

// export default Herro;


import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "E-TMTL Silent Gensets & Engines",
    description: "Reliable diesel generators for uninterrupted power.",
    image: "/originalTMTL.jpg",
    link: "https://tmtl.in/eicherengines/silent-gensets/"
  },
  {
    id: 2,
    title: "Phylion Lithium Battery Solutions",
    description: "Advanced lithium energy for modern applications.",
    video: "/Phylion_video.mp4",
    link: "https://phylion.com"
  },
  {
    id: 3,
    title: "Piaggio Commercial Vehicles",
    description: "Smart and powerful mobility for your business.",
    image: "/piaggio-hero1.jpg", 
    link: "https://piaggio-cv.co.in"
  }
];

const Herro = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* BACKGROUND */}
          {slide.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70 z-10"></div>

          {/* CONTENT */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pt-24">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-2xl mb-6">
              {slide.description}
            </p>

            {/* External link */}
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-md transition"
            >
              Explore
            </a>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-cyan-400" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Herro;
