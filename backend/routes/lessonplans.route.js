const express = require('express');
const router = express.Router();

const LessonPlan = require("../models/lessonplans.model.js");

const {getLessonPlans, getLessonPlan, deleteLessonPlan, updateLessonPlan, createLessonPlan} = require('../controllers/lessonplans.controller.js');

//router add a Lesson Plan
router.post('/', createLessonPlan);
//router get Lesson Plans
router.get('/', getLessonPlans);
//router get Lesson Plan by ID
router.get('/:id', getLessonPlan);
//router update Lesson Plan
router.put('/:id', updateLessonPlan)
//router delete Lesson Plan
router.delete('/:id', deleteLessonPlan);


module.exports = router;