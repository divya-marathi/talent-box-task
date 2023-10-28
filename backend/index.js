const express = require("express");
const mongoose = require("mongoose");
const coursesRouter = require("./router/route");
require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { insertData } = require("./coursesData/courseData");

// Express Applications
const app = express();

// Application Port
const PORT = process.env.PORT || 5000;

// Routing Area
app.use(cors());
app.use(express.json());
 
// Middlewares
app.use("/", coursesRouter);

app.get('/', async (req, res) => {
  try {
     insertData(); 
    res.send("Data inserted successfully"); 
  } catch (error) {
    res.status(500).send(`Error inserting data: ${error.message}`); 
  }
}); 



const ConnectionDb = async () => {
  mongoose
    .connect(process.env.mongo_url)
    .then(() => {
      console.log("Mongodb Connected");
      
    })
    .catch((err) => console.log("mongodb is not connected"));
};
ConnectionDb();


app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

