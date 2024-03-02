const {timestamp} = require('mongodb');
const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter title!']
        },
        description: {
            type: String,
            required:[true, 'Please enter short bdescriptuon of what the course is about!']
        },
        creditHour: {
            type: Number,
            required: [true, 'Please enter credit hour!']
        }
    },
    {
        timestamp: true,
    }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;