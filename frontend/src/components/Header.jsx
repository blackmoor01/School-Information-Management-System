import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    {/*The state change for the button when toggled*/ }
    const [selected, setSelected] = useState('Students');

    {/*The buttton function for the toggling effect*/ }
    const Button = () => {
        const [selected, setSelected] = useState('Students');
    
        return (
            <div className="flex justify-center mt-4">
                <div className="flex border border-gray-300 rounded-full overflow-hidden shadow-sm">
                    <button
                        className={`px-4 py-2 font-semibold transition-all duration-300 transform ${selected === 'Students' ? 'bg-white text-gray-900 -translate-x-1' : 'bg-blue-500 text-white translate-x-1'
                            }`}
                        onClick={() => setSelected('Students')}
                    >
                        Students
                    </button>
                    <button
                        className={`px-4 py-2 font-semibold transition-all duration-300 transform ${selected === 'Teachers' ? 'bg-white text-gray-900 -translate-x-1' : 'bg-blue-500 text-white translate-x-1'
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
                <Button />
                <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 outline-none flex-grow"
                    />
                </div>
                <Link to={"/studentspage/newstudentsadmission"}>
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">+ New admission</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
