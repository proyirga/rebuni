const Opportunity = require("../models/opportunities.model.js");

//Add a Opportunity
const createOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.create(req.body);
    res.status(200).json(opportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all Opportunitys
const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find({});
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET Opportunity by ID
const getOpportunity = async (req, res) => {
  try {
    const { id } = req.params;
    const opportunity = await Opportunity.findById(id);
    res.status(200).json(opportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE Opportunity
const updateOpportunity = async (req, res) => {
  try {
    const { id } = req.params;
    const opportunity = await Opportunity.findByIdAndUpdate(id, req.body);

    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }

    const updatedOpportunity = await Opportunity.findById(id);
    console.log("Opportunity updated!");
    res.status(200).json(updatedOpportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE Opportunity
const deleteOpportunity = async (req, res) => {
  try {
    const { id } = req.params;
    const opportunity = await Opportunity.findByIdAndDelete(id);

    if (!opportunity) {
      res.status(404).json({ message: "Opportunity not found!" });
    }

    res.status(200).json({ message: "Opportunity has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getOpportunities,
  getOpportunity,
  updateOpportunity,
  deleteOpportunity,
  createOpportunity,
};