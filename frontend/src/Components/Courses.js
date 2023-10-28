import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Courses() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.post("/courses", {
        token: localStorage.getItem("token"),
      });
      // console.log(res.data);
      setCategory(res.data);
    };
    getCourses();
  }, [true]);

  return (
    <div>
      <section className="h-full   bg-gray-50 flex justify-center ">
        <div className="text-center mt-8 w-[30%]">
          <h3 className="text font-medium text-md">
            WelCome to FreeCodeCamp.org
          </h3>
          <p className="mt-3 text-md">
            "I have not failed. I found 10,000 ways <br></br> that won't work"
          </p>
          <div className="mt-3"></div>
          <p className="text-sm text-end">-thomas A.Edison</p>
          <div>
            {category.map((items) => {
              return (
                <div className="h-10 pl-2 shadow-sm border-gray-800 bg-gray-200 mt-2 text-left text-sm border border-dark-200">
                  <a href="#">
                  <span>{items.title}</span>
                  <span>{items.duration}</span></a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
