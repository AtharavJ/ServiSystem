import servisystemimg from "./Images/Servisystem_BGIMG.jpeg";
import './Style.css'
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
export default function MainPage() {
    const location = useLocation();
    return (
        <>
            <div className=""
            /* style={{
            //     backgroundImage: `url(${servisystemimg})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat'
            // }}*/
            >

                <section className="flex space-x-6   ">

                    <Link className='font-normal hover:font-bold'
                        to="/" >ServiSystem</Link>
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



