import React from "react";
import SearchBar from "../components/issuancePage_components/SearchBar";
import FilterButtons from "../components/issuancePage_components/FilterButtton";
import OrderTable from "../components/issuancePage_components/OrderTable";
import OrderDetails from "../components/issuancePage_components/OrderDetails";
import StockItems from "../components/issuancePage_components/StockItems";
import RecentActivities from "../components/issuancePage_components/RecentActivities";

const IssuancePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between mb-4">
                    <SearchBar />
                    <FilterButtons />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="md:col-span-2">
                        <OrderTable />
                    </div>
                    <div>
                        <OrderDetails />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StockItems />
                    <RecentActivities />
                </div>
            </div>
        </div>
    )
};

export default IssuancePage;