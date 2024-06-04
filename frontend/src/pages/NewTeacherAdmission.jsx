import React from "react";
import {IoIosArrowForward} from "react-icons/io";

const NewTeacherAdmission = () =>{

    const NewTeacherForm = () => {
        return (
            <div className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-6">New Teacher's Info</h1>
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
                            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Employment</label>
                            <input
                                type="date"
                                placeholder="Date of Employment"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">College Degree</label>
                            <input
                                type="text"
                                placeholder="College Degree"
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
                </div>
                <div className="flex justify-center mt-10">
                    <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-lg hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>
        );
    };
    
    return(
        <div className="mx-4 mt-2">
            <div className={"flex mt-10"}>
                <p className={"text-lg font-semibold"}>Teachers</p>
                <IoIosArrowForward className={"mt-2 mx-1"} />
                <p className={"text-lg font-semibold"}>New Admission</p>
            </div>
           <NewTeacherForm/>
        </div>
    )
};

export default NewTeacherAdmission;