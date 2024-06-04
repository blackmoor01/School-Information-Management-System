import React from "react";
import Sider from "../components/Sider.jsx";
import StudentDetail from "../components/studentDetails.jsx";
import NavBar from "../components/NavBar.jsx";
import Header from "../components/Header.jsx";
import StudentsPage from "./StudentsPage.jsx";
import Pagination from "../components/Pagination.jsx";
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

const Content = () => {
    return (
        <div className="flex min-h-screen">
            <Sider className="h-full"/>
            <div className="flex flex-col flex-1">
                <NavBar />
                <CoursesPage/>

                
                {/*<AdministratorDashboard/> */}
                {/*<InventoryPage/> */}
                {/*<StudentsAttendancePage/> */}


                {/*<ComplaintsPage/> */}

                
                {/* <IssuancePage/> */}
                {/*<Payment/>*/}

                {/*<EditFinancePage/>*/}
                {/*<FinanacePage/>*/}
                {/*<NewTeacherAdmission/>*/}
                {/*<TeachersPage/>*/}
                {/*<NewAdmission/>*/}
                {/*<StudentsAssetsPage/>*/}
               {/* <StudentsDashboard/>
                <Header/>
                <StudentsPage/>
                <StudentDetail/>
                <Pagination/>*/}
            </div>
        </div>
    );
};
export default Content;
