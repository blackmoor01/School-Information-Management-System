import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaTimesCircle,
  FaPaperPlane,
} from "react-icons/fa";
import InvoiceTable from "../components/invoiceData";
import { TbFileExport } from "react-icons/tb";
import { Link } from "react-router-dom";

const Payment = () => {
  const Header = () => {
    return (
      <div className="flex py-4 px-6 bg-[#fff] shadow-md mt-8 justify-between">
        <div>
          <h1 className="text-4xl font-bold">Payments</h1>
        </div>
        <div className="flex items-center space-x-24 justify-between">
          <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 outline-none flex-grow"
            />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex">
            <TbFileExport className="mt-1 mr-2" />
            Export CSV
          </button>

          <Link to={"/paymentspage/editpaymentsdata/"}>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">
              + New Item
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-2 mt-2">
      <Header />
      <InvoiceTable />
    </div>
  );
};

export default Payment;
