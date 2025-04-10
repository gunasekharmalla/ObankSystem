{/*}

import React, { useState } from "react";

const Patientlogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    patientID: "",
    gender: "",
    email: "",
    password: "",
    bloodGroup: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required.";
    if (!formData.patientID) errs.patientID = "Patient ID is required.";
    if (!formData.gender) errs.gender = "Please select gender.";
    if (!formData.email.includes("@")) errs.email = "Enter a valid email.";
    if (formData.password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    if (!formData.bloodGroup) errs.bloodGroup = "Please select blood group.";
    return errs;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Patient logged in successfully!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2>Patient Login</h2>

      <input  name="name" placeholder="Full Name" onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        name="patientID"
        placeholder="Patient ID"
        onChange={handleChange}
      />
      {errors.patientID && <p className="error">{errors.patientID}</p>}

      <select style={{padding:'10px'}} name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && <p className="error">{errors.gender}</p>}

      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <input 
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}
        <br/>
      <select style={{padding:'10px',
                      
      }} name="bloodGroup" onChange={handleChange}>
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
      {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}
        <br/>
      <button style={{padding:'10px',
                        backgroundColor:'blue',
                        color:'white',
                        borderRadius:'5px',
                        border:'none',
                        cursor:'pointer',
                        fontSize:'16px',
                        width:'20%',
      }} onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Patientlogin;

*

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Patientlogin = () => {
  const navigate = useNavigate(); 
  const [credentials, setCredentials] = useState({ patientId: '', password: '', otp: '' });
  const [formData, setFormData] = useState({
    email: '',
    patientId: '',
    password: '',
    otp: '',
  });

  const [showOtp, setShowOtp] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Send data to backend for authentication
    console.log('Patient Login Data:', formData);
    // Simulate successful login (replace with actual backend validation later)
    if (credentials.patientId && credentials.password) {
      // Navigate to patient dashboard
      const patientName = "John Doe"; 
      localStorage.setItem("patientName", patientName); 
      navigate("/patient-dashboard");
      //navigate('/patient-dashboard');
    } else {
      alert('Please enter valid credentials');
    }
    // Example logic for OTP trigger
    if (!showOtp) {
      setShowOtp(true);
      // Simulate sending OTP
      console.log('OTP sent to registered email/phone');
    } else {
      // Handle OTP submission
      console.log('Verifying OTP and Logging in...');
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>

        <div>
          <label>Patient ID:</label>
          <input type="text" name="patientId" required onChange={handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" required onChange={handleChange} />
        </div>
        <div>
        <label>OTP:</label>
        <input type="text" name="otp" placeholder="Enter OTP" required onChange={handleChange} />
        </div>

        {showOtp && (
          <div>
            <label>OTP:</label>
            <input type="text" name="otp" required onChange={handleChange} />
          </div>
        )}

        <button type="submit">{showOtp ? 'Verify OTP & Login' : 'Send OTP'}</button>
      </form>

      <p>
        Forgot your password?{' '}
        <Link to="/patient-forgot-password">Reset here</Link>
      </p>
      <p>
        Don’t have an account? <Link to="/Patientregister">Register here</Link>
      </p>
    </div>
  );
};

export default Patientlogin;

*/} 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Patientlogin = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Send data to backend for authentication
    console.log('Patient Login Data:', formData);
    // Simulate successful login (replace with actual backend validation later)
    if (formData.email && formData.password) {
      // Navigate to patient dashboard
      const patientName = "John Doe"; 
      localStorage.setItem("patientName", patientName); 
      navigate("/patient-dashboard");
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" required onChange={handleChange} />
        </div>

        <button type="submit">Login</button><br/>
        <br/>
        <p>
        Forgot your password?{' '}
        <Link to="/patient-forgot-password">Reset</Link>
      </p>
      <br/>
      <p>
        Don’t have an account? <Link to="/PatientRegister">Register</Link>
      </p>
      </form>

    </div>
  );
};

export default Patientlogin;