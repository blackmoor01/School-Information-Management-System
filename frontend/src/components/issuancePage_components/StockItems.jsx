import React from 'react';

const stockItems = [
    { id: 1, name: 'Uniforms', category: 'Academic', sku: '121rr01i28e', quantity: 50 },
    { id: 2, name: 'Laptop', category: 'Academic', sku: '121rr01i28e', quantity: 50 },
    // Add more stock items here
];

const StockItems = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Items In stock</h2>
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Item Name</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">SKUs</th>
                        <th className="p-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {stockItems.map((item) => (
                        <tr key={item.id}>
                            <td className="p-2">{item.name}</td>
                            <td className="p-2">{item.category}</td>
                            <td className="p-2">{item.sku}</td>
                            <td className="p-2">{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockItems;
