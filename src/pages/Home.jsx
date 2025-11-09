import React from 'react'
import Navbar from '../components/Navbar'
import Herro from '../components/Home/Herro'
import Featured from '../components/Home/Featured/Featured'
import WhyUs from '../components/Home/WhyUs/WhyUs'
import OurMission from '../components/Home/Mission/OurMission'
import AutoNews from '../components/Home/News/AutoNews'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Herro />
    <Featured/>
    <WhyUs />
    <OurMission />
    <AutoNews />
    <Footer />
    </>
  )
}

export default Home