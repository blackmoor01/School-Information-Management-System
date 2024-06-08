import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";
import Pagination from "../components/Pagination";
import studentData from "../components/studentData";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg"

const FinancePage = () => {

    const StudentFinancialDetail = () => {
        const student = studentData[0];
        return (
            <div className="w-4/12 p-6 bg-white shadow-md mt-5 rounded-lg">
                <div className="mb-4 py-2">
                    <img
                        src={profilepic}
                        alt="Profile"
                        className="w-20 h-20 rounded-full mx-auto border border-gray-900"
                    />
                    <div className={""}>
                        <div className={"pb-5 flex"}>
                            <h3 className="text-gray-900 font-bold mb-5">ID:</h3>
                            <p className={"mx-2 text-gray-500 font-bold"}>{student.id}</p>
                        </div>

                        <div className={"py-3 flex"}>
                            <button>✉️</button>
                            <p className="text-gray-500 font-bold mx-2">{student.email}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 py-1">
                    <div className={"py-2 flex"}>
                        <h1 className="text-gray-900 font-bold mb-5">Student Name:</h1>
                        <h2 className="text-gray-500 font-bold mx-2">{student.name.toUpperCase()}</h2>
                    </div>
                    <div className={"py-1 flex"}>
                        <h3 className="text-gray-900 font-bold">Description:</h3>
                        <p>{student.description}</p>
                    </div>
                    <div className={"py-3 flex"}>
                        <h3 className="text-gray-900 font-bold">Date of admission:</h3>
                        <p className={"text-gray-500 font-bold mx-2"}>{student.date_of_admission}</p>
                    </div>
                    <div className={"py-3"}>
                        <h3 className="text-gray-900 font-bold">Payment Status:</h3>
                        <p className={
                            `font-semibold h-10 w-4/12 rounded-lg border border-gray-500 shadow-2xl text-center cursor-pointer ${student.payment_status === 'Have Paid' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`
                        }>
                            {student.payment_status}
                        </p>
                    </div>
                    <div className={"py-3 flex"}>
                        <h3 className="text-gray-900 font-bold">Date of Birth:</h3>
                        <p className={"text-gray-500 font-bold mx-2"}>{student.date_of_birth.toUpperCase()}</p>
                    </div>
                    <div className={"py-3 flex"}>
                        <h3 className="text-gray-900 font-bold">Address:</h3>
                        <p className={"text-gray-500 font-bold mx-2"}>{student.address}</p>
                    </div>
                </div>

                <div className={"flex justify-center mt-8"}>
                    <div className={"h-12 w-7/12 rounded-lg border border-gray-500 bg-blue-500 shadow-2xl hover:bg-blue-700 cursor-pointer"}>
                        <p className={"text-lg font-bold text-white text-center mt-2"}>Edit</p>
                    </div>

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
                imageUrl: "frontend/src/assets/4735.jpg"
            },
            {
                id: 2,
                name: "Maths book",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/maths-book.jpg"
            },
            {
                id: 3,
                name: "Science books",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/science-books.jpg"
            },
            {
                id: 4,
                name: "A4 Sheets",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/a4-sheets.jpg"
            },
            {
                id: 5,
                name: "Stationary",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/stationary.jpg"
            },
            {
                id: 6,
                name: "Medical box",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/medical-box.jpg"
            },
            {
                id: 7,
                name: "School uniforms",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/school-uniforms.jpg"
            },
            {
                id: 8,
                name: "Laboratory coats",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/laboratory-coats.jpg"
            },
            {
                id: 9,
                name: "English books",
                date: "5th May, 2024",
                course: "Academic",
                studentId: "121rr0i128e",
                imageUrl: "path/to/english-books.jpg"
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

export default FinancePage;
