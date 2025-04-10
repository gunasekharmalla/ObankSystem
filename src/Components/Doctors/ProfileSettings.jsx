import React, { useState } from "react";
import "./profile.css";

const ProfileSettings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("Dr. John Doe");
  const [bio, setBio] = useState("Cardiologist, 10+ years experience.");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
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
      <h2 className="profile-header">Profile Settings</h2>

      <div className="section">
        <div className="profile-pic-section">
          <img
            src={profilePic || "/default-avatar.png"}
            alt="Profile"
            className="profile-pic"
          />
          <label className="upload-btn">
            Change Picture
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
            Bio:
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </label>
        </div>
      </div>

      <div className="section">
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="save-btn">Update Password</button>
      </div>

      <div className="section">
        <h3>Notification Preferences</h3>
        <div className="notification-toggle">
          <label>Email Notifications</label>
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

      <button className="save-btn">Save Changes</button>
    </div>
  );
};

export default ProfileSettings;
