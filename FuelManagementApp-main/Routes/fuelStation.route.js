const express = require("express");
const router = express.Router();
const fuelStationController = require("../Controllers/fuelStation.controller");

module.exports = function () {
    router.post("/create", fuelStationController.addFuelStation);
    router.get("/fuelStationdetails/:fuelStationName", fuelStationController.getFuelStationDetails);
    router.get("/", fuelStationController.getAllFuelStations);
    router.put("/update/:id", fuelStationController.updateFuelStation);
    router.delete("/delete/:id", fuelStationController.deleteFuelStation);
    router.get("/count", fuelStationController.getCountofStation);

  return router;
};
