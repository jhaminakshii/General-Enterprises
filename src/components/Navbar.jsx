import React, { useState } from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";

const Navbar = () => {

  const [menu,setMenu] = useState(false);

  const handleChange = (e)=>{
    setMenu(!menu)
  }
  return (
    <header className='container-fluid fixed w-full z-10 bg-gray-700 text-white py-3'>
        {/* Desktop navigation section */}
        <nav className='container flex justify-between items-center '>
            <div className='flex items-center gap-2 ml-6'>
                {/* General Enterprises */}
                <GiSteeringWheel size={40} className='text-blue-500'/>
                <a href="/" className='font-bold text-2xl'>General Enterprises</a>
            </div>
            <div className='hidden md:flex  items-center gap-6 font-medium text-xl'>
                <a href="/" className='hover:text-blue-500 transition duration-200 ease-linear'>Home</a>
                <a href="/about" className='hover:text-blue-500 transition duration-200 ease-linear'>About Us</a>
                <a href="/vehicles" className='hover:text-blue-500 transition duration-200 ease-linear'>Vehicles</a>
                <a href="/services" className='hover:text-blue-500 transition duration-200 ease-linear'>Services</a>
                <a href="/contact" className='hover:text-blue-500 transition duration-200 ease-linear'>Contact Us</a>
            </div>
            <div className='md:hidden flex items-center'>
              {menu?(<AiOutlineClose size={25}  onClick={handleChange}/>)
              :(<RiMenuUnfoldFill size={25} onClick={handleChange}/>)}
            </div>
            {/* responsive section */}
            <div className={`transform transition-transform duration-300 ease-in-out
             ${menu?"translate-x-0":"-translate-x-full"} md:hidden flex flex-col bg-gray-700 absolute left-0 top-16
             items-center text-white gap-6 font-semibold text-2xl pt-8 pb-4 w-3/4 h-fit rounded-br-xl`}>
                <a href="/" className='hover:text-blue-500 transition duration-200 ease-linear'>Home</a>
                <a href="/" className='hover:text-blue-500 transition duration-200 ease-linear'>About Us</a>
                <a href="/" className='hover:text-blue-500 transition duration-200 ease-linear'>Vehicles</a>
                <a href="/" className='hover:text-blue-500 transition duration-200 ease-linear'>Services</a>
                <a href="/" className='hover:text-blue-500 transition duration-200 ease-linear'>Contact Us</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar