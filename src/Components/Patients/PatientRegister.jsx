import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    fullName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    bloodGroup: '',
    organNeeded: '',
    height: '',
    weight: '',
    nationality: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const genderOptions = ['Male', 'Female', 'Other'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const countryList = [
    'India', 'United States', 'Canada', 'Australia', 'United Kingdom',
    'Germany', 'France', 'Italy', 'Spain', 'Brazil', 'Russia', 'China', 'Japan',
    'South Korea', 'Mexico', 'Netherlands', 'Sweden', 'Norway', 'Switzerland',
    'New Zealand', 'South Africa', 'Indonesia', 'Singapore', 'Malaysia', 'UAE',
    'Saudi Arabia', 'Thailand', 'Philippines', 'Bangladesh', 'Pakistan'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'confirmPassword' && value !== formData.password) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    fetch('http://localhost:5000/api/patient/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Patient registered successfully') {
          alert('Registration Successful!');
          setFormData({
            doctorId: '',
            fullName: '',
            dob: '',
            gender: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            bloodGroup: '',
            organNeeded: '',
            height: '',
            weight: '',
            nationality: '',
          });
          navigate('/patient-dashboard');
        } else {
          alert(data.message || 'Registration failed');
        }
      })
      .catch((err) => console.error('Registration Error:', err));
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Doctor ID:</label><input type="text" name="doctorId" required value={formData.doctorId} onChange={handleChange} /></div>
        <div><label>Full Name:</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} /></div>
        <div><label>DOB:</label><input type="date" name="dob" required value={formData.dob} onChange={handleChange} /></div>
        
        <div>
          <label>Gender:</label>
          <select name="gender" required value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            {genderOptions.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <div><label>Phone:</label><input type="text" name="phone" required value={formData.phone} onChange={handleChange} /></div>
        <div><label>Email:</label><input type="email" name="email" required value={formData.email} onChange={handleChange} /></div>
        <div><label>Password:</label><input type="password" name="password" required value={formData.password} onChange={handleChange} /></div>
        <div><label>Confirm Password:</label><input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} /></div>
        <div><label>Address:</label><input type="text" name="address" required value={formData.address} onChange={handleChange} /></div>

        <div>
          <label>Blood Group:</label>
          <select name="bloodGroup" required value={formData.bloodGroup} onChange={handleChange}>
            <option value="">Select Blood Group</option>
            {bloodGroups.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
          </select>
        </div>

        <div><label>Organ Needed:</label><input type="text" name="organNeeded" required value={formData.organNeeded} onChange={handleChange} /></div>
        <div><label>Height (cm):</label><input type="number" name="height" required value={formData.height} onChange={handleChange} /></div>
        <div><label>Weight (kg):</label><input type="number" name="weight" required value={formData.weight} onChange={handleChange} /></div>

        <div>
          <label>Nationality:</label>
          <select name="nationality" required value={formData.nationality} onChange={handleChange}>
            <option value="">Select Country</option>
            {countryList.map((country) => <option key={country} value={country}>{country}</option>)}
          </select>
        </div>

        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;
