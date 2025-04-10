{/*}
import React from "react";
import "./medicalrecords.css";

const dummyRecords = [
  {
    id: 1,
    patientName: "John Doe",
    reportTitle: "Blood Test Report",
    date: "2025-04-01",
    fileUrl: "#",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    reportTitle: "X-Ray Chest",
    date: "2025-03-27",
    fileUrl: "#",
  },
  {
    id: 3,
    patientName: "Alice Brown",
    reportTitle: "MRI Brain",
    date: "2025-03-22",
    fileUrl: "#",
  },
];

const MedicalRecords = () => {
  return (
    <div className="records-container">
      <h2 className="records-title">Medical Records</h2>
      <div className="records-list">
        {dummyRecords.map((record) => (
          <div className="record-card fade-slide" key={record.id}>
            <div className="record-details">
              <h3>{record.reportTitle}</h3>
              <p><strong>Patient:</strong> {record.patientName}</p>
              <p><strong>Date:</strong> {record.date}</p>
            </div>
            <a className="download-btn" href={record.fileUrl} download>
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecords;
*/}

import React, { useState } from "react";
import "./medicalrecords.css";

const initialRecords = [
  {
    id: 1,
    patientName: "John Doe",
    reportTitle: "Blood Test Report",
    date: "2025-04-01",
    fileUrl: "#",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    reportTitle: "X-Ray Chest",
    date: "2025-03-27",
    fileUrl: "#",
  },
  {
    id: 3,
    patientName: "Alice Brown",
    reportTitle: "MRI Brain",
    date: "2025-03-22",
    fileUrl: "#",
  },
];

const MedicalRecords = () => {
  const [records, setRecords] = useState(initialRecords);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newRecord = {
      id: records.length + 1,
      patientName: "Uploaded Patient",
      reportTitle: file.name,
      date: new Date().toISOString().slice(0, 10),
      fileUrl: "#",
    };

    setRecords([newRecord, ...records]);
  };

  const filtered = records
    .filter((r) => r.patientName.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  return (
    <div className="records-container">
      <h2 className="records-title">Medical Records</h2>

      <div className="records-controls">
        <input
          type="text"
          placeholder="Search by patient name..."
          onChange={handleSearch}
          className="search-input"
        />
        <select onChange={handleSort} value={sortBy} className="sort-select">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        <label className="upload-label">
          Upload File
          <input type="file" onChange={handleFileUpload} hidden />
        </label>
      </div>

      <div className="records-list">
        {filtered.map((record) => (
          <div className="record-card fade-slide" key={record.id}>
            <div className="record-details">
              <h3>{record.reportTitle}</h3>
              <p><strong>Patient:</strong> {record.patientName}</p>
              <p><strong>Date:</strong> {record.date}</p>
            </div>
            <a className="download-btn" href={record.fileUrl} download>
              Download
            </a>
          </div>
        ))}
        {filtered.length === 0 && <p className="no-results">No records found</p>}
      </div>
    </div>
  );
};

export default MedicalRecords;
