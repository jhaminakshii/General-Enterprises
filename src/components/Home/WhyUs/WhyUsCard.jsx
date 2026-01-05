import React from "react";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const WhyUsCard = ({ icon, title, description, delay = 0 }) => {
  const anim = useScrollAnimation("fade-up", delay);

  return (
    <div
      ref={anim.ref}
      className={`bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-up ${
        anim.isVisible ? "show" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-cyan-600 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default WhyUsCard;

