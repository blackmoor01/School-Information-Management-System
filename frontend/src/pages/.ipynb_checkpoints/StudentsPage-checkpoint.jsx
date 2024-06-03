import React, {useState} from "react";

const StudentsPage = () => {
    const [selected, setSelected] = useState('Students');
    const ContactList = () => {
        const data = [
            {name: 'Anna Watson', id: '#00345', level: 300, program: 'Real Estate', gender: 'Female', contact: ''},
            {name: 'John Lee', id: '#00034', level: 100, program: 'OFAD', gender: 'Male', contact: ''},
            {name: 'Andy Tay', id: '#00985', level: 100, program: 'IT Admin', gender: 'Male', contact: ''},
            {name: 'Bryan Adu', id: '#00784', level: 100, program: 'Real Estates', gender: 'Male', contact: ''},
            {name: 'Angel Ford', id: '#00431', level: 200, program: 'Paralegal', gender: 'Female', contact: ''},
            {name: 'Wilmette Arthur', id: '#00456', level: 400, program: 'CSWA', gender: 'Female', contact: ''},
            {name: 'Gloria John', id: '#00674', level: 200, program: 'Paralegal', gender: 'Female', contact: ''},
            {name: 'Sandra Sia', id: '#00986', level: 200, program: 'OFAD', gender: 'Female', contact: ''},
            {name: 'Ben Greenlish', id: '#00326', level: 100, program: 'IT Admin', gender: 'Male', contact: ''},
            {name: 'Samuel Johnson', id: '#00325', level: 400, program: 'Real Estates', gender: 'Male', contact: ''},
            {name: 'Gloria John', id: '#00674', level: 200, program: 'Paralegal', gender: 'Female', contact: ''},
            {name: 'Sandra Sia', id: '#00986', level: 200, program: 'OFAD', gender: 'Female', contact: ''},
            {name: 'Ben Greenlish', id: '#00326', level: 100, program: 'IT Admin', gender: 'Male', contact: ''},
            {name: 'Samuel Johnson', id: '#00325', level: 400, program: 'Real Estates', gender: 'Male', contact: ''},
            {name: 'Gloria John', id: '#00674', level: 200, program: 'Paralegal', gender: 'Female', contact: ''},
            {name: 'Sandra Sia', id: '#00986', level: 200, program: 'OFAD', gender: 'Female', contact: ''},
        ];
        return (
            <div className="p-4">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead className={"bg-blue-500"}>
                    <tr className={"text-center text-white"}>
                        <th className="border border-gray-200 px-4 py-2"></th>
                        <th className="border border-gray-200 px-4 py-2">Name</th>
                        <th className="border border-gray-200 px-4 py-2">ID</th>
                        <th className="border border-gray-200 px-4 py-2">Level</th>
                        <th className="border border-gray-200 px-4 py-2">Program</th>
                        <th className="border border-gray-200 px-4 py-2">Gender</th>
                        <th className="border border-gray-200 px-4 py-2">Contact</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((student, index) => (
                        <tr key={index} className="hover:bg-gray-100 even:bg-gray-50 text-center font-bold text-gray-600">
                            <td className="border border-gray-200 px-4 py-2">
                                <input type="checkbox"/>
                            </td>
                            <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                            <td className="border border-gray-200 px-4 py-2">
                                <a href="#" className="text-blue-500 hover:underline">{student.id}</a>
                            </td>
                            <td className="border border-gray-200 px-4 py-2">{student.level}</td>
                            <td className="border border-gray-200 px-4 py-2">{student.program}</td>
                            <td className="border border-gray-200 px-4 py-2">{student.gender}</td>
                            <td className="border border-gray-200 px-4 py-2">
                                <button className="mr-2">📞</button>
                                <button>✉️</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const Button = () => {
        return (
            <div className="flex justify-center mt-10">
                <div className="flex border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                        className={`px-8 py-5 font-bold ${
                            selected === 'Students' ? 'bg-white text-gray-900' : 'bg-blue-500 text-white'
                        }`}
                        onClick={() => setSelected('Students')}
                    >
                        Students
                    </button>
                    <button
                        className={`px-8 py-2 font-bold ${
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
        <div className={"flex-1 flex"}>
            <div className={""}>
                <p className={"text-5xl font-extrabold text-gray-700"}>Students Database</p>
                <p className={"text-lg font-medium text-gray-500 ml-7 mt-4"}>Hi Samuel, Welcome to the students
                    database.</p>
            </div>

            <div className={" flex md:-mt-16 md:justify-evenly"}>
                <input
                    className="md:h-14 md:w-3/12 rounded-full bg-blue-100 mx-2 shadow-lg focus:border-red-700 pl-6 py-8 ml-10"
                    placeholder="Search"
                />
                <div  className={"flex ml-16"}>
                   <Button/>
                </div>

                <div
                    className=" md:w-52 bg-[#4169E1] rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110"
                >
                    <p className="text-center font-extrabold text-white text-xl">+ New Admission</p>
                </div>
            </div>

            <div className={"mt-20"}>
                <ContactList/>
            </div>
        </div>
    )
};

export default StudentsPage;