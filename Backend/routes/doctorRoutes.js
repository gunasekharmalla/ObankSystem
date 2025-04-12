const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Doctor Registration Route
router.post('/register', async (req, res) => {
  try {
    const { email } = req.body;
    const existingDoctor = await Doctor.findOne({ email });

    if (existingDoctor) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json({ message: 'Doctor registered successfully!' });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Doctor Login Route
router.post('/login', async (req, res) => {
  const { email, password, hospital } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    if (doctor.password !== password || doctor.hospital !== hospital) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', doctorName: doctor.fullName });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
