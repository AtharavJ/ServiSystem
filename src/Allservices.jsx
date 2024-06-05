import PlumbingImg from './PlumbingImg.jpeg';
import AcImg from './AcImg.jpeg';
import ElectricalImg from './ElectricalImg.jpeg';
import GroomingImg from './GroomingImg.jpeg';
import HouseCleaningImg from './HouseCleaningImg.jpeg';
import KitchenImg from './KitchenImg.jpeg';



export default function Allservices() {
    return (
        <>
            <span >
                <h2 className="text-center my-8 px-4 text-3xl font-semibold
                 hover:scale-110   " >All Services</h2>        {/*add hover colour*/}
            </span>

            <br></br>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-w-screen-lg mx-auto">

                <div className=" w-80 h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                    style={{ backgroundImage: `url(${PlumbingImg})` }}>
                    <h2>Plumbing Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${HouseCleaningImg})` }}><h2>House Cleaning Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${ElectricalImg})` }}><h2>Electrical-Related Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${GroomingImg})` }}>
                    <h2>Men/Women Grooming Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundColor: `url(${KitchenImg})` }} >
                    <h2>Kitchen-Cleaning Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex  items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" style={{ backgroundImage: `url(${AcImg})` }} >
                    <h2>Ac/refrigerator-Related Services</h2>
                </div>
            </section>
        </>
    )
}