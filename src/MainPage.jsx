import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Style.css'
import Footer from './Footer'
import About from './About';
import Testimonials from './Testimonials';
import Signup from './Signup';
import Services from './Services';


export default function MainPage() {
    return (
        <Router>
            <>
                <div>
                    <header className='w-full h-35 border-4 border-rose-400 text-center rounded shadow-md'>
                        <h1 className="text-purple-600 text-8xl font-serif	 ">Welcome to ServiSystem</h1>
                    </header>
                    <br></br>
                    <section class="flex space-x-4">
                        <Link to="/MainPage" >Home</Link>
                        <Link to="/Services" >Services</Link>
                        <Link to="/Testimonials">Testimonials</Link>
                        <Link to="/About" >About</Link>


                    </section>
                    <Routes>
                        <Route path='/MainPage' element={<MainPage />} ></Route>
                        <Route path='/Services' element={<Services />} ></Route>
                        <Route path='/Testimonials' element={<Testimonials />} ></Route>
                        <Route path='/About' element={<About />} ></Route>
                    </Routes>
                    <Footer />
                </div>


            </>
        </Router>
    )
}