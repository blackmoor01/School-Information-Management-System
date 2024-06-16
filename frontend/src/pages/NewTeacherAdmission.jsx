import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const NewTeacherAdmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    date_of_employment: "",
    college_degree: "",
    phone_number: "",
    nationality: "",
    government_id: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.date_of_employment)
      errors.date_of_employment = "Date of employment is required";
    if (!formData.college_degree)
      errors.college_degree = "College degree is required";
    if (!formData.phone_number)
      errors.phone_number = "Phone number is required";
    if (!formData.nationality) errors.nationality = "Nationality is required";
    if (!formData.government_id)
      errors.government_id = "Government ID is required";
    if (!formData.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/teachers/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setSubmissionStatus("Teacher added successfully!");
        setFormData({
          name: "",
          date_of_employment: "",
          college_degree: "",
          phone_number: "",
          nationality: "",
          government_id: "",
          email: "",
        });
      } catch (error) {
        console.error("Error:", error);
        setSubmissionStatus("Error adding teacher");
      }
    }
  };

  const NewTeacherForm = () => {
    return (
      <form
        onSubmit={handleSubmit}
        className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8"
      >
        <h1 className="text-2xl font-bold mb-6">New Teacher's Info</h1>
        {submissionStatus && (
          <p
            className={`text-center mb-4 ${
              submissionStatus.includes("Error")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {submissionStatus}
          </p>
        )}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs italic">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date of Employment
              </label>
              <input
                type="date"
                name="date_of_employment"
                value={formData.date_of_employment}
                onChange={handleChange}
                placeholder="Date of Employment"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.date_of_employment && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.date_of_employment}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                College Degree
              </label>
              <input
                type="text"
                name="college_degree"
                value={formData.college_degree}
                onChange={handleChange}
                placeholder="College Degree"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.college_degree && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.college_degree}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone number
              </label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.phone_number && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.phone_number}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.nationality && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.nationality}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Government ID
              </label>
              <input
                type="text"
                name="government_id"
                value={formData.government_id}
                onChange={handleChange}
                placeholder="Government ID"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.government_id && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.government_id}
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="mx-4 mt-2">
      <div className="flex mt-10">
        <p className="text-lg font-semibold">Teachers</p>
        <IoIosArrowForward className="mt-2 mx-1" />
        <p className="text-lg font-semibold">New Admission</p>
      </div>
      <NewTeacherForm />
    </div>
  );
};

export default NewTeacherAdmission;
