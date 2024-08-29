import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jsqmpoo',
      'template_hv0gywl',
      e.target,
      'nm8mFVvw_RJmQ5yTh'
    ).then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
