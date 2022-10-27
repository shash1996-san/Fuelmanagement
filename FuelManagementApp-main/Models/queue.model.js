const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({

    fuelStationName : { type : Date, required: true },
    vehicleId : { type : String,  },
    customerName : { type : String, },
    fuelType : { type : String, required: true },
    inTime : { type : Date, required: true },
    outTime: { type : Date, required: true },
    waitingTime:{ type : Date, required: true },
})

const Queue = mongoose.model("Queue", queueSchema);

module.exports = Queue;
