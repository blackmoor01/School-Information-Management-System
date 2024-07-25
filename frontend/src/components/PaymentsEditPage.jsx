import React, { useState, useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";

const PaymentsEditPage = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [formData, setFormData] = useState({
    invoiceID: "",
    createdOn: "",
    invoiceTo: "",
    studentID: "",
    amount: "",
    dueDate: "",
    status: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  }, []);

  const validateForm = useCallback(() => {
    const errors = {};
    if (!formData.invoiceID) errors.invoiceID = "Invoice ID is required";
    if (!formData.createdOn) errors.createdOn = "Creation Date is required";
    if (!formData.invoiceTo) errors.invoiceTo = "Invoice To is required";
    if (!formData.studentID) errors.studentID = "Student ID is required";
    if (!formData.amount) errors.amount = "Amount is required";
    if (!formData.dueDate) errors.dueDate = "Due Date is required";
    if (!formData.status) errors.status = "Status is required";
    if (!formData.image) errors.image = "Image is required";
    return errors;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSubmit.append(key, formData[key]);
        });

        const response = await fetch("http://127.0.0.1:8000/api/students/", {
          method: "POST",
          body: formDataToSubmit,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setSubmissionStatus("Payments Data added successfully!");
        setFormData({
          invoiceID: "",
          createdOn: "",
          invoiceTo: "",
          studentID: "",
          amount: "",
          dueDate: "",
          status: "",
          image: null,
        });
        setImagePreview(null);
      } catch (error) {
        console.error("Error:", error);
        setSubmissionStatus("Error adding Payments");
      }
    }
  };

  return (
    <div className="mx-4 mt-2">
      <div className="flex mt-10">
        <p className="text-lg font-semibold">Payments</p>
        <IoIosArrowForward className="mt-2 mx-1" />
        <p className="text-lg font-semibold">New Payments Data</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8"
        method="post"
        encType="multipart/form-data"
      >
        <h1 className="text-2xl font-bold mb-6">New Payment Info</h1>
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formErrors.image && (
            <p className="text-red-500 text-xs italic">{formErrors.image}</p>
          )}
          {imagePreview && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-32 w-32 object-cover rounded"
              />
              <p className="text-sm mt-2">{formData.image.name}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block mb-2">Invoice ID</label>
            <input
              type="text"
              name="invoiceID"
              value={formData.invoiceID}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.invoiceID && (
              <p className="text-red-500 text-xs italic">
                {formErrors.invoiceID}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Created On</label>
            <input
              type="date"
              name="createdOn"
              value={formData.createdOn}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.createdOn && (
              <p className="text-red-500 text-xs italic">
                {formErrors.createdOn}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Invoice To</label>
            <input
              type="text"
              name="invoiceTo"
              value={formData.invoiceTo}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.invoiceTo && (
              <p className="text-red-500 text-xs italic">
                {formErrors.invoiceTo}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Student ID</label>
            <input
              type="text"
              name="studentID"
              value={formData.studentID}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.studentID && (
              <p className="text-red-500 text-xs italic">
                {formErrors.studentID}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.amount && (
              <p className="text-red-500 text-xs italic">{formErrors.amount}</p>
            )}
          </div>

          <div>
            <label className="block mb-2">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.dueDate && (
              <p className="text-red-500 text-xs italic">
                {formErrors.dueDate}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Status</option>
              <option value="Payment Due">Payment Due</option>
              <option value="Have Paid">Have Paid</option>
              <option value="Request Sent">Request Sent</option>
            </select>
            {formErrors.status && (
              <p className="text-red-500 text-xs italic">{formErrors.status}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentsEditPage;
