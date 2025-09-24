import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Featured = () => {

    const productsData = [
        {
            id:0,
            img:"/battery-auto.png",
        }
    ]

  return (
    <div>
        <h1 className='font-bold text-4xl text-center'>
            Featured <span className='text-amber-500'>Products</span>
        </h1>
        <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam,
        </p>
    </div>
  )
}

export default Featured