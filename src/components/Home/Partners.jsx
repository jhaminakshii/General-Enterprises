// import React from "react";
// import useScrollAnimation from "../../hooks/useScrollAnimation";


// const partnersData = [
//   {
//     id: 1,
//     name: "E-TMTL",
//     logo: "/GENLOGO.jpg", // replace with your logo path
//   },
//   {
//     id: 2,
//     name: "Phylion",
//     logo: "https://phylion.com/static/addons/cms/images/phylion_logo.png",
//   },
//   {
//     id: 3,
//     name: "Piaggio",
//     logo: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/home/logo.png",
//   },
//   // Add more partners if needed
// ];

// const Partners = () => {
//   const sectionAnim = useScrollAnimation ("fade-up");

//   return (
//     <section
//       ref={sectionAnim.ref}
//       className={`bg-white py-10 fade-up ${sectionAnim.isVisible ? "show" : ""}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-20 text-center justify-center">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
//           Our Trusted <span className="text-gray-800">Partners</span>
//         </h2>
//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
//           We proudly distribute and support industry-leading brands in power, energy, 
//           and mobility solutions across Nepal.
//         </p>

//         {/* Partners Grid */}
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center place-items-center">
//   {partnersData.map((partner) => (
//     <div
//       key={partner.id}
//       className="p-4 bg-cyan-300 rounded-xl flex items-center justify-center transition transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
//     >
//       <img
//         src={partner.logo}
//         alt={partner.name}
//         className="max-h-16 max-w-full object-contain"
//       />
//     </div>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// };

// export default Partners;

import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const partnersData = [
  {
    id: 1,
    name: "E-TMTL",
    logo: "\TMTL_logo.png",
    website: "https://tmtl.in/", 
  },
  {
    id: 2,
    name: "Phylion",
    logo: "/phylion_logo.png",
    website: "https://phylion.com",
  },
  {
    id: 3,
    name: "Piaggio",
    logo: "/piogio_logo.png",
    website: "https://piaggio-cv.co.in",
  },
  
];

const Partners = () => {
  const sectionAnim = useScrollAnimation("fade-up");

  return (
    <section
      ref={sectionAnim.ref}
      className={`bg-white py-16 fade-up ${sectionAnim.isVisible ? "show" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
          Our Trusted <span className="text-gray-800">Partners</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          We proudly distribute and support industry-leading brands in power, energy, and mobility solutions across Nepal.
        </p>

        {/* Responsive, centered grid */}
        <div className="grid gap-8 justify-center items-center 
                        grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
          {partnersData.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-4 bg-gray-100 rounded-xl
                         transition transform hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
