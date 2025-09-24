import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Products from './pages/Products'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>

        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App