const express = require("express");
const router = express.Router();
const Customer = require("../Controllers/Customer.controller");

module.exports = function () {
    router.post("/create", Customer.addCustomer);
    router.get("/customerdetails/:customerName", Customer.getCustomerDetails);
    router.get("/", Customer.getAllCustomers);
    router.put("/update/:id", Customer.updateCustomer);
    router.delete("/delete/:id", Customer.deleteCustomer);
    
  return router;
};