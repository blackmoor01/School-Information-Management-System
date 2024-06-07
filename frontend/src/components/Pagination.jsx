import React, { useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-end mt-10 mr-44">
            <IoCaretBackOutline
                size={24}
                className={`text-blue-500 hover:text-blue-700 cursor-pointer ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            />

            {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                    <div
                        key={pageNumber}
                        className={`h-8 w-8 rounded-full border border-gray-500 cursor-pointer mx-1 ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        <p className="font-lg font-bold text-center mt-1">{pageNumber}</p>
                    </div>
                );
            })}

            <IoCaretForwardOutline
                size={24}
                className={`text-blue-500 hover:text-blue-700 cursor-pointer ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            />
        </div>
    );
};

export default Pagination;
