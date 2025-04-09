import React, { useState } from "react";
import "./Apointments.css";

const Appointments = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const appointmentsData = {
    upcoming: [
      { id: 1, patient: "John Doe", date: "2025-04-10", time: "10:30 AM" },
      { id: 2, patient: "Jane Smith", date: "2025-04-11", time: "11:00 AM" },
    ],
    past: [
      { id: 3, patient: "Alice Brown", date: "2025-04-05", time: "2:00 PM" },
    ],
    pending: [
      { id: 4, patient: "Charlie Ray", date: "2025-04-12", time: "1:30 PM" },
    ],
  };

  const renderAppointments = () => {
    const selectedAppointments = appointmentsData[selectedTab];
    if (!selectedAppointments.length)
      return <p className="no-appointments">No {selectedTab} appointments.</p>;

    return selectedAppointments.map((app) => (
      <div key={app.id} className="appointment-card fade-in">
        <div className="details">
          <h3>{app.patient}</h3>
          <p>
            {app.date} at {app.time}
          </p>
        </div>
        <button className="view-button">View</button>
      </div>
    ));
  };

  return (
    <div className="appointments-container">
      <h2 className="heading">Appointments</h2>

      <div className="tabs">
        {["upcoming", "past", "pending"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="appointments-list">{renderAppointments()}</div>
    </div>
  );
};

export default Appointments;
