const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  dob: Date,
  age: Number,
  bloodGroup: String,
  address: String,
  height: Number,
  weight: Number,
  previousDiseases: String,
  organToDonate: String,
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
