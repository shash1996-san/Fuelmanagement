const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URI;

const dbConnect = () => {
  const URL = process.env.MONGODB_URI;

mongoose.connect(URL, () => {
  console.log("db connected")

});
};
  
  
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log('_MongoDB Connection Success_')
  })

  const FuelStation = require("./Routes/fuelStation.route");
  const Queue = require("./Routes/queue.route");
  const FuelStatus = require("./Routes/fuelStatus.route");
  const Feedback = require("./Routes/feedback.route");
  const Customer = require("./Routes/customer.route");
 


  app.use("/fuelStation", FuelStation());
  app.use("/queue", Queue());
  app.use("/status", FuelStatus());
  app.use("/feedback", Feedback());
  app.use("/customer", Customer());
  

  app.listen(9000, () => {
    dbConnect();
    console.log(`Server is up and running at port`)
})

