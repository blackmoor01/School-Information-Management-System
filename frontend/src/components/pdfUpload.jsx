import React, { useState } from 'react';
import { CgSoftwareUpload } from 'react-icons/cg';
import axios from 'axios';

const FileUpload = () => {
    const [medicalForms, setMedicalForms] = useState(null);
    const [studentIdCard, setStudentIdCard] = useState(null);
    const [admissionLetter, setAdmissionLetter] = useState(null);

    const handleFileChange = (event, setFile) => {
        const file = event.target.files[0];
        if (file && file.size <= 20 * 1024 * 1024) { // 20MB size limit
            setFile(file);
        } else {
            alert("Please select a valid file not exceeding 20MB.");
        }
    };

    const handleUpload = () => {
        const formData = new FormData();
        if (medicalForms) {
            formData.append('medical_forms', medicalForms);
        }
        if (studentIdCard) {
            formData.append('student_id_card', studentIdCard);
        }
        if (admissionLetter) {
            formData.append('admission_letter', admissionLetter);
        }

        // Additional form fields can be appended here
        formData.append('name', 'John Doe');  // Example static data, replace with actual data
        formData.append('id', '123');

        axios.post('http://localhost:8000/api/students/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log("Upload successful:", response.data);
        })
        .catch(error => {
            console.error("There was an error uploading the files!", error);
        });
    };

    return (
        <div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2">Medical Forms</label>
                <div className="items-center">
                    <label className="bg-gray-300 text-gray-700 rounded p-2 shadow-2xl flex hover:scale-x-110 cursor-pointer w-full md:w-1/12">
                        <CgSoftwareUpload size={20} className="mr-4" />
                        Upload
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setMedicalForms)}
                            className="hidden"
                        />
                    </label>
                </div>
                {medicalForms && (
                    <p className="mt-2 text-sm text-gray-500">
                        Selected file: {medicalForms.name}
                    </p>
                )}
                <span className="text-xs text-gray-500 font-medium">File size shouldn't exceed 20mb</span>
            </div>

            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Student ID Card</label>
                <div className="items-center">
                    <label className="bg-gray-300 text-gray-700 rounded p-2 shadow-2xl flex hover:scale-x-110 cursor-pointer w-full md:w-1/12">
                        <CgSoftwareUpload size={20} className="mr-4" />
                        Upload
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setStudentIdCard)}
                            className="hidden"
                        />
                    </label>
                </div>
                {studentIdCard && (
                    <p className="mt-2 text-sm text-gray-500">
                        Selected file: {studentIdCard.name}
                    </p>
                )}
                <span className="text-xs text-gray-500 font-medium">File size shouldn't exceed 20mb</span>
            </div>

            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Admission Letter</label>
                <div className="items-center">
                    <label className="bg-gray-300 text-gray-700 rounded p-2 shadow-2xl flex hover:scale-x-110 cursor-pointer w-full md:w-1/12">
                        <CgSoftwareUpload size={20} className="mr-4" />
                        Upload
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setAdmissionLetter)}
                            className="hidden"
                        />
                    </label>
                </div>
                {admissionLetter && (
                    <p className="mt-2 text-sm text-gray-500">
                        Selected file: {admissionLetter.name}
                    </p>
                )}
                <span className="text-xs text-gray-500 font-medium">File size shouldn't exceed 20mb</span>
            </div>

            <div className="flex justify-center mt-6">
                <button onClick={handleUpload} className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-lg hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FileUpload;
