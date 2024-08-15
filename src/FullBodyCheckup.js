import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import "./FullBodyCheckup.css";

function FullBodyCheckup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Credit Card",
    consultingDate: "",
  });
  const [receipt, setReceipt] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      ...formData,
      appointmentType: "Full Body Checkup",
      bookingDate: new Date().toLocaleDateString(),
    };

    // Simulate receipt generation (but do not create the document yet)
    setReceipt({
      ...bookingDetails,
      receiptId: `REC-${Math.floor(Math.random() * 10000)}`,
      amount: "₹5000",
    });

    // Clear form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "Credit Card",
      consultingDate: "",
    });
  };

  const generateReceiptDoc = () => {
    if (!receipt) return;

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Receipt", bold: true, size: 24 }),
                new TextRun({ text: `\nReceipt ID: ${receipt.receiptId}`, size: 20 }),
                new TextRun({ text: `\nName: ${receipt.name}`, size: 20 }),
                new TextRun({ text: `\nEmail: ${receipt.email}`, size: 20 }),
                new TextRun({ text: `\nPhone: ${receipt.phone}`, size: 20 }),
                new TextRun({ text: `\nAddress: ${receipt.address}`, size: 20 }),
                new TextRun({ text: `\nAppointment Type: ${receipt.appointmentType}`, size: 20 }),
                new TextRun({ text: `\nConsulting Date: ${receipt.consultingDate}`, size: 20 }),
                new TextRun({ text: `\nBooking Date: ${receipt.bookingDate}`, size: 20 }),
                new TextRun({ text: `\nAmount Paid: ${receipt.amount}`, size: 20 }),
                new TextRun({ text: `\n\nGeneral Instructions:`, bold: true, size: 20 }),
                new TextRun({ text: `\n1. Please arrive at least 15 minutes before your appointment time.`, size: 20 }),
                new TextRun({ text: `\n2. Bring a valid ID proof and any relevant medical documents.`, size: 20 }),
                new TextRun({ text: `\n3. If you need to reschedule, please contact us at least 24 hours in advance.`, size: 20 }),
                new TextRun({ text: `\n4. Payment details and other instructions will be provided at the reception.`, size: 20 }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "receipt.docx");
    });
  };

  return (
    <div className="full-body-checkup-page">
      <h1 style={{ color: 'black' }}>Book Full Body Checkup Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Consulting Date</label>
          <input
            type="date"
            name="consultingDate"
            value={formData.consultingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
      {receipt && (
        <div className="receipt" style={{ backgroundColor: 'white' }}>
          <h2>Receipt</h2>
          <p><strong>Receipt ID:</strong> {receipt.receiptId}</p>
          <p><strong>Name:</strong> {receipt.name}</p>
          <p><strong>Email:</strong> {receipt.email}</p>
          <p><strong>Phone:</strong> {receipt.phone}</p>
          <p><strong>Address:</strong> {receipt.address}</p>
          <p><strong>Appointment Type:</strong> {receipt.appointmentType}</p>
          <p><strong>Consulting Date:</strong> {receipt.consultingDate}</p>
          <p><strong>Booking Date:</strong> {receipt.bookingDate}</p>
          <p><strong>Amount Paid:</strong> {receipt.amount}</p>
          <button onClick={generateReceiptDoc} style={{ marginTop: '20px' }}>
            Download Receipt
          </button>
        </div>
      )}
    </div>
  );
}

export default FullBodyCheckup;
