import React from 'react';
import studentData from '../components/studentData';

const StudentsPage = () => {
    const ContactList = () => {
        return (
            <div className="p-4">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-blue-500">
                        <tr className="text-center text-white">
                            <th className="border border-gray-200 px-4 py-2"></th>
                            <th className="border border-gray-200 px-4 py-2">Name</th>
                            <th className="border border-gray-200 px-4 py-2">ID</th>
                            <th className="border border-gray-200 px-4 py-2">Level</th>
                            <th className="border border-gray-200 px-4 py-2">Program</th>
                            <th className="border border-gray-200 px-4 py-2">Gender</th>
                            <th className="border border-gray-200 px-4 py-2">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index} className="hover:bg-gray-100 even:bg-gray-50 text-center font-bold text-gray-600">
                                <td className="border border-gray-200 px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <a href="#" className="text-blue-500 hover:underline">{student.id}</a>
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{student.level}</td>
                                <td className="border border-gray-200 px-4 py-2">{student.program}</td>
                                <td className="border border-gray-200 px-4 py-2">{student.gender}</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <button className="mr-2">📞</button>
                                    <button>✉️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    return (
        <div className="flex-1">
            <ContactList />
        </div>
    );
};

export default StudentsPage;
