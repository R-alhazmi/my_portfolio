import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Message sent successfully! ✨');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-card">
        <p>Feel free to reach out for collaborations or project inquiries!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;