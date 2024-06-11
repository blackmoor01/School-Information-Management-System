import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";
import Pagination from "../components/Pagination";
import studentData from "../components/studentData";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg"
import { Link } from "react-router-dom";


const EditFinancePage = () => {
    const StudentFinancialDetail = () => {

        const [intake, setIntake] = useState("")
        const [officialReceipt, setOfficialReceipt] = useState("")
        const [tuition, setTuition] = useState("")
        const [miscellaneous, setMiscellaneous] = useState("")
        const [balance, setBalance] = useState("")
        const [remarks, setRemarks] = useState("")


        const student = {
            name: "Samuel Johnson",
            id: "135847",
            course: "IT Admin",
            intake: "",
            date: "2 May 2024",
            officialReceipt: "",
            paymentMethod: "Cash",
            amountDue: "3rd Avenue OH",
            tuitionFee: "",
            misc: "",
            balance: "",
            remarks: "",
        };

        return (
            <div className="w-96 p-6 bg-white shadow-md mt-5 rounded-lg mx-auto">

                <div className="text-center mb-4">
                    <img
                        src={profilepic}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
                    />
                </div>

                <div className="space-y-2 text-center">
                    <div className="flex mb-10 justify-between">
                        <div>
                            <span className="font-semibold">Name</span>
                            <p>{student.name}</p>
                        </div>
                        <div>
                            <span className="font-semibold">ID</span>
                            <p>{student.id}</p>
                        </div>
                        <div>
                            <span className="font-semibold">Course</span>
                            <p>{student.course}</p>
                        </div>

                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between mt-4">
                            <span className="font-semibold">Intake</span>
                            <input type="text" className="border rounded-md p-1 w-1/2" value={student.intake} />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Official Receipt</span>
                            <input type="text" className="border rounded-md p-1 w-1/2" value={student.officialReceipt} />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Payment Method</span>
                            <select className="border rounded-md p-1 w-1/2">
                                <option value="Cash" selected={student.paymentMethod === "Cash"}>Cash</option>
                                <option value="Card" selected={student.paymentMethod === "Card"}>Card</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Date</span>
                            <p>{student.date}</p>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Amount Due</span>
                            <p>{student.amountDue}</p>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Tuition Fee</span>
                            <input type="text" className="border rounded-md p-1 w-1/2" value={student.tuitionFee} />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">MISC</span>
                            <input type="text" className="border rounded-md p-1 w-1/2" value={student.misc} />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Balance</span>
                            <input type="text" className="border rounded-md p-1 w-1/2" value={student.balance} />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Remarks</span>
                            <input type="text" className="border rounded-md p-1 w-1/2" value={student.remarks} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <button className="w-1/2 bg-blue-500 text-white py-2 rounded-lg mr-2 hover:bg-blue-700">Edit</button>
                    <button className="w-1/2 bg-green-500 text-white py-2 rounded-lg ml-2 hover:bg-green-700">Apply</button>
                </div>
            </div>
        );
    };



    const Header = () => {
        return (
            <div className="flex py-4 px-6 bg-white shadow-md justify-between">
                <div>
                    <h1 className="text-4xl font-bold">FINANCE SHEET</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg">
                        <FaSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-100 outline-none flex-grow"
                        />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        + New item
                    </button>
                </div>
            </div>
        );
    };

    const TableComponent = () => {
        const data = [
            {
                id: 1,
                name: "Exercise Books",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 2,
                name: "Maths book",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 3,
                name: "Science books",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 4,
                name: "A4 Sheets",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 5,
                name: "Stationary",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 6,
                name: "Medical box",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 7,
                name: "School uniforms",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 8,
                name: "Laboratory coats",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            },
            {
                id: 9,
                name: "English books",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: profilepic
            }
        ];
        return (
            <div className="overflow-x-auto mt-5 w-11/12">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Select</th>
                            <th className="px-4 py-2 border">Student Name</th>
                            <th className="px-4 py-2 border">Date</th>
                            <th className="px-4 py-2 border">Course</th>
                            <th className="px-4 py-2 border">Student ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-4 py-2 border flex items-center">
                                    <img src={item.imageUrl} alt={item.name} className="h-10 w-10 object-cover rounded-full mr-4" />
                                    {item.name}
                                </td>
                                <td className="px-4 py-2 border">{item.date}</td>
                                <td className="px-4 py-2 border">{item.course}</td>
                                <td className="px-4 py-2 border">{item.studentId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="flex flex-col mx-2 mt-2 min-h-screen">
            <Header />
            <div className="flex justify-between mt-10">
                <div className="w-8/12 bg-white rounded-lg shadow-2xl p-4">
                    <TableComponent />
                    <Pagination />
                </div>
                <StudentFinancialDetail />
            </div>
        </div>
    );
};

export default EditFinancePage;