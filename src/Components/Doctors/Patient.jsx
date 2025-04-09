import React, { useState } from "react";
import "./patient.css";

const dummyPatients = [
  { id: 1, name: "John Doe", age: 32, gender: "Male", condition: "Fever" },
  { id: 2, name: "Jane Smith", age: 28, gender: "Female", condition: "Diabetes" },
  { id: 3, name: "Alice Brown", age: 45, gender: "Female", condition: "Asthma" },
  { id: 4, name: "Charlie Ray", age: 52, gender: "Male", condition: "Hypertension" },
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = dummyPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patients-container">
      <h2 className="patients-heading">Patient Records</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by patient name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="patient-list">
        {filteredPatients.length ? (
          filteredPatients.map((patient) => (
            <div key={patient.id} className="patient-card slide-in">
              <div className="patient-info">
                <h3>{patient.name}</h3>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
                <p>Condition: {patient.condition}</p>
              </div>
              <button className="view-record">View Record</button>
            </div>
          ))
        ) : (
          <p className="no-results">No patients found.</p>
        )}
      </div>
    </div>
  );
};

export default Patients;
