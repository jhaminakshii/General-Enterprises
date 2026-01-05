import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const productsData = [
    {
      id: 0,
      img: "/silent-gensets-air.webp",
      name: "EICHER Silent Gensets – Air Cooled Series",
      specs: "Power Range: 5–35 kVA",
    },
    {
      id: 1,
      img: "/genwatercool.webp",
      name: "TMTL Silent Gensets – Water Cooled Series",
      specs: "Power Range: 40–150 kVA",
    },
    {
      id: 2,
      video: "/Phylion_video.mp4",
      name: "Phylion Lithium Battery Solutions",
      specs: "For E-Rickshaw & EV Applications",
    },
    {
      id: 3,
      img: "/piaggio-hero1.jpg",
      name: "Piaggio Ape NXT+ BS6",
      specs: "Engine: 230cc | Heavy Duty",
    },
    // {
    //   id: 4,
    //   img: "/battery-auto.png",
    //   name: "Piaggio Cargo CNG",
    //   specs: "High Mileage • CNG Variant",
    // },
    // {
    //   id: 5,
    //   img: "/battery-auto.png",
    //   name: "Cargo Diesel HD 599cc",
    //   specs: "Engine: 599cc • Commercial Grade",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 2500,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-2">
      <h1 className="text-4xl font-bold text-center">
        Featured <span className="text-cyan-600">Products</span>
      </h1>
      <p className="text-center mt-2 text-gray-600">
        Explore our best-selling products from Gensets, Lithium Batteries, and Commercial Vehicles.
      </p>

      <div className="mt-10">
        <Slider {...settings}>
          {productsData.map((item) => (
            <FeaturedCard
              key={item.id}
              img={item.img}
              video={item.video}
              name={item.name}
              specs={item.specs}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
