import React from 'react'

const ProductCards = ({ id , img , name , price }) => {
  return (
    <div key={id} className='border-2 border-gray-700 bg-slate-100 text-black rounded-xl mb-2 
                cursor-pointer hover:bg-neutral-600 hover:text-white 
                 transition duration-200 ease-in-out'>
        <img src={img} alt="Img" />
        <h1 className='font-bold text-xl pl-5 text-yellow-500'>{name}</h1>
        <p className=' pl-5 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elite., facilis!</p>
        <div className=' flex justify-between px-6 pb-2'>
            <h3 className='font-semibold text-xl'>${price}</h3>
            <button className='bg-neutral-700 text-white text-base md:text-lg px-2 md:px-3
                py-1 rounded-md hover:bg-yellow-500 transition duration-200 ease-linear'>Book Now</button>
        </div>
    </div>
  )
}

export default ProductCards