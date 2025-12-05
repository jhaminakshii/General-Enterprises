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
    <div className='m-0'>
    <div className='mt-0'>
      <Navbar  />
    </div>

    <div className='m-0 pt-16'>
    <Herro />
    </div>
    <Featured/>
    <WhyUs />
    <OurMission />
    <AutoNews />
    <Footer />
    </div>
  )
}

export default Home