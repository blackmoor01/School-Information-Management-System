import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const StudentsPage = () => {
  const ContactList = () => {
    const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            {studentData.map((student, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 even:bg-gray-50 text-center font-bold text-gray-600"
              >
                <td className="border border-gray-200 px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {student.name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    {student.id}
                  </a>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {student.level}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {student.program}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {student.gender}
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
    <div className="flex-1">
      <ContactList />
    </div>
  );
};

export default StudentsPage;
