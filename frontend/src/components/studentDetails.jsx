import React from 'react';
import { Link } from 'react-router-dom';

const StudentDetail = ({ student }) => {
    if (!student) {
        return <div className="w-3/12 p-6 bg-white shadow-md">No student selected</div>;
    }

    return (
        <div className="w-full p-6 bg-white shadow-md rounded-lg mt-5">
            <div className="pb-5 flex">
                <h3 className="text-gray-900 font-bold mb-5">ID:</h3>
                <p className="mx-2 text-gray-500 font-bold">{student.id}</p>
            </div>
            <div className="mb-4 py-2">
                <img
                    src="https://via.placeholder.com/88"
                    alt="Profile"
                    className="w-20 h-20 rounded-full mx-auto border border-gray-900"
                />
                <div>
                    <div className="py-3 flex">
                        <button className="mr-2">📞</button>
                        <h2 className="font-bold mx-2 text-gray-500">{student.contact}</h2>
                    </div>
                    <div className="py-3 flex">
                        <button>✉️</button>
                        <p className="text-gray-500 font-bold mx-2">{student.email}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-2 py-1">
                <div className="py-2 flex">
                    <h1 className="text-gray-900 font-bold mb-5">Student Name:</h1>
                    <h2 className="text-gray-500 font-bold mx-2">{student.name.toUpperCase()}</h2>
                </div>
                <div className="py-1 flex">
                    <h3 className="text-gray-900 font-bold">Description:</h3>
                    <p>{student.description}</p>
                </div>
                <div className="py-3 flex">
                    <h3 className="text-gray-900 font-bold">Date of admission:</h3>
                    <p className="text-gray-500 font-bold mx-2">{student.date_of_admission}</p>
                </div>
                <div className="py-3">
                    <h3 className="text-gray-900 font-bold">Payment Status:</h3>
                    <p className={`font-semibold h-10 w-4/12 rounded-lg border border-gray-500 shadow-2xl text-center mt-3 ${student.payment_status === 'Have Paid' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {student.payment_status}
                    </p>
                </div>
                <div className="py-3 flex">
                    <h3 className="text-gray-900 font-bold">Date of Birth:</h3>
                    <p className="text-gray-500 font-bold mx-2">{student.date_of_birth.toUpperCase()}</p>
                </div>
                <div className="py-3 flex">
                    <h3 className="text-gray-900 font-bold">Address:</h3>
                    <p className="text-gray-500 font-bold mx-2">{student.address}</p>
                </div>
            </div>

            <Link to={"/studentspage/studentsassetspage"}>
                <div className="flex justify-center mt-8">
                    <div className="h-10 w-7/12 rounded-lg border border-gray-500 bg-blue-500 shadow-2xl hover:bg-blue-700 cursor-pointer">
                        <p className="text-lg font-bold text-white text-center mt-1">Assets</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default StudentDetail;
