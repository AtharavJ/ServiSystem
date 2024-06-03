export default function Services() {
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold mb-8"> All Services</h2>
            </div>
            <section className=" flex space-x-8">
                <div className=" relative w-96 h-80 border-4 border-black rounded-md flex space-x-6 items-end justify-center bg-cover bg-center 
                transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl ml-10	"
                    style={{ backgroundImage: "url('./Testimonial.jpeg')" }}>
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2" >Testimonials</h4></div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md	flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                    style={{ backgroundImage: "url('./Services.png')" }}>
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2" >Services</h4> </div>

                <div className="relative w-96 h-80 border-4 border-black rounded-md	flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                    style={{ backgroundImage: "url('./Visuals.jpeg')" }}>
                    <h4 className="text-white bg-black bg-opacity-50 w-full text-center py-2">Visuals</h4></div>
            </section>
        </>
    )
}