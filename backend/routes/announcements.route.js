const express = require('express');
const router = express.Router();

const Announcement = require("../models/announcements.model.js");

const {getAnnouncements, getAnnouncement, deleteAnnouncement, updateAnnouncement, createAnnouncement} = require('../controllers/announcements.controller.js');

//router add an Announcement
router.post('/', createAnnouncement);
//router get Announcements
router.get('/', getAnnouncements);
//router get Announcement by ID
router.get('/:id', getAnnouncement);
//router update Announcement
router.put('/:id', updateAnnouncement)
//router delete Announcement
router.delete('/:id', deleteAnnouncement);


module.exports = router;