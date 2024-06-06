export default function Electriciandetails() {
    const electrician = [
        { name: 'Vaibhav Avin Tiwari', phone: '1234567891', rating: '5', Image: '' },
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
                 hover:scale-110">All Electrician Information</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full h-full max-w-screen-lg mx-auto ">

                {electrician.map((electrician, index) => (
                    <div
                        key={index} className=" relative w-full h-72 m-4 border-solid border-4 rounded-md flex flex-col space-y-2 items-center justify-center bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl" /*style={{ backgroundImage=`url(${})`}}*/>
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 p-2 rounded-b-md">
                            <h2 className="text-xl font-bold bg-opacity-50 px-2 py-1 rounded">
                                {electrician.name}</h2>

                            <h4 className="text-lg bg-opacity-50 px-2 py-1 rounded">
                                Mobile No: {electrician.phone}</h4>

                            <p className="text-md bg-opacity-50 px-2 py-1 rounded">
                                Rating: {electrician.rating}</p>
                        </div>

                    </div>
                ))}
            </section>
        </>
    )
}