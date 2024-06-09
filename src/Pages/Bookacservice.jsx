// import Accleaning from './Accleaning.jpeg';
// import Acgasfilling from './Acgasfilling.jpeg';
// import Acinstallation from './Acinstallation';

export default function Bookacservice() {
    return (
        <>
            <div>
                <h2 className="text-center my-8 px-4 text-3xl font-semibold
                 hover:scale-110 hover:text-orange-700"> AC Services</h2>
            </div >
            <section className="flex space-x-8">
                <div className="relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl ml-10">
                    { /* style={{ backgroundImage: `url(${TestimonialImage})` }}> */}
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">AC Cleaning</h4>
                </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl" >
                    {/*style={{ backgroundImage: `url(${ServicesImage})` }}> */}
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">AC Gas Filling</h4>

                </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">

                    {/*style={{ backgroundImage: `url(${VisualsImage})` }}> */}
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">AC Install & Uninstall/</h4>
                </div>
            </section>
        </>
    )
}