import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {FaSearch} from "react-icons/fa";
import studentsAssetsData from "../components/studentsAssetsData.jsx";
import StudentDetail from "../components/studentDetails.jsx";

const StudentsAssetsPage = () => {

    const AssetsDisplay = () => {
  return (
    <div className="mx-2 grid grid-cols-3 gap-4">
      {studentsAssetsData.map((item, index) => (
        <div className="shadow-2xl rounded-lg p-2 w-6/12" key={index}>
          <div className="flex">
            <div className="items-center justify-center mt-6">
              <img src="../assets/4735.jpg" className="h-14 w-24 object-fill" alt="Student Asset" />
            </div>
            <div className="ml-4">
              <p className="text-xs font-bold text-gray-500">{item.name}</p>
              <p className="text-xs py-2 text-red-900 font-semibold cursor-pointer hover:scale-110">{item.view_option}</p>
              <p className="text-xs text-gray-500 font-semibold cursor-pointer hover:scale-110 ">{item.downloadable}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

    return (
        <div className={"mx-4 mt-2"}>
            <div className={"flex"}>
                <p className={"text-lg font-semibold"}>Students</p>
                <IoIosArrowForward className={"mt-2 mx-1"}/>
                <p className={"text-lg font-semibold"}>Assets</p>
            </div>

            <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Students Assets</h1>
                    <p>Hi Samuel, Welcome to the students database</p>
                </div>
                <div className="flex items-center space-x-24 justify-between">
                    <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                        <FaSearch className="text-gray-400 mr-2"/>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-100 outline-none flex-grow"
                        />
                    </div>
                </div>
            </div>

            <div className={"mt-10"}>
                <AssetsDisplay/>
                <StudentDetail/>

                <div className={"flex mt-5"}>
                    <button
                        className={"h-10 w-36 border border-gray-500 bg-blue-500 rounded-lg  shadow-2xl hover:scale-110 cursor-pointer text-lg font-bold text-white text-center mt-2"}>Edit
                        Asset
                    </button>
                    <button
                        className={"h-10 w-36 border border-gray-500 bg-blue-500 rounded-lg  shadow-2xl hover:scale-110 cursor-pointer text-lg font-bold text-white text-center mt-2 ml-4"}>Add New
                        Asset
                    </button>
                </div>
            </div>

        </div>
    )
};

export default StudentsAssetsPage;