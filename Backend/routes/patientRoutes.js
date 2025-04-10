const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

const router = express.Router();

// REGISTER PATIENT
router.post('/register', async (req, res) => {
  try {
    const {
      doctorId,
      fullName,
      dob,
      gender,
      phone,
      email,
      password,
      confirmPassword,
      address,
      bloodGroup,
      organNeeded,
      height,
      weight,
      nationality,
    } = req.body;

    const existingUser = await Patient.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPatient = new Patient({
      doctorId,
      fullName,
      dob,
      gender,
      phone,
      email,
      password: hashedPassword,
      address,
      bloodGroup,
      organNeeded,
      height,
      weight,
      nationality,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ message: 'Something went wrong during registration' });
  }
});

// LOGIN PATIENT
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, patient.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: patient._id },
      process.env.JWT_SECRET || 'your_default_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      patient: {
        id: patient._id,
        name: patient.fullName,
        email: patient.email,
        bloodGroup: patient.bloodGroup,
        organNeeded: patient.organNeeded,
      },
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Something went wrong during login' });
  }
});

module.exports = router;
