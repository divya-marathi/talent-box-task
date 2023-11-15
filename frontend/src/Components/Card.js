import React from "react";
import { Link } from "react-router-dom";

export const Card=()=> {
  return (
    <>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-yellow-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://www.shutterstock.com/image-vector/elearning-banner-online-education-home-260nw-1694176021.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Full stack development 2023
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological
            order.
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. 
          </p>
          <Link to="/enroll"> 
            <button className="p-1 text-left border bg-white rounded border-yellow shadow-md hover:border-blue-500">
              Start Project
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}


export const Card1=()=> {
    return (
      <>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-yellow-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://www.shutterstock.com/image-vector/elearning-banner-online-education-home-260nw-1694176021.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Science Essentials 2023
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Here are the biggest enterprise
              technology acquisitions of 2021 so far, in reverse chronological
              order.
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. 
            </p>
            <Link to="/enroll"> 
            <button className="p-1 text-left border bg-white rounded border-yellow shadow-md hover:border-blue-500">
              Start Project
            </button>
          </Link>
          </div>
        </div>
      </>
    );
  }

  export const Card2=()=> {
    return (
      <>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-yellow-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://www.shutterstock.com/image-vector/elearning-banner-online-education-home-260nw-1694176021.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Machine Learning 2023
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Here are the biggest enterprise
              technology acquisitions of 2021 so far, in reverse chronological
              order.
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. 
            </p>
            <Link to="/enroll"> 
            <button className="p-1 text-left border bg-white rounded border-yellow shadow-md hover:border-blue-500">
              Start Project
            </button>
          </Link>
          </div>
        </div>
      </>
    );
  }