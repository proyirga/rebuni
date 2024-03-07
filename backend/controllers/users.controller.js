const User = require("../models/users.model.js");
const Role = require("../models/roles.model.js")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const { use } = require("../routes/users.route.js");

// @Description: Authenticte Uer/Set token
// @Route: POST /api/users/auth
const authUser = asyncHandler (async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @Description: Create / register user
// @Route: POST /api/users/new
// @Access: Previledged users can perform this action or users can register themmselves.
const createUser = asyncHandler (async (req, res) => {
  const {firstname, middlename, lastname, email, password, role} = req.body

  //Validate data
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({message: "All fields are required"})
  }

  // Check for duplicates 
  const duplicate = await User.findOne({email}).lean().exec()
  if (duplicate){
    return res.status(409).json({message: "User's email already taken!"})
  }

  // Hashe password
  const hashedPassword = await bcrypt.hash(password, 10)
  //create user object and store in the database
  const userObject = ({firstname, middlename, lastname, email, "password": hashedPassword, role})
  const user = await User.create(userObject)
  if(user){
    res.status(201).json({message: `User ${firstname} has been created!`})
  } else {
    res.status(400).json({message: 'Invalid user data received'})
  }
});

// @Description: Retrieve all usres registered in the system
// @Route: GET /api/users/
// @Access: Only previledged users can perform this action
const getUsers = asyncHandler (async (req, res) => {
  const users = await User.find().select('-password').lean()
  if (!users?.length) {
    return res.status(400).json({message: 'No users found!'})
  }
  res.status(200).json(users)
});

// @Description: Retrieve usre by id
// @Route: GET /api/users/id
// @Access: Previledged users can perform this action or users can see their own profile
const getUser = asyncHandler (async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json({ message: error.message });
  }
});

// @Description: Update users data
// @Route: PUT /api/users/id
// @Access: Only own profile or previledged users can perform this action
const updateUser = asyncHandler (async (req, res) => {
  const {id, firstname, lastname, email, password, role} = req.body
  if (!id || !firstname || !lastname || !email || !Array.isArray(role) || !role.length || typeof active !== 'boolean') {
    return res.status(400).json({message: 'All fields are required'})
  }

  const user = await User.findById(id).exec()
  if (!user) {
    return res.status(400).json({message: `User of id: ${id} not found`})
  }

  const duplicate = await User.findOne(email).lean().exec()
  if (duplicate && duplicate?._id.toString() !== id){
    return res.status(409).json({message: 'Email/username must be unique!'})
  }
  user.firstname = firstname
  user.middlename = middlename
  user.lastname = lastname
  user.email =email
  user.role = role
  user.active = active

  if(password){
    user.password =await bcrypt.hash(password, 10)
  }
  const updatedUser = await user.save()
  res.status(200).json({message: `${updateUser.firstname} has beed updated`})
});

// @Description: Delete user 
// @Route: DELETE /api/users/
// @Access: Only previledged users can perform this action
const deleteUser = asyncHandler (async (req, res) => {
  const { id } = req.body

  if (!id) {
    res.status(404).json({ message: "User ID is required!" });
  }
  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({message: 'User not found'})
  }
  const deletedUser = user.deleteOne()
  //res.status(200).json({message: `User ${deletedUser.firstname} with ID ${deletedUser._id} has been deleted`})

  res.status(200).json({ message: "User has been deleted!" });
});

module.exports = {
  authUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};