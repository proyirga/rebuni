const LessonPlan = require("../models/lessonplans.model.js");

//Add a LessonPlan
const createLessonPlan = async (req, res) => {
  try {
    const lessonPlan = await LessonPlan.create(req.body);
    res.status(200).json(lessonPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all LessonPlans
const getLessonPlans = async (req, res) => {
  try {
    const lessonPlans = await LessonPlan.find({});
    res.status(200).json(lessonPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET LessonPlan by ID
const getLessonPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const lessonPlan = await LessonPlan.findById(id);
    res.status(200).json(lessonPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE LessonPlan
const updateLessonPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const lessonPlan = await LessonPlan.findByIdAndUpdate(id, req.body);

    if (!lessonPlan) {
      return res.status(404).json({ message: "Lesson Plan not found" });
    }

    const updatedLessonPlan = await LessonPlan.findById(id);
    console.log("Lesson Plan updated!");
    res.status(200).json(updatedLessonPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE LessonPlan
const deleteLessonPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const lessonPlan = await LessonPlan.findByIdAndDelete(id);

    if (!lessonPlan) {
      res.status(404).json({ message: "Lesson Plan not found!" });
    }

    res.status(200).json({ message: "Lesson Plan has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getLessonPlans,
  getLessonPlan,
  updateLessonPlan,
  deleteLessonPlan,
  createLessonPlan,
};