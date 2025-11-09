import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-10 bg-neutral-700 text-white'>
        <div className=' flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-2xl pb-4 text-yellow-500'>GeneralEnterprises</h1>
                <p className='mb-2 text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis labore,
                     maxime iure at molestiae consequatur assumendarem pariatur aliquid distinctio
                      placeat architecto? Labore est beatae culpa dicta a laborum sunt!
                </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0 text-yellow-500'>Page Links</h1>
                <div className=' flex flex-col gap-2 font-medium'>
                    <Link to="/" className='hover:text-yellow-500 transition duration-200 ease-linear'>Home</Link>
                    <Link to="/about" className='hover:text-yellow-500 transition duration-200 ease-linear'>About</Link>
                    <Link to="/products" className='hover:text-yellow-500 transition duration-200 ease-linear'>Products</Link>
                    <Link to="/services" className='hover:text-yellow-500 transition duration-200 ease-linear'>Services</Link>
                    <Link to="/contact" className='hover:text-yellow-500 transition duration-200 ease-linear'>Contact</Link>

                </div>
            </div>

            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0 text-yellow-500'>Used Products fore sales</h1>
                <div  className=' flex flex-col gap-2 font-medium'>
                   <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear'>Apé NXT+ (Small Body)</Link>
                   <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear'>Apé Auto Classic (Wide Body)</Link>
                   <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear'>Apé Auto DX (Wide Body)</Link>
                   <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear'>Apé NXT+ (Small Body)</Link>   
                </div>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0 text-yellow-500'>Learn More</h1>
                <div  className=' flex flex-col gap-2 font-medium'>
                   <Link to="/" className='hover:text-yellow-500 transition duration-200 ease-linear'>User-friendly</Link>
                   <Link to="/" className='hover:text-yellow-500 transition duration-200 ease-linear'>Search and Filters</Link>
                   <Link to="/" className='hover:text-yellow-500 transition duration-200 ease-linear'>Secure Payment</Link>
                   <Link to="/" className='hover:text-yellow-500 transition duration-200 ease-linear'>Geolocation Services</Link>   
  
                </div>
            </div>
        </div>
        <div>
           
            <p className='text-center  pb-4'>
               ©  {new Date().getFullYear()}
               <span className='text-yellow-500 font-semibold mx-2'>General Enterprises</span>| All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer