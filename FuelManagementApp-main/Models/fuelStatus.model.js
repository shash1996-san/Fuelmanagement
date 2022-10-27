const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelStatusSchema = new Schema({

    fuelStationId : { type : String, },
    fuelStationName : { type : String, required: true },
    PetrolAvailable : { type : String, required: true },
    Dieselvailable : { type : String, required: true },
    FinishlTime : { type : String, required: true },
    ArrivalTime : { type : String, required: true },
})

const FuelStatus = mongoose.model("FuelStatus", fuelStatusSchema);

module.exports = FuelStatus;
