const express = require("express");
const router = express.Router();
const Customer = require("../Controllers/Customer.controller");
const auth = require('../middleware/user_jwt');

module.exports = function () {
    router.post("/create", auth,Customer.addCustomer);
    router.get("/customerdetails/:customerName", auth,Customer.getCustomerDetails);
    router.get("/", auth,Customer.getAllCustomers);
    router.put("/update/:id", Customer.updateCustomer);
    router.delete("/delete/:id", Customer.deleteCustomer);
    
  return router;
};