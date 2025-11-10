import React from 'react'

const Vision = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>

        <div className='w-full md:w-2/5'>
            {/* img Section */}
          <img src='\powe-deneration-banner-d-1754977594.jpg' alt="Img" className='rounded-lg' />
        </div>

        {/* content section */}
        <div className='w-full md:w-2/4 space-y-4'>
          <h1 className='text-4xl font-bold'>Our Vision</h1>
          <h2 className='font-semibold text-lg lg:'>
            Empowerindividuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.
          </h2>
          <p className='text-sm lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Minima, ducimus itaque. 
          </p>
          <p className='text-sm lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Minima, ducimus itaque. Distinctio, voluptas excepturi. 
            Sunt temporibus tempore, dolorum aut nihil odio voluptas.
            Cumque magni incidunt earum impedit est. Facilis, commodi.
          </p>
        </div>
    </div>
  )
}

export default Vision;