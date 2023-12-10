const express = require('express');
const courseRouter = express.Router();

const { registerCourse, getAllCourses } = require('../../controllers/course');



courseRouter.post('/', registerCourse);
courseRouter.get('/', getAllCourses);




module.exports = courseRouter;