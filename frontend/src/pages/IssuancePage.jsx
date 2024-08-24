import React from "react";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../components/issuancePage_components/SearchBar";
import FilterButtons from "../components/issuancePage_components/FilterButtton";
import OrderTable from "../components/issuancePage_components/OrderTable";
import OrderDetails from "../components/issuancePage_components/OrderDetails";
import StockItems from "../components/issuancePage_components/StockItems";
import RecentActivities from "../components/issuancePage_components/RecentActivities";

const IssuancePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full mx-auto px-8">
        <div className="flex justify-between mb-4">
          <div className="flex items-center bg-[#fff] rounded-full p-2 flex-grow">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#fff] outline-none flex-grow"
            />
          </div>
          <FilterButtons />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2">
            <OrderTable />
          </div>
          <div>
            <OrderDetails />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <StockItems />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default IssuancePage;
