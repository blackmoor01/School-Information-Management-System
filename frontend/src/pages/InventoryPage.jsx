import React from "react";
import Pagination from "../components/Pagination";
import { FaSearch } from "react-icons/fa";
import FilterButtons from "../components/issuancePage_components/FilterButtton";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg"

const InventoryPage = () => {

    const InventoryTable = () => {
        const data = [
            { id: 1, name: "Laptops", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 2, name: "Uniforms", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 3, name: "Addiction support worker handbook", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 4, name: "PPE", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 5, name: "Stationary", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 6, name: "Medical box", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 7, name: "School uniforms", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 8, name: "Laboratory coats", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
            { id: 9, name: "English books", category: "Academic", sku: "121rr0i128e", date: "5th May, 2024", quantity: 50, location: "School warehouse", imageUrl: profilepic },
        ];

        return (
            <div className="overflow-x-auto mt-10">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="form-checkbox" />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKUs</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" className="form-checkbox" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                    <img src={item.imageUrl} alt={item.name} className="h-10 w-10 rounded-full mr-4 object-cover" />
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.sku}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="mx-4 mt-2">
            <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Students Attendance</h1>
                    <p >Hi Samuel, Welcome to the students database</p>
                </div>

                <div className="flex items-center space-x-24 justify-between">
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer">+ New admission</button>
                </div>
            </div>

            <div className="mt-5">
                <div className="w-full p-6 rounded-lg shadow-2xl">
                    <h1 className="text-xl font-bold text-gray-500">Inventory Item</h1>

                    <div className="mt-10 flex justify-between">
                        <div className=" items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                            <div className="flex">
                                <FaSearch className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search Inventory"
                                    className="bg-gray-100 outline-none flex-grow"
                                />
                            </div>
                        </div>
                        <FilterButtons />
                    </div>

                    <InventoryTable/>

                </div>
            </div>

            <Pagination />
        </div>

    )
};

export default InventoryPage;