import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectMonth = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-32 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {selectedMonth}
        <FaChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 flex space-x-2 p-2 bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => selectMonth(month)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {month}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthDropdown;
