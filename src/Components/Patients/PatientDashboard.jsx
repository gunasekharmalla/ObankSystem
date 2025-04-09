{/*}
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css'; // Import the CSS file

const PatientDashboard = () => {
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('patientName');
    if (name) {
      setPatientName(name);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      
      <nav className="navbar">
        <h1>ObankSystem</h1>
        <ul>
          <li>
            <Link to="/patient-profile">Profile</Link>
          </li>
          <li>
            <Link to="/organ-donate">Donate</Link>
          </li>
          <li>
            <Link to="/organ-request">Request</Link>
          </li>
          <li>
            <Link to="/patient-health">Health Records</Link>
          </li>
          <li>
            <Link to="/ai-chat">AI Assistant</Link>
          </li>
          <li>
            <Link to="/logout" className="logout">Logout</Link>
          </li>
        </ul>
      </nav>

      
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome, {patientName}</h2>
        <p className="text-lg text-gray-600">
          This is your personal dashboard. You can view your profile, request organs, track health records, and interact with our AI assistant.
        </p>
      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-200">
        <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
        <p className="text-gray-600">Get medicine recommendations, queries & support.</p>
        <Link to="/ai-chat" className="text-blue-500 mt-2 inline-block hover:underline">
          Chat
        </Link>
      </div>

      
      <footer className="text-center text-sm text-gray-500 mt-12 py-4">
        &copy; {new Date().getFullYear()} ObankSystem — All rights reserved.
      </footer>
    </div>
  );
};

export default PatientDashboard;
*/}


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css'; // Import the CSS file
import Donate from './Donate'; // Import the Donate component
import Request from './Request'; // Import the Request component

const PatientDashboard = () => {
  const [patientName, setPatientName] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard'); // State to track the active section

  useEffect(() => {
    const name = localStorage.getItem('patientName');
    if (name) {
      setPatientName(name);
    }
  }, []);

  // Function to render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'donate':
        return <Donate />; // Render the Donate form
        case 'request':
        return <Request />; // Render the Request form
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
            <button onClick={() => setActiveSection('dashboard')}>Profile</button>
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
            <Link to="/logout" className="logout">Logout</Link>
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