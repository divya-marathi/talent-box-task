import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import { useState } from "react";
import axios from "axios";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useGoogleLogin } from "@react-oauth/google";

function Signin() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    let response = await axios.post("https://talent-box-task.onrender.com/signin", {
      email: user.email,
      password: user.password,
    });
    if (response.status == 204) {
      setErrorMessages(true);
      return;
    }
    if (response.status == 202) {
      alert("Registration success");
      console.log(response.data.token);
      window.localStorage.setItem("token", response.data.token);
      navigate("/courses");
    } else {
      alert("try again");
    }
  };
  const retriveGoogleData = async (token) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
      );
      return res.data && res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const successsLogin = async (token) => {
    const data = await retriveGoogleData(token);
    console.log(data);
    try {
      if (data.email_verified) {
        alert("Google Signin success");
        let response = await axios.post("/login", {
          email: data.email,
          password: token,
          isGoogleSigning:true,
          name:data.name
        });
        window.localStorage.setItem("token", response.data.token);
        navigate("/courses");
      } else {
        alert("try again");
      }
    } catch (error) {}
  };

  const loginWithgoole = useGoogleLogin({
    onSuccess: (token) => successsLogin(token.access_token),
  });

  return (
    <>
      <section className=" lg:px-96">
        <div className="container m-auto">
          <div className="max-w-lg rounded-lg p-6  text-neutral-800 dark:text-neutral-200">
            <div className=" w-[100%]    ">
              {" "}
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="px-4 md:px-0  text-center ">
                  {/* <!-- Form container--> */}
                  <div className=" md:p-12">
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please register an account</p>
                      {/* <!--Username input--> */}
                      <TEInput
                        type="text"
                        name="name"
                        required
                        label="Name"
                        className="inputSec mb-4"
                        value={user.name}
                        onChange={(e) => {
                          setUser({
                            ...user,
                            name: e.target.value,
                          });
                        }}
                      ></TEInput>
                      {/* <!--Useremail input--> */}
                      <TEInput
                        type="email"
                        label="email"
                        name="email"
                        required
                        className="inputSec mb-4"
                        value={user.email}
                        onChange={(e) => {
                          setUser({
                            ...user,
                            email: e.target.value,
                          });
                        }}
                      ></TEInput>
                      {errorMessages ? (
                        <p className="text text-red-600">
                          Email already exists!
                        </p>
                      ) : (
                        " "
                      )}
                      {/* <!--Password input--> */}
                      <TEInput
                        type="password"
                        label="password"
                        name="password"
                        required
                        className="inputSec mb-4"
                        value={user.password}
                        onChange={(e) => {
                          setUser({
                            ...user,
                            password: e.target.value,
                          });
                        }}
                      ></TEInput>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className=" inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Sign in
                          </button>
                        </TERipple>
                      </div>
                      <div class="flex items-center justify-center ">
                        {/* <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        /> */}

                        <GoogleLoginButton onClick={loginWithgoole} />
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center  justify-center pb-6">
                        <p className="mt-6 mr-2">Have an account?</p>
                        <ul>
                          <Link to="/login">
                            <button className="p-1 text-left mt-6 border rounded border-yellow-500 hover:border-blue-500">
                              Login
                            </button>
                          </Link>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
