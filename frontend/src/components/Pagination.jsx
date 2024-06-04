import React, { useState } from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { IoCaretForwardOutline } from "react-icons/io5";


const Pagination = () => {
    const number = 1;
    return (
        <div className="flex justify-end mt-10 mr-44">
            <IoCaretBackOutline size={24} className="text-blue-500 hover:text-blue-700 cursor-pointer" />

            <div className="h-8 w-8 rounded-full bg-white border border-gray-500 cursor-pointer">
                <p className="font-lg font-bold text-black text-center justify-center mt-1">{number}</p>
            </div>

            <div className="h-8 w-8 rounded-full bg-blue-500 border border-gray-500 mx-2 cursor-pointer">
            <p className="font-lg font-bold text-white text-center justify-center mt-1">{number +1}</p>
            </div>

            <div className="h-8 w-8 rounded-full bg-white border border-gray-500 cursor-pointer">
            <p className="font-lg font-bold text-black text-center justify-center mt-1">{number + 2}</p>
            </div>

            <IoCaretForwardOutline size={24} className="text-blue-500 hover:text-blue-700 cursor-pointer" />

        </div>
    )
};

export default Pagination;