import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./logout.css";

const Logout = () => { 
    const navigate = useNavigate();

useEffect(() => { // Clear tokens/session data localStorage.removeItem("authToken"); localStorage.removeItem("doctorProfile");

// Add optional delay to show animation
setTimeout(() => {
  navigate("/HomePage");
}, 2000);
}, [navigate]);

return ( 
        <div className="logout-wrapper"> 
            <div className="logout-message">Logging out...</div> 
            <div className="loader">
                </div> 
                </div>
        );
         };

export default Logout;