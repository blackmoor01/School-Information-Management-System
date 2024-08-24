import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import teacher from "../assets/teacher.jpg";
import { FadeLoader } from "react-spinners";

const ComplaintsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const totalPages = Math.ceil(studentData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchComplaints = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/students/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStudentData(data.students);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <FadeLoader color={"#123abc"} loading={loading} size={50} />
          <p className="text-blue-500 font-semibold mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="font-bold text-red-700">Ooops! {error}</p>
        </div>
      </div>
    );
  }

  const data = [
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
      email: "klvnafriyie123@gmail.com",
      prospect: "Student",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    // More dummy data
  ];
  const position_1 = data[0];

  const ComplaintsCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = studentData.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    return (
      <div className="grid grid-cols-3 gap-4">
        {currentData.map((item, index) => (
          <div
            className="shadow-lg rounded-lg p-4 mb-4 hover:shadow-2xl transition-shadow duration-300"
            key={index}
          >
            <div className="flex items-center">
              <img
                src={teacher}
                className="h-14 w-24 object-cover rounded-lg"
                alt="Teacher"
              />
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-700">{item.name}</p>
                <p className="text-sm py-2 text-red-900 font-semibold">
                  {item.issue}
                </p>
                <p className="text-sm text-blue-500 font-semibold cursor-pointer hover:scale-105 transition-transform duration-200">
                  {item.checkin}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ComplaintDetails = () => {
    return (
      <div className="flex flex-col bg-white shadow-md rounded-lg p-6 min-h-full">
        <div className="text-center">
          <img
            src={teacher}
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto border border-gray-900"
          />
          <div className="mt-4">
            <h2 className="font-bold text-lg">{position_1.name}</h2>
            <p className="text-gray-500">{position_1.email}</p>
            <p className="text-gray-500">{position_1.prospect}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-900 font-bold">Complaint:</h3>
          <p className="text-gray-500 mt-2">{position_1.issue}</p>
          <p className="text-gray-500 mt-2">{position_1.description}</p>
        </div>
        <div className="mt-8 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Reply
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Add Text
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen mx-2 mt-2">
      <div className="py-2 px-6 bg-white shadow-md mt-5">
        <h1 className="text-4xl font-bold">Complaints Dashboard</h1>
        <p className="text-sm mt-1">
          All students' complaints and inquiries are sent here!
        </p>
      </div>
      <div className="flex flex-row mt-10">
        <div className="flex-1 min-h-full p-4">
          <ComplaintsCards />
          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="w-1/4 p-4">
          <ComplaintDetails />
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
