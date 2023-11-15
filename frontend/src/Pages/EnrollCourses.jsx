import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EnrollPage = () => {
  const navigate = useNavigate();
  const [user, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Enrolled Succussfully");
    navigate("/");

    try {
      const response = await axios.post(
        "https://talent-box-task.onrender.com/enroll",
        {
          name: user.email,
          email: user.email,
          course: user.course,
        }
      );
      console.log("Enrollment successful:", response.data);
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md w-[80%] md:w-[50%] shadow-md">
        <h1 className="text-sm text-center md:text-2xl font-bold mb-4">
          Enroll Now
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Full Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-600"
            >
              Course
            </label>
            <select
              id="course"
              name="course"
              value={user.course}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="full-stack">Full Stack Development 2023</option>
              <option value="data-science">Data Science Essentials</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollPage;
