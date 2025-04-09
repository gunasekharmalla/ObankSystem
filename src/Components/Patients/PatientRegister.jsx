
{/*}
import React, { useState } from 'react';

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
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Optional: real-time validation
    if (name === 'confirmPassword') {
      if (value !== formData.password) {
        setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      } else {
        const newErrors = { ...errors };
        delete newErrors.confirmPassword;
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    // TODO: Validate doctor ID via API before submission
    console.log('Patient Registration Submitted:', formData);
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor ID:</label>
          <input
            type="text"
            name="doctorId"
            required
            value={formData.doctorId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
          )}
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
          <label>Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="A+">A+</option>
            <option value="A−">A−</option>
            <option value="B+">B+</option>
            <option value="B−">B−</option>
            <option value="O+">O+</option>
            <option value="O−">O−</option>
            <option value="AB+">AB+</option>
            <option value="AB−">AB−</option>
          </select>
        </div>

        <div>
          <label>Organ Needed:</label>
          <input
            type="text"
            name="organNeeded"
            required
            value={formData.organNeeded}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;

*/}

import React, { useState } from 'react';

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Optional: real-time validation
    if (name === 'confirmPassword') {
      if (value !== formData.password) {
        setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      } else {
        const newErrors = { ...errors };
        delete newErrors.confirmPassword;
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    // TODO: Validate doctor ID via API before submission
    console.log('Patient Registration Submitted:', formData);
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor ID:</label>
          <input
            type="text"
            name="doctorId"
            required
            value={formData.doctorId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
          )}
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
          <label>Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="A+">A+</option>
            <option value="A−">A−</option>
            <option value="B+">B+</option>
            <option value="B−">B−</option>
            <option value="O+">O+</option>
            <option value="O−">O−</option>
            <option value="AB+">AB+</option>
            <option value="AB−">AB−</option>
          </select>
        </div>

        <div>
          <label>Organ Needed:</label>
          <input
            type="text"
            name="organNeeded"
            required
            value={formData.organNeeded}
            onChange={handleChange}
          />
        </div>

        {/* New Fields */}
        <div>
          <label>Height (in cm):</label>
          <input
            type="number"
            name="height"
            required
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Weight (in kg):</label>
          <input
            type="number"
            name="weight"
            required
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Nationality:</label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">--Select Nationality--</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
            <option value="Australian">Australian</option>
            <option value="Chaina">Australian</option>
            <option value="Japanese">Japanese</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Italian">Italian</option>
            <option value="Spanish">Spanish</option>
            <option value="Brazilian">Brazilian</option>
            <option value="Mexican">Mexican</option>
            <option value="South African">South African</option>
            <option value="Russian">Russian</option>
            <option value="South Korean">South Korean</option>
            <option value="New Zealander">New Zealander</option>
            <option value="Saudi Arabian">Saudi Arabian</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;