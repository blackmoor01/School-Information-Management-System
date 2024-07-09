import React, { useState } from "react";
import { CgSoftwareUpload } from "react-icons/cg";
import axios from "axios";

const FileUpload = ({ onFileChange }) => {
    const [medicalForms, setMedicalForms] = useState(null);
    const [studentIdCard, setStudentIdCard] = useState(null);
    const [admissionLetter, setAdmissionLetter] = useState(null);

    const handleFileChange = (event, name) => {
        const file = event.target.files[0];
        if (file && file.size <= 20 * 1024 * 1024) { // 20MB size limit
            onFileChange(name, file);
            if (name === 'medical_forms') {
                setMedicalForms(file);
            } else if (name === 'student_id_card') {
                setStudentIdCard(file);
            } else if (name === 'admission_letter') {
                setAdmissionLetter(file);
            }
        } else {
            alert("Please select a valid file not exceeding 20MB.");
        }
    };

  return (
    <div>
      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Medical Forms
        </label>
        <div className="items-center">
          <label className="bg-gray-300 text-gray-700 rounded p-2 shadow-2xl flex hover:scale-x-110 cursor-pointer w-full md:w-1/12">
            <CgSoftwareUpload size={20} className="mr-4" />
            Upload
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "medical_forms")}
              className="hidden"
            />
          </label>
        </div>
        {medicalForms && (
          <p className="mt-2 text-sm text-gray-500">
            Selected file: {medicalForms.name}
          </p>
        )}
        <span className="text-xs text-gray-500 font-medium">
          File size shouldn't exceed 20mb
        </span>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Student ID Card
        </label>
        <div className="items-center">
          <label className="bg-gray-300 text-gray-700 rounded p-2 shadow-2xl flex hover:scale-x-110 cursor-pointer w-full md:w-1/12">
            <CgSoftwareUpload size={20} className="mr-4" />
            Upload
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "student_id_card")}
              className="hidden"
            />
          </label>
        </div>
        {studentIdCard && (
          <p className="mt-2 text-sm text-gray-500">
            Selected file: {studentIdCard.name}
          </p>
        )}
        <span className="text-xs text-gray-500 font-medium">
          File size shouldn't exceed 20mb
        </span>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Admission Letter
        </label>
        <div className="items-center">
          <label className="bg-gray-300 text-gray-700 rounded p-2 shadow-2xl flex hover:scale-x-110 cursor-pointer w-full md:w-1/12">
            <CgSoftwareUpload size={20} className="mr-4" />
            Upload
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "admission_letter")}
              className="hidden"
            />
          </label>
        </div>
        {admissionLetter && (
          <p className="mt-2 text-sm text-gray-500">
            Selected file: {admissionLetter.name}
          </p>
        )}
        <span className="text-xs text-gray-500 font-medium">
          File size shouldn't exceed 20mb
        </span>
      </div>
    </div>
  );
};

export default FileUpload;
