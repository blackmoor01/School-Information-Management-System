import React, { useEffect, useState } from "react";
import { FadeLoader, ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import initialStudentData from "../components/studentData";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const AnimatedDiv = styled.div`
  animation: ${bounce} 2s infinite;
  font-size: 6rem;
  color: #333;
`;

const edgeAnimation = keyframes`
  0% {     border-color: #e2e8f0;
  }
  50% {
    border-color: #63b3ed;
  }
  100% {
    border-color: #e2e8f0;
  }
`;

const AnimatedContainer = styled.div`
  animation: ${edgeAnimation} 2s infinite;
`;

const NoStudentSelected = () => (
  <div className="flex flex-col justify-center items-center w-4/12 p-6 bg-white shadow-md">
    <AnimatedDiv>😢</AnimatedDiv>
    <p className="text-gray-500 font-semibold mt-4">No student selected</p>
  </div>
);

const StudentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [studentData, setStudentData] = useState(initialStudentData); // Using initial data as a fallback
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Function to fetch student data from Django API
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

  const totalPages = Math.ceil(studentData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCheckboxChange = (studentId) => {
    setSelectedStudentId(studentId);
    const selectedStudent = studentData.find(
      (student) => student.id === studentId
    );
    setSelectedStudent(selectedStudent);
  };

  const ContactList = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = studentData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <div className="p-4">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-blue-500">
            <tr className="text-center text-white">
              <th className="border border-gray-200 px-4 py-2"></th>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200 px-4 py-2">Level</th>
              <th className="border border-gray-200 px-4 py-2">Program</th>
              <th className="border border-gray-200 px-4 py-2">Gender</th>
              <th className="border border-gray-200 px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-100 even:bg-gray-50 text-center font-bold text-gray-600"
              >
                <td className="border border-gray-200 px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedStudentId === item.id}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    {item.id}
                  </a>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.level}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.program}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.gender}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <button className="mr-2">📞</button>
                  <button>✉️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-2 mt-2 min-h-screen">
      <Header />
      <div className="flex justify-between mt-10">
        <div className="w-8/12 bg-white rounded-lg shadow-2xl p-4">
          <ContactList />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <StudentDetail
          selectedStudent={selectedStudent}
          selectedStudentId={selectedStudentId}
        />
      </div>
    </div>
  );
};

const StudentDetail = ({ selectedStudent }) => {
  if (!selectedStudent) {
    return <NoStudentSelected />;
  }

  const {
    id,
    name,
    contact,
    email,
    description,
    date_of_admission,
    payment_status,
    date_of_birth,
    address,
  } = selectedStudent;

  return (
    <AnimatedContainer className="w-4/12 p-6 bg-white shadow-md rounded-lg mt-5 border-4 border-gray-300">
      <div className="pb-5 flex">
        <h3 className="text-gray-900 font-bold mb-5">ID:</h3>
        <p className="mx-2 text-gray-500 font-bold">{id}</p>
      </div>
      <div className="mb-4 py-2">
        <img
          src={profilepic}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto border border-gray-900"
        />
        <div>
          <div className="py-3 flex">
            <button className="mr-2">📞</button>
            <h2 className="font-bold mx-2 text-gray-500">{contact || "N/A"}</h2>
          </div>
          <div className="py-3 flex">
            <a href={`mailto:${email || "N/A"}`} className="flex items-center">
              <button>✉️</button>
              <p className="text-gray-500 font-bold mx-2">{email || "N/A"}</p>
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-1">
        <div className="py-2 flex">
          <h1 className="text-gray-900 font-bold mb-5">Student Name:</h1>
          <h2 className="text-gray-500 font-bold mx-2">
            {name ? name.toUpperCase() : "N/A"}
          </h2>
        </div>
        <div className="py-1 flex">
          <h3 className="text-gray-900 font-bold">Description:</h3>
          <p>{description || "N/A"}</p>
        </div>
        <div className="py-3 flex">
          <h3 className="text-gray-900 font-bold">Date of admission:</h3>
          <p className="text-gray-500 font-bold mx-2">
            {date_of_admission || "N/A"}
          </p>
        </div>
        <div className="py-3">
          <h3 className="text-gray-900 font-bold">Payment Status:</h3>
          <p
            className={`font-semibold h-8 w-4/12 rounded-lg border border-gray-500 shadow-2xl text-center mt-3 cursor-pointer ${
              payment_status === "Have Paid"
                ? "bg-green-500 text-white py-0.5"
                : "bg-red-500 text-white"
            }`}
          >
            {payment_status || "N/A"}
          </p>
        </div>
        <div className="py-3 flex">
          <h3 className="text-gray-900 font-bold">Date of Birth:</h3>
          <p className="text-gray-500 font-bold mx-2">
            {date_of_birth ? date_of_birth.toUpperCase() : "N/A"}
          </p>
        </div>
        <div className="py-3 flex">
          <h3 className="text-gray-900 font-bold">Address:</h3>
          <p className="text-gray-500 font-bold mx-2">{address || "N/A"}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <Link to={"/studentspage/studentsassetspage"}>
          <div className="h-10 w-48 rounded-lg border border-gray-500 bg-blue-500 shadow-2xl hover:bg-blue-700 cursor-pointer flex items-center justify-center">
            <p className="text-lg font-bold text-white text-center">Assets</p>
          </div>
        </Link>

        <Link to={"/studentspage/studentsdata_edit"}>
          <div className="h-10 w-48 rounded-lg border border-gray-500 bg-blue-500 shadow-2xl hover:bg-blue-700 cursor-pointer flex items-center justify-center">
            <p className="text-lg font-bold text-white text-center">Edit</p>
          </div>
        </Link>
      </div>
    </AnimatedContainer>
  );
};

export default StudentsPage;
