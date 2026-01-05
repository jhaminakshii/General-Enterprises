import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Herro from "../components/Home/Herro";
import Featured from "../components/Home/Featured/Featured.jsx";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import Footer from "../components/Home/Footer";
import AboutUsContent from "../components/Home/AboutUsContent";
import Partners from "../components/Home/Partners.jsx";
import Testimonials from "../components/Home/Testimonials.jsx";
import ContactCTASection from "../components/Home/ContactCTASection.jsx";
// import DealerLocator from "../components/Home/DealerLocator.jsx";
// import OurMission from "../components/Home/Mission/OurMission";

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>General Enterprises | Power & Mobility Solutions Nepal</title>
        <meta
          name="description"
          content="Authorized distributor of E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles in Nepal. Reliable power, energy, and mobility solutions across Nepal."
        />
        <meta
          name="keywords"
          content="General Enterprises, E-TMTL, Phylion, Piaggio, gensets, lithium batteries, commercial vehicles, Nepal"
        />
        <meta name="author" content="General Enterprises" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="General Enterprises | Power & Mobility Solutions Nepal" />
        <meta
          property="og:description"
          content="Authorized distributor of E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles in Nepal."
        />
        <meta property="og:image" content="/GEN_logo.png" />
        <meta property="og:url" content="https://www.generalenterprises.com.np/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="General Enterprises | Power & Mobility Solutions Nepal" />
        <meta
          name="twitter:description"
          content="Authorized distributor of E-TMTL gensets, Phylion lithium batteries, and Piaggio commercial vehicles in Nepal."
        />
        <meta name="twitter:image" content="/GEN_logo.png" />
      </Helmet>

      {/* Navbar overlays Hero */}
      <Navbar />

      {/* Hero starts from TOP */}
      <Herro />

      <AboutUsContent />
      <Featured />
      <WhyUs />
      <Partners />
      <Testimonials />
      <ContactCTASection />
      {/* <DealerLocator /> */}
      {/* <OurMission /> */}
      <Footer />
    </>
  );
};

export default Home;
