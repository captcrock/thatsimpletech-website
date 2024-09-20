import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0 && captchaVerified) {
      // Submit the form (add backend logic here)
      alert('Form submitted successfully!');
    } else {
      alert('Please complete the form and verify CAPTCHA.');
    }
  };

  // Mock CAPTCHA verification handler
  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

  return (
    <section id="contact" className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Mock CAPTCHA */}
        <div className="captcha">
          <button type="button" onClick={handleCaptchaVerify}>
            Verify CAPTCHA
          </button>
          {captchaVerified && <p>CAPTCHA verified!</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
