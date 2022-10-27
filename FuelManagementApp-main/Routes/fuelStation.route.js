const express = require("express");
const router = express.Router();
const fuelStationController = require("../Controllers/fuelStation.controller");
const auth = require('../middleware/user_jwt');

module.exports = function () {
    router.post("/create",  auth,fuelStationController.addFuelStation);
    router.get("/fuelStationdetails/:fuelStationName", auth,fuelStationController.getFuelStationDetails);
    router.get("/", auth, fuelStationController.getAllFuelStations);
    router.put("/update/:id", fuelStationController.updateFuelStation);
    router.delete("/delete/:id", fuelStationController.deleteFuelStation);
    router.get("/count", fuelStationController.getCountofStation);

  return router;
};
