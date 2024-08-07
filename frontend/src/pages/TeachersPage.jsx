import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "../components/Pagination";
import { Link, Outlet } from "react-router-dom";
import teacherImage from "../assets/teacher.jpg";
import { FadeLoader } from "react-spinners";

const TeachersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeachers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/teachers/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTeacherData(data.teachers);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
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

  const totalPages = Math.ceil(teacherData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Header = () => {
    const [selected, setSelected] = useState("Teachers");

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
          <h1 className="text-4xl font-bold">Teachers Database</h1>
          <p>Hi Samuel, Welcome to the teachers database</p>
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

          <Link to={"/teacherspage/newteacheradmission"}>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">
              + New Teacher
            </button>
          </Link>
          <Outlet />
        </div>
      </div>
    );
  };

  const TeachersDataDisplay = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = teacherData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <div className="grid grid-cols-3 gap-4 bg-white rounded-lg shadow-2xl p-6">
        {currentData.map((item, index) => (
          <div
            className="shadow-lg rounded-lg p-4 mb-10 ml-4 hover:shadow-2xl transition-shadow duration-300"
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={teacherImage}
                  className="h-14 w-24 object-cover rounded-lg"
                  alt="Teacher"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-700">{item.name}</p>
                <p className="text-sm py-2 text-red-900 font-semibold cursor-pointer hover:scale-105 transition-transform duration-200">
                  {item.view_option}
                </p>
                <p className="text-sm text-gray-600 font-semibold cursor-pointer hover:scale-105 transition-transform duration-200">
                  {item.downloadable}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const TeacherDetail = () => {
    const teacher = teacherData[0];

    return (
      <div className="flex flex-col bg-white shadow-md rounded-lg p-6 min-h-full">
        <div className="pb-5 flex">
          <h3 className="text-gray-900 font-bold mb-5">ID:</h3>
          <p className="mx-2 text-gray-500 font-bold">{teacher.id}</p>
        </div>
        <div className="mb-4 py-2">
          <img
            src={teacherImage}
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto border border-blue-500"
          />
          <div className="">
            <div className="py-3 flex">
              <button className="mr-2">📞</button>
              <h2 className="font-bold mx-2 text-gray-500">
                {teacher.contact}
              </h2>
            </div>

            <div className="py-3 flex">
              <button>✉️</button>
              <p className="text-gray-500 font-bold mx-2">{teacher.email}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 py-1">
          <div className="py-2 flex">
            <h1 className="text-gray-900 font-bold mb-5">Teacher Name:</h1>
            <h2 className="text-gray-500 font-bold mx-2">
              {teacher.name.toUpperCase()}
            </h2>
          </div>
          <div className="py-1 flex">
            <h3 className="text-gray-900 font-bold">Description:</h3>
            <p>{teacher.description}</p>
          </div>
          <div className="py-3 flex">
            <h3 className="text-gray-900 font-bold">Date of employment:</h3>
            <p className="text-gray-500 font-bold mx-2">
              {teacher.date_of_employment}
            </p>
          </div>
          <div className="py-3 flex">
            <h3 className="text-gray-900 font-bold">Date of Birth:</h3>
            <p className="text-gray-500 font-bold mx-2">
              {teacher.date_of_birth}
            </p>
          </div>
          <div className="py-3 flex">
            <h3 className="text-gray-900 font-bold">Address:</h3>
            <p className="text-gray-500 font-bold mx-2">{teacher.address}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen mx-2 mt-2">
      <Header />
      <div className="flex flex-row mt-24">
        <div className="flex-1 min-h-full">
          <TeachersDataDisplay />
          <div className="mt-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="w-1/4 flex-shrink-0 min-h-full">
          <TeacherDetail />
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;
