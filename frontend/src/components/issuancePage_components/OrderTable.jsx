import React from 'react';
import Pagination from '../Pagination';

const orders = [
    { id: 1, name: 'James Smith', item: 'Pen', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'James Smith', item: 'Maths book', sku: '121rr01i28e', quantity: 50 },
    
];

const OrderTable = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Student Name</th>
                        <th className="p-2">Item Name</th>
                        <th className="p-2">SKUs</th>
                        <th className="p-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td className="p-2">{order.name}</td>
                            <td className="p-2">{order.item}</td>
                            <td className="p-2">{order.sku}</td>
                            <td className="p-2">{order.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
               <Pagination/>
            </div>
        </div>
    );
};

export default OrderTable;
