const { default: mongoose } = require('mongoose');
const Role = require('./courses.model')

const LessonPlanSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter first title!']
        },
        moduleid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Module',
            required: false
        },
        courseid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        },
        objectives: {
            type: String,
            required: [true, 'Please enter few objectives!']
        },
        startDate: {
            type: Date,
            required: [true, 'Please enter execution start date']
        },
        endDate: {
            type: Date,
            required: [true, 'Please enter execution end date date']
        },
        status: {
            type: String,
            required: false
        },
        remark: {
            type: String,
            required: false
        }
    }
);

const LessonPlan = mongoose.model('LessonPlan', LessonPlanSchema);

module.exports = LessonPlan;