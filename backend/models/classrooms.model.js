const { timestamps } = require('mongodb');
const mongoose = require('mongoose')

const ClassroomSchema = mongoose.Schema(
    {
        label: {
            type: String,
            required: [true, "Please enter classroom name"],
        },
        number: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom;