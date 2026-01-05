

import React from "react";
import { FaFacebookF, FaWhatsapp, FaViber } from "react-icons/fa";

const partnersData = [
  {
    id: 1,
    name: "E-TMTL",
    logo: "/TMTL_logo.png",
    website: "https://tmtl.in/eicherengines/silent-gensets/",
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
    logo: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/home/logo.png",
    website: "https://piaggio-cv.co.in",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

        {/* ================== Company Info ================== */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-extrabold">
            <span className="text-cyan-400">General</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Enterprises
            </span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering reliable power, advanced energy systems, and professional 
            commercial mobility solutions across Nepal.
          </p>
          <p className="text-xs text-gray-500 italic">
            "Your Partner in Reliable Power & Modern Mobility"
          </p>
        </div>

        {/* ================== Quick Links ================== */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-cyan-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400 transition">About Us</a></li>
            <li><a href="/products" className="hover:text-cyan-400 transition">Products</a></li>
            <li><a href="/services" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* ================== Partners (Vertical) ================== */}
        <div className="flex flex-col space-y-6 items-center md:items-start">
          <h3 className="text-xl font-bold text-cyan-400">Our Partners</h3>

          <div className="flex flex-col gap-6">
            {partnersData.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-3 md:h-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ================== Contact ================== */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-cyan-400">Contact Us</h3>
          <p className="text-gray-400 text-sm">Durbar Marg, Kathmandu–1, Nepal</p>
          <p className="text-gray-400 text-sm">Phone: +977 9847130210</p>
          <p className="text-gray-400 text-sm">Email: info@generalenterprises.com</p>

          <div className="flex gap-5 mt-3 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61578720955341" className="hover:text-cyan-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/+9779847130210" className="hover:text-cyan-400 transition">
              <FaWhatsapp />
            </a>
            <a href="viber://chat?number=+9779847130210" className="hover:text-cyan-400 transition">
              <FaViber />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} General Enterprises Pvt. Ltd. — Driving Innovation. Powering Progress.
      </div>
    </footer>
  );
};

export default Footer;


