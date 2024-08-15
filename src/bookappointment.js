import React from "react";
import { Link } from "react-router-dom";
import "./BookAppointment.css";

function BookAppointment() {
  // Updated list of doctors with consultation times and added two more doctors
  const doctors = [
    { id: 1, name: "Dr. Arun Kumar", specialty: "Cardiologist", consultationTime: "9:00 AM - 5:00 PM" },
    { id: 2, name: "Dr. Priya Sharma", specialty: "Dermatologist", consultationTime: "10:00 AM - 6:00 PM" },
    { id: 3, name: "Dr. Ramesh Patel", specialty: "Pediatrician", consultationTime: "8:00 AM - 4:00 PM" },
    { id: 4, name: "Dr. Anjali Rao", specialty: "Orthopedic Surgeon", consultationTime: "11:00 AM - 7:00 PM" },
    { id: 5, name: "Dr. Sunil Mehta", specialty: "Neurologist", consultationTime: "9:30 AM - 5:30 PM" },
    { id: 6, name: "Dr. Neha Singh", specialty: "Gastroenterologist", consultationTime: "10:00 AM - 6:00 PM" },
    { id: 7, name: "Dr. Rajesh Kumar", specialty: "Endocrinologist", consultationTime: "8:00 AM - 4:00 PM" },
    { id: 8, name: "Dr. Sita Devi", specialty: "Pulmonologist", consultationTime: "11:00 AM - 7:00 PM" },
    { id: 9, name: "Dr. Vinay Joshi", specialty: "Oncologist", consultationTime: "9:00 AM - 5:00 PM" },
    { id: 10, name: "Dr. Aarti Verma", specialty: "Psychiatrist", consultationTime: "10:00 AM - 6:00 PM" },
    { id: 11, name: "Dr. Sanjay Agarwal", specialty: "Urologist", consultationTime: "8:00 AM - 4:00 PM" },
    { id: 12, name: "Dr. Sathya Mohanasundaram", specialty: "Dentist", consultationTime: "9:00 AM - 5:00 PM" }
  ];

  return (
    <div className="appointment-page">
      <h1 style={{ color: 'white' }}>Book an Appointment</h1>

      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
            <p>Consultation Time: {doctor.consultationTime}</p>
            <Link to={`/doctor/${doctor.id}`} className="book-button">
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
      <div className="full-checkup-link">
        <Link to="/full-body-checkup" className="checkup-button">
          Book Full Body Checkup Appointment
        </Link>
      </div>
    </div>
  );
}

export default BookAppointment;
