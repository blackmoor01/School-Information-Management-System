import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import studentsAssetsData from "../components/studentsAssetsData.jsx";
import StudentDetail from "../components/studentDetails.jsx";
import Books from "../assets/books.jpg";

const StudentsAssetsPage = () => {
  const sampleStudent = {
    id: "12345",
    name: "Samuel Johnson",
    contact: "123-456-7890",
    email: "samuel.johnson@example.com",
    description: "A diligent student",
    date_of_admission: "2 May 2024",
    payment_status: "Have Paid",
    date_of_birth: "1 Jan 2000",
    address: "123 Main St, City, Country",
  };

  const AssetsDisplay = () => {
    return (
      <div className="grid grid-cols-3 gap-4 mt-8">
        {studentsAssetsData.map((item, index) => (
          <div className="shadow-2xl rounded-lg p-4" key={index}>
            <div className="flex">
              <img
                src={Books}
                className="h-14 w-24 object-cover"
                alt="Student Asset"
              />
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-800">{item.name}</p>
                <p className="text-xs py-1 text-blue-600 font-semibold cursor-pointer hover:underline">
                  {item.view_option}
                </p>
                <p className="text-xs text-gray-600 font-semibold cursor-pointer hover:underline">
                  {item.downloadable}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const EditAssetButton = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleButtonClick = () => {
      setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
      alert(option);
      setShowDropdown(false); // Hide dropdown after selecting an option
    };

    return (
      <div className="relative inline-block text-left">
        <button
          className="h-10 w-36 border border-gray-500 bg-blue-500 rounded-lg shadow-2xl hover:bg-blue-700 cursor-pointer text-lg font-bold text-white text-center mt-2"
          onClick={handleButtonClick}
        >
          Edit Asset
        </button>

        {showDropdown && (
          <div className="absolute right-0 bottom-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() => handleOptionClick("Delete")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Delete
              </button>
              <button
                onClick={() => handleOptionClick("Update")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Update
              </button>
              <button
                onClick={() => handleOptionClick("Update")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Update
              </button>
              <button
                onClick={() => handleOptionClick("Download")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };


  return (
    <div className="mx-4 mt-2">
      <div className="flex items-center">
        <p className="text-lg font-semibold">Students</p>
        <IoIosArrowForward className="mt-1 mx-1" />
        <p className="text-lg font-semibold">Assets</p>
      </div>

      <div className="flex justify-between items-center py-4 px-6 bg-white shadow-md mt-8">
        <div>
          <h1 className="text-4xl font-bold">Students Assets</h1>
          <p>Hi Samuel, Welcome to the students database</p>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full p-2 max-w-lg ml-16 flex-grow">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex mt-10 space-x-8">
        <div className="flex-grow">
          <AssetsDisplay />

          <div className="flex mt-[20%] justify-center space-x-32">
            <EditAssetButton />
            <button
              className="h-10 w-36 border border-gray-500 bg-blue-500 rounded-lg shadow-2xl hover:bg-blue-700 cursor-pointer text-lg font-bold text-white text-center mt-2"
            >
              Add New Asset
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <StudentDetail student={sampleStudent} />
        </div>
      </div>

    </div>
  );
};

export default StudentsAssetsPage;
