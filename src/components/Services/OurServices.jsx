import React from 'react'
import { FaCar } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { MdDesignServices} from 'react-icons/md';
import { IoSettings} from 'react-icons/io5';
import { SiCoronaengine, SiGoogleearthengine } from 'react-icons/si';
import ServiceCard from './ServiceCard';

const OurServices = () => {

  const icon1 = <GiCarWheel className='text-green-500 mx-auto' size={48}  />
  const icon2 = <SiGoogleearthengine className='text-green-500 mx-auto' size={48} />
  const icon3 = <MdDesignServices className='text-green-500 mx-auto' size={48} />
  const icon4 = <IoSettings className='text-green-500 mx-auto' size={48} />
  const icon5 = <FaCar className='text-green-500 mx-auto' size={48} />
  const icon6 = <SiCoronaengine className='text-green-500 mx-auto' size={48} />

  return (
    <div className='container pt-10'> 
        <div>
          <h1 className='font-bold text-4xl text-center'>Our
             <span className='text-yellow-500'>Services</span>
        </h1>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
          <ServiceCard icon = {icon1} title='Tires & Wheels' />
          <ServiceCard icon = {icon2} title='Exhaust System' />
          <ServiceCard icon = {icon3} title='Auto Maintanance' />
          <ServiceCard icon = {icon4} title='Brake Repairs' />
          <ServiceCard icon = {icon5} title='Body Services' />
          <ServiceCard icon = {icon6} title='Engine Services' />

        </div>
    </div>
  )
}

export default OurServices;