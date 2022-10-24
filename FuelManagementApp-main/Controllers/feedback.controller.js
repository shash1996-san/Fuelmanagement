const Feedback = require("../Models/feedback.model");

const addFeedback = async (req, res) => {
    if (req.body) {
        const feedback = new Feedback(req.body);
        await feedback.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

const getAllFeedbacks = async (req, res) => {
    await Feedback.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

const getFeedbackDetails = async (req, res) => {
    if (req.body) {
      await Feedback.findOne({ fuelStationName: req.params.fuelStationName }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};

const updateFeedback = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await Feedback.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

const deleteFeedback = async (req, res) => {
    await Feedback.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    addFeedback,
    getAllFeedbacks,
    getFeedbackDetails,
    updateFeedback,
    deleteFeedback
};