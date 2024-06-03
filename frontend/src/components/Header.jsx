import React,{useState} from 'react';
import {FaSearch} from "react-icons/fa";

const Header = () => {
    {/*The state change for the button when toggled*/}
     const [selected, setSelected] = useState('Students');

    {/*The buttton function for the toggling effect*/}
     const Button = () => {
        return (
            <div className="">
                <div className="flex  border border-gray-200 rounded-xl overflow-hidden">
                    <button
                        className={`px-1 py-2 font-bold ${
                            selected === 'Students' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
                        }`}
                        onClick={() => setSelected('Students')}
                    >
                        Students
                    </button>
                    <button
                        className={`px-2 py-2 font-bold ${
                            selected === 'Teachers' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
                        }`}
                        onClick={() => setSelected('Teachers')}
                    >
                        Teachers
                    </button>
                </div>
            </div>
        );
    };
    return (
        <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
            <div>
                <h1 className="text-4xl font-bold">Students Database</h1>
                <p >Hi Samuel, Welcome to the students database</p>
            </div>
            <div className="flex items-center space-x-24 justify-between">
                <Button/>
                <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                    <FaSearch className="text-gray-400 mr-2"/>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 outline-none flex-grow"
                    />
                </div>
                <button className="bg-blue-500 text-white px-2 py-3 rounded-md hover:scale-105">+ New admission</button>
            </div>
        </div>
    );
};

export default Header;
