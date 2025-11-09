import React from 'react'

const AutoNewsCard = ({id, img, desc}) => {
  return (
    <div className='border-2 border-gray-700 rounded-md cursor-pointer' key= {id} >
        <div className="w-full h-56 overflow-hidden"> 
            <img src={img} className="w-full h-full object-cover object-center" alt="Img" />
        </div>
        <h3 className='font-semibold text-lg p-2'>{desc}</h3>
    </div>
  )
}

export default AutoNewsCard