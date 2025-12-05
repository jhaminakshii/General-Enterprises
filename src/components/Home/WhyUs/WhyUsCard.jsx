import React from 'react'

const WhyUsCard = ({icon,title}) => {
  return (
    <div className=' text-center p-8 space-y-4 bg-slate-100 hover:bg-neutral-700 hover:text-white 
     transition duration-200 ease-in-out rounded-md cursor-pointer '>
        {icon}
        <h1 className='text-cyan-500 font-bold text-3xl'>{title}</h1>
        <p className='text-sm'>
            Hear it from our customers: Real stories, real experiences. Discover a collection of heartfelt
             testimonials that showcase why customers choose Piaggio as their trusted companion
              and is a preferred choice for those seeking exceptional performance.
        </p>
    </div>
  )
}

export default WhyUsCard