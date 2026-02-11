import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'trial'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp link with pre-filled message
    const text = `Hi Tatva! I'm interested in ${formData.interest}. Name: ${formData.name}, Phone: ${formData.phone}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Get Started Today</h2>
        <p className="section-intro">
          Ready to begin your wellness journey? Let's connect!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>Tatva Yoga Studio<br/>Beeramguda<br/>Hyderabad</p>
            </div>
            <div className="info-card">
              <h3>💬 Quick Contact</h3>
              <p>WhatsApp us for instant support<br/>Trial booking • Pricing info<br/>Membership queries</p>
            </div>
            <div className="info-card">
              <h3>🎯 What's Next?</h3>
              <p>Fill the form and we'll send<br/>trial session options via WhatsApp.<br/>No spam, just wellness.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest">I'm Interested In *</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="trial">Trial Session</option>
                <option value="membership">Membership</option>
                <option value="diet-plan">Diet Plan</option>
                <option value="general-inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your fitness goals..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
