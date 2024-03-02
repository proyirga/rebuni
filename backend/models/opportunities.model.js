const { default: mongoose } = require('mongoose');

const OpportunitySchema = mongoose.Schema(
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
            required: [true, 'Please enter posting date']
        },
        endDate: {
            type: Date,
            required: [true, 'Please enter Opportunity end date']
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

const Opportunity = mongoose.model('Opportunity', OpportunitySchema);

module.exports = Opportunity;