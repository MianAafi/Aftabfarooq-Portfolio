import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function SubmitForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const publicId = "gMYrCdVK6nZ4QRlaQ";
  const templateId = "template_9yede3h";
  const serviceId = "service_29s0x6r";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Project Title is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project Details are required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Send email using EmailJS
      emailjs.sendForm(serviceId, templateId, event.target, publicId)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setErrors({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <h5 className="Lets-discuss">Let's discuss your project!</h5>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="name"
                  id="name"
                  placeholder="Name *"
                  className="form-control"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className="m-0 p-0 mt-2" style={{ color: 'red', fontWeight: 600 }}>
                    {errors.name}
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="email"
                  id="email"
                  placeholder="Email *"
                  className="form-control"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="m-0 p-0 mt-2" style={{ color: 'red', fontWeight: 600 }}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  name="subject"
                  id="subject"
                  placeholder="Project Title *"
                  className="form-control"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                {errors.subject && (
                  <p className="m-0 p-0 mt-2" style={{ color: 'red', fontWeight: 600 }}>
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your project details *"
                  rows="3"
                  className="form-control"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && (
                  <p className="m-0 p-0 mt-2" style={{ color: 'red', fontWeight: 600 }}>
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="send">
                <button className="px-btn px-btn-primary contact_us" type="submit">
                  Submit Details <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubmitForm;
