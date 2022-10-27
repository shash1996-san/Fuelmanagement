const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    feedbackerId : { type : String, required: true },
    fuelStationId : { type : String, },
    fuelStationName : { type : String, required: true },
    Comment : { type : String, required: true }, 
})

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
