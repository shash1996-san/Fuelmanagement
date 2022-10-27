const express = require("express");
const router = express.Router();
const FuelStatusController = require("../Controllers/fuelStatus.controller");
const auth = require('../middleware/user_jwt');

module.exports = function () {
    router.post("/create", auth, FuelStatusController.addStatusDetails);
    router.get("/queuedetails/:fuelStationId",auth, FuelStatusController.getStationStatusDetails);
    router.get("/", FuelStatusController.getAllStatusDetails);
    router.put("/update/:id", FuelStatusController.updateStatus);
    router.delete("/delete/:id", FuelStatusController.deleteStatusDetails);
   
  return router;
};
