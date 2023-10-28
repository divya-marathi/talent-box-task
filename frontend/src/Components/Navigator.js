import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass, FaAtlassian } from "react-icons/fa6";
import axios from "axios";
function Navigator() {
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [isLogged, setIslogged] = useState(true);
  useEffect(() => {
    if (token) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [navigate]);
  const searchHandler = async (e) => {
    setTitle(e.target.value);
    let res = await axios.post("https://talent-box-task.onrender.com/search", { title: title });
    console.log(res.data);
  };
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className=" bg-slate-900 p-3 text-white flex justify-between flex-row sm:flex-row-reverse items-center w-full  ">
        <div className="relative sm:block md:block lg:block hidden ">
          <input
            type="search"
            onChange={searchHandler}
            placeholder="search 8000+tutorials"
            className="rounded   bg-slate-600 px-1 lg:px-6 placeholder:text-[10px] placeholder:text-right"
          />
          <FaMagnifyingGlass className=" absolute top-[25%] left-[30px] " />
        </div>

        <div className=" flex-1  text-center ">
          <ul>
            <Link to="/">FreeCodeCamp</Link>
          </ul>
        </div>

        <div className="ml-auto gap-1 md:mr-4 flex text-end items-end ">
          <div className=" flex-1 gap-5 text-center ">
            <ul>
              <Link className="p-1 border border-gray-500" to="/courses">
                Menu
              </Link>
            </ul>
          </div>
          <ul>
            {isLogged ? (
              <Link
                className="p-1 border border-gray-500 "
                onClick={logout}
                to="/"
              >
                LogOut
              </Link>
            ) : (
              <Link
                className="p-1 pl-3 pr-3 text-center  bg-orange-500 "
                to="/signin"
              >
                Signin
              </Link>
            )}
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
}
export default Navigator;