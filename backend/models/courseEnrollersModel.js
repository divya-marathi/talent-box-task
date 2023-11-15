
const mongoose = require('mongoose');

const courseEnrollSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,

});

const Enroller = mongoose.model('Enrollment', courseEnrollSchema);

module.exports =Enroller;
