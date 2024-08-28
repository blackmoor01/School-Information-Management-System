import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StudentsDataEdit = ({ initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      image: null,
      name: "",
      level: "",
      program: "",
      gender: "",
      contact: "",
      email: "",
      description: "",
      date_of_admission: "",
      date_of_birth: "",
      address: "",
    }
  );
  const [messageVisible, setMessageVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const location = useLocation();

  const studentId = location.state?.studentId || null;
  console.log("Location state:", location.state);
  console.log("Student ID:", studentId);

  useEffect(() => {
    console.log("Location object:", location);
    if (!studentId) {
      console.error("No student_id provided");
      setMessageVisible(true);
      setFormErrors({
        message: "No student ID provided. Please go back and try again.",
      });
      return;
    }

    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/students/${studentId}/`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch student data: ${response.statusText}`
          );
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setMessageVisible(true);
        setFormErrors({ message: "Failed to load student data." });
      }
    };

    fetchStudentData();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required.";
    if (!formData.date_of_birth)
      errors.date_of_birth = "Date of Birth is required.";
    if (!formData.program) errors.program = "Program is required.";
    if (!formData.contact) {
      errors.contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errors.contact = "Contact number must be 10 digits.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.level) errors.level = "Level is required.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.date_of_admission)
      errors.date_of_admission = "Date of Admission is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        // Check if the formData[key] is a File object before appending
        if (formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
          console.log(`${key}:`, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
          console.log(`${key}:`, formData[key]);
        }
      });

      const response = await fetch(
        `http://127.0.0.1:8000/api/students/${studentId}/`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        setMessageVisible(true);
        setFormErrors({ message: "Student data updated successfully!" });
      } else {
        throw new Error(
          `Failed to update student data: ${response.statusText}`
        );
      }
    } catch (error) {
      setMessageVisible(true);
      setFormErrors({ message: "Failed to save student data." });
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
        method="post"
        encType="multipart/form-data"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Edit Student's Information
        </h1>

        {messageVisible && (
          <p
            className={`text-center mb-4 ${
              formErrors.message ? "text-red-500" : "text-green-500"
            }`}
          >
            {formErrors.message}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs italic">{formErrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.date_of_birth && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.date_of_birth}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Programme
              </label>
              <input
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                placeholder="Programme"
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.program && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.program}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={(e) => {
                  const { value } = e.target;
                  if (/^\d*$/.test(value)) {
                    handleChange(e);
                  }
                }}
                placeholder="Phone number"
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.contact && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.contact}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.address && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.address}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date of Admission
              </label>
              <input
                type="date"
                name="date_of_admission"
                value={formData.date_of_admission}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.date_of_admission && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.date_of_admission}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {formErrors.gender && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.gender}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Level
              </label>
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                placeholder="e.g., Level 100"
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.level && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.level}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pulse"
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentsDataEdit;
