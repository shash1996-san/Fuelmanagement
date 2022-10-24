const express = require("express");
const router = express.Router();
const FuelStatusController = require("../Controllers/fuelStatus.controller");

module.exports = function () {
    router.post("/create", FuelStatusController.addStatusDetails);
    router.get("/queuedetails/:fuelStationId", FuelStatusController.getStationStatusDetails);
    router.get("/", FuelStatusController.getAllStatusDetails);
    router.put("/update/:id", FuelStatusController.updateStatus);
    router.delete("/delete/:id", FuelStatusController.deleteStatusDetails);
   
  return router;
};
