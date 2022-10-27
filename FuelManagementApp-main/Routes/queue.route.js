const express = require("express");
const router = express.Router();
const QueueController = require("../Controllers/queue.controller");
const auth = require('../middleware/user_jwt');

module.exports = function () {
    router.post("/create", auth,QueueController.addQueue);
    router.get("/queuedetails/:fuelStationName", auth,QueueController.getQueueDetails);
    router.get("/",auth,QueueController.getAllQueues);
    router.put("/update/:id", QueueController.updateQueue);
    router.delete("/delete/:id", QueueController.deleteQueue);
    router.get("/count/:fuelStationName", QueueController.getCountofQueue);
    router.get("/count/petrol/:fuelStationName", QueueController.getCountofPetrolQueue);
    router.get("/count/diesel/:fuelStationName", QueueController.getCountofDieselQueue);

  return router;
};
