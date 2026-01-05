import React from "react";
import Navbar from "../components/Navbar";
// import OurProducts from '../components/Products/OurProducts';
import Featured from "../components/Home/Featured/Featured.jsx";
import Footer from "../components/Home/Footer";
import { Helmet } from "react-helmet-async";

const Products = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Products | General Enterprises Nepal</title>
        <meta
          name="description"
          content="Discover our range of products including E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles in Nepal."
        />
        <meta
          name="keywords"
          content="General Enterprises Nepal, E-TMTL, Phylion, Piaggio, Gensets, Lithium Batteries, Commercial Vehicles, Products"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Products | General Enterprises Nepal" />
        <meta
          property="og:description"
          content="Discover our range of products including E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles in Nepal."
        />
        <meta property="og:image" content="/GEN_logo.png" />
        <meta property="og:url" content="https://www.generalenterprises.com.np/products" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products | General Enterprises Nepal" />
        <meta
          name="twitter:description"
          content="Discover our range of products including E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles in Nepal."
        />
        <meta name="twitter:image" content="/GEN_logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "General Enterprises",
            url: "https://www.generalenterprises.com.np",
            logo: "https://www.generalenterprises.com.np/GEN_logo.png",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61578720955341",
              "https://wa.me/+9779847130210",
              "viber://chat?number=+9779847130210",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+9779847130210",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <main className="mt-20">
        {/* <OurProducts /> */}
        <Featured />
      </main>
      <Footer />
    </>
  );
};

export default Products;
