import React from "react";
import Slider from "react-slick";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
{
id: 1,
name: "Ramesh Thapa",
designation: "Business Owner",
photo: "/happy-bearded-man-business-clothes-looking-camera.jpg",
rating: 5,
review:
"General Enterprises provided excellent service and high-quality products. The Phylion batteries we purchased have improved our operations tremendously.",
},
{
id: 2,
name: "Sita Gurung",
designation: "Manager, Logistics Company",
photo: "/closeup-young-female-professional-making-eye-contact-against-colored-background.jpg",
rating: 4,
review:
"Fast delivery, responsive support, and reliable products. The Piaggio vehicles have been a game-changer for our fleet operations.",
},
{
id: 3,
name: "Anil Shrestha",
designation: "Electrician / Installer",
photo: "/happy-businessman-smiling-camera.jpg",
rating: 5,
review:
"The E-TMTL Silent Gensets are efficient, reliable, and easy to install. Highly recommend General Enterprises for power solutions.",
},
];

const Testimonials = () => {
const sectionAnim = useScrollAnimation("fade-up");

const sliderSettings = {
dots: true,
infinite: true,
speed: 1000,
slidesToShow: 2,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 4000,
arrows: false,
responsive: [
{
breakpoint: 1024,
settings: { slidesToShow: 2 },
},
{
breakpoint: 768,
settings: { slidesToShow: 1 },
},
],
};

const renderStars = (count) => {
return Array.from({ length: 5 }, (_, i) => (
<span key={i} className={`text-yellow-400 ${i < count ? "opacity-100" : "opacity-30"}`}>
★ </span>
));
};

return (
<section
ref={sectionAnim.ref}
className={`bg-gray-50 py-20 fade-up ${sectionAnim.isVisible ? "show" : ""}`}
> <div className="max-w-7xl mx-auto px-6 md:px-20 text-center"> <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
What Our <span className="text-gray-800">Customers Say</span> </h2> <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
Hear from our clients about their experience with our products and services. Real stories, real results. </p>


    <Slider {...sliderSettings}>
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="p-6 md:p-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg md:text-xl text-cyan-600">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm md:text-base mb-2">{testimonial.designation}</p>
            <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
            <p className="text-gray-700 text-sm md:text-base">{testimonial.review}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>


);
};

export default Testimonials;
