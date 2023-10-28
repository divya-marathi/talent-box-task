const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  icons: String,
  title: String,
  duration: String,
});

const courseModel= mongoose.model("course", courseSchema);
module.exports={courseModel}