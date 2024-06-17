import React,{useState, useEffect} from "react";
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

const AdministratorDashboard = () => {
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
      <div className="container mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
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
  return (
    <div className={"mt-5 mx-4 flex-1"}>
      <div className={"flex justify-between items-center"}>
        <h1 className={"font-extrabold text-4xl"}>Dashboard</h1>

        <div className={"h-1/12 w-6/12 shadow-2xl rounded-2xl border p-5 flex"}>
          <div className="flex flex-col justify-between">
           <Greeting/>

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

          <div className="ml-10 flex items-center justify-center">
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
            <p className={"text-4xl font-extrabold"}>1,400</p>
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

          <div className="ml-10 items-center justify-center">
            <img
              src={groupofstudents}
              alt={"Group of Students"}
              className="h-24 w-28 rounded-lg object-fill"
            />
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
              Total Teachers
            </p>
            <p className={"text-green-600 flex text-sm font-bold"}>
              3%{" "}
              <span className={"ml-2 text-sm text-gray-700"}>
                than last month
              </span>
            </p>
          </div>

          <div className="ml-10 items-center justify-center">
            <img
              src={groupofteachers}
              className="h-24 w-28 rounded-lg object-fill"
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

          <div className="ml-10 items-center justify-center">
            <img src={events} className="h-24 w-28 rounded-lg object-fill" />
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
            <div className="ml-10 items-center justify-center">
              <img
                src={totalinventory}
                className="h-24 w-28 rounded-lg object-fill"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"flex mt-10"}>
        <div className={"h-80 w-8/12 shadow-2xl rounded-2xl border p-5"}>
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
        </div>

        <div className={"h-80 w-4/12 rounded-lg shadow-2xl border ml-5 p-5"}>
          <p className={"text-2xl font-bold"}>Earnings</p>
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
