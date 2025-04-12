import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Doctorregister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    specialization: '',
    experience: '',
    hospital: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // Validation functions
  const validate = (name, value) => {
    let error = '';
    if (!value) {
      error = 'This field is required';
    } else {
      if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
        error = 'Invalid email format';
      }
      if (name === 'phone' && !/^\d{10}$/.test(value)) {
        error = 'Phone must be 10 digits';
      }
      if (name === 'confirmPassword' && value !== formData.password) {
        error = 'Passwords do not match';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Live validation
    setErrors(prev => ({
      ...prev,
      [name]: validate(name, value)
    }));

    // Revalidate confirmPassword if password changes
    if (name === 'password') {
      setErrors(prev => ({
        ...prev,
        confirmPassword: validate('confirmPassword', formData.confirmPassword)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const err = validate(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/doctors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Doctor Registration Successful!');
        navigate('/doctor-dashboard');
      } else {
        alert(`Registration failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred while registering. Please try again.');
    }
  };

  return (
    <div>
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        {[
          { label: 'Full Name', name: 'fullName', type: 'text' },
          { label: 'Date of Birth', name: 'dob', type: 'date' },
          {
            label: 'Gender',
            name: 'gender',
            type: 'select',
            options: ['', 'Male', 'Female']
          },
          { label: 'Phone', name: 'phone', type: 'tel' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Create Password', name: 'password', type: 'password' },
          { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
          { label: 'Address', name: 'address', type: 'textarea' },
          { label: 'Specialization', name: 'specialization', type: 'text' },
          { label: 'Experience (in years)', name: 'experience', type: 'number' },
          {
            label: 'Hospital',
            name: 'hospital',
            type: 'select',
            options: ['', 'Apollo', 'Fortis', 'AIIMS', 'Max', 'Care']
          },
        ].map(({ label, name, type, options }) => (
          <div key={name} style={{ marginBottom: '12px' }}>
            <label>{label}:</label><br />
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
              />
            ) : type === 'select' ? (
              <select name={name} value={formData[name]} onChange={handleChange}>
                {options.map(opt => (
                  <option key={opt} value={opt}>{opt || 'Select an option'}</option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
              />
            )}
            {errors[name] && <p style={{ color: 'red', margin: 0 }}>{errors[name]}</p>}
          </div>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Doctorregister;
