const User = require("../models/users.model.js");
const Role = require("../models/roles.model.js")

//Add a User
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET user by ID
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    console.log("User updated!");
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "User has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};