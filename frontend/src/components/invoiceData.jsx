import React, { useState } from "react";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaTimesCircle,
  FaPaperPlane,
} from "react-icons/fa";
import Pagination from "./Pagination";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg";
import { FadeLoader } from "react-spinners";

const invoices = [
  {
    id: "#2364240980763",
    createdOn: "23 March, 2024",
    invoiceTo: "Anna Watson",
    studentId: "#00345",
    amount: "$2300",
    dueDate: "23 March, 2024",
    status: "Request sent",
    statusType: "info",
    imageUrl: profilepic,
  },
  {
    id: "#2375242746064",
    createdOn: "23 March, 2024",
    invoiceTo: "John Lee",
    studentId: "#00034",
    amount: "$2300",
    dueDate: "23 March, 2024",
    status: "Request sent",
    statusType: "info",
    imageUrl: profilepic,
  },
  {
    id: "#1236305788746",
    createdOn: "23 March, 2024",
    invoiceTo: "Andy Tay",
    studentId: "#00985",
    amount: "$2300",
    dueDate: "23 March, 2024",
    status: "Request sent",
    statusType: "info",
    imageUrl: profilepic,
  },
  {
    id: "#1328494146774",
    createdOn: "23 March, 2024",
    invoiceTo: "Bryan Adu",
    studentId: "#00784",
    amount: "$2300",
    dueDate: "23 March, 2024",
    status: "Payment Due",
    statusType: "danger",
    imageUrl: profilepic,
  },
];

// Function to fetch the content of student database to be displayed
/*const fetchInvoice = async() => {
    try{
        const response = await fetch("")

    }catch(error){

    }finally{

    }

}*/

const getStatusButton = (status, statusType) => {
  switch (statusType) {
    case "info":
      return (
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center hover:bg-blue-700">
          <FaPaperPlane className="mr-1" />
          {status}
        </button>
      );
    case "success":
      return (
        <button className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center hover:bg-green-700">
          <FaCheckCircle className="mr-1" />
          {status}
        </button>
      );
    case "danger":
      return (
        <button className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center hover:bg-red-700">
          <FaTimesCircle className="mr-1" />
          {status}
        </button>
      );
    default:
      return null;
  }
};

const InvoiceTable = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-2 text-left">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-2 text-left">Invoice ID</th>
              <th className="px-6 py-2 text-left">Created On</th>
              <th className="px-6 py-2 text-left">Invoice to</th>
              <th className="px-6 py-2 text-left">Student ID</th>
              <th className="px-6 py-2 text-left">Amount</th>
              <th className="px-6 py-2 text-left">Due Date</th>
              <th className="px-6 py-2 text-left">Status</th>
              <th className="px-6 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-2 text-left">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-2">{invoice.id}</td>
                <td className="px-6 py-2">{invoice.createdOn}</td>
                <td className="px-6 py-2 flex items-center">
                  <img
                    src={invoice.imageUrl}
                    alt={invoice.invoiceTo}
                    className="h-10 w-10 rounded-full object-cover mr-4"
                  />
                  {invoice.invoiceTo}
                </td>
                <td className="px-6 py-2 text-blue-500">{invoice.studentId}</td>
                <td className="px-6 py-2">{invoice.amount}</td>
                <td className="px-6 py-2">{invoice.dueDate}</td>
                <td className="px-6 py-2">
                  {getStatusButton(invoice.status, invoice.statusType)}
                </td>
                <td className="px-6 py-2 text-right cursor-pointer">
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default InvoiceTable;
