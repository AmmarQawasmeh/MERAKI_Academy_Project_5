const express = require("express")
const courseRouter = express.Router();

const authentication = require("../middleware/authentication");
const { createNewCourse,getAllcourses,getCourseById} = require("../Controllers/courses");


courseRouter.post("/createNewCourse",authentication,createNewCourse)
courseRouter.get("getAllcourses",authentication,getAllcourses)
courseRouter.get("getCourseById/:id",authentication,getCourseById)


module.exports =courseRouter