import React from 'react';

function Sider() {
    return (
        <div className="w-64 bg-blue-500 text-white flex flex-col min-h-screen p-8">
            <div className="flex items-center justify-center py-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">ACADEMY</h1>
                    <p className="text-sm">OF HEALTH CARE SERVICES</p>
                </div>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2 ">
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">📊</span>
                        <span>Dashboard</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 bg-blue-700 cursor-pointer">
                        <span className="mr-3 text-white">🎓</span>
                        <span>Students</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">👩‍🏫</span>
                        <span>Teachers</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">💰</span>
                        <span>Finance</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">💳</span>
                        <span>Payments</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">🛠️</span>
                        <span>Issuance</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">❓</span>
                        <span>Complaints</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">🗓️</span>
                        <span>Attendance</span>
                    </li>
                    <li className="flex items-center pl-4 py-2 hover:bg-blue-700 cursor-pointer">
                        <span className="mr-3">📦</span>
                        <span>Inventory</span>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center justify-center py-4">
                <div className="flex items-center">
                    <span className="mr-2">⚙️</span>
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
}

export default Sider;
