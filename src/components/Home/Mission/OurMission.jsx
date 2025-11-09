import React from 'react'

const OurMission = () => {
  return (
    <div className='container my-8'>
      <div>
        <h1 className='font-bold text-4xl text-center'>
          Our <span className='text-yellow-500'>Mission</span>
          </h1>
      </div>

      
      <div className='flex flex-col justify-center md:flex-row items-center gap-8 mt-8 mx-2'>
        {/* Img section */}
        <div className='w-full md:w-2/4 ml-1' >
          <img src="\powe-deneration-banner-d-1754977594.jpg" className='rounded-lg' alt="Img"  />
        </div>
      
       {/* Content Section */}
       <div className='w-full md:w-2/4 space-y-2'>
        <h1 className='font-bold text-lg text-yellow-500 lg:text-3xl'>
          Electric Mobility & Power Solutions
        </h1>
        <h2 className='font-semibold text-lg lg:text-2xl'>
          Enpower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className='text-sm lg:text-base'>We supply Piaggio vehicles, high-performance Pylion batteries and
           iCher generators for commercial use.</p>
           <p className='text-sm lg:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
             cumque dolore aperiam deserunt iste harum dolor consequuntur! Accusamus,
             vel ea officia sapiente expedita non animi, doloremque saepe quisquam quam modi?
           </p>
      </div>
     </div>
    </div>
  )
}

export default OurMission