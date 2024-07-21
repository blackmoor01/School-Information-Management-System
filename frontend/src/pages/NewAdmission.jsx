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
    medical_forms: new File([], ""),
    student_id_card: new File([], ""),
    admission_letter: new File([], ""),
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [resetFiles, setResetFiles] = useState(false);

  // Handles changes in file upload
  const handleFileChange = (name, file) => {
    if (file instanceof File) {
      setFileData((prevFileData) => ({
        ...prevFileData,
        [name]: file,
      }));
    } else {
      setFileData((prevFileData) => ({
        ...prevFileData,
        [name]: new File([], ""),
      }));
    }
  };

  // Updates the form upon changes in input
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  //Checking error against form content to be submitted
  const validateForm = useCallback(() => {
    const errors = {};
    const idPattern = /^#\d{5}$/; // Implement studentID regex format

    if (!formData.name) errors.name = "Name is required";
    if (!formData.date_of_birth)
      errors.date_of_birth = "Date of birth is required";
    if (!formData.program) errors.program = "Program is required";
    if (!formData.contact) errors.contact = "Phone number is required";
    if (!formData.nationality) errors.nationality = "Nationality is required";
    if (!formData.government_id)
      errors.government_id = "Government ID is required";
    if (!formData.tuition_fee) errors.tuition_fee = "Tuition fee is required";
    if (!formData.amount_due) errors.amount_due = "Amount Due is required";
    if (!formData.balance) errors.balance = "Balance is required";
    if (!formData.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.address) errors.address = "Address is required";
    if (!formData.date_of_admission)
      errors.date_of_admission = "Date of admission is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.id) {
      errors.id = "ID is required";
    } else if (!idPattern.test(formData.id)) {
      errors.id = "ID must be in the format #XXXXX (e.g., #00345)";
    }
    if (!formData.level) errors.level = "Level is required";
    if (!formData.payment_status)
      errors.payment_status = "Payment status is required";
    return errors;
  }, [formData]);

  {
    /* Handles form submission to the endpoint using axios*/
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    // Format the dates to be submitted to the backend
    const formattedFormData = {
      ...formData,
      date_of_admission: formData.date_of_admission
        ? new Date(formData.date_of_admission).toISOString().split("T")[0]
        : "",
      date_of_birth: formData.date_of_birth
        ? new Date(formData.date_of_birth).toISOString().split("T")[0]
        : "",
    };

    if (Object.keys(errors).length === 0) {
      try {
        // Log form data and file data for debugging
        console.log("Form Data:", formattedFormData);
        console.log("File Data:", fileData);

        const formDataToSend = new FormData();
        Object.keys(formattedFormData).forEach((key) => {
          formDataToSend.append(key, formattedFormData[key]);
        }); // Adds each key-value pair from the formData state to the FormData object.

        Object.keys(fileData).forEach((key) => {
          const file = fileData[key];
          if (file && file instanceof File && file.size > 0) {
            formDataToSend.append(key, file);
          } else {
            console.log(`No valid file for ${key}`); // Debugging line
          }
        });
        // Adds each file from the fileData state to the FormData object, but only if the file exists.

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

        // Set success message and visibility
        setSubmissionStatus("Student added successfully!");
        setMessageVisible(true);

        // Hide the message after 5 seconds
        setTimeout(() => {
          setMessageVisible(false);
        }, 5000); // 5000 milliseconds = 5 seconds

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
  

        setResetFiles(true); // Trigger reset in child component

      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
        setSubmissionStatus("Error adding Student");
        setMessageVisible(true);
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
        method="post"
        encType="multipart/form-data"
      >
        <div className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
          <h1 className="text-2xl font-bold mb-6">New Student's Info</h1>
          {messageVisible && (
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
                  placeholder="YYYY-MM-DD"
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
                  Student ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="eg. #00345"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.id && (
                  <p className="text-red-500 text-xs italic">{formErrors.id}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone number
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.contact && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.contact}
                  </p>
                )}
              </div>

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
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  placeholder="YYYY-MM-DD"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  placeholder="eg.Level 100"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.level && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.level}
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

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tuition Fee
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="999999.99"
                  id="tuition_fee"
                  name="tuition_fee"
                  value={formData.tuition_fee}
                  onChange={handleChange}
                  placeholder="Tuition Fee"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.tuition_fee && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.tuition_fee}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Amount Due
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="999999.99"
                  id="amount_due"
                  name="amount_due"
                  value={formData.amount_due}
                  onChange={handleChange}
                  placeholder="Amount Due"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.amount_due && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.amount_due}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Balance
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="999999.99"
                  id="balance"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  placeholder="Balance"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formErrors.balance && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.balance}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Payment Status
                </label>
                <select
                  name="payment_status"
                  value={formData.payment_status}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Payment Status</option>
                  <option value="Have Paid">Have Paid</option>
                  <option value="Part Payment">Part Payment</option>
                  <option value="Payment Due">Payment Due</option>
                </select>
                {formErrors.payment_status && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.payment_status}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-1 gap-4">
              <FileUpload
                onFileChange={handleFileChange}
                resetFiles={resetFiles}
              />
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
