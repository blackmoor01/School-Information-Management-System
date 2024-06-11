import React from "react";
import Pagination from "../components/Pagination";
import teacher from "../assets/teacher.jpg"

const ComplaintsPage = () => {
    const data = [
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details",
            email: "klvnafriyie123@gmail.com",
            prospect: "Student",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },
        {
            name: "James Sam",
            issue: "Poor toilet condition",
            checkin: "View Details"

        },

    ]
    const position_1 = data[0];

    const ComplaintsCards = () => {
        return (
            <div className="mx-2 grid grid-cols-3 gap-4 mt-8">
                {data.map((item, index) => (
                    <div className="shadow-2xl rounded-lg p-3 w-6/12" key={index}>
                        <div className="flex">
                            <div className="items-center justify-center mt-6">
                                <img src={teacher} className="h-14 w-24 object-fill rounded-lg" alt="Teachers" />
                            </div>
                            <div className="ml-4">
                                <p className="text-xs font-bold text-gray-500">{item.name}</p>
                                <p className="text-xs py-2 text-red-900 font-semibold ">{item.issue}</p>
                                <p className="text-xs text-blue-500 font-semibold cursor-pointer hover:scale-110 ">{item.checkin}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    };

    const ComplaintDetails = () => {
        return (
            <div className="w-3/12 p-6 bg-white shadow-md mt-5 rounded-lg">
                <div className="items-center">
                    <img
                        src={teacher}
                        alt="Profile"
                        className="w-25 h-25 rounded-full mx-auto border border-gray-900 cursor-pointer hover:scale-110"
                    />

                    <div className="text-center mt-5">
                        <p className="font-bold text-lg">{position_1.name}</p>
                        <p className="py-2">{position_1.email}</p>
                        <p>{position_1.prospect}</p>
                    </div>

                    <p className="text-xl font-bold text-gray-500 mt-5">Complaint</p>
                    <p className="text-gray-500 font-bold text-xs py-2">{position_1.issue}</p>
                    <p>{position_1.description}</p>


                    <div className="mt-8 justify-between">
                        <button className="h-10 w-4/12 bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer">Reply</button>
                        <button className="h-10 w-4/12 bg-green-500 text-white rounded-lg hover:bg-green-700 cursor-pointer ml-24">Add Text</button>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div>
            <div className="py-2 px-6 bg-white shadow-md mt-5 justify-between">
                <h1 className="text-4xl font-bold">Complaints Dashboard</h1>
                <p className="text-sm ml-6 mt-1">All students complaints and enquiries are sent here!</p>
            </div>


            <ComplaintsCards />

            <ComplaintDetails />
            <Pagination />
        </div>
    )
};

export default ComplaintsPage;