import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './MainPage'
import Footer from './Footer'
import About from './About';
import Testimonials from './Testimonials';
import Signup from './Signup';
import Services from './Services';
import Copyright from './Copyright';
import Getintouch from './Getintouch';
import Allservices from './Allservices';
import Plumberinfo from './Pages/Plumberinfo';
import Housecleanerdetails from './Pages/Housecleanerdetails';
import Electriciandetails from './Pages/Electriciandetails';
import Groomingdetails from './Pages/Groomingdetails';
import Kitchencleaners from './Pages/Kitchencleaners';
import Acservices from './Pages/Acservices';
import './App.css'
import './Style.css'



function App() {

  return (
    <>
      <Router>
        <div className='  Navbar_div  w-full 	text-2xl font-serif shadow-md  text-purple-700 border-4 rounded-lg'>
          <MainPage />
        </div>
        <condforspan />
        <Routes>
          <Route path='/MainPage' element={<MainPage />} ></Route>
          <Route path='/Services' element={<Services />} ></Route>
          <Route path='/Testimonials' element={<Testimonials />} ></Route>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Copyright' element={<Copyright />} ></Route>
          <Route path='/Getintouch' element={<Getintouch />} ></Route>
          <Route path='/Signup' element={<Signup />} ></Route>
          <Route path='/Allservices' element={<Allservices />} ></Route>
          <Route path='/Plumberinfo' element={<Plumberinfo />} ></Route>
          <Route path='/Housecleanerdetails' element={<Housecleanerdetails />}></Route>
          <Route path='/Electriciandetails' element={<Electriciandetails />} ></Route>
          <Route path='/Groomingdetails' element={<Groomingdetails />}></Route>
          <Route path='/Kitchencleaners' element={<Kitchencleaners />} ></Route>
          <Route path='/Acservices' element={<Acservices />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
function condforspan() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (<span>
      <h2 className=' font-mono text-6xl hover:text-indigo-600 hover:capitalize'>
        Home services at your Doorstep
      </h2>
    </span>);
  }
  return null;

}

export default App
