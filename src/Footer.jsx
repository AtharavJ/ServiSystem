import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="w-full fixed bottom-0 border-4 bg-amber-100 ">
                <h2 className="flex items-center justify-center 
                               font-normal hover:font-bold ">This is footer</h2>
                <div className="w-full h-16 flex items-center justify-center 
                                space-x-6 text-center">
                    <Link className='font-normal hover:font-bold'
                        to="/Copyright" >Copyright</Link>

                    <Link className='font-normal hover:font-bold'
                        to="/Getintouch" >Get in touch</Link>
                </div>
            </footer>
        </>
    )
}