import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import teacher from "../assets/teacher.jpg";
import { FadeLoader } from "react-spinners";

const ComplaintsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
    {
      name: "James Sam",
      issue: "Poor toilet condition",
      checkin: "View Details",
    },
  ];
  const position_1 = data[0];

  const ComplaintsCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = studentData.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    return (
      <div className="mx-2 grid grid-cols-3 gap-4 mt-8">
        {currentData.map((item, index) => (
          <div className="shadow-2xl rounded-lg p-3 w-6/12" key={index}>
            <div className="flex">
              <div className="items-center justify-center mt-6">
                <img
                  src={teacher}
                  className="h-14 w-24 object-fill rounded-lg"
                  alt="Teachers"
                />
              </div>
              <div className="ml-4">
                <p className="text-xs font-bold text-gray-500">{item.name}</p>
                <p className="text-xs py-2 text-red-900 font-semibold ">
                  {item.issue}
                </p>
                <p className="text-xs text-blue-500 font-semibold cursor-pointer hover:scale-110 ">
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
      <div className="w-3/12 p-6 bg-white shadow-md mt-10 rounded-lg">
        <div className="items-center">
          <div className="rounded-full">
            <img
              src={teacher}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto border border-gray-900 cursor-pointer hover:scale-110"
            />
          </div>

          <div className="text-center mt-5">
            <p className="font-bold text-lg">{position_1.name}</p>
            <p className="py-2">{position_1.email}</p>
            <p>{position_1.prospect}</p>
          </div>

          <p className="text-xl font-bold text-gray-500 mt-5">Complaint</p>
          <p className="text-gray-500 font-bold text-xs py-2">
            {position_1.issue}
          </p>
          <p>{position_1.description}</p>

          <div className="mt-8 justify-between">
            <button className="h-10 w-4/12 bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
              Reply
            </button>
            <button className="h-10 w-4/12 bg-green-500 text-white rounded-lg hover:bg-green-700 cursor-pointer ml-24">
              Add Text
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="py-2 px-6 bg-white shadow-md mt-5 justify-between">
        <h1 className="text-4xl font-bold">Complaints Dashboard</h1>
        <p className="text-sm ml-6 mt-1">
          All students complaints and enquiries are sent here!
        </p>
      </div>

      <ComplaintsCards />

      <ComplaintDetails />
      <div className="mt-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ComplaintsPage;
