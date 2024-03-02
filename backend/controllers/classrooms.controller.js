const Classroom = require("../models/classrooms.model.js");
const Classes = require("../models/classrooms.model.js");

//Add a Classroom
const createClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all Classroom
const getClassrooms = async (req, res) => {
  try {
    const classroom = await Classroom.find({});
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET Classroom by ID
const getClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const classroom = await Classroom.findById(id);
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE Classroom
const updateClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const classroom = await Classroom.findByIdAndUpdate(id, req.body);

    if (!classroom) {
      return res.status(404).json({ message: "Classe not found" });
    }

    const updatedClassroom = await Classroom.findById(id);
    console.log("Classe updated!");
    res.status(200).json(updatedClassroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE Classroom
const deleteClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const classroom = await Classroom.findByIdAndDelete(id);

    if (!classroom) {
      res.status(404).json({ message: "Classe not found!" });
    }

    res.status(200).json({ message: "Classe has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getClassrooms,
  getClassroom,
  updateClassroom,
  deleteClassroom,
  createClassroom,
};