import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Patientlogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/patient/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('patientName', data.patient?.name || 'Patient');
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/patient-dashboard');
        }, 1500);
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError('Something went wrong during login. Please try again later.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Patient Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" required value={formData.password} onChange={handleChange} />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <button type="submit">Login</button><br />
        <p>
        Forgot your password? <Link to="/patient-forgot-password">Reset here</Link>
      </p><br/>
      <p>
        Don’t have an account? <Link to="/PatientRegister">Register here</Link>
      </p>
      <br />
      </form>

      
    </div>
  );
};

export default Patientlogin;
