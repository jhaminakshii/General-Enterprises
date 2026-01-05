import React from "react";
import HeroAbout from "./HeroAbout";
import Vision from "./Vision";
import Approach from "./Approch";
import Values from "./Values";
import DealerNetwork from "./DealerNetwork";
import BrandStrength from "./BrandStrength";



const AboutUs = () => {
  return (
    <div className="pt-2">
      <HeroAbout />
      <Vision />
      <Approach />
      <BrandStrength />
      <Values />
      <DealerNetwork />
    </div>
  );
};

export default AboutUs;
