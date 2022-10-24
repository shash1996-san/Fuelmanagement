const express = require("express");
const router = express.Router();
const QueueController = require("../Controllers/queue.controller");

module.exports = function () {
    router.post("/create", QueueController.addQueue);
    router.get("/queuedetails/:fuelStationName", QueueController.getQueueDetails);
    router.get("/", QueueController.getAllQueues);
    router.put("/update/:id", QueueController.updateQueue);
    router.delete("/delete/:id", QueueController.deleteQueue);
    router.get("/count/:fuelStationName", QueueController.getCountofQueue);
    router.get("/count/petrol/:fuelStationName", QueueController.getCountofPetrolQueue);
    router.get("/count/diesel/:fuelStationName", QueueController.getCountofDieselQueue);

  return router;
};
