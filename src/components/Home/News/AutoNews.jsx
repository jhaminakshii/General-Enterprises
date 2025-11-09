import React from 'react'
import Slider from 'react-slick'
import AutoNewsCard from './AutoNewsCard'

const AutoNews = () => {
    const newsData = [
        {
            id:0,
            img:"/desk-banner.png",
            desc:"Discover powerful features designed to simplify, streamline, and supercharge your experience"
        },
        {
            id:1,
            img:"/phylion.png",
            desc:"Discover powerful features designed to simplify, streamline, and supercharge your experience"
        },
        {
            id:2,
            img:"/battery-auto.png",
            desc:"Discover powerful features designed to simplify, streamline, and supercharge your experience"
        },
        {
            id:3,
            img:"/e-rikshaw-battery.webp",
            desc:"Discover powerful features designed to simplify, streamline, and supercharge your experience"
        },
        {
            id:4,
            img:"/power-generation-collarge-1754981640.jpg",
            desc:"Discover powerful features designed to simplify, streamline, and supercharge your experience"
        },
        {
            id:5,
            img:"/battery-auto.png",
            desc:"Discover powerful features designed to simplify, streamline, and supercharge your experience"
        },
    ]

    const settings = {
        dots : false,
        infinite : true,
        slidesToShow : 3,
        SlidesToScroll: 1,
        autoplay : true,
        autoplaySpeed:2000,
        pauseOnHover : true,
        arrows:false,
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
    <div className='container mt-10'>
        <h1 className='font-bold text-4xl text-center'>
            Products <span className='text-yellow-500'>News & Advices</span>
        </h1>
        <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.quaerat?
        </p>
        <div className='mt-8 '>
            <Slider {...settings}>
                {newsData.map((item)=>(
                    <AutoNewsCard key={item.id} img={item.img} desc={item.desc} />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default AutoNews