import React, { useState } from 'react';
import StudentsPage from '../../pages/StudentsPage';
import StudentDetail from '../studentDetails';
import Pagination from '../Pagination';
import studentData from '../studentData';
import Header from '../Header';

const MainLayout = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3; // Adjust based on your data pagination logic
    const selectedStudent = studentData[0]; // Adjust logic to select a student

    return (
        <div>
            <Header/>
            <div className="flex">
                <div className="w-9/12">
                    <StudentsPage />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
                <div className="w-3/12">
                    <StudentDetail student={selectedStudent} />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
