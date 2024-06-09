import Accleaning from '../Images/Accleaning.jpeg';
import Acgasfilling from '../Images/Acgasfilling.jpeg';
import Acinstallation from '../Images/Acinstallation.jpeg';




export default function Bookacservice() {
    return (
        <>
            <span>
                <h2 className="text-center my-8 px-4 text-3xl font-semibold hover:scale-110 hover:text-orange-700 hover:font-Oswald transition duration-300">AC Services</h2>
            </span>
            <section className="flex justify-center space-x-8">
                <div className="relative w-96 h-80 border-4 border-black rounded-md flex flex-col items-center justify-end bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl "
                    style={{ backgroundImage: `url(${Accleaning})` }}>
                    <h4 className="text-black bg-customblue	text-lg	font-semibold	 bg-opacity-40 w-full text-center py-2"><strong>AC Cleaning</strong></h4>
                    <ul className="bg-customblue text-lg font-semibold	 text-black bg-opacity-40 w-full text-center py-2">
                        <li><h4>30-DAY WARRANTY</h4></li>
                        <li>Next at ₹449 <span className="line-through">₹549</span></li>
                    </ul>
                </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md flex flex-col items-center justify-end bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                    style={{ backgroundImage: `url(${Acgasfilling})` }}>
                    <h4 className="text-black font-semibold bg-slate-300 bg-opacity-40 w-full text-center py-2"><strong>AC Gas Filling</strong></h4>
                    <ul className="bg-slate-300 font-semibold bg-opacity-40 w-full text-center py-2">
                        <li><h4>30-DAY WARRANTY</h4></li>
                        <li>Next at ₹449 <span className="line-through">₹549</span></li>
                    </ul>
                </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md flex flex-col items-center justify-end bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                    style={{ backgroundImage: `url(${Acinstallation})` }}>
                    <h4 className="text-black font-semibold bg-customOrange bg-opacity-40 w-full text-center py-2"><b>AC Install & Uninstall</b></h4>
                    <ul className="bg-customOrange  font-semibold bg-opacity-40 w-full text-center py-2">
                        <li><h4>30-DAY WARRANTY</h4></li>
                        <li>Next at ₹449 <span className="line-through">₹549</span></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
