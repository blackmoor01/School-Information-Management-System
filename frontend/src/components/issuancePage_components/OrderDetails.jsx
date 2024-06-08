import React from 'react';
import Orderdetails from "../../assets/orderdetails.jpg"

const OrderDetails = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="mb-4">
                <img
                    src={Orderdetails}
                    alt="Order"
                    className="w-full h-48 object-fill rounded-lg"
                />
            </div>
            <h2 className="text-xl font-bold mb-2">Details of order</h2>
            <p className="text-gray-600 mb-2"><strong>Item name:</strong> Pen</p>
            <p className="text-gray-600 mb-2"><strong>Student name:</strong> James Smith</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> smithjvij@gmail.com</p>
            <p className="text-gray-600 mb-2"><strong>Programme:</strong> Medical health science</p>
            <p className="text-gray-600 mb-2"><strong>Issuance ID:</strong> #132536645</p>
            <p className="text-gray-600 mb-2"><strong>Currency:</strong> USD</p>
            <p className="text-gray-600 mb-2"><strong>Start Date:</strong> 24th March, 2024</p>
            <p className="text-gray-600 mb-2"><strong>Quantity:</strong> 40</p>
            <p className="text-gray-600 mb-2"><strong>Unit Price:</strong> $20</p>
            <p className="text-gray-600 mb-4"><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor mollis mauris sit amet dictum. Nullam vitae nisi ac sem condimentum malesuada.</p>
            <button className="bg-blue-500 text-white p-2 rounded-lg shadow-sm w-full hover:bg-blue-700">Notify Student</button>
        </div>
    );
};

export default OrderDetails;
