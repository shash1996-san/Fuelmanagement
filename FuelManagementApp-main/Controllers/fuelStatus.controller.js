const FuelStatus = require("../Models/fuelStatus.model");

const addStatusDetails = async (req, res) => {
    if (req.body) {
        const fuelStatus = new FuelStatus(req.body);
        await fuelStatus.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

const getAllStatusDetails = async (req, res) => {
    await FuelStatus.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

const getStationStatusDetails = async (req, res) => {
    if (req.body) {
      await FuelStatus.findOne({ flueCenterId: req.params.flueCenterId }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
}; 

const updateStatus = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await FuelAvailability.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

const deleteStatusDetails = async (req, res) => {
    await FuelAvailability.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    addStatusDetails,
    getAllStatusDetails,
    getStationStatusDetails,
    updateStatus,
    deleteStatusDetails
};
