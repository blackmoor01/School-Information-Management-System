import React, { useEffect, useRef, useState } from "react";

const FileUpload = ({ onFileChange, resetFiles }) => {
  const [fileNames, setFileNames] = useState({
    medical_forms: "",
    student_id_card: "",
    admission_letter: "",
  });

  const fileInputRefs = {
    medical_forms: useRef(null),
    student_id_card: useRef(null),
    admission_letter: useRef(null),
  };

  useEffect(() => {
    if (resetFiles) {
      Object.values(fileInputRefs).forEach((ref) => {
        if (ref.current) {
          ref.current.value = null;
        }
      });
      setFileNames({
        medical_forms: "",
        student_id_card: "",
        admission_letter: "",
      });
    }
  }, [resetFiles]); // Only reset when `resetFiles` changes

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0] || null;
    setFileNames((prev) => ({
      ...prev,
      [name]: file ? file.name : "",
    }));
    onFileChange(name, file);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Medical Forms
        </label>
        <input
          type="file"
          name="medical_forms"
          ref={fileInputRefs.medical_forms}
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {fileNames.medical_forms && (
          <p className="mt-1 text-gray-600">{fileNames.medical_forms}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Student ID Card
        </label>
        <input
          type="file"
          name="student_id_card"
          ref={fileInputRefs.student_id_card}
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {fileNames.student_id_card && (
          <p className="mt-1 text-gray-600">{fileNames.student_id_card}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Admission Letter
        </label>
        <input
          type="file"
          name="admission_letter"
          ref={fileInputRefs.admission_letter}
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {fileNames.admission_letter && (
          <p className="mt-1 text-gray-600">{fileNames.admission_letter}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
