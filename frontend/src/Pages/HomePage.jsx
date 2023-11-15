import React from "react";
import { GrApple } from "react-icons/gr";
import { BiLogoMicrosoft } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex justify-center ">
        <div className="text mt-[12%] font-serif font-medium px-3">
          <h4 className="m-3 text-3xl sm:text-sm">Learn to code - for free.</h4>
          <h4 className="m-3 text-3xl sm:text-sm">Build projects</h4>
          <h4 className="m-3 text-3xl sm:text-sm">Earn Certifications</h4>
          <p className="text font-regular m-3 sm:text-sm">
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            <br></br>
            jobs at tech companies including:
          </p>
          <div className="flex items-center overflow-y-hidden">
            <GrApple className="ml-4" />
            <span>Google</span>

            <BiLogoMicrosoft className="ml-4 " />
            <span>Microsoft</span>

            <FaSpotify className="ml-4 " />
            <span className="mr-2">Spotify</span>

            <GrAmazon className="ml-4 " />
            <span>mazon.com</span>
          </div>

          <div className=" flex justify-center items-center">
            <button className="mt-6 ml-4 border bg-orange-500 text-white p-1.5 w-[50%]">
              <Link to='/courses'> Get started(it's free)</Link>             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
