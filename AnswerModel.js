const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("answer", answerSchema)