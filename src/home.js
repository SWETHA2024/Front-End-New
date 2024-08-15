// /*import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home">
//       <nav className="navbar">
//         <div className="logo">
//           <h1>Healthfusion Hospital</h1>
//         </div>
//         <ul className="nav-links">
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//           <li><Link to="/book-appointment">Book Appointment</Link></li>
//         </ul>
//       </nav>

//       <header className="header">
//         <h2>Welcome to Healthfusion Hospital</h2>
//         <p>Your health is our priority. We provide comprehensive care and expert consultation for your well-being.</p>
//       </header>

//       <section id="about" className="about-section">
//   <h3>About Us</h3>
//   <p>
//     Healthfusion Hospital is a premier healthcare institution dedicated to providing
//     comprehensive medical services across a wide range of specialties. Established in [Year],
//     our hospital has been at the forefront of medical innovation, patient care, and community
//     wellness. With a team of highly experienced doctors, nurses, and healthcare professionals,
//     we are committed to delivering personalized and compassionate care to every patient.
//   </p>
//   <p>
//     Our state-of-the-art facilities are equipped with the latest medical technology, ensuring that
//     we can offer accurate diagnoses and effective treatments. From routine check-ups to complex
//     surgeries, Healthfusion Hospital is your trusted partner in health, providing services that
//     cater to all ages and health conditions.
//   </p>
//   <p>
//     At Healthfusion, we believe in a holistic approach to healthcare. We not only treat the illness
//     but also focus on preventive care and patient education. Our goal is to empower you to take
//     control of your health through informed choices and a healthy lifestyle.
//   </p>
//   <p>
//     We are proud to serve our community and are continuously expanding our services to meet the
//     growing needs of our patients. Whether you need specialized care, emergency services, or
//     wellness programs, Healthfusion Hospital is here to support you on your journey to better
//     health.
//   </p>
//   <p>
//     Join us in our mission to create a healthier, happier community. Your health is our priority,
//     and we are dedicated to providing the highest quality care in a warm and welcoming
//     environment.
//   </p>
// </section>

//       <section id="contact" className="contact-section">
//         <h3>Contact Us</h3>
//         <p>Email: contact@healthfusion.com</p>
//         <p>Phone: +1 234 567 8900</p>
//         <p>Address: 123 Wellness Blvd, Health City</p>
//       </section>
//     </div>
//   );
// }

// export default Home;
// */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home">
//       <nav className="navbar">
//         <div className="logo">
//           <img src="/images/heart.jpg" alt="HealthFusion Logo" className="logo-image" />
//           <h1>HealthFusion</h1>
//         </div>
//         <ul className="nav-links">
//           <li><a href="#about">About</a></li>
//           <li><Link to="/book-appointment">Book Appointment</Link></li>
//           <li><a href="#contact">Contact Us</a></li>
//         </ul>
//       </nav>

//       <header className="header">
//   <h2>Welcome to HealthFusion</h2>
//   <p>Your health is our top priority. At HealthFusion, we are dedicated to providing comprehensive medical care with a focus on personalized treatment and wellness. Our state-of-the-art facilities and expert medical team ensure that you receive the highest quality of care, tailored to your individual needs.</p>
//   <p>We offer a full spectrum of services, from routine check-ups to advanced diagnostic procedures and treatments. Our commitment to excellence is reflected in every aspect of our care, including the latest medical technologies and innovative treatment options.</p>

// </header>


//       <section id="about" className="about-section">
//         <h3>About Us</h3>
//         <p>
//           HealthFusion is a leading healthcare provider dedicated to offering comprehensive medical services across various specialties. Our mission is to ensure the best possible care through innovation, expertise, and compassion.
//         </p>
//         <div className="features">
//           <div className="feature">
//             <img src="/images/featureImage1.jpg" alt="Feature 1" />
//             <h4>State-of-the-Art Facilities</h4>
//             <p>Our advanced facilities are equipped with the latest medical technology to provide accurate diagnostics and effective treatments.</p>
//           </div>
//           <div className="feature">
//             <img src="/images/exp.jpeg" alt="Feature 2" />
//             <h4>Experienced Professionals</h4>
//             <p>Our team of highly qualified doctors, nurses, and specialists are dedicated to delivering exceptional healthcare services.</p>
//           </div>
//           <div className="feature">
//             <img src="/images/featureImage3.jpg" alt="Feature 3" />
//             <h4>Personalized Care</h4>
//             <p>We focus on personalized care to address your unique needs and ensure a patient-centered approach to health.</p>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="contact-section">
//         <h3>Contact Us</h3>
//         <form className="contact-form">
//           <label>Name:</label>
//           <input type="text" name="name" required />
//           <label>Email:</label>
//           <input type="email" name="email" required />
//           <label>Message:</label>
//           <textarea name="message" rows="4" required></textarea>
//           <button type="submit" style={{ width: '120px' }}>Send Message</button>

//         </form>
//       </section>
//     </div>
//   );
// }

// export default Home;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Home.css';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7813pj', 'template_xcghjot', e.target, 'n18wVgClGLmwDlLtt')
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          alert('Failed to send the message, please try again.');
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/heart.jpg" alt="HealthFusion Logo" className="logo-image" />
          <h1>HealthFusion</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><Link to="/book-appointment">Book Appointment</Link></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <header className="header">
        <h2>Welcome to HealthFusion</h2>
        <p>Your health is our top priority. At HealthFusion, we are dedicated to providing comprehensive medical care with a focus on personalized treatment and wellness. Our state-of-the-art facilities and expert medical team ensure that you receive the highest quality of care, tailored to your individual needs.</p>
        <p>We offer a full spectrum of services, from routine check-ups to advanced diagnostic procedures and treatments. Our commitment to excellence is reflected in every aspect of our care, including the latest medical technologies and innovative treatment options.</p>
      </header>

      <section id="about" className="about-section">
        <h3>About Us</h3>
        <p>
          HealthFusion is a leading healthcare provider dedicated to offering comprehensive medical services across various specialties. Our mission is to ensure the best possible care through innovation, expertise, and compassion.
        </p>
        <div className="features">
          <div className="feature">
            <img src="/images/featureImage1.jpg" alt="Feature 1" />
            <h4>State-of-the-Art Facilities</h4>
            <p>Our advanced facilities are equipped with the latest medical technology to provide accurate diagnostics and effective treatments.</p>
          </div>
          <div className="feature">
            <img src="/images/exp.jpeg" alt="Feature 2" />
            <h4>Experienced Professionals</h4>
            <p>Our team of highly qualified doctors, nurses, and specialists are dedicated to delivering exceptional healthcare services.</p>
          </div>
          <div className="feature">
            <img src="/images/featureImage3.jpg" alt="Feature 3" />
            <h4>Personalized Care</h4>
            <p>We focus on personalized care to address your unique needs and ensure a patient-centered approach to health.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h3>Contact Us</h3>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Message:</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" style={{ width: '120px' }}>Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
