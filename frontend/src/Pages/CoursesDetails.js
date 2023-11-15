import React from "react";
import {Card,Card1, Card2 } from "../Components/Card";

function CoursesDetails() {
  return (
    <>
 <div className="flex flex-wrap gap-5 justify-around p-1 m-2 items-center">
  <Card />
  <Card2 />
  <Card1 />
  <Card2 />
</div>


    </>
  );
}

export default CoursesDetails;
