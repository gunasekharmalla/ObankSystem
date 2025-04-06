import React, { useEffect, useState } from 'react';

const DoctorDashboard = () => 
    { 
        const [doctorName, setDoctorName] = useState('');
        

        useEffect(() => { // Fetch doctor name from localStorage (or other auth state) 
         const name = localStorage.getItem('doctorName') || 'Doctor'; setDoctorName(name); }, []);

    return ( 
            <div> 
                <h2>Hello Dr. {doctorName}</h2> 
                <p>Welcome to your dashboard.</p>
                <ul>
                    <li>🔍 View Patient Requests</li>
                    <li>📝 Manage Appointments</li>
                    <li>📤 Send Organ Request</li>
                    <li>🧾 View Reports</li>
                    <li>⚙️ Profile Settings</li>
                </ul>
            </div>
        );   
    };
     

export default DoctorDashboard;