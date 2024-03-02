const { default: mongoose } = require('mongoose');

const AnnouncementSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter first title!']
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: false
        },
        postingDate: {
            type: Date,
            required: [true, 'Please enter execution posting date']
        },
        endDate: {
            type: Date,
            required: [true, 'Please enter announcement end date date']
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

const Announcement = mongoose.model('Announcement', AnnouncementSchema);

module.exports = Announcement;