const express = require('express');
const router = express.Router();

const Role = require("../models/roles.model.js");
const {getRoles, getRole, deleteRole, updateRole, createRole} = require('../controllers/roles.controller.js');

//router add a Role
router.post('/', createRole);
//router get Roles
router.get('/', getRoles);
//router get Role by ID
router.get('/:id', getRole);
//router update Role
router.put('/:id', updateRole)
//router delete Role
router.delete('/:id', deleteRole);


module.exports = router;