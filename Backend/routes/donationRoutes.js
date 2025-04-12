const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/donate', async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).json({ message: 'Donation form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit donation form' });
  }
});

module.exports = router;
