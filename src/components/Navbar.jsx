import React, { useState } from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState(false);

  const handleChange = (e)=>{
    setMenu(!menu)
  }
  return (
    <header className='container-fluid fixed w-full z-10 bg-white text-cyan-600 py-3'>
        {/* Desktop navigation section */}
        <nav className='container flex justify-between items-center '>
            <div className='flex items-center gap-2 ml-6'>
                {/* General Enterprises */}
                <link rel="icon" type="image/svg+xml" href="/GLogo.jpg" />
                <img src="/GLogo.jpg" alt="logo" size={40} className='h-16 w-50' />
                {/* <GiSteeringWheel size={40} className='text-yellow-500'/>
                <Link to="/" className='font-bold text-2xl'>General Enterprises</Link> */}
            </div>
            <div className='hidden md:flex  items-center gap-6 font-medium text-xl'>
                <Link to="/" className='hover:text-green-900 transition duration-200 ease-linear'>Home</Link>
                <Link to="/about" className='hover:text-yellow-500 transition duration-200 ease-linear'>About</Link>
                <Link to="/products" className='hover:text-yellow-500 transition duration-200 ease-linear'>Products</Link>
                <Link to="/services" className='hover:text-yellow-500 transition duration-200 ease-linear'>Services</Link>
                <Link to="/contact" className='hover:text-yellow-500 transition duration-200 ease-linear'>Contact</Link>
            </div>
            <div className='md:hidden flex items-center'>
              {menu?(<AiOutlineClose size={25}  onClick={handleChange}/>)
              :(<RiMenuUnfoldFill size={25} onClick={handleChange}/>)}
            </div>
            {/* responsive section */}
            <div className={`transform transition-transform duration-300 ease-in-out
             ${menu?"translate-x-0":"-translate-x-full"} md:hidden flex flex-col bg-gray-700 absolute left-0 top-16
             items-center text-white gap-6 font-semibold text-2xl pt-8 pb-4 w-3/4 h-fit rounded-br-xl`}>
                <Link to="/" className='hover:text-yellow-500 transition duration-200 ease-linear'>Home</Link>
                <Link to="/about" className='hover:text-yellow-500 transition duration-200 ease-linear'>About</Link>
                <Link to="/products" className='hover:text-yellow-500 transition duration-200 ease-linear'>Products</Link>
                <Link to="/services" className='hover:text-yellow-500 transition duration-200 ease-linear'>Services</Link>
                <Link to="/contact" className='hover:text-yellow-500 transition duration-200 ease-linear'>Contact</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar