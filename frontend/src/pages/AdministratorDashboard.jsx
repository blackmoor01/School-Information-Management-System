import React, { useState, useEffect } from "react";
import {
  IoReturnDownForwardOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import groupofstudents from "../assets/group-of-students.jpg";
import events from "../assets/events.jpg";
import groupofteachers from "../assets/teacher-group.jpg";
import totalinventory from "../assets/3d-cartoon-lumberjack-character.jpg";
import runningbacktoschool from "../assets/running to school.jpg";
import MonthDropdown from "../components/monthsDropDown";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import { FadeLoader } from "react-spinners";

const AdministratorDashboard = () => {
  const [studentData, setStudentData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [teacherData, setTeacherData] = useState([]);

  const Greeting = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
      const now = new Date();
      const hour = now.getHours();
      let greetingMessage = "";

      if (hour < 12) {
        greetingMessage = "Good Morning";
      } else if (hour < 18) {
        greetingMessage = "Good Afternoon";
      } else {
        greetingMessage = "Good Evening";
      }

      setGreeting(greetingMessage);
    }, []);

    return (
      <div className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8 border-4 border-transparent hover:border-blue-500 transition-all duration-300">
        <p className="text-4xl font-extrabold">{greeting} Dennis</p>
        <div className="max-w-sm mt-2">
          <p className="text-lg font-medium text-gray-700">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
    );
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/students/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStudentData(data.students);
      setTotalStudents(data.students.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/teachers/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTeacherData(data.teachers);
      setTotalTeachers(data.teachers.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <FadeLoader color={"#123abc"} loading={loading} size={50} />
          <p className="text-blue-500 font-semibold mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="font-bold text-red-700">Ooops! {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const data = [
    { week: 1, Students: 10, Teachers: 40 },
    { week: 2, Students: 30, Teachers: 70 },
    { week: 3, Students: 20, Teachers: 50 },
    { week: 4, Students: 50, Teachers: 80 },
    { week: 5, Students: 30, Teachers: 60 },
    { week: 6, Students: 70, Teachers: 90 },
    { week: 7, Students: 50, Teachers: 70 },
    { week: 8, Students: 90, Teachers: 100 },
    { week: 9, Students: 60, Teachers: 80 },
    { week: 10, Students: 80, Teachers: 90 },
    { week: 11, Students: 50, Teachers: 60 },
    { week: 12, Students: 75, Teachers: 85 },
  ];

  const Graph = () => (
    <AreaChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff6666" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff6666" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="Teachers"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorGreen)"
      />
      <Area
        type="monotone"
        dataKey="Students"
        stroke="#ff6666"
        fillOpacity={1}
        fill="url(#colorRed)"
      />
      <Line type="monotone" dataKey="Teachers" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Students" stroke="#ff6666" />
    </AreaChart>
  );

  const CustomBarChart = () => {
    const data = [
      { name: "Jan", earnings: 400000, fill: "#0088FE" },
      { name: "Feb", earnings: 600000, fill: "#FF8042" },
      { name: "Mar", earnings: 1000000, fill: "#A662D6" },
    ];

    return (
      <div
        style={{
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>Earnings</h3>
        <BarChart
          width={450}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" />
        </BarChart>
      </div>
    );
  };
  return (
    <div className={"mt-5 mx-4 flex-1"}>
      <div className={"flex justify-between items-center"}>
        <h1 className={"font-extrabold text-4xl"}>Dashboard</h1>

        <div className={"h-1/12 w-6/12 shadow-2xl rounded-2xl border p-5 flex"}>
          <div className="flex flex-col justify-between">
            <Greeting />

            <div className={"mt-5"}>
              <div
                className={
                  "h-10 w-full sm:w-6/12 md:w-4/12 border border-gray-700 rounded-lg shadow-2xl bg-blue-500 cursor-pointer hover:bg-blue-700 transform transition duration-300 ease-in-out"
                }
              >
                <div className={"mx-2 text-center justify-center mt-1.5 flex"}>
                  <p className={"text-white font-bold text-xs"}>
                    Go to tasks for today
                  </p>
                  <IoReturnDownForwardOutline
                    className={"text-white font-extrabold ml-3"}
                    size={22}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ml-[20%] flex items-center justify-center">
            <img
              src={runningbacktoschool}
              alt="Group of Students"
              className="h-44 w-72 rounded-lg object-fill"
            />
          </div>
        </div>
      </div>

      <div className={"grid grid-cols-4 gap-4 mt-8"}>
        <div
          className={
            "flex shadow-2xl rounded-2xl border p-5 hover:scale-95 cursor-pointer"
          }
        >
          <div className="">
            <p className={"text-4xl font-extrabold"}>{totalStudents}</p>
            <p className={"py-2 text-lg font-bold text-gray-700"}>
              Total Students
            </p>
            <p className={"text-green-600 flex text-sm font-bold"}>
              9%{" "}
              <span className={"ml-2 text-sm text-gray-700"}>
                than last month
              </span>
            </p>
          </div>

          <div className="ml-[40%] items-center justify-center">
            <img
              src={groupofstudents}
              alt={"Group of Students"}
              className="h-24 w-36 rounded-lg object-fill"
            />
          </div>
        </div>

        <div
          className={
            "shadow-2xl flex rounded-2xl border p-5 hover:scale-95 cursor-pointer"
          }
        >
          <div>
            <p className={"text-4xl font-extrabold"}>{totalTeachers}</p>
            <p className={"py-2 text-lg font-bold text-gray-700"}>
              Total Teachers
            </p>
            <p className={"text-green-600 flex text-sm font-bold"}>
              3%{" "}
              <span className={"ml-2 text-sm text-gray-700"}>
                than last month
              </span>
            </p>
          </div>

          <div className="ml-[40%] items-center justify-center">
            <img
              src={groupofteachers}
              className="h-24 w-36 rounded-lg object-fill"
            />
          </div>
        </div>

        <div
          className={
            "shadow-2xl flex rounded-2xl border p-5 hover:scale-95 cursor-pointer"
          }
        >
          <div>
            <p className={"text-4xl font-extrabold"}>95</p>
            <p className={"py-2 text-lg font-bold text-gray-700"}>
              Total Events
            </p>
            <p className={"text-green-600 flex text-sm font-bold"}>
              5%
              <span className={"ml-2 text-sm text-gray-700"}>
                than last month
              </span>
            </p>
          </div>

          <div className="ml-[40%] items-center justify-center">
            <img src={events} className="h-24 w-36 rounded-lg object-fill" />
          </div>
        </div>

        <div
          className={
            "shadow-2xl flex rounded-2xl border p-5 hover:scale-95 cursor-pointer"
          }
        >
          <div>
            <p className={"text-4xl font-extrabold"}>300</p>
            <p className={"py-2 text-lg font-bold text-gray-700"}>
              Total Inventory
            </p>
            <p className={"text-red-600 flex text-sm font-bold"}>
              -10%{" "}
              <span className={"ml-2 text-sm text-gray-700"}>
                than last month
              </span>
            </p>
          </div>
          <div>
            <div className="ml-44 items-center justify-center">
              <img
                src={totalinventory}
                className="h-24 w-36 rounded-lg object-fill"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"flex mt-10"}>
        <div className={"h-84 w-8/12 shadow-2xl rounded-2xl border p-5"}>
          <div className={"flex justify-between items-center"}>
            <h1 className={"text-2xl text-gray-900 font-bold"}>
              School Attendance
            </h1>
            <MonthDropdown />
            <div
              className={
                "h-10 w-3/12 rounded-lg border border-gray-500 shadow-2xl"
              }
            >
              <div className={"flex items-center justify-between mx-2 py-2.5"}>
                <div className={"flex"}>
                  <div className={"h-5 w-5 bg-green-600"}></div>
                  <p className={"text-gray-600 font-bold text-xs ml-1"}>
                    Teachers
                  </p>
                </div>

                <div className={"flex ml-2"}>
                  <div className={"h-5 w-5 bg-red-600"}></div>
                  <p className={"text-gray-600 font-bold text-xs ml-1"}>
                    Students
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Graph />
        </div>
        <div className="ml-8">
          <CustomBarChart />
        </div>
      </div>

      <div className={"mt-10 mb-5"}>
        <div className={"h-48 w-8/12 rounded-lg shadow-2xl border p-5"}>
          <p className={"text-gray-900 font-bold"}>Recent Issues</p>
          <div className={"mt-5"}>
            <div className={"flex items-center"}>
              <div
                className={"h-3 w-3 border border-gray-600 bg-gray-600 mt-1.5"}
              />
              <p className={"ml-2"}>
                Payment of school fees reminder not sent to students
              </p>
              <div
                className={
                  "h-5 w-20 border border-blue-500 rounded-full ml-auto cursor-pointer hover:scale-110"
                }
              >
                <div className="flex items-center justify-between mx-2">
                  <p className={"text-xs text-blue-500 text-center"}>Check</p>
                  <IoChevronForwardOutline className="text-blue-500" />
                </div>
              </div>
            </div>
            <div className={"flex items-center mt-5"}>
              <div
                className={"h-3 w-3 border border-gray-600 bg-gray-600 mt-1.5"}
              />
              <p className={"ml-2"}>
                A general meeting for all staff members to organize at the end
                of the semester
              </p>
              <div
                className={
                  "h-5 w-20 border border-blue-500 rounded-full ml-auto cursor-pointer hover:scale-110"
                }
              >
                <div className="flex items-center justify-between mx-2">
                  <p className={"text-xs text-blue-500 text-center"}>Check</p>
                  <IoChevronForwardOutline className="text-blue-500" />
                </div>
              </div>
            </div>
            <div className={"flex items-center mt-5"}>
              <div
                className={"h-3 w-3 border border-gray-600 bg-gray-600 mt-1.5"}
              />
              <p className={"ml-2"}>
                A meeting with all board members on Saturday
              </p>
              <div
                className={
                  "h-5 w-20 border border-blue-500 rounded-full ml-auto cursor-pointer hover:scale-110 "
                }
              >
                <div className="flex items-center justify-between mx-2">
                  <p className={"text-xs text-blue-500 text-center"}>Check</p>
                  <IoChevronForwardOutline className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministratorDashboard;
