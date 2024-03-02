const Role = require("../models/roles.model.js");

//Add a role
const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all roles
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find({});
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET roles by ID
const getRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE role
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndUpdate(id, req.body);

    if (!role) {
      return res.status(404).json({ message: "There is no such role!" });
    }

    const updateRole = await Role.findById(id);
    console.log("Role updated!");
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE Role
const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndDelete(id);

    if (!role) {
      res.status(404).json({ message: "There is no such role!" });
    }

    res.status(200).json({ message: "Role has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getRoles,
  getRole,
  updateRole,
  deleteRole,
  createRole,
};