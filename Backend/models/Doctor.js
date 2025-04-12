const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: String,
  dob: Date,
  gender: String,
  phone: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  specialization: String,
  experience: Number,
  hospital: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
