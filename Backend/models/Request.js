const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  dob: Date,
  age: Number,
  bloodGroup: String,
  address: String,
  height: Number,
  weight: Number,
  previousDiseases: String,
  organToRequest: String,
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
