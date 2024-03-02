const express = require('express');
const router = express.Router();

const Course = require("../models/classrooms.model.js");
const {getClassrooms, getClassroom, deleteClassroom, updateClassroom, createClassroom} = require('../controllers/classrooms.controller.js');

//router add a Course
router.post('/', createClassroom);
//router get Classrooms
router.get('/', getClassrooms);
//router get Classroom by ID
router.get('/:id', getClassroom);
//router update Classroom
router.put('/:id', updateClassroom);
//router delete Classroom
router.delete('/:id', deleteClassroom);


module.exports = router;