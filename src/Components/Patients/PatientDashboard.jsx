
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PatientDashboard.css'; // Import the CSS file
import Donate from './Donate'; // Import the Donate component
import Request from './Request'; // Import the Request component
import HealthRecords from './HealthRecords'; // Import the HealthRecords component
import PatientProfile from './PatientProfile';
import Logout from '../Doctors/Logout';

const PatientDashboard = () => {
  const [patientName, setPatientName] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard'); // State to track the active section
  const navigate = useNavigate(); // Initialize useNavigate
  
  useEffect(() => {
    const name = localStorage.getItem('patientName');
    if (name) {
      setPatientName(name);
    }
  }, []);

  const handleLogout = () => {
    // Clear any stored data (optional)
    localStorage.removeItem('doctorName');
    // Navigate to the HomePage
    navigate('/');
};

  // Function to render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'donate':
        return <Donate />; // Render the Donate form
        case 'request':
        return <Request />; // Render the Request form
      case 'health':
        return <HealthRecords />; // Render the Health Records component
      case 'profile':
        return <PatientProfile />; // Render the Patient Profile component
      default:
        return (
          <div>
            <h2 className="text-3xl font-semibold mb-4">Welcome, {patientName}</h2>
            <p className="text-lg text-gray-600">
              This is your personal dashboard. You can view your profile, request organs, track health records, and interact with our AI assistant.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="navbar">
        <h1>ObankSystem</h1>
        <ul>
          <li>
            <button onClick={() => setActiveSection('profile')}>Profile</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('donate')}>Donate</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('request')}>Request</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('health')}>Health Records</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('ai')}>AI Assistant</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
          
        </ul>
      </nav>

      {/* Content Section */}
      <div className="p-8">
        {renderContent()}
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-12 py-4">
        &copy; {new Date().getFullYear()} ObankSystem — All rights reserved.
      </footer>
    </div>
  );
};

export default PatientDashboard;