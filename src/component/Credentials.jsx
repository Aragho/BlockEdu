import React from "react";
import Sidebar from "../component/Sidebar";
import { useNavigate } from "react-router-dom";

const Credentails = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedCredentials = Array.from(
      document.querySelectorAll("input[name='credentials']:checked")
    ).map((input) => input.value);

    const studentData = {
      matricId: document.getElementById("matricId").value,
      email: document.getElementById("email").value,
      studentName: document.getElementById("studentName").value,
      institutionName: document.getElementById("name").value,
      institutionId: document.getElementById("ID").value,
      credentials: selectedCredentials,
      dateIssued: new Date().toISOString(),
      status: "Pending",
    };

    const existingStudents = JSON.parse(localStorage.getItem("students")) || [];
    existingStudents.push(studentData);
    localStorage.setItem("students", JSON.stringify(existingStudents));

    alert("Student added successfully");

    navigate("/dashboard1"); // Redirect AFTER storing
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-tr from-[#E3F2FD] to-[#275b86]">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <h1 className="text-[#4CAF50] font-bold text-xl sm:text-2xl md:text-3xl mb-6">
          Add new Student
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 flex-1">
              <label htmlFor="matricId" className="mb-1 text-sm font-semibold text-gray-700 block">
                Matriculation ID
              </label>
              <input
                type="text"
                id="matricId"
                required
                placeholder="Enter Matriculation ID"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4 flex-1">
              <label htmlFor="studentName" className="mb-1 text-sm font-semibold text-gray-700 block">
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                required
                placeholder="Enter Student Name"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 flex-1">
              <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter Email Address"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4 flex-1">
              <label htmlFor="name" className="mb-1 text-sm font-semibold text-gray-700 block">
                Institution Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Institution name"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="ID" className="mb-1 text-sm font-semibold text-gray-700 block">
              Institution ID
            </label>
            <input
              type="text"
              id="ID"
              required
              placeholder="Institution ID"
              className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Document Type:</h3>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="Transcript" name="credentials" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-500 peer-checked:bg-green-500"></div>
                <span>Transcript</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="Certificate" name="credentials" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-500 peer-checked:bg-green-500"></div>
                <span>Certificate</span>
              </label>
            </div>

            <div>
              <label htmlFor="fileUpload" className="block font-medium">
                Upload Document(s):
              </label>
              <input
                type="file"
                id="fileUpload"
                name="documents"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="mt-2 block w-full sm:w-auto"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1E88E5] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Credentails;
