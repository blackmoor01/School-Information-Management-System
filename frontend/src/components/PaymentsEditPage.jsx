import React, {useState, useCallback} from "react";
import { IoIosArrowForward } from "react-icons/io";

const PaymentsEditPage = () => {
    const [submissionStatus, setSubmissionStatus] = useState("");
    const [formData, setFormData] = useState({
        invoiceID:"",
        createdOn:"",
        invoiceTo:"",
        studentID:"",
        amount:"",
        dueDate:"",
        status:"",
    })
    const [formErrors, setFormErrors] = useState({});
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }, []);

      const validateForm = useCallback(()=>{
        const errors = {};
        if (!formData.invoiceID) errors.name = "Invoice ID is required";
        if (!formData.invoiceTo) errors.invoiceTo = "Name is required";
        if(!formData.studentID) errors.studentID = "Student ID is required";
        if(!formData.amount) errors.amount = "Amount is required";
        if(!formData.status) errors.status = "Status is required";
        if (!formData.createdOn) errors.createdOn = "Creation Date is required";
        if (!formData.dueDate) errors.dueDate = "Due Date is required";

        return errors
      },[formData])

      const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          try {
            console.log("FormData to be submitted:", formData);
            const response = await fetch("http://127.0.0.1:8000/api/students/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
    
            setSubmissionStatus("Payments Data added successfully!");
            setFormData({
                invoiceID:"",
                createdOn:"",
                invoiceTo:"",
                studentID:"",
                amount:"",
                dueDate:"",
                status:"",
            });
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

      <form className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
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

        <div className="grid grid-cols-2 gap-8">
            <div>

            </div>

        </div>
      </form>
    </div>
  );
};

export default PaymentsEditPage;
