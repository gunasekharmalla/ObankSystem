import React, { useState } from "react";
import '../Doctors/Profile.css'

const PatientProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("John Doe");
  const [notes, setNotes] = useState("Allergic to penicillin.");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
  });

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleToggle = (type) => {
    setNotifications({ ...notifications, [type]: !notifications[type] });
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Patient Profile Settings</h2>

      <div className="section">
        <div className="profile-pic-section">
          <img
            src={profilePic || "/default-avatar.png"}
            alt="Profile"
            className="profile-pic"
          />
          <label className="upload-btn">
            Update Picture
            <input type="file" onChange={handlePicChange} hidden />
          </label>
        </div>

        <div className="info-fields">
          <label>
            Full Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Medical Notes:
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g. allergies, ongoing treatments..."
            ></textarea>
          </label>
        </div>
      </div>

      <div className="section">
        <h3>Update Password</h3>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="save-btn">Change Password</button>
      </div>

      <div className="section">
        <h3>Notification Preferences</h3>
        <div className="notification-toggle">
          <label>Email Reminders</label>
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => handleToggle("email")}
          />
        </div>
        <div className="notification-toggle">
          <label>SMS Alerts</label>
          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => handleToggle("sms")}
          />
        </div>
        <div className="notification-toggle">
          <label>Push Notifications</label>
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={() => handleToggle("push")}
          />
        </div>
      </div>

      <button className="save-btn">Save All Changes</button>
    </div>
  );
};

export default PatientProfile;
