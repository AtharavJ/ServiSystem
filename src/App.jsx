import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Style.css'
import MainPage from './MainPage'
import Footer from './Footer'
import About from './About';
import Testimonials from './Testimonials';
import Signup from './Signup';
import Services from './Services';
import Copyright from './Copyright';
import Getintouch from './Getintouch';






function App() {

  return (
    <>
      <Router>
        <MainPage />
        <Routes>
          <Route path='/MainPage' element={<MainPage />} ></Route>
          <Route path='/Services' element={<Services />} ></Route>
          <Route path='/Testimonials' element={<Testimonials />} ></Route>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Copyright' element={<Copyright />} ></Route>
          <Route path='/Getintouch' element={<Getintouch />} ></Route>
        </Routes>
      </Router>


    </>
  )
}

export default App
