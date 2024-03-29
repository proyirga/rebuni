const express = require('express');
const router = express.Router();

const User = require("../models/users.model.js");
const Role = require("../models/roles.model.js");

const {authUser, getUsers, getUser, deleteUser, updateUser, createUser} = require('../controllers/users.controller.js');

//router for auth
router.get('/auth/:id', authUser);
//router add a User
router.post('/', createUser);
//router get Users
router.get('/', getUsers);
//router get User by ID
router.get('/:id', getUser);
//router update User
router.put('/:id', updateUser)
//router delete User
router.delete('/', deleteUser);


module.exports = router;