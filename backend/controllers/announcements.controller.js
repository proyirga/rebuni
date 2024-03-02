const Announcement = require("../models/announcements.model.js");

//Add a Announcement
const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all Announcements
const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({});
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET Announcement by ID
const getAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findById(id);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE Announcement
const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findByIdAndUpdate(id, req.body);

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    const updatedAnnouncement = await Announcement.findById(id);
    console.log("Announcement updated!");
    res.status(200).json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE Announcement
const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findByIdAndDelete(id);

    if (!announcement) {
      res.status(404).json({ message: "Announcement not found!" });
    }

    res.status(200).json({ message: "Announcement has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getAnnouncements,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  createAnnouncement,
};