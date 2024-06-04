import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative w-full md:w-1/2">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 pl-10 rounded-lg shadow-sm border border-gray-300"
            />
            <svg
                className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zm6 14l-4-4m0 0l4-4m-4 4h12"
                />
            </svg>
        </div>
    );
};

export default SearchBar;
