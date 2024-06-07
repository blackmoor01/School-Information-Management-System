import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import teachersData from "../components/teachersData";
import Pagination from "../components/Pagination";
import { Link, Outlet } from "react-router-dom";

const TeachersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(teachersData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const Header = () => {
        const [selected, setSelected] = useState('Students');

        const Button = () => {
            return (
                <div className="">
                    <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            className={`px-1 py-2 font-bold ${selected === 'Students' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'}`}
                            onClick={() => setSelected('Students')}
                        >
                            Students
                        </button>
                        <button
                            className={`px-2 py-2 font-bold ${selected === 'Teachers' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'}`}
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
                    <h1 className="text-4xl font-bold">Teachers Database</h1>
                    <p>Hi Samuel, Welcome to the teachers database</p>
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

                    <Link to={"/teacherspage/newteacheradmission"}>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">
                            + New Teacher
                        </button>
                    </Link>
                    <Outlet/>

                </div>
            </div>
        );
    };

    const TeachersDataisplay = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentData = teachersData.slice(startIndex, startIndex + itemsPerPage);

        return (
            <div className="grid grid-cols-3 gap-4 mt-24">
                {currentData.map((item, index) => (
                    <div className="shadow-2xl rounded-lg p-3" key={index}>
                        <div className="flex">
                            <div className="items-center justify-center mt-6">
                                <img src="../assets/4735.jpg" className="h-14 w-24 object-fill" alt="Teachers" />
                            </div>
                            <div className="ml-4">
                                <p className="text-xs font-bold text-gray-500">{item.name}</p>
                                <p className="text-xs py-2 text-red-900 font-semibold cursor-pointer hover:scale-110">{item.view_option}</p>
                                <p className="text-xs text-gray-500 font-semibold cursor-pointer hover:scale-110">{item.downloadable}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const TeacherDetail = () => {
        const teacher = teachersData[0];

        return (
            <div className="w-3/12 p-6 bg-white shadow-md mt-10 rounded-lg">
                <div className={"pb-5 flex"}>
                    <h3 className="text-gray-900 font-bold mb-5">ID:</h3>
                    <p className={"mx-2 text-gray-500 font-bold"}>{teacher.ID}</p>
                </div>
                <div className="mb-4 py-2">
                    <img
                        src="https://via.placeholder.com/88"
                        alt="Profile"
                        className="w-20 h-20 rounded-full mx-auto border border-blue-500"
                    />
                    <div className={""}>
                        <div className={"py-3 flex"}>
                            <button className="mr-2">📞</button>
                            <h2 className="font-bold mx-2 text-gray-500">{teacher.contact}</h2>
                        </div>

                        <div className={"py-3 flex"}>
                            <button>✉️</button>
                            <p className="text-gray-500 font-bold mx-2">{teacher.email}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 py-1">
                    <div className={"py-2 flex"}>
                        <h1 className="text-gray-900 font-bold mb-5">Teacher Name:</h1>
                        <h2 className="text-gray-500 font-bold mx-2">{teacher.name.toUpperCase()}</h2>
                    </div>
                    <div className={"py-1 flex"}>
                        <h3 className="text-gray-900 font-bold">Description:</h3>
                        <p>{teacher.description}</p>
                    </div>
                    <div className={"py-3 flex"}>
                        <h3 className="text-gray-900 font-bold">Date of employment:</h3>
                        <p className={"text-gray-500 font-bold mx-2"}>{teacher.date_of_employment}</p>
                    </div>
                    <div className={"py-3 flex"}>
                        <h3 className="text-gray-900 font-bold">Date of Birth:</h3>
                        <p className={"text-gray-500 font-bold mx-2"}>{teacher.date_of_birth.toUpperCase()}</p>
                    </div>
                    <div className={"py-3 flex"}>
                        <h3 className="text-gray-900 font-bold">Address:</h3>
                        <p className={"text-gray-500 font-bold mx-2"}>{teacher.address}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen mx-2 mt-2">
            <Header />
            <div className="flex-grow flex justify-between mt-4">
                <div className="w-8/12 flex flex-col">
                    <TeachersDataisplay />
                </div>
                <TeacherDetail />
            </div>
            <div className="mt-auto">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default TeachersPage;
