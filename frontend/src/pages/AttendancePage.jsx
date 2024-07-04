import React, { useState } from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import Pagination from "../components/Pagination";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg"

const StudentsAttendancePage = () => {
    const Header = () => {
        const [selected, setSelected] = useState('Students');

        {/*The buttton function for the toggling effect*/ }
        const Button = () => {
            return (
                <div className="">
                    <div className="flex  border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            className={`px-1 py-2 font-bold ${selected === 'Students' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
                                }`}
                            onClick={() => setSelected('Students')}
                        >
                            Students
                        </button>
                        <button
                            className={`px-2 py-2 font-bold ${selected === 'Teachers' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
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
                    <h1 className="text-4xl font-bold">Students Attendance</h1>
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
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer">+ New admission</button>
                </div>
            </div>
        );
    };

    const TableComponent = () => {
        const data = [
            { id: 1, name: "Anna Watson", studentId: "#00345", program: "Science", attendanceNumber: 300, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 2, name: "John Lee", studentId: "#00034", program: "Mathematics", attendanceNumber: 100, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 3, name: "Andy Tay", studentId: "#00985", program: "Science", attendanceNumber: 100, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 4, name: "Bryan Adu", studentId: "#00784", program: "Mathematics", attendanceNumber: 100, contact: "jamessam32@gmail.com", imageUrl:profilepic },
            { id: 5, name: "Angel Ford", studentId: "#00431", program: "English", attendanceNumber: 200, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 6, name: "Wilmette Arthur", studentId: "#00456", program: "Science", attendanceNumber: 400, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 7, name: "Gloria John", studentId: "#00674", program: "Mathematics", attendanceNumber: 200, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 8, name: "Sandra Sia", studentId: "#00986", program: "Mathematics", attendanceNumber: 200, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 9, name: "Ben Greenlish", studentId: "#00326", program: "Science", attendanceNumber: 100, contact: "jamessam32@gmail.com", imageUrl: profilepic },
            { id: 10, name: "Samuel Johnson", studentId: "#00325", program: "English", attendanceNumber: 400, contact: "jamessam32@gmail.com", imageUrl: profilepic }
        ];

        return (
            <div className="overflow-x-auto mt-5 rounded-lg shadow-2xl">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-500">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Student ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Program</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Attendance number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                    <img src={item.imageUrl} alt={item.name} className="h-10 w-10 rounded-full mr-4 object-cover" />
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-bold">{item.studentId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-blue-600 cursor-pointer">{item.program}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.attendanceNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap cursor-pointer hover:text-red-600">{item.contact}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center cursor-pointer"><FaEllipsisV /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };




    return (
        <div className="mx-4">
            <Header />
            <TableComponent />
            <Pagination />
        </div>
    )
};

export default StudentsAttendancePage;