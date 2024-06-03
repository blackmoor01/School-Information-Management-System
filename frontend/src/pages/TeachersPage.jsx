import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import teachersData from "../components/teachersData";
import Pagination from "../components/Pagination";

const TeachersPage = () => {

const Header = () => {
    {/*The state change for the button when toggled*/}
     const [selected, setSelected] = useState('Students');

    {/*The buttton function for the toggling effect*/}
     const Button = () => {
        return (
            <div className="">
                <div className="flex  border border-gray-200 rounded-xl overflow-hidden">
                    <button
                        className={`px-1 py-2 font-bold ${
                            selected === 'Students' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
                        }`}
                        onClick={() => setSelected('Students')}
                    >
                        Students
                    </button>
                    <button
                        className={`px-2 py-2 font-bold ${
                            selected === 'Teachers' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
                        }`}
                        onClick={() => setSelected('Teachers')}
                    >
                        Teachers
                    </button>
                </div>
            </div>
        );
    };
    return (
        <div className="flex py-4 px-6 bg-white shadow-md mt-8 justify-between">
            <div>
                <h1 className="text-4xl font-bold">Teachers Database</h1>
                <p >Hi Samuel, Welcome to the teachers database</p>
            </div>
            <div className="flex items-center space-x-24 justify-between">
                <Button/>
                <div className="flex items-center bg-gray-100 rounded-full p-2 flex-grow max-w-lg ml-16">
                    <FaSearch className="text-gray-400 mr-2"/>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 outline-none flex-grow"
                    />
                </div>
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">+ New Teacher</button>
            </div>
        </div>
    );
};

const TeachersDataisplay = () => {
    return (
      <div className="mx-2 grid grid-cols-3 gap-4">
        {teachersData.map((item, index) => (
          <div className="shadow-2xl rounded-lg p-3 w-6/12" key={index}>
            <div className="flex">
              <div className="items-center justify-center mt-6">
                <img src="../assets/4735.jpg" className="h-14 w-24 object-fill" alt="Teachers" />
              </div>
              <div className="ml-4">
                <p className="text-xs font-bold text-gray-500">{item.name}</p>
                <p className="text-xs py-2 text-red-900 font-semibold cursor-pointer hover:scale-110">{item.view_option}</p>
                <p className="text-xs text-gray-500 font-semibold cursor-pointer hover:scale-110 ">{item.downloadable}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

    return(
        <div className={"mx-2 mt-2"}>
            <Header/>

            <div className={"mt-4"}>
                <TeachersDataisplay/>
                <Pagination/>
            </div>

        </div>
    )
};

export default TeachersPage;