const Customer = require("../Models/customer.model");

const addCustomer = async (req, res) => {
    if (req.body) {
        const customer = new Customer(req.body);
        await customer.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

const getAllCustomers = async (req, res) => {
    await Customer.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

const getCustomerDetails = async (req, res) => {
    if (req.body) {
      await Customer.findOne({ customerName: req.params.customerName }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};

const updateCustomer = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await Customer.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

const deleteCustomer = async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Fuel Station Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    addCustomer,
    getAllCustomers,
    getCustomerDetails,
    updateCustomer,
    deleteCustomer
};
