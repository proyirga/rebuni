const {timestamp} = require('mongodb');
const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter role name!']
        },
        description: {
            type: String,
            required: false
        },
    },
    {
        timestamp: true,
    }
    
);

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;