const express = require("express");
const { signin } = require("../controllers/userControllers");
const { login } = require("../controllers/userControllers");
const { insertData } = require("../coursesData/courseData");
const { getCourses, getCoursesBySearch } = require("../coursesData/courseData");
const { verification } = require("./protectedRoutes");
const courseEnrollController = require("../controllers/courseEnrollController");

const coursesRouter = express.Router();

coursesRouter.post("/signin", signin);
coursesRouter.post("/login", login);
// coursesRouter.get('/',insertData)
coursesRouter.post("/courses", verification,getCourses);
coursesRouter.post("/search", getCoursesBySearch);
coursesRouter.post('/enroll',courseEnrollController)
module.exports = coursesRouter;
