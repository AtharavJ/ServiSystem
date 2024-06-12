import servisystemimg from "./Images/Servisystem_BGIMG.jpeg";
import React, { useState } from 'react';

export default function Signup() {
    const [isCustomer, setIsCustomer] = useState(true);

    const handleCustomerClick = () => setIsCustomer(true);
    const handleProviderClick = () => setIsCustomer(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center"
            style={{ backgroundImage: `url(${servisystemimg})` }}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Signup Page</h2>
                <div className="flex justify-center mb-6">
                    <button
                        onClick={handleCustomerClick}
                        className={`px-4 py-2 rounded-l-lg ${isCustomer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Signup as Customer
                    </button>
                    <button
                        onClick={handleProviderClick}
                        className={`px-4 py-2 rounded-r-lg ${!isCustomer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Signup as Service Provider
                    </button>
                </div>

                {isCustomer ? (
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Signup as Customer</h4>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Signup
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Signup as Service Provider</h4>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Service Type:</label>
                                <select
                                    name="serviceType"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select a service</option>
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="cleaning">Cleaning</option>
                                    <option value="gardening">Gardening</option>
                                    <option value="transportation">Transportation</option>
                                    <option value="tutoring">Tutoring</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Signup
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
