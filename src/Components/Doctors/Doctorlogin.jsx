{/*}
import React, { useState } from "react";

const Doctorlogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    doctorID: "",
    hospital: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required.";
    if (!formData.doctorID) errs.doctorID = "Doctor ID is required.";
    if (!formData.hospital) errs.hospital = "Hospital is required.";
    if (!formData.email.includes("@")) errs.email = "Enter a valid email.";
    if (formData.password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    return errs;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Doctor logged in successfully!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2>Doctor Login</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <input name="doctorID" placeholder="Doctor ID" onChange={handleChange} />
      {errors.doctorID && <p className="error">{errors.doctorID}</p>}

      <input
        name="hospital"
        placeholder="Hospital Name"
        onChange={handleChange}
      />
      {errors.hospital && <p className="error">{errors.hospital}</p>}

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
      <button style={{padding:'10px',
                        backgroundColor:'blue',
                        color:'white',
                        borderRadius:'5px',
                        border:'none',
                        cursor:'pointer',
                        fontSize:'16px',
                        width:'20%',
      }}onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Doctorlogin;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const hospitals = ['Apollo Hospital', 'Fortis Health', 'AIIMS', 'Manipal Hospital', 'Max Healthcare'];

export const Doctorlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospital, setHospital] = useState(hospitals[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Doctor Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <select value={hospital} onChange={(e) => setHospital(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          {hospitals.map((h, i) => <option key={i} value={h}>{h}</option>)}
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
      </form>
      <p className="text-sm mt-4 text-center">Don't have an account? <Link to="/doctorregister" className="text-blue-500 hover:underline">Register here</Link></p>
    </div>
  );
};

export default Doctorlogin;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Doctorlogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hospital: '',
  });

  const [errors, setErrors] = useState({});

  const hospitals = ['Select Hospital', 'Apollo', 'Fortis', 'AIIMS', 'Max', 'Care'];

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

    if (!formData.hospital || formData.hospital === 'Select Hospital') {
      newErrors.hospital = 'Please select a hospital';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Live validation
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Doctor Login Submitted:', formData);
    // Add API call here
  };

  return (
    <div>
      <h2>Doctor Login</h2>
      <form onSubmit={handleSubmit} noValidate>
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
          <label>Hospital:{}</label><br />
          <select name="hospital" value={formData.hospital} onChange={handleChange}>
            {hospitals.map(hospital => (
              <option key={hospital} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>
          {errors.hospital && <p style={{ color: 'red' }}>{errors.hospital}</p>}
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <a href="/doctorregister">Register here</a>
      </p>
    </div>
  );
};

export default Doctorlogin;

*/}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Doctorlogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hospital: '',
  });
  const navigate = useNavigate(); 
  const [credentials, setCredentials] = useState({password: '', email: '', hospital: ''});
  const [errors, setErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');

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
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      // Simulate successful login (replace with actual backend validation later)
      if (credentials.email && credentials.password && credentials.hospital) {
        // Navigate to patient dashboard
        //const patientName = "Charan"; 
        const name = "BLS Charan"; 
        //localStorage.setItem("doctorName", doctorName);
        localStorage.setItem("doctorName", name);
        navigate('/doctor-dashboard');
      } else {
        alert('Please enter valid credentials');
      }
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Doctor Login Submitted:', formData);
    // Add API login logic here
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

          <button type="submit">Login</button>

          <p>
            <button type="button" onClick={() => setShowForgotPassword(true)}>
              Forgot Password?
            </button>
          </p>
        </form>
      )}

      <p>
        Don’t have an account? <a href="/doctorregister">Register here</a>
      </p>
    </div>
  );
};

export default Doctorlogin;