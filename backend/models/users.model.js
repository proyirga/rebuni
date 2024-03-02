const {timestamp} = require('mongodb');
const mongoose = require('mongoose');

const Role = require('./roles.model')

const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'Please enter first name!']
        },
        middlename: {
            type: String,
            required: false
        },
        lastname: {
            type: String,
            required: [true, 'Please enter last name!']
        },
        email: {
            type: String,
            required: [true, 'Please enter email!']
        },
        password: {
            type: String,
            required: [true, 'Please enter password!']
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
        }
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;