import React from 'react';
import { FaSearch, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const size = 20;
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md w-full">
            <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 outline-none flex-grow"
                />
            </div>
            <div className="flex items-center space-x-6 pl-4">
                <FaCog className="text-gray-500 cursor-pointer hover:scale-105" size={size} />
                <FaBell className="text-gray-500 cursor-pointer hover:scale-105" size={size}/>
                <FaEnvelope className="text-gray-500 cursor-pointer hover:scale-105" size={size} />
                <div className="flex items-center space-x-6 px-16">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-purple-500">
                        <img
                            src="https://via.placeholder.com/32" // Replace with the user's profile image
                            alt="Profile"
                            className="rounded-full"
                        />
                    </div>
                    <div className={""}>
                        <p className="font-bold">Samuel Asante Boakye</p>
                        <p className="text-sm text-gray-500">Admin</p>
                    </div>
                    <div className="cursor-pointer">
                        <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
