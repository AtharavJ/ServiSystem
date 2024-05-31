import './Style.css'
import Footer from './Footer'
import BGIMG from './Servisystem_BGIMG.jpeg'
import { Outlet, Link } from 'react-router-dom';
import { Component } from 'react';
import React from 'react';

class MainPage extends Component {

    render() {
        // const myStyle = {
        //     backgroundImage: `url(${BGIMG})`,
        //     backgroundSize: "100%",
        //     height: "1070px",
        //     width: "100%",
        //     marginTop: "-120px",
        //     marginBottom: "0px",
        //     fontSize: "50px",
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        // };
        return (
            <>
                {/* <div style={{ myStyle }}> */}

                <div>
                    <div>
                        {/* <header className='w-full h-35 border-4 border-rose-400 text-center rounded shadow-md'>
                            <h1 className="text-purple-600 text-8xl font-serif">Welcome to ServiSystem</h1>
                        </header> */}

                        <br></br>
                        <section className="flex space-x-4">

                            <Link to="/" >Home</Link>

                            {/* <div class="modal-dialog modal-dialog-scrollable">  
                            </div> */}

                            <Link to="/Services" >Services</Link>
                            <Link to="/Testimonials">Testimonials</Link>
                            <Link to="/About" >About</Link>
                        </section>
                    </div>

                    <Footer />
                </div>
            </>

        )


    }

}

export default MainPage;