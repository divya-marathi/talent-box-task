import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import axios from "axios";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  
  const handleSubmit = async (event) => {   
    event.preventDefault();
    let response = await axios.post("https://talent-box-task.onrender.com/login", {
      email: user.email,
      password: user.password,
      isGoogleSigning: false,
    });
    if (response.status == 202) {
      alert("login success");

      window.localStorage.setItem("token", response.data.token);
      navigate("/courses");
    } else {
      alert("try again");
    }
  };

  
  return (
    <div className=" pt-20  dark:bg-neutral-700 ">
      <div className="  max-w-sm rounded-lg bg-white p-6 m-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit}>
          {/* E-mail input */}
          <div className="relative mb-12 " data-te-input-wrapper-init>
            <input
              type="email"
              className="border peer block min-h-[auto] w-full rounded m-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              value={user.email}
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />

            <label
              for="exampleInputEmail1"
              className=" pointer-events-none absolute 
              left-3 top-0 mb-3 max-w-[90%] origin-[0_0]
               truncate pt-[0.37rem] leading-[1.6] text-neutral-500
                transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
                peer-focus:scale-[0.8] peer-focus:text-primary
                 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Email address
            </label>
          </div>

          {/* Password input */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className=" border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputPassword1"
              placeholder="Password"
              value={user.password}
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
              name="password"
              required
            />
            <label
              for="exampleInputPassword1"
              className=" pointer-events-none absolute left-3 top-0 mb-6 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>

          {/* Submit button */}
          <TERipple rippleColor="light" className="w-full">
            <button
              className="mb-  inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              Login
            </button>
          </TERipple>
          <div className="flex items-center mt-3 text-center justify-center pb-6">
            <p className="mb-0 mr-2">Don't have an account?</p>
            <ul>
              <Link to="/signin">
                <button className="p-1 text-left border rounded border-yellow-500 hover:border-blue-500">
                  Signin
                </button>
              </Link>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
