import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Vehicles from './pages/Vehicles'
import Services from './pages/Services'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vehicles' element={<Vehicles />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>

        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App