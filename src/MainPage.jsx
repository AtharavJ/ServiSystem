import './Style.css'
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function MainPage() {
    const location = useLocation();
    return (
        <>
            <div>

                <section className="flex space-x-6  ">

                    <Link className='font-normal hover:font-bold'
                        to="/" >ServiSystem</Link>   {/*SS:ServiSystem */}

                    <Link className='font-normal hover:font-bold'
                        to="/Services" >Services</Link>

                    <Link className='font-normal hover:font-bold'
                        to="/Testimonials">Testimonials</Link>

                    <Link className='font-normal hover:font-bold'
                        to="/About" >About</Link>

                    <Link className='font-normal hover:font-bold'
                        to="/Signup" >Signup</Link>

                </section>
            </div>
            {location.pathname === '/' && (<span>
                <h2 className=' font-mono text-6xl hover:text-indigo-600 hover:capitalize'>
                    Home services at your Doorstep
                </h2>
            </span>)}
        </>
    )
}



