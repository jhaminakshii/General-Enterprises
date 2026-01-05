import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
  // If NOT home page → navbar should be solid
  if (!isHome) {
    setScrolled(true);
    return;
  }

  // Home page scroll behavior
  const handleScroll = () => {
    setScrolled(window.scrollY > 60);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isHome]);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-50 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/cyanGenLogo.png"
            alt="General Enterprises"
            className={`transition-all duration-300 ${
              scrolled ? "h-12" : "h-16"
            } object-contain`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-10 font-semibold tracking-wide uppercase text-sm ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {["Home", "About", "Services"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-cyan-400 transition">
                {item}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* PRODUCTS */}
          <div className="relative group">
            <button className="relative group-hover:text-cyan-400 transition">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>

            <div className="absolute top-full left-0 mt-4 w-72 bg-white text-gray-800 shadow-xl rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition p-4">
              {[
                { name: "E-TMTL Silent Gensets", path: "/products/tmtl" },
                { name: "Phylion Lithium Battery", path: "/products/phylion" },
                { name: "Piaggio Vehicles", path: "/products/piaggio" },
              ].map((p) => (
                <Link
                  key={p.name}
                  to={p.path}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 rounded-full bg-cyan-400 text-gray-900 hover:bg-cyan-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          className={`md:hidden text-3xl ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-5 shadow-xl text-gray-800">
          {["Home", "About", "Services"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium"
            >
              {item}
            </Link>
          ))}

          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="w-full text-left font-medium text-lg"
          >
            Products {productsOpen ? "▲" : "▼"}
          </button>

          {productsOpen && (
            <div className="pl-4 space-y-3 text-gray-600">
              <Link to="/products/tmtl" onClick={() => setMenuOpen(false)}>E-TMTL</Link>
              <Link to="/products/phylion" onClick={() => setMenuOpen(false)}>Phylion</Link>
              <Link to="/products/piaggio" onClick={() => setMenuOpen(false)}>Piaggio</Link>
            </div>
          )}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-cyan-400 py-3 rounded-full font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
