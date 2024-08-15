/*import React from "react";
import { useParams } from "react-router-dom";
import "./DoctorDetails.css";

function DoctorDetails() {
  const { id } = useParams();

  // Updated list of doctors with consultation times and fees in INR
  const doctors = {
    1: {
      name: "Dr. Arun Kumar",
      specialty: "Cardiologist",
      consultationTime: "9:00 AM - 5:00 PM",
      experience: "15 years",
      bio: "Specializes in heart health and cardiovascular diseases.",
      fee: 15000, // INR
    },
    2: {
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      consultationTime: "10:00 AM - 6:00 PM",
      experience: "10 years",
      bio: "Expert in skin care and dermatological treatments.",
      fee: 12000, // INR
    },
    3: {
      name: "Dr. Ramesh Patel",
      specialty: "Pediatrician",
      consultationTime: "8:00 AM - 4:00 PM",
      experience: "12 years",
      bio: "Dedicated to the health and well-being of children.",
      fee: 14000, // INR
    },
    4: {
      name: "Dr. Anjali Rao",
      specialty: "Orthopedic Surgeon",
      consultationTime: "11:00 AM - 7:00 PM",
      experience: "20 years",
      bio: "Experienced in treating musculoskeletal system conditions.",
      fee: 18000, // INR
    },
    5: {
      name: "Dr. Sunil Mehta",
      specialty: "Neurologist",
      consultationTime: "9:30 AM - 5:30 PM",
      experience: "13 years",
      bio: "Specializes in treating disorders of the nervous system.",
      fee: 17000, // INR
    },
    6: {
      name: "Dr. Neha Singh",
      specialty: "Gastroenterologist",
      consultationTime: "10:00 AM - 6:00 PM",
      experience: "18 years",
      bio: "Expert in digestive system and related disorders.",
      fee: 16000, // INR
    },
    7: {
      name: "Dr. Rajesh Kumar",
      specialty: "Endocrinologist",
      consultationTime: "8:00 AM - 4:00 PM",
      experience: "14 years",
      bio: "Focuses on hormone-related diseases.",
      fee: 15000, // INR
    },
    8: {
      name: "Dr. Sita Devi",
      specialty: "Pulmonologist",
      consultationTime: "11:00 AM - 7:00 PM",
      experience: "16 years",
      bio: "Specialist in respiratory system disorders.",
      fee: 14000, // INR
    },
    9: {
      name: "Dr. Vinay Joshi",
      specialty: "Oncologist",
      consultationTime: "9:00 AM - 5:00 PM",
      experience: "17 years",
      bio: "Expert in cancer treatment and care.",
      fee: 20000, // INR
    },
    10: {
      name: "Dr. Aarti Verma",
      specialty: "Psychiatrist",
      consultationTime: "10:00 AM - 6:00 PM",
      experience: "11 years",
      bio: "Specializes in mental health and psychiatric disorders.",
      fee: 14000, // INR
    },
    11: {
      name: "Dr. Sanjay Agarwal",
      specialty: "Urologist",
      consultationTime: "8:00 AM - 4:00 PM",
      experience: "14 years",
      bio: "Expert in urinary tract and male reproductive system disorders.",
      fee: 15000, // INR
    },
    12: {
      name: "Dr. Sathya Mohanasundaram",
      specialty: "Dentist",
      consultationTime: "9:00 AM - 5:00 PM",
      experience: "12 years",
      bio: "Specializes in dental health and oral care.",
      fee: 13000, // INR
    },
  };

  const doctor = doctors[id];
  const [payment, setPayment] = React.useState("");

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${doctor.name}. Payment method: ${payment}`);
  };

  return (
    <div className="doctor-details-page">
      <h1>Book an Appointment with {doctor.name}</h1>
      <div className="doctor-info">
        <p><strong>Specialty:</strong> {doctor.specialty}</p>
        <p><strong>Consultation Time:</strong> {doctor.consultationTime}</p>
        <p><strong>Experience:</strong> {doctor.experience}</p>
        <p><strong>Bio:</strong> {doctor.bio}</p>
        <p><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Select Payment Method:
          <select value={payment} onChange={handlePaymentChange} required>
            <option value="">Choose...</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </label>
        <button type="submit" className="submit-button">Confirm Appointment</button>
      </form>
    </div>
  );
}

export default DoctorDetails;*/
import React from "react";
import { useParams } from "react-router-dom";
import "./DoctorDetails.css";

function DoctorDetails() {
  const { id } = useParams();

  // Updated list of doctors with consultation times and fees in INR
  const doctors = {
    1: { name: "Dr. Arun Kumar", specialty: "Cardiologist", consultationTime: "9:00 AM - 5:00 PM", experience: "15 years", bio: "Specializes in heart health and cardiovascular diseases.", fee: 15000 },
    2: { name: "Dr. Priya Sharma", specialty: "Dermatologist", consultationTime: "10:00 AM - 6:00 PM", experience: "10 years", bio: "Expert in skin care and dermatological treatments.", fee: 12000 },
    3: { name: "Dr. Ramesh Patel", specialty: "Pediatrician", consultationTime: "8:00 AM - 4:00 PM", experience: "12 years", bio: "Dedicated to the health and well-being of children.", fee: 14000 },
    4: { name: "Dr. Anjali Rao", specialty: "Orthopedic Surgeon", consultationTime: "11:00 AM - 7:00 PM", experience: "20 years", bio: "Experienced in treating musculoskeletal system conditions.", fee: 18000 },
    5: { name: "Dr. Sunil Mehta", specialty: "Neurologist", consultationTime: "9:30 AM - 5:30 PM", experience: "13 years", bio: "Specializes in treating disorders of the nervous system.", fee: 17000 },
    6: { name: "Dr. Neha Singh", specialty: "Gastroenterologist", consultationTime: "10:00 AM - 6:00 PM", experience: "18 years", bio: "Expert in digestive system and related disorders.", fee: 16000 },
    7: { name: "Dr. Rajesh Kumar", specialty: "Endocrinologist", consultationTime: "8:00 AM - 4:00 PM", experience: "14 years", bio: "Focuses on hormone-related diseases.", fee: 15000 },
    8: { name: "Dr. Sita Devi", specialty: "Pulmonologist", consultationTime: "11:00 AM - 7:00 PM", experience: "16 years", bio: "Specialist in respiratory system disorders.", fee: 14000 },
    9: { name: "Dr. Vinay Joshi", specialty: "Oncologist", consultationTime: "9:00 AM - 5:00 PM", experience: "17 years", bio: "Expert in cancer treatment and care.", fee: 20000 },
    10: { name: "Dr. Aarti Verma", specialty: "Psychiatrist", consultationTime: "10:00 AM - 6:00 PM", experience: "11 years", bio: "Specializes in mental health and psychiatric disorders.", fee: 14000 },
    11: { name: "Dr. Sanjay Agarwal", specialty: "Urologist", consultationTime: "8:00 AM - 4:00 PM", experience: "14 years", bio: "Expert in urinary tract and male reproductive system disorders.", fee: 15000 },
    12: { name: "Dr. Sathya Mohanasundaram", specialty: "Dentist", consultationTime: "9:00 AM - 5:00 PM", experience: "12 years", bio: "Specializes in dental health and oral care.", fee: 13000 },
  };

  // Mock state to track the number of appointments per doctor
  const [appointments, setAppointments] = React.useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0
  });

  const doctor = doctors[id];
  const [payment, setPayment] = React.useState("");
  const maxAppointmentsPerDay = 5;

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointments[id] >= maxAppointmentsPerDay) {
      alert("Sorry, this doctor has reached the maximum number of appointments for today.");
      return;
    }
    // Increment the appointment count
    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [id]: prevAppointments[id] + 1
    }));
    alert(`Appointment booked with ${doctor.name}. Payment method: ${payment}`);
  };

  return (
    <div className="doctor-details-page">
      <h1>Book an Appointment with {doctor.name}</h1>
      <div className="doctor-info">
        <p><strong>Specialty:</strong> {doctor.specialty}</p>
        <p><strong>Consultation Time:</strong> {doctor.consultationTime}</p>
        <p><strong>Experience:</strong> {doctor.experience}</p>
        <p><strong>Bio:</strong> {doctor.bio}</p>
        <p><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Select Payment Method:
          <select value={payment} onChange={handlePaymentChange} required>
            <option value="">Choose...</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </label>
        <button type="submit" className="submit-button">Confirm Appointment</button>
      </form>
    </div>
  );
}

export default DoctorDetails;

