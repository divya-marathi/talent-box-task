import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Courses() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.post("https://talent-box-task.onrender.com/courses", {
        token: localStorage.getItem("token"),
      });
      setCategory(res.data);
    };
    getCourses();
  }, [true]);

  return (
    <div>
      <section className="h-full bg-gray-50 flex justify-center">
        <div className="text-center mt-8 w-[30%]">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-3">
            Welcome to FreeCodeCamp.org
          </h3>
          <p className="text-sm md:text-base mb-6">
            "I have not failed. I found 10,000 ways <br /> that won't work."
          </p>
          <p className="text-xs md:text-sm text-right mb-6">- Thomas A. Edison</p>
          <div>
            {category.map((items, index) => (
              <div
                key={index}
                className="pl-2 shadow-sm border-gray-800 bg-gray-200 mt-2 text-left text-sm border border-dark-200"
              >
                <a href="#">
                  <span className="text-xs md:text-sm">{items.title}</span>
                  <span className="text-xs md:text-sm">{items.duration}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
