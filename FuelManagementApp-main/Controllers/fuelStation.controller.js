const FuelStation = require("../Models/fuelStation.model");

const addFuelStation = async (req, res) => {
    if (req.body) {
        const fuelStation = new FuelStation(req.body);
        await fuelStation.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

const getAllFuelStations = async (req, res) => {
    await FuelStation.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

const getFuelStationDetails = async (req, res) => {
    if (req.body) {
      await FuelStation.findOne({ fuelStationName: req.params.fuelStationName }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};

const updateFuelStation = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await FuelStation.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

const deleteFuelStation = async (req, res) => {
    await FuelStation.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Fuel Center Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

// const getCountofCenters = async (req, res) => {   
//     const count =  FuelCenter.countDocuments();        
//     await count.then(data => res.status(200).send({"count": data }))
//         .catch((err) => {
//             res.status(200).send(err)
//         }); 
// }

const getCountofStation = async (req, res) => {
    try {
      const result = await FuelStation.countDocuments();
      return res.status(200).json(result);
    } catch {
      return res.status(400).json({ success: false });
    }
  }

module.exports = {
    addFuelStation,
    getAllFuelStations,
    getFuelStationDetails,
    updateFuelStation,
    deleteFuelStation, 
    getCountofStation,
};
