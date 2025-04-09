{/*}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Doctorregister = () => {
    const [formData, setFormData] = useState({
      fullName: '', dob: '', gender: '', phone: '', email: '', password: '', confirmPassword: '',
      address: '', specialization: '', experience: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // handle registration logic
    };
  
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Doctor Registration</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" placeholder="Full Name" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="dob" type="date" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <select name="gender" required onChange={handleChange} className="p-2 rounded border border-gray-300">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input name="phone" placeholder="Phone Number" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="password" type="password" placeholder="Create Password" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="address" placeholder="Address" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="specialization" placeholder="Specialization" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <input name="experience" placeholder="Experience (years)" required onChange={handleChange} className="p-2 rounded border border-gray-300" />
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Register</button>
          </div>
        </form>
      </div>
    );
  };
  
export default Doctorregister;

*/}

import React, { useState } from 'react';
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
  });

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

  const handleSubmit = (e) => {
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

    console.log('Doctor Registered:', formData);
    // Submit form to API here
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
                  <option key={opt} value={opt}>{opt || 'Select Gender'}</option>
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