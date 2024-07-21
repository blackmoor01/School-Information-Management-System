import React from "react";
import Sider from "../components/Sider.jsx";
import NavBar from "../components/NavBar.jsx";
import StudentsPage from "./StudentsPage.jsx";
import StudentsDashboard from "./StudentsDashboard.jsx";
import StudentsAssetsPage from "./StudentsAssetsPage.jsx";
import NewAdmission from "./NewAdmission.jsx";
import TeachersPage from "./TeachersPage.jsx";
import NewTeacherAdmission from "./NewTeacherAdmission.jsx";
import FinanacePage from "./FinancePage.jsx";
import EditFinancePage from "./FinancePage_Edit.jsx";
import Payment from "./PaymentsPage.jsx";
import IssuancePage from "./IssuancePage.jsx";
import ComplaintsPage from "./ComplaintsPage.jsx";
import StudentsAttendancePage from "./AttendancePage.jsx";
import InventoryPage from "./InventoryPage.jsx";
import AdministratorDashboard from "./AdministratorDashboard.jsx";
import CoursesPage from "./Courses.jsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/studentPageMainLayout/mainLayout.jsx";
import Settings from "./Settings.jsx";
import PaymentsEditPage from "../components/PaymentsEditPage.jsx";

const Content = () => {
    return (
        <div className="flex min-h-screen">
            <Sider className="h-full" />
            <div className="flex flex-col flex-1">
                <NavBar />

                <Routes>
                    <Route path="/" element={<AdministratorDashboard/>}/>

                    <Route path="/studentspage" element={<StudentsPage/>}/>
                    <Route path="/studentspage/studentsassetspage" element={<StudentsAssetsPage/>}/>
                    <Route path="/studentspage/newstudentsadmission" element={<NewAdmission/>}/>
                    
                    <Route path="/teacherspage" element={<TeachersPage/>}/>
                    <Route path="/teacherspage/newteacheradmission" element={<NewTeacherAdmission/>}/>

                    <Route path="/financepage" element={<FinanacePage/>}/>
                    <Route path="/financepage/editfinancedata" element={<EditFinancePage/>}/>

                    <Route path="/paymentspage" element={<Payment/>}/>
                    <Route path="/paymentspage/editpaymentsdata/" element={<PaymentsEditPage/>}/>

                    <Route path="/issuancepage" element={<IssuancePage/>}/>

                    <Route path="/complaintspage" element={<ComplaintsPage/>}/>
                    
                    <Route path="/studentsattendance" element={<StudentsAttendancePage/>}/>

                    <Route path="/inventory" element={<InventoryPage/>}/>

                    <Route path="/studentsdashboard" element={<StudentsDashboard/>}/>

                    <Route path="/settings" element={<Settings/>}/>

                    <Route path="/coursespage" element={<CoursesPage/>}/>
                </Routes>

            </div>
        </div>
    );
};
export default Content;