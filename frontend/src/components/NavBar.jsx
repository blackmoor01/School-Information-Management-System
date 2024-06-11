import React from 'react';
import { FaSearch, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg"
import { IoChevronForwardOutline } from "react-icons/io5";

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
                <FaCog className="text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110" size={size} />
                <FaBell className="text-gray-500 cursor-pointer hover:scale-110 hover:text-gray-700" size={size}/>
                <FaEnvelope className="text-gray-500 cursor-pointer hover:scale-110 hover:text-gray-700" size={size} />
                <div className="flex items-center space-x-6 px-16">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-purple-500">
                        <img
                            src={profilepic}
                            alt="Profile"
                            className="rounded-full"
                        />
                    </div>
                    <div className={""}>
                        <p className="font-bold">Dennis Akpeko Zigah</p>
                        <p className="text-sm text-gray-500">Admin</p>
                    </div>
                    <div className="cursor-pointer hover:rotate-90">
                    <IoChevronForwardOutline className="text-gray-800"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
