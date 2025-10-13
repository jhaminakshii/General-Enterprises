import React from 'react'

const FeaturedCard = ({id , img , name , price}) => {
  return (
    <div className='border-1 border-gray-700 bg-slate-100 text-black rounded-xl
        mb-2 cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear'
        key={id}>
        <div>
            <img src={img} alt="Auto Picture" className='rounded-t-xl w-full'  />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-xl '>{name}</h1>
        </div>
        <div>
            <h2>Starting at NRP{price}</h2>
        </div>
    </div>
  )
}

export default FeaturedCard