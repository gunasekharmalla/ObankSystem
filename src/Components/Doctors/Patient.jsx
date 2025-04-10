
{/*}
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
*/}

import React, { useState } from "react"; import "./patient.css";

const dummyPatients = [ { id: 1, name: "John Doe", age: 32, gender: "Male", condition: "Fever" }, { id: 2, name: "Jane Smith", age: 28, gender: "Female", condition: "Diabetes" }, { id: 3, name: "Alice Brown", age: 45, gender: "Female", condition: "Asthma" }, { id: 4, name: "Charlie Ray", age: 52, gender: "Male", condition: "Hypertension" }, { id: 5, name: "Linda White", age: 62, gender: "Female", condition: "Fever" }, { id: 6, name: "Tom Gray", age: 22, gender: "Male", condition: "Diabetes" }, ];

const Patients = () => { const [searchTerm, setSearchTerm] = useState(""); const [genderFilter, setGenderFilter] = useState(""); const [ageFilter, setAgeFilter] = useState(""); const [conditionFilter, setConditionFilter] = useState(""); const [visibleCount, setVisibleCount] = useState(2);

const applyFilters = (patient) => { const nameMatch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()); const genderMatch = genderFilter ? patient.gender === genderFilter : true; const conditionMatch = conditionFilter ? patient.condition === conditionFilter : true; let ageMatch = true;

if (ageFilter === "under30") ageMatch = patient.age < 30;
else if (ageFilter === "30to50") ageMatch = patient.age >= 30 && patient.age <= 50;
else if (ageFilter === "over50") ageMatch = patient.age > 50;

return nameMatch && genderMatch && conditionMatch && ageMatch;
};

const filteredPatients = dummyPatients.filter(applyFilters);

const handleLoadMore = () => setVisibleCount(prev => prev + 2);

return ( <div className="patients-container"> <h2 className="patients-heading">Patient Records</h2>

  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by patient name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <div className="filter-dropdowns">
    <select onChange={(e) => setGenderFilter(e.target.value)}>
      <option value="">Filter by Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>

    <select onChange={(e) => setAgeFilter(e.target.value)}>
      <option value="">Filter by Age</option>
      <option value="under30">Under 30</option>
      <option value="30to50">30 to 50</option>
      <option value="over50">Over 50</option>
    </select>

    <select onChange={(e) => setConditionFilter(e.target.value)}>
      <option value="">Filter by Condition</option>
      <option>Fever</option>
      <option>Diabetes</option>
      <option>Asthma</option>
      <option>Hypertension</option>
    </select>
  </div>

  <div className="patient-list">
    {filteredPatients.slice(0, visibleCount).map((patient) => (
      <div key={patient.id} className="patient-card slide-in">
        <div className="patient-info">
          <h3>{patient.name}</h3>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
          <p>Condition: {patient.condition}</p>
        </div>
        <button className="view-record">View Record</button>
      </div>
    ))}
    {filteredPatients.length === 0 && <p className="no-results">No patients found.</p>}
  </div>

  {visibleCount < filteredPatients.length && (
    <div className="load-more-container">
      <button className="load-more" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  )}
</div>
); };

export default Patients;
