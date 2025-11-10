import React from 'react'
import Vision from './Vision'
import Approch from './Approch'

const AboutUs = () => {
  return (
    <div>
        <div className='pt-2'>
            <h1 className='font-bold text-4xl text-center'>About
                <span className='text-yellow-500'>US</span>
            </h1>
        </div>
       
        <Vision />
        <Approch />
    </div>
  )
}

export default AboutUs