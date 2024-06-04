import React from "react";
import Pagination from "../components/Pagination";
import {FaSearch} from "react-icons/fa";
import FilterButtons from "../components/issuancePage_components/FilterButtton";

const InventoryPage = () => {
    return (
        <div className="mx-4 mt-2">
            <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Students Attendance</h1>
                    <p >Hi Samuel, Welcome to the students database</p>
                </div>

                <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer">+ New admission</button>
            </div>

            <div className="mt-5">
                <div className="w-full p-6 rounded-lg shadow-2xl">
                    <h1 className="text-xl font-bold text-gray-500">Inventory Item</h1>

                    <div className="mt-10 flex justify-between">
                        <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                            <FaSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search Inventory"
                                className="bg-gray-100 outline-none flex-grow"
                            />
                        </div>

                        <FilterButtons/>

                    </div>

                </div>
            </div>

            <Pagination />
        </div>

    )
};

export default InventoryPage;