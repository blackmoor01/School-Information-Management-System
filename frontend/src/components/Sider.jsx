import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sider() {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'bg-blue-700 rounded-lg' : 'custom-underline';
    };

    return (
        <div className="w-64 bg-blue-500 text-white flex flex-col min-h-screen p-8">
            <div className="flex items-center justify-center py-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">ACADEMY</h1>
                    <p className="text-sm">OF HEALTH CARE SERVICES</p>
                </div>
            </div>
            <nav className="flex-1 mt-20">
                <ul className="space-y-4">
                    <Link to="/">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer mb-5 ${getLinkClass('/')}`}>
                            <span className="mr-3">📊</span>
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <Link to="/studentspage">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer mb-8  ${getLinkClass('/studentspage')}`}>
                            <span className="mr-3">🎓</span>
                            <span>Students</span>
                        </li>
                    </Link>

                    <Link to="/teacherspage">
                        <li className={`flex items-center pl-4 py-2  cursor-pointer mb-8 ${getLinkClass('/teacherspage')}`}>
                            <span className="mr-3">👩‍🏫</span>
                            <span>Teachers</span>
                        </li>
                    </Link>

                    <Link to="/financepage">
                        <li className={`flex items-center pl-4 py-2  cursor-pointer mb-8 ${getLinkClass('/financepage')}`}>
                            <span className="mr-3">💰</span>
                            <span>Finance</span>
                        </li>
                    </Link>

                    <Link to="/paymentspage">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer mb-8 ${getLinkClass('/paymentspage')}`}>
                            <span className="mr-3">💳</span>
                            <span>Payments</span>
                        </li>
                    </Link>

                    <Link to="/issuancepage">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer mb-8 ${getLinkClass('/issuancepage')}`}>
                            <span className="mr-3">🛠️</span>
                            <span>Issuance</span>
                        </li>
                    </Link>

                    <Link to="/complaintspage">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer mb-8 ${getLinkClass('/complaintspage')}`}>
                            <span className="mr-3">❓</span>
                            <span>Complaints</span>
                        </li>
                    </Link>

                    <Link to="/studentsattendance">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer mb-8 ${getLinkClass('/studentsattendance')}`}>
                            <span className="mr-3">🗓️</span>
                            <span>Attendance</span>
                        </li>
                    </Link>

                    <Link to="/inventory">
                        <li className={`flex items-center pl-4 py-2 cursor-pointer ${getLinkClass('/inventory')}`}>
                            <span className="mr-3">📦</span>
                            <span className=''>Inventory</span>
                        </li>
                    </Link>
                </ul>
            </nav>

            <Link to={"/settings"}>
            <div className={`flex items-center justify-center py-4 mt-20 ${getLinkClass('/settings')}`}>
                <div className="flex items-center">
                    <span className="mr-2">⚙️</span>
                    <span>Settings</span>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Sider;
