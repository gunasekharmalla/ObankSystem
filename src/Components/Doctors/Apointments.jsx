{/*}
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

*/}

import React, { useState } from "react"; import "./Apointments.css";

const Apointments = () => { const [selectedTab, setSelectedTab] = useState("upcoming"); const [searchTerm, setSearchTerm] = useState("");

const appointmentsData = { upcoming: [ { id: 1, patient: "John Doe", date: "2025-04-10", time: "10:30 AM", status: "approved" }, { id: 2, patient: "Jane Smith", date: "2025-04-11", time: "11:00 AM", status: "pending" }, ], past: [ { id: 3, patient: "Alice Brown", date: "2025-04-05", time: "2:00 PM", status: "approved" }, ], pending: [ { id: 4, patient: "Charlie Ray", date: "2025-04-12", time: "1:30 PM", status: "rejected" }, ], };

const getStatusColor = (status) => { switch (status) { case "approved": return "status approved"; case "rejected": return "status rejected"; case "pending": default: return "status pending"; } };

const renderAppointments = () => { const selectedAppointments = appointmentsData[selectedTab].filter((app) => app.patient.toLowerCase().includes(searchTerm.toLowerCase()) );

if (!selectedAppointments.length)
  return <p className="no-appointments">No {selectedTab} appointments.</p>;

return selectedAppointments.map((app) => (
  <div key={app.id} className="appointment-card fade-in">
    <div className="details">
      <h3>{app.patient}</h3>
      <p>{app.date} at {app.time}</p>
    </div>
    <div className="status-wrapper">
      <span className={getStatusColor(app.status)}>{app.status}</span>
      <button className="view-button">View</button>
    </div>
  </div>
));
};

return ( <div className="appointments-container"> <h2 className="heading">Appointments</h2>

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

  <div className="search-bar">
    <input
      type="text"
      placeholder="Search patient..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <div className="appointments-list">{renderAppointments()}</div>
</div>
); };

export default Apointments;