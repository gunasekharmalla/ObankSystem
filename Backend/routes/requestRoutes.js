const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

router.post('/request', async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json({ message: 'Organ request submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit organ request' });
  }
});

module.exports = router;
