import TestimonialImage from './Testimonial.jpeg';
import ServicesImage from './Services.png';
import VisualsImage from './Visuals.jpeg';
import { Link } from 'react-router-dom';
export default function Services() {
    return (
        <>
            <div>
                <h2 className="text-center my-8 px-4 text-3xl font-semibold
                 hover:scale-110 hover:text-orange-700"> All Services</h2>
            </div >
            <section className="flex space-x-8">
                <div className="relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl ml-10"
                    style={{ backgroundImage: `url(${TestimonialImage})` }}>
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">Testimonials</h4>
                    <Link></Link>
                </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                    style={{ backgroundImage: `url(${ServicesImage})` }}>
                    {/* <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">Services</h4>  */}
                    <Link className="text-white bg-black bg-opacity-50 w-full text-center py-2" to={"/Allservices"}>Services</Link>
                </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                    style={{ backgroundImage: `url(${VisualsImage})` }}>
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">Visuals</h4>
                </div>
            </section>
        </>
    );
}

