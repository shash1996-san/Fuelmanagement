const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    customerName : { type : String, required: true },
    VechicalId : { type : String, required: true },
    fuelType : { type : String, required: true },
})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
