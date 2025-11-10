import React from 'react'
import ProductCards from './ProductCards';

const OurProducts = () => {
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
  return (
    <div className=' container py-6'>
        <div>
            <h1 className='font-bold text-4xl text-center py-1'>Our
                 <span className='text-yellow-500'>Products</span>
            </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
            {productsData.map((item) => (
                <div>
                    <ProductCards 
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                    />
                </div>
            ))}
           
        </div>
    </div>
  )
}

export default OurProducts