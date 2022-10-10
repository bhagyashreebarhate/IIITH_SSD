const mongoose = require('mongoose');
const QuerySchema = new mongoose.Schema(
    {
        exam_name: {
            type: String,
            required: true,
        },
        course_name: {
            type: String,
            required: true,
        },
        question_num: {
            type: Number,
            required: true,
        },
        ta_roll:{
            type: String,
            required: true,
        },
        std_roll:{
            type: String,
            required: true,
        },
        ta_comment:{
            type: String,
        },
        std_comment:{
            type: String,
        },
        IsActive:{
            type: Boolean,
        },
})

const QueryModel = mongoose.model('Query', QuerySchema)

module.exports = QueryModel