export default function Allservices() {
    return (
        <>
            <span >
                <h2 className="text-center my-8 px-4 text-3xl font-semibold
                 hover:scale-110   " >All Services</h2>        {/*add hover colour*/}
            </span>

            <br></br>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-w-screen-lg mx-auto">

                <div className=" w-80 h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl	">
                    <h2>Plumbing Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl	"><h2>House Cleaning Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl	"><h2>Electrical-Related Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl	">
                    <h2>Grooming-Related Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl	" >
                    <h2>Kitchen-Related Services</h2>
                </div>

                <div className=" w-80 h-72 m-4 border-solid border-4 rounded-md flex  items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl	" >
                    <h2>Electronic-Related Services</h2>
                </div>
            </section>
        </>
    )
}