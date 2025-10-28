import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-logo">Abdelrahman</h3>
              <p className="footer-description">
                ERP System Developer specializing in .NET & Angular Solutions. 
                Building efficient systems that drive business success.
              </p>
              <div className="footer-badges">
                <span className="badge">🟢 Available for Freelance</span>
                <span className="badge">🌍 Open to Remote Work</span>
                <span className="badge">⚡ Quick Response Time</span>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Services</h4>
              <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-title">Get In Touch</h4>
              <div className="footer-social">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-icon linkedin"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              
                <a 
                  href="mailto:abdalrahmab@yahoo.com"
                  className="footer-social-icon email"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
              <p className="footer-email">abdalrahmab@yahoo.com</p>
              <p className="footer-phone">+962 79 733 9217</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {new Date().getFullYear()} Abdelrahman Al Shkh Nimer. All rights reserved.
              </p>
              <p className="made-with">
                Made with <FaHeart className="heart-icon" /> by Abdelrahman
              </p>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop} 
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;