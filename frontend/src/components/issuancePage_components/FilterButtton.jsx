import React from 'react';

const FilterButtons = () => {
    return (
        <div className="flex space-x-2">
            <button className="bg-blue-500 text-white p-2 rounded-lg shadow-sm flex items-center">
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                    />
                </svg>
                Filter
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-lg shadow-sm flex items-center">
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16m-7 4h7"
                    />
                </svg>
                Date
            </button>
        </div>
    );
};

export default FilterButtons;
