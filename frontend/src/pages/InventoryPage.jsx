import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import FilterButtons from "../components/issuancePage_components/FilterButtton";
import { FadeLoader } from "react-spinners";
import profilepic from "../assets/medium-shot-female-nurse-outdoors.jpg";

const InventoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInventoryData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/inventoryData/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      setInventoryData(data.inventoryData || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventoryData();
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

  const totalPages = Math.ceil(inventoryData.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const InventoryTable = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = inventoryData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    // Debugging: Log currentData
    console.log("Current Data:", currentData);

    return (
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Item Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                SKUs
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img
                    src={profilepic}
                    alt={item.itemName}
                    className="h-10 w-10 rounded-full mr-4 object-cover"
                  />
                  {item.itemName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.skus}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                <td className="px-6 py-2 text-right cursor-pointer">
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="mx-4 mt-2">
      <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
        <div>
          <h1 className="text-4xl font-bold">Students Attendance</h1>
          <p>Hi Samuel, Welcome to the students database</p>
        </div>

        <div className="flex items-center space-x-24 justify-between">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
            + New admission
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="w-full p-6 rounded-lg shadow-2xl">
          <h1 className="text-xl font-bold text-gray-500">Inventory Item</h1>

          <div className="mt-10 flex justify-between">
            <div className="items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
              <div className="flex">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search Inventory"
                  className="bg-gray-100 outline-none flex-grow"
                />
              </div>
            </div>
            <FilterButtons />
          </div>

          <InventoryTable />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default InventoryPage;
