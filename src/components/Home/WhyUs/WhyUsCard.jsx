import React from 'react'

const WhyUsCard = ({icon,title}) => {
  return (
    <div className=' text-center p-8 space-y-4 bg-slate-100 hover:bg-neutral-700 hover:text-white 
     transition duration-200 ease-in-out rounded-md cursor-pointer '>
        {icon}
        <h1 className='text-yellow-500 font-bold text-3xl'>{title}</h1>
        <p className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Doloremque repellendus quasi ipsum, debitis nemo provident unde corrupti ex.
             Delectus dignissimos nemo non,inventore tenetur eius quae omnis cupiditate perferendis nihil.
        </p>
    </div>
  )
}

export default WhyUsCard