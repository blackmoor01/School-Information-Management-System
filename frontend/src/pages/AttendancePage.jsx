import React, { useState, useEffect } from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import Pagination from "../components/Pagination";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg";
import {FadeLoader} from "react-spinners";

const StudentsAttendancePage = () => {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Function to fetch content of student database to be displayed
  const fetchStudents = async () => {
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

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
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

  // Ensure studentData is not null or undefined
  const totalPages = studentData
    ? Math.ceil(studentData.length / itemsPerPage)
    : 0;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const Header = () => {
    const [selected, setSelected] = useState("Students");

    const Button = () => {
      return (
        <div className="">
          <div className="flex border border-gray-200 rounded-xl overflow-hidden">
            <button
              className={`px-1 py-2 font-bold ${
                selected === "Students"
                  ? "bg-white text-gray-900"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => setSelected("Students")}
            >
              Students
            </button>
            <button
              className={`px-2 py-2 font-bold ${
                selected === "Teachers"
                  ? "bg-white text-gray-900"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => setSelected("Teachers")}
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
          <p>Hi Samuel, Welcome to the students database</p>
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
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
            + New admission
          </button>
        </div>
      </div>
    );
  };




  const TableComponent = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    // Ensure studentData is not null or undefined before slicing
    const currentData = studentData
      ? studentData.slice(startIndex, startIndex + itemsPerPage)
      : [];

    return (
      <div className="overflow-x-auto mt-5 rounded-lg shadow-2xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Program
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Attendance number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img
                    src={profilepic}
                    alt={item.name}
                    className="h-10 w-10 rounded-full mr-4 object-cover"
                  />
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-bold">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-600 cursor-pointer">
                  {item.program}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.balance}</td>
                <td className="px-6 py-4 whitespace-nowrap cursor-pointer hover:text-red-600">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center cursor-pointer">
                  <FaEllipsisV />
                </td>
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
      {studentData && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};



export default StudentsAttendancePage;
