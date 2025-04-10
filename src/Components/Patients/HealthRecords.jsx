// src/components/HealthRecords.jsx
import React, { useState } from 'react';
import './HealthRecords.css';

const mockRecords = [
  { id: 1, date: '2024-12-01', title: 'General Checkup', description: 'Normal results' },
  { id: 2, date: '2024-11-15', title: 'Blood Test', description: 'Low hemoglobin level' },
  { id: 3, date: '2025-01-10', title: 'X-Ray', description: 'No fractures' },
  { id: 4, date: '2023-10-22', title: 'Surgery Follow-up', description: 'Recovery normal' },
];

const HealthRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('new');

  const filteredRecords = mockRecords
    .filter((record) =>
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'new'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className="records-container">
      <h2>Health History Records</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>

      <div className="records-list">
        {filteredRecords.map((record) => (
          <div key={record.id} className="record-card">
            <h3>{record.title}</h3>
            <p className="date">{record.date}</p>
            <p>{record.description}</p>
          </div>
        ))}
        {filteredRecords.length === 0 && <p>No records found.</p>}
      </div>
    </div>
  );
};

export default HealthRecords;
