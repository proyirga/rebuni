const express = require('express');
const router = express.Router();

const Opportunity = require("../models/opportunities.model.js");

const {getOpportunities, getOpportunity, deleteOpportunity, updateOpportunity, createOpportunity} = require('../controllers/opportunities.controller.js');

//router add an Opportunity
router.post('/', createOpportunity);
//router get Opportunities
router.get('/', getOpportunities);
//router get Opportunity by ID
router.get('/:id', getOpportunity);
//router update Opportunity
router.put('/:id', updateOpportunity)
//router delete Opportunity
router.delete('/:id', deleteOpportunity);


module.exports = router;