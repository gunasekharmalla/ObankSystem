import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Doctorlogin.css';

const Doctorlogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hospital: '',
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');

  const navigate = useNavigate();

  const hospitals = ['Apollo', 'Fortis', 'AIIMS', 'Max', 'Care'];

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.hospital) {
      newErrors.hospital = 'Please select a hospital';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/doctors/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming backend returns the doctor's name
        localStorage.setItem('doctorName', data.doctorName || 'Doctor');
        alert('Login successful!');
        navigate('/doctor-dashboard');
      } else {
        setServerError(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setServerError('An error occurred. Please try again later.');
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setResetError('');
    setResetSuccess('');

    if (!resetEmail) {
      setResetError('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(resetEmail)) {
      setResetError('Invalid email format');
    } else {
      // Simulate password reset request
      console.log('Reset password email sent to:', resetEmail);
      setResetSuccess('Password reset link sent to your email');
    }
  };

  return (
    <div>
      <h2>Doctor Login</h2>

      {showForgotPassword ? (
        <form onSubmit={handleResetSubmit}>
          <div>
            <label>Enter your email to reset password:</label><br />
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            {resetError && <p style={{ color: 'red' }}>{resetError}</p>}
            {resetSuccess && <p style={{ color: 'green' }}>{resetSuccess}</p>}
          </div>
          <button type="submit">Send Reset Link</button>
          <p>
            <button type="button" onClick={() => setShowForgotPassword(false)}>
              Back to Login
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          <div>
            <label>Hospital:</label><br />
            <select
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
            >
              <option value="">Select Hospital</option>
              {hospitals.map(hospital => (
                <option key={hospital} value={hospital}>
                  {hospital}
                </option>
              ))}
            </select>
            {errors.hospital && <p style={{ color: 'red' }}>{errors.hospital}</p>}
          </div>

          {serverError && <p style={{ color: 'red' }}>{serverError}</p>}

          <button type="submit">Login</button>

          <p>
            <button type="button" onClick={() => setShowForgotPassword(true)}>
              Forgot Password?
            </button>
          </p>
          <br />
          <p>
            Don’t have an account? <Link to="/doctorregister">Register here</Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Doctorlogin;
