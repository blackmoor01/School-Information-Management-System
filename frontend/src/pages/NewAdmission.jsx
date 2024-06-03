import React from "react";
import {IoIosArrowForward} from "react-icons/io";
import {FaSearch} from "react-icons/fa";

const NewAdmission = () => {

    const NewStudentForm = () => {
    return (
        <div className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
            <h1 className="text-2xl font-bold mb-6">New Student's Info</h1>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Programme</label>
                        <input
                            type="text"
                            placeholder="Programme"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
                        <input
                            type="text"
                            placeholder="Phone number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nationality</label>
                        <input
                            type="text"
                            placeholder="Nationality"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Government ID</label>
                        <input
                            type="text"
                            placeholder="Government ID"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Admission Letter</label>
                        <div className="flex items-center justify-between">
                            <button className="bg-gray-200 text-gray-700 rounded p-2 shadow">
                                Upload
                            </button>
                            <span className="text-xs text-gray-500">File size shouldn't exceed 20mb</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Medical Forms</label>
                        <div className="flex items-center justify-between">
                            <button className="bg-gray-200 text-gray-700 rounded p-2 shadow">
                                Upload
                            </button>
                            <span className="text-xs text-gray-500">File size shouldn't exceed 20mb</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Student ID Card</label>
                        <div className="flex items-center justify-between">
                            <button className="bg-gray-200 text-gray-700 rounded p-2 shadow">
                                Upload
                            </button>
                            <span className="text-xs text-gray-500">File size shouldn't exceed 20mb</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-lg hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </div>
    );
};

    return(
        <div className={"mx-4 mt-2"}>
            <div className={"flex"}>
                <p className={"text-lg font-semibold"}>Students</p>
                <IoIosArrowForward className={"mt-2 mx-1"}/>
                <p className={"text-lg font-semibold"}>New Admission</p>
            </div>

            <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Students Database</h1>
                    <p>Hi Samuel, Welcome to the students database</p>
                </div>
                <div className="flex items-center space-x-24 justify-between">
                    <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                        <FaSearch className="text-gray-400 mr-2"/>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-100 outline-none flex-grow"
                        />
                    </div>
                </div>
            </div>

            <div>
                <NewStudentForm/>
            </div>
        </div>
    )
};

export default NewAdmission;