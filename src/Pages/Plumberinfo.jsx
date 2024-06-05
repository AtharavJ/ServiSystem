

export default function Plumberinfo() {

    const plumbers = [
        { name: 'Vaibhav Avinash Tiwari', phone: '1234567891', rating: '5', Image: '' },
        { name: 'Sima Naresh Maske', phone: '1234567891', rating: '4', Image: '' },
        { name: 'Simran Akbar Malik', phone: '1234567891', rating: '4', Image: '' },
        { name: 'Ramesh Anil Kale', phone: '1234567891', rating: '3', Image: '' },
        { name: 'Johany Akbar Sins', phone: '1234567891', rating: '4', Image: '' },
        { name: 'Narendra Vilas Khot', phone: '1234567891', rating: '4', Image: '' },
        { name: 'Ajay Ram Patil', phone: '1234567891', rating: '2', Image: '' },
        { name: 'Amit Arvind Mote', phone: '1234567891', rating: '5', Image: '' },
    ];

    return (
        <>

            <h2 className="text-center my-8 px-4 text-3xl font-semibold
                 hover:scale-110">All Plumbers Information</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full h-full max-w-screen-lg mx-auto ">
                {plumbers.map((plumbers, index) => (
                    <div key={index} className="w-full h-72 m-4 border-solid border-4 rounded-md flex flex-col space-y-2 items-center justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" /*style={{ backgroundImage=`url(${})`}}*/>

                        <h2 className="text-xl font-bold bg-opacity-50 px-2 py-1 rounded">
                            {plumbers.name}</h2>

                        <h4 className="text-lg bg-opacity-50 px-2 py-1 rounded">
                            Mobile No: {plumbers.phone}</h4>

                        <p className="text-md bg-opacity-50 px-2 py-1 rounded">
                            Rating: {plumbers.rating}</p>
                    </div>
                ))
                }

                {/* <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Vaibhav Avinash Tiwari</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className="w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"  >
                    <h2>Sima Naresh Maske</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Simran Akbar Malik</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Ramesh Anil Kale</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Johany Akbar Sins</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Narendra Vilas Khot</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Ajay Ram Patil</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>
                </div>

                <div className=" w-full h-72  m-4 border-solid border-4	rounded-md flex space-x-6 items-end justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" >
                    <h2>Amit Arvind Mote</h2>
                    <h4>Mobile No:1234567891</h4>
                    <p>Rating:</p>

                </div> */}

            </section>
        </>
    )
}