const { courseModel } = require("../models/courseModel");

const insertData = async () => {
  let result;
  try {
    result = await courseModel.insertMany([
      {
        title: "Sample Course",
        duration: "(10 Hours)",
      },
      {
        title: "Free Digital Marketing ",
        duration: "(10 Hours)",
      },
      {
        title: "Sample Course",
        duration: "(10 Hours)",
      },
    ]);

    console.log(result);
    if (result) {
      console.log("Data inserted successfully");
    } else {
      console.log("Data not inserted");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoursesBySearch = async (req, res) => {
  const { title } = req.body;

  try {
    const courses = await courseModel.find({ title });
    res.json(courses);
    console.log(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCourses, getCoursesBySearch, insertData };
