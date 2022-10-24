const express = require("express");
const router = express.Router();
const feedback = require("../Controllers/feedback.controller");

module.exports = function () {
    router.post("/create", feedback.addFeedback);
    router.get("/queuedetails/:flueCenterId", feedback.getFeedbackDetails);
    router.get("/", feedback.getAllFeedbacks);
    router.put("/update/:id", feedback.updateFeedback);
    router.delete("/delete/:id", feedback.deleteFeedback);
    
  return router;
};
