import React from "react";
import { IoReturnDownForwardOutline } from "react-icons/io5";


const StudentsDashboard = () => {
    return(
        <div className={"mt-5 mx-4 flex-1"}>
        <div className={"flex justify-between items-center"}>
            <h1 className={"font-extrabold text-4xl"}>Dashboard</h1>
            <div className={"h-1/12 w-6/12 shadow-2xl rounded-2xl border p-5"}>
                <p className={"text-4xl font-extrabold"}>Good Morning Samuel</p>
                <div className={"max-w-sm mt-2"}>
                    <p className={"text-lg font-medium text-gray-700"}>Lorem Ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                </div>
                <div className={"mt-5"}>
                    <div className={"h-10 w-4/12 border border-gray-700 rounded-lg shadow-2xl bg-blue-500 cursor-pointer hover:scale-y-110"}>
                        <div className={"mx-2 text-center justify-center mt-1.5 flex"}>
                            <p className={"text-white font-bold"}>Go to tasks for today</p>
                            <IoReturnDownForwardOutline className={"text-white font-extrabold ml-3"} size={22} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"grid grid-cols-4 gap-4 mt-8"}>
            <div className={"shadow-2xl rounded-2xl border p-5 hover:scale-95 cursor-pointer"}>
                <p className={"text-4xl font-extrabold"}>1,400</p>
                <p className={"py-2 text-lg font-bold text-gray-700"}>Total Students</p>
                <p className={"text-green-600 flex text-sm font-bold"}>9% <span className={"ml-2 text-sm text-gray-700"}>than last month</span></p>
            </div>

            <div className={"shadow-2xl rounded-2xl border p-5 hover:scale-95 cursor-pointer"}>
                <p className={"text-4xl font-extrabold"}>300</p>
                <p className={"py-2 text-lg font-bold text-gray-700"}>Total Teachers</p>
                <p className={"text-green-600 flex text-sm font-bold"}>3% <span className={"ml-2 text-sm text-gray-700"}>than last month</span></p>
            </div>

            <div className={"shadow-2xl rounded-2xl border p-5 hover:scale-95 cursor-pointer"}>
                <p className={"text-4xl font-extrabold"}>95</p>
                <p className={"py-2 text-lg font-bold text-gray-700"}>Total Events</p>
                <p className={"text-green-600 flex text-sm font-bold"}>5%<span className={"ml-2 text-sm text-gray-700"}>than last month</span></p>
            </div>

            <div className={"shadow-2xl rounded-2xl border p-5 hover:scale-95 cursor-pointer"}>
                <p className={"text-4xl font-extrabold"}>300</p>
                <p className={"py-2 text-lg font-bold text-gray-700"}>Total Inventory</p>
                <p className={"text-red-600 flex text-sm font-bold"}>-10% <span className={"ml-2 text-sm text-gray-700"}>than last month</span></p>
            </div>
        </div>

        <div className={"flex mt-10"}>
            <div className={"h-80 w-8/12 shadow-2xl rounded-2xl border p-5"}>
                <div className={"flex justify-between items-center"}>
                    <h1 className={"text-2xl text-gray-900 font-bold"}>School Attendance</h1>
                    <div className={"p-1 w-2/12 rounded-full border border-gray-600"}>
                        <p className={"text-lg font-bold text-gray-900 text-center"}>January</p>
                    </div>
                    <div className={"h-10 w-3/12 rounded-lg border border-gray-500 shadow-2xl"}>
                        <div className={"flex items-center justify-center mx-2 py-2.5"}>
                            <div className={"flex"}>
                                <div className={"h-5 w-5 bg-green-600"}></div>
                                <p className={"text-gray-600 font-bold text-xs ml-1"}>Teachers</p>
                            </div>
                            <div className={"flex ml-2"}>
                                <div className={"h-5 w-5 bg-red-600"}></div>
                                <p className={"text-gray-600 font-bold text-xs ml-1"}>Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"h-80 w-4/12 rounded-lg shadow-2xl border ml-5 p-5"}>
                <p className={"text-2xl font-bold"}>Earnings</p>
            </div>
        </div>

        <div className={"mt-10 mb-5"}>
            <div className={"h-48 w-8/12 rounded-lg shadow-2xl border p-5"}>
                <p className={"text-gray-900 font-bold"}>Recent Issues</p>
                <div className={"mt-5"}>
                    <div className={"flex items-center"}>
                        <div className={"h-3 w-3 border border-gray-600 bg-gray-600 mt-1.5"} />
                        <p className={"ml-2"}>Payment of school fees reminder not sent to students</p>
                        <div className={"h-5 w-20 border border-blue-500 rounded-full ml-auto cursor-pointer hover:scale-110"}>
                            <p className={"text-xs text-blue-500 text-center"}>Check</p>
                        </div>
                    </div>
                    <div className={"flex items-center mt-5"}>
                        <div className={"h-3 w-3 border border-gray-600 bg-gray-600 mt-1.5"} />
                        <p className={"ml-2"}>A general meeting for all staff members to organize at the end of the semester</p>
                        <div className={"h-5 w-20 border border-blue-500 rounded-full ml-auto cursor-pointer hover:scale-110"}>
                            <p className={"text-xs text-blue-500 text-center"}>Check</p>
                        </div>
                    </div>
                    <div className={"flex items-center mt-5"}>
                        <div className={"h-3 w-3 border border-gray-600 bg-gray-600 mt-1.5"} />
                        <p className={"ml-2"}>A meeting with all board members on Saturday</p>
                        <div className={"h-5 w-20 border border-blue-500 rounded-full ml-auto cursor-pointer hover:scale-110"}>
                            <p className={"text-xs text-blue-500 text-center"}>Check</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};
export default StudentsDashboard