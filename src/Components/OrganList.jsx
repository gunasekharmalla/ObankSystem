import React, { useState } from 'react';
import './OrganList.css';

const OrganList = () => {
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedOrgan, setSelectedOrgan] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const hospitals = [
    'Apollo Hospitals',
    'AIIMS Delhi',
    'Fortis Healthcare',
    'Max Hospital',
    'Care Hospitals',
    'Global Hospitals',
    'KIMS Hospitals',
    'Sunshine Hospitals',
    'Yashoda Hospitals',
    'Manipal Hospitals'
  ];

  const organs = [
    'Heart',
    'Liver',
    'Kidney',
    'Lungs',
    'Pancreas',
    'Intestine',
    'Eyes',
    'Skin',
    'Bone Marrow'
  ];

  const bloodGroups = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="organ-form-container">
      <h2>Organ Request Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hospital-select">Select Hospital:</label>
          <select
            id="hospital-select"
            value={selectedHospital}
            onChange={(e) => setSelectedHospital(e.target.value)}
            required
          >
            <option value="">-- Choose a hospital --</option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital}>{hospital}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="1"
            max="120"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="organ-select">Select Organ:</label>
          <select
            id="organ-select"
            value={selectedOrgan}
            onChange={(e) => setSelectedOrgan(e.target.value)}
            required
          >
            <option value="">-- Choose an organ --</option>
            {organs.map((organ, index) => (
              <option key={index} value={organ}>{organ}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="blood-type">Blood Type:</label>
          <select
            id="blood-type"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          >
            <option value="">-- Choose a blood type --</option>
            {bloodGroups.map((group, index) => (
              <option key={index} value={group}>{group}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">-- Choose gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>

      {submitted && (
        <div className="submitted-summary">
          <h3>Submitted Details:</h3>
          <p>🏥 Hospital: {selectedHospital}</p>
          <p>🎂 Age: {age}</p>
          <p>🫀 Organ: {selectedOrgan}</p>
          <p>🩸 Blood Type: {bloodType}</p>
          <p>🚻 Gender: {gender}</p>
        </div>
      )}
    </div>
  );
};

export default OrganList;
