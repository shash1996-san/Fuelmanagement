const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();




app.use(cors());
app.use(bodyParser.json());

const PORT = 8000;
const DB_URL ='mongodb+srv://shashini1996:shashini1996@cluster1.ou11uam.mongodb.net/fueldbo?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));



  
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
  

  app.listen(PORT, () =>{

    console.log(`App is running on ${PORT}`);
});

