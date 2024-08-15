import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/appointments")
      .then(response => setAppointments(response.data))
      .catch(error => console.error("There was an error fetching the appointments!", error));
  }, []);

  const handleAccept = (id) => {
    axios.post(`http://localhost:3001/accept-appointment/${id}`)
      .then(response => {
        if (response.data === "success") {
          setAppointments(appointments.map(app => app._id === id ? { ...app, status: "Accepted" } : app));
        }
      })
      .catch(error => console.error("There was an error accepting the appointment!", error));
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <div className="appointments-list">
        {appointments.map(app => (
          <div key={app._id} className="appointment-card">
            <h2>{app.doctorName}</h2>
            <p>User: {app.userEmail}</p>
            <p>Date: {app.date}</p>
            <p>Status: {app.status}</p>
            {app.status !== "Accepted" && (
              <button onClick={() => handleAccept(app._id)}>Accept Appointment</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
