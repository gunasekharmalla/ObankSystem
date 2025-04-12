import React, { useState } from 'react';
import './Request.css'; // Assuming you have a CSS file for styling

const Request = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    dob: '',
    age: '',
    bloodGroup: '',
    address: '',
    height: '',
    weight: '',
    previousDiseases: '',
    organToRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:5000/api/request/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (res.ok) {
        alert('Your organ request has been submitted successfully!');
        setFormData({ /* clear the form */ });
      } else {
        alert('Failed to submit request.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };
  

  return (
    <div className="request-form-container">
      <h2 className="text-2xl font-bold mb-4">Organ Request Form</h2>
      <form onSubmit={handleSubmit} className="request-form">
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">--Select Blood Group--</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Height (in cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Weight (in kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Previous Diseases (if any):</label>
          <textarea
            name="previousDiseases"
            value={formData.previousDiseases}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Organ to Request:</label>
          <select
            name="organToRequest"
            value={formData.organToRequest}
            onChange={handleChange}
            required
          >
            <option value="">--Select Organ--</option>
            <option value="Heart">Heart</option>
            <option value="Eyes">Eyes</option>
            <option value="Kidney">Kidney</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Request;