import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Home/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us | General Enterprises Nepal</title>
        <meta
          name="description"
          content="Learn about General Enterprises, authorized distributors of E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles across Nepal."
        />
        <meta
          name="keywords"
          content="General Enterprises Nepal, About General Enterprises, E-TMTL, Phylion, Piaggio, Gensets, Lithium Batteries, Commercial Vehicles"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | General Enterprises Nepal" />
        <meta
          property="og:description"
          content="Learn about General Enterprises, authorized distributors of E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles across Nepal."
        />
        <meta property="og:image" content="/GEN_logo.png" />
        <meta property="og:url" content="https://www.generalenterprises.com.np/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | General Enterprises Nepal" />
        <meta
          name="twitter:description"
          content="Learn about General Enterprises, authorized distributors of E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles across Nepal."
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
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default About;
