import React, { useEffect, useState } from 'react';
import './DoctorDashboard.css';
import Appointments from './Apointments'; // Import the Appointments component
import AddPrescription from './Prescription'; // Import the Prescription component
import Patient from './Patient'; // Import the Patient component

const DoctorDashboard = () => { 
    const [doctorName, setDoctorName] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard'); // State to track the active section
    
    useEffect(() => { 
        // Fetch doctor name from localStorage (or other auth state) 
        const name = localStorage.getItem('doctorName') || 'Doctor'; 
        setDoctorName(name); 
    }, []);

    return ( 
        <div>
            {/* Navigation Bar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ccc' }}>
                <h3>Doctor Dashboard</h3>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 }}>
                    <li><button onClick={() => setActiveSection('appointments')}>Appointments</button></li>
                    <li><button onClick={() => setActiveSection('patients')}>Patients</button></li>
                    <li><button onClick={() => setActiveSection('add-prescription')}>Add Prescription</button></li>
                    <li><button onClick={() => setActiveSection('medical-records')}>Medical Records</button></li>
                    <li><button onClick={() => setActiveSection('settings')}>Settings / Profile</button></li>
                    <li><button onClick={() => setActiveSection('logout')}>Logout</button></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div style={{ padding: '20px' }}>
                {activeSection === 'dashboard' && (
                    <>
                        <h2>Hello Dr. {doctorName}</h2> 
                        <p>Welcome to your dashboard.</p>
                        <ul>
                            <li>🔍 View Patient Requests</li>
                            <li>📝 Manage Appointments</li>
                            <li>📤 Send Organ Request</li>
                            <li>🧾 View Reports</li>
                            <li>⚙ Profile Settings</li>
                        </ul>
                    </>
                )}

                {activeSection === 'appointments' && <Appointments />} {/* Render Appointments component */}
                {activeSection === 'patients' && <Patient />} {/* Render Patient component */}
                {activeSection === 'add-prescription' && <AddPrescription />} {/* Render Prescription component */}
                {/* Add similar conditional rendering for other sections */}
            </div>
        </div>
    );   
};

export default DoctorDashboard;