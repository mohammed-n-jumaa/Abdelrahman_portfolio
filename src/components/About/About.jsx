import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-image"
          >
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                alt="Working on code"
                className="about-img"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <h3 className="about-title">
              Computer Science Graduate & ERP Developer
            </h3>
            <p className="about-description">
              I'm a Computer Science graduate passionate about building efficient 
              ERP systems that streamline business operations and empower companies 
              with smarter solutions. My journey in technology has been driven by 
              a desire to bridge the gap between complex business processes and 
              elegant technical implementations.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <div className="card-icon">
                  <FaGraduationCap />
                </div>
                <div className="card-content">
                  <h4>Academic Background</h4>
                  <p>Bachelor's Degree in Computer Science</p>
                  <span className="highlight">Zarqa'a Private University, Jordan (2018-2022)</span>
                  <p className="project-info">
                    <strong>Graduation Project:</strong> Courses Management System
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <FaCertificate />
                </div>
                <div className="card-content">
                  <h4>Professional Certifications</h4>
                  <ul className="cert-list">
                    <li>International Computer Driving License (ICDL)</li>
                    <li>Professional Training Diploma - HELEN (2019-2020)</li>
                  </ul>
                </div>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <FaHeart />
                </div>
                <div className="card-content">
                  <h4>Passion & Expertise</h4>
                  <p>
                    Analyzing business operations and connecting them with 
                    cutting-edge technology to create seamless, efficient systems 
                    that drive real business value.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;