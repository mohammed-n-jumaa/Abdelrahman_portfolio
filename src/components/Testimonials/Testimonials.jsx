import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Al-Hassan',
      position: 'CTO at Galaxy International',
      company: 'Galaxy International',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'Exceptional developer with deep knowledge of ERP systems. His technical skills and ability to understand complex business requirements made our project a success.',
      badge: 'Top Rated'
    },
    {
      name: 'Sarah Mohammad',
      position: 'Project Manager',
      company: 'Tech Solutions',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Working with Abdelrahman was a pleasure. His quick response time and problem-solving skills are outstanding. He delivered a robust system that exceeded expectations.',
      badge: 'Verified'
    },
    {
      name: 'Omar Khalil',
      position: 'Business Owner',
      company: 'Retail Plus',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 5,
      text: 'Professional, reliable, and highly skilled. Abdelrahman transformed our business operations with his custom ERP solution. His attention to detail is remarkable.',
      badge: 'Featured'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title-light">Client Testimonials</h2>
          <p className="section-subtitle-light">What clients say about working with me</p>
        </motion.div>

        <div className="testimonials-wrapper">
          {/* Compact Cards */}
          <div className="testimonials-cards">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`testimonial-mini-card ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="mini-card-info">
                  <h4>{testimonial.name}</h4>
                  <div className="mini-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <span className="mini-badge">{testimonial.badge}</span>
              </motion.div>
            ))}
          </div>

          {/* Main Display */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="testimonial-main"
          >
            <div className="main-quote-icon">
              <FaQuoteLeft />
            </div>

            <div className="main-rating">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <p className="main-text">{testimonials[activeIndex].text}</p>

            <div className="main-author">
              <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
              <div className="author-details">
                <h3>{testimonials[activeIndex].name}</h3>
                <p>{testimonials[activeIndex].position}</p>
                <span className="company-badge">{testimonials[activeIndex].company}</span>
              </div>
            </div>

            <div className="navigation-controls">
              <button onClick={prevTestimonial} className="nav-btn" aria-label="Previous">
                <FaChevronLeft />
              </button>
              <div className="dots-indicator">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
              <button onClick={nextTestimonial} className="nav-btn" aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;