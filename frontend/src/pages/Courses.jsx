import React from "react";

const CoursesPage = () => {
    const data = [
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details",
            course_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            course_tuitor:"Jonathan Grant",
            tuitor_contact:"klvnafriyie123@gmail.com",
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        },
        {
            coursename: "Biological Science",
            coursecode: "CSM 233",
            checkin: "View Course Details"
        }
    ];
    const CourseDisplay = () => {

        return (
            <div className="mx-2 grid grid-cols-3 gap-4">
                {data.map((item, index) => (
                    <div className="shadow-2xl rounded-lg p-3 w-6/12" key={index}>
                        <div className="flex">
                            <div className="items-center justify-center mt-6">
                                <img src="../assets/4735.jpg" className="h-14 w-24 object-fill" alt="Courses" />
                            </div>
                            <div className="ml-4">
                                <p className="text-xs font-bold text-gray-500">{item.coursename}</p>
                                <p className="text-xs py-2 text-red-900 font-semibold cursor-pointer hover:scale-110">{item.coursecode}</p>
                                <p className="text-xs text-gray-500 font-semibold cursor-pointer hover:scale-110 ">{item.checkin}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    };

    const CourseDetails = () => {
        const position_1 = data[0];
        return (
            <div className="mt-5">
                <div className="w-5/12 p-6 rounded-lg shadow-2xl">

                    <div className="py-4">
                        <p className="text-center font-bold text-4xl text-gray-700">{position_1.coursecode}</p>
                        <p className="text-center text-gray-500 font-bold mt-2">{position_1.coursename}</p>
                    </div>

                    <div className="mt-5">
                        <p className="text-gray-500 font-bold">Course Description</p>
                        <p>{position_1.course_description}</p>
                    </div>

                    <div className="py-4">
                        <p className="text-gray-500 font-bold">Teacher for the Course</p>
                        <p>{position_1.course_tuitor}</p>
                    </div>

                    <div className="">
                        <p className="text-gray-500 font-bold">Teacher of the Course contact</p>
                        <p>{position_1.tuitor_contact}</p>
                    </div>

                </div>
            </div>
        )
    }


    return (
        <div className="mx-4 mt-2">
            <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Courses</h1>
                    <p className="py-1">Hi Samuel, These are your courses for this semester</p>
                </div>
            </div>

            <div className="mt-5">
                <div className="w-full p-6 rounded-lg shadow-2xl">
                    <CourseDisplay />
                </div>

                <CourseDetails />


            </div>
        </div>
    )
};

export default CoursesPage;