export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Tatva Yoga Studio</h4>
            <p>Simplicity Heals</p>
            <p className="tagline">Yoga • Fitness • Nutrition</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#diet">Diet Plans</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p>📍 Beeramguda, Hyderabad</p>
            <p>📱 WhatsApp for instant support</p>
            <p>✉️ Email us anytime</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Instagram • Facebook • YouTube</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tatva Wellness LLP. All rights reserved.</p>
          <p>Founded by Gous & Karthik</p>
        </div>
      </div>
    </footer>
  )
}
