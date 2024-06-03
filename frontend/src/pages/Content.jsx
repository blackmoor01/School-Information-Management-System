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

const Content = () => {
    return (
        <div className="flex min-h-screen">
            <Sider className="h-full"/>
            <div className="flex flex-col flex-1">
                <NavBar />
                <TeachersPage/>
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
