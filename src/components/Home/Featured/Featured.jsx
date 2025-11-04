import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from './FeaturedCard';


const Featured = () => {

    const productsData = [
        {
            id:0,
            img:"/battery-auto.png",
            name: "Apé NXT+ (Small Body)",
            price: "4,50,000"
        },
        {
            id:1,
            img:"/battery-auto.png",
            name: "Apé Auto Classic (Wide Body)",
            price: "4,50,000"
        },
        {
            id:2,
            img:"/battery-auto.png",
            name: "Apé Metro (Medium Body)",
            price: "4,50,000"
        },
        {
            id:3,
            img:"/battery-auto.png",
            name: "Classic Cargo Diesel 435cc",
            price: "4,50,000"
        },{
            id:4,
            img:"/battery-auto.png",
            name: "Cargo CNG",
            price: "4,50,000"
        },{
            id:5,
            img:"/battery-auto.png",
            name: "Cargo Diesel HD 599cc",
            price: "4,50,000"
        }
    ];

    const settings = {
        dots : false,
        infinite : true,
        slidesToShow : 3,
        SlidesToScroll: 1,
        autoplay : true,
        speed: 2000,
        autoplaySpeed : 2000,
        cssEase: "linear",
        arrows: false,
        responsive : [
            {
                brakpoint:1023,
                settings:{
                    dots : true,
                    infinite : true,
                    slidesToShow : 3,
                    SlidesToScroll: 3,
                },
            },
             {
                brakpoint:768,
                settings:{
                   
                    slidesToShow : 2,
                    SlidesToScroll: 2,
                    initialSlide: 2
                },
            },
             {
                brakpoint:480,
                settings:{
                   slidesToShow : 1,
                    SlidesToScroll: 1,
                    initialSlide: 2
                },
            },
        ]
    }

  return (
    <div className= 'container mt-6 '>
        <h1 className='font-bold text-4xl text-center'>
            Featured <span className='text-amber-500'>Products</span>
        </h1>
        <p className='text-center mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam,
        </p>
        <div className='mt-8'>
           <Slider {...settings}>
                {productsData.map((item)=>(
                   <FeaturedCard
                    key = {item.id}
                    img = {item.img}
                    name = {item.name}
                    price = {item.price}
                   />
                ))}
            </Slider> 
        </div>
    </div>
  )
}

export default Featured