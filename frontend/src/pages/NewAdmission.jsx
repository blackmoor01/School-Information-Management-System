import React, { useState, useCallback } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import FileUpload from "../components/pdfUpload";

const NewAdmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    program: "",
    id: "",
    level: "",
    gender: "",
    contact: "",
    description: "",
    date_of_admission: "",
    payment_status: "",
    date_of_birth: "",
    address: "",
    email: "",
    intake: "",
    official_receipt: "",
    payment_method: "",
    date: "",
    amount_due: "",
    tuition_fee: "",
    miscellaneous: "",
    balance: "",
    remarks: "",
    nationality: "",
    government_id: "",
  });

  const [fileData, setFileData] = useState({
    medical_forms: null,
    student_id_card: null,
    admission_letter: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleFileChange = (name, file) => {
    setFileData({ ...fileData, [name]: file });
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const validateForm = useCallback(() => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.date_of_birth)
      errors.date_of_birth = "Date of birth is required";
    if (!formData.program) errors.program = "Program is required";
    if (!formData.contact) errors.contact = "Phone number is required";
    if (!formData.nationality) errors.nationality = "Nationality is required";
    if (!formData.government_id)
      errors.government_id = "Government ID is required";
    if (!formData.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        Object.keys(fileData).forEach((key) => {
          if (fileData[key]) {
            formDataToSend.append(key, fileData[key]);
          }
        });

        // Log the form data for debugging
        for (let pair of formDataToSend.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }

        const response = await axios.post(
          "http://127.0.0.1:8000/api/students/",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setSubmissionStatus("Student added successfully!");
        setFormData({
          name: "",
          program: "",
          id: "",
          level: "",
          gender: "",
          contact: "",
          description: "",
          date_of_admission: "",
          payment_status: "",
          date_of_birth: "",
          address: "",
          email: "",
          intake: "",
          official_receipt: "",
          payment_method: "",
          date: "",
          amount_due: "",
          tuition_fee: "",
          miscellaneous: "",
          balance: "",
          remarks: "",
          nationality: "",
          government_id: "",
        });
        setFileData({
          medical_forms: null,
          student_id_card: null,
          admission_letter: null,
        });
      } catch (error) {
        console.error("Error:", error);
        setSubmissionStatus("Error adding Student");
      }
    }
  };

  return (
    <div className={"mx-4 mt-2"}>
      <div className={"flex"}>
        <p className={"text-lg font-semibold"}>Students</p>
        <IoIosArrowForward className={"mt-2 mx-1"} />
        <p className={"text-lg font-semibold"}>New Admission</p>
      </div>

      <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
        <div>
          <h1 className="text-4xl font-bold">Students Database</h1>
          <p>Hi Samuel, Welcome to the students database</p>
        </div>
        <div className="flex items-center space-x-24 justify-between">
          <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 outline-none flex-grow"
            />
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="container mx-auto p-8 bg-white rounded-lg mt-8"
      >
        <div className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
          <h1 className="text-2xl font-bold mb-6">New Student's Info</h1>
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
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.name}
                  </p>
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
                  placeholder="Date of Birth"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.program && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.program}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone number
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.contact && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.contact}
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

            <div className="col-span-2 grid grid-cols-1 gap-4">
              <FileUpload onFileChange={handleFileChange} />
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
        </div>
      </form>
    </div>
  );
};

export default NewAdmission;
