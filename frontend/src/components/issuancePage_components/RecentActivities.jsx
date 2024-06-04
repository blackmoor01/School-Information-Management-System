import React from 'react';

const activities = [
    '200USD payments made to the student loan account for needy students',
    'Donations received from my health my life group of companies',
    'Facility tasks long overdue notification received yesterday',
    'Upcoming student science fair scheduled for next 2 months on the 6th',
    // Add more activities here
];

const RecentActivities = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent activities</h2>
            <ul className="list-disc pl-4">
                {activities.map((activity, index) => (
                    <li key={index} className="mb-2">{activity}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivities;
