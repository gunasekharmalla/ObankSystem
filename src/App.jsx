import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import DoctorLogin from "./Components/Doctors/Doctorlogin.jsx";
import DoctorRegister from "./Components/Doctors/Doctorregister.jsx";
import DoctorDashboard from "./Components/Doctors/DoctorDashboard.jsx";
import PatientLogin from "./Components/Patients/Patientlogin.jsx";
import PatientRegister from './Components/Patients/PatientRegister';
import PatientDashboard from './Components/Patients/PatientDashboard';
import Chatbot from "./Components/Chatbot";
import Recommendation from "./Components/Recommendation";
import OrganList from "./Components/OrganList";
import ForgotPassword from './Components/Common/ForgotPassword.jsx';
import RecipientRecommendations from "./Components/Recommendation.jsx";
import Services from "./Components/Services.jsx";
import About from "./Components/About.jsx";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HomePage />
                <div id="services">
                  <Services />
                </div>
                <div id="about">
                  <About />
                </div>
              </>
            } 
          />
          <Route path="/doctorlogin" element={<DoctorLogin />} />
          <Route path="/doctorregister" element={<DoctorRegister />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/patientlogin" element={<PatientLogin />} />
          <Route path="/patientregister" element={<PatientRegister />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/patient-forgot-password" element={<ForgotPassword />} />
          <Route path="/RecipientRecommendations" element={<RecipientRecommendations />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/dashboard"
            element={
              <>
                <OrganList />
                <Recommendation />
                <Chatbot />
              </>
            }
          />
          <Route path="/organlist" element={<OrganList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;