import PlumbingImg from './PlumbingImg.jpeg';
import AcImg from './AcImg.jpeg';
import ElectricalImg from './ElectricalImg.jpeg';
import GroomingImg from './GroomingImg.jpeg';
import HouseCleaningImg from './HouseCleaningImg.jpeg';
import KitchenImg from './KitchenImg.jpeg';
import { Link } from 'react-router-dom';



export default function Allservices() {
    return (
        <>
            <span >
                <h2 className="text-center my-8 px-4 text-3xl font-semibold
                 hover:scale-110 hover:text-orange-700" >All Services</h2>        {/*add hover colour*/}
            </span>

            <br></br>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-w-screen-lg mx-auto">

                <div className=" w-80 h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                    style={{ backgroundImage: `url(${PlumbingImg})` }}>
                    <Link to={"/Plumberinfo"} >Plumbing Services</Link>

                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${HouseCleaningImg})` }}>
                    <Link to={"/Housecleanerdetails"}>House Cleaning Services</Link>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${ElectricalImg})` }}>
                    <Link to={"/Electriciandetails"} >Electrical-Related Services</Link>
                    <h2></h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${GroomingImg})` }}>
                    <Link to={"/Groomingdetails"}>Men/Women Grooming Services</Link>

                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundColor: `url(${KitchenImg})` }} >
                    <Link to={"/Kitchencleaners"}>Kitchen-Cleaning Services</Link>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex  items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${AcImg})` }} >
                    <Link to={"/Acservices"} >Ac/refrigerator-Related Services</Link>
                </div>
            </section>
        </>
    )
}