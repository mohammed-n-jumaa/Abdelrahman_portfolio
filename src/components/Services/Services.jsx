import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCogs, FaCode, FaDatabase, FaTools, FaChevronRight, FaCheck } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaCogs />,
      title: 'ERP Development',
      shortDesc: 'Custom ERP solutions for business',
      description: 'Custom ERP solutions tailored to your business needs. From requirements analysis to implementation.',
      features: [
        'Custom Module Development',
        'System Integration',
        'Workflow Automation',
        'Business Process Optimization'
      ],
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      shortDesc: 'Modern responsive applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: [
        'Responsive Design',
        'RESTful APIs',
        'Single Page Applications',
        'Progressive Web Apps'
      ],
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Solutions',
      shortDesc: 'Optimization & architecture',
      description: 'Efficient database architecture and optimization for maximum performance and reliability.',
      features: [
        'Schema Design',
        'Query Optimization',
        'Data Migration',
        'Performance Tuning'
      ],
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
    },
    {
      icon: <FaTools />,
      title: 'Technical Support',
      shortDesc: 'Integration & maintenance',
      description: 'Ongoing technical support and system integration services ensuring smooth operations.',
      features: [
        '24/7 Support Available',
        'System Maintenance',
        'Third-party Integration',
        'Documentation & Training'
      ],
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #059669)'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle">Comprehensive solutions to drive your business forward</p>
        </motion.div>

        <div className="services-layout">
          {/* Compact Service Cards */}
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`service-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="service-item-icon" style={{ background: service.gradient }}>
                  {service.icon}
                </div>
                <div className="service-item-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                </div>
                <FaChevronRight className="service-arrow" />
              </motion.div>
            ))}
          </div>

          {/* Details Panel */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="service-details"
          >
            <div className="details-header">
              <div className="details-icon" style={{ background: services[activeService].gradient }}>
                {services[activeService].icon}
              </div>
              <div>
                <h3>{services[activeService].title}</h3>
                <p>{services[activeService].description}</p>
              </div>
            </div>

            <div className="details-features">
              <h4>Key Features</h4>
              <div className="features-grid">
                {services[activeService].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="feature-item"
                  >
                    <FaCheck style={{ color: services[activeService].color }} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="service-decoration" style={{ background: services[activeService].gradient }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;