const express = require("express");
const router = express.Router();
const feedback = require("../Controllers/feedback.controller");
const auth = require('../middleware/user_jwt');

module.exports = function () {
    router.post("/create",auth,feedback.addFeedback);
    router.get("/queuedetails/:fuelStationId",auth,feedback.getFeedbackDetails);
    router.get("/",auth,feedback.getAllFeedbacks);
    router.put("/update/:id", feedback.updateFeedback);
    router.delete("/delete/:id", feedback.deleteFeedback);
    
  return router;
};
