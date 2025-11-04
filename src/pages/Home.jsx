import React from 'react'
import Navbar from '../components/Navbar'
import Herro from '../components/Home/Herro'
import Featured from '../components/Home/Featured/Featured'
import WhyUs from '../components/Home/WhyUs/WhyUs'

const Home = () => {
  return (
    <>
    <Navbar />
    <Herro />
    <Featured/>
    <WhyUs />
    </>
  )
}

export default Home