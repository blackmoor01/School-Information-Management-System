import React from "react";
import { useNavigate } from "react-router-dom";
import profilepic from "../../assets/medium-shot-female-nurse-outdoors.jpg"
import styled, { keyframes } from "styled-components";

const edgeAnimation = keyframes`
  0% { border-color: #e2e8f0; }
  50% { border-color: #63b3ed; }
  100% { border-color: #e2e8f0; }
`;

const AnimatedContainer = styled.div`
  animation: ${edgeAnimation} 2s infinite;
`;

const NoStudentSelected = () => (
  <div className="flex flex-col justify-center items-center w-4/12 p-6 bg-white shadow-md">
    <div>😢</div>
    <p className="text-gray-500 font-semibold mt-4">No student selected</p>
  </div>
);

const StudentDetail = ({ selectedStudent }) => {
  const navigate = useNavigate();

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

  const handleEditClick = () => {
    navigate('/studentspage/studentsdata_edit', { state: { studentId: id } });
  };

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
            <button className="mr-2" aria-label="Call">📞</button>
            <h2 className="font-bold mx-2 text-gray-500">{contact || "N/A"}</h2>
          </div>
          <div className="py-3 flex">
            <a href={`mailto:${email || "N/A"}`} className="flex items-center">
              <button aria-label="Send Email">✉️</button>
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

        <button onClick={handleEditClick}>
          <div className="h-10 w-48 rounded-lg border border-gray-500 bg-blue-500 shadow-2xl hover:bg-blue-700 cursor-pointer flex items-center justify-center">
            <p className="text-lg font-bold text-white text-center">Edit</p>
          </div>
        </button>
      </div>
    </AnimatedContainer>
  );
};


export default StudentDetail;
