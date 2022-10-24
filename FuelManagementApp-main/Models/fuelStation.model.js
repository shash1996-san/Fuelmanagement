const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelStationSchema = new Schema({

    fuelStationId : { type : String, required: true },
    fuelStationName : { type : String, required: true },
    fuelStationAddress : { type : String, required: true },
    district : { type : String, required: true },
    
})

//mongodb data table name
const FuelStation = mongoose.model("FuelStation", fuelStationSchema);

//export the module
module.exports = FuelStation;