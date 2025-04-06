{/*
const PatientDashboard = () => 
{ 
    return ( 
            <div className="min-h-screen bg-gray-100 text-gray-800"> 
               
                <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md"> 
                    <h1 className="text-2xl font-bold">ObankSystem</h1> 
                    <ul className="flex gap-6"> 
                        <li> <Link to="/patient-dashboard" className="hover:underline"> Dashboard </Link> </li> 
                        <li> <Link to="/patient-profile" className="hover:underline"> Profile </Link> </li> 
                        <li> <Link to="/organ-request" className="hover:underline"> Request Organ </Link> </li> 
                        <li> <Link to="/logout" className="hover:underline text-red-300"> Logout </Link> </li> 
                    </ul> 
                </nav>
  
        
        <div className="p-8">
            <h2 className="text-3xl font-semibold mb-4">Welcome, Patient</h2>
            <p className="text-lg text-gray-600">
            This is your personal dashboard. You can view your profile, request organs,
            track health records and interact with our AI assistant.
            </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-2">Health Records</h3>
            <p className="text-gray-600">
                View and manage your uploaded health reports.
            </p>
            <Link to="/patient-health" className="text-blue-500 mt-2 inline-block hover:underline">
                Go
            </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-2">Organ Requests</h3>
            <p className="text-gray-600">
                Track and manage your organ donation requests.
            </p>
            <Link to="/organ-request" className="text-blue-500 mt-2 inline-block hover:underline">
                View
            </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
            <p className="text-gray-600">
                Get medicine recommendations, queries & support.
            </p>
            <Link to="/ai-chat" className="text-blue-500 mt-2 inline-block hover:underline">
                Chat
            </Link>
            </div>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-12 py-4">
            &copy; {new Date().getFullYear()} ObankSystem — All rights reserved.
        </footer>
        </div>
)
}

export default PatientDashboard;

*/}

import React from 'react'; 
import { Link } from 'react-router-dom';
import  { useEffect, useState } from 'react';

const PatientDashboard = () => 
{ 
    const [patientName, setPatientName] = useState('');
    useEffect(() => { const name = localStorage.getItem('patientName'); if (name) { setPatientName(name); } }, []);
    return ( 
    <div> 
        {/* Navbar */} 
        <nav> 
            <h1>ObankSystem</h1> 
            <ul> 
                <li> <Link to="/patient-dashboard">Dashboard</Link> </li> 
                <li> <Link to="/patient-profile">Profile</Link> </li> 
                <li> <Link to="/organ-request">Request Organ</Link> </li> 
                <li> <Link to="/logout">Logout</Link> </li> 
                </ul> 
                </nav>
                

  {/* Welcome Section */}
  <div>
    <h2>Welcome, {patientName}</h2>
    <p>This is your personal dashboard. You can view your profile, request organs, track health records, and interact with our AI assistant.</p>
  </div>

  {/* Dashboard Options */}
  <div>
    <div>
      <h3>Health Records</h3>
      <p>View and manage your uploaded health reports.</p>
      <Link to="/patient-health">Go</Link>
    </div>

    <div>
      <h3>Organ Requests</h3>
      <p>Track and manage your organ donation requests.</p>
      <Link to="/organ-request">View</Link>
    </div>

    <div>
      <h3>AI Assistant</h3>
      <p>Get medicine recommendations, queries & support.</p>
      <Link to="/ai-chat">Chat</Link>
    </div>
  </div>

  {/* Footer */}
  <footer>
    <p>&copy; {new Date().getFullYear()} ObankSystem — All rights reserved.</p>
  </footer>
</div>
); };

export default PatientDashboard;
