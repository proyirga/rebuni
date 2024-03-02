const express = require('express');
const router = express.Router();
const Course = require("../models/courses.model.js");
const {getCourses, getCourse, deleteCourse, updateCourse, createCourse} = require('../controllers/courses.controller.js');

//router add a Course
router.post('/', createCourse);
//router get Courses
router.get('/', getCourses);
//router get Course by ID
router.get('/:id', getCourse);
//router update Course
router.put('/:id', updateCourse)
//router delete Course
router.delete('/:id', deleteCourse);


module.exports = router;