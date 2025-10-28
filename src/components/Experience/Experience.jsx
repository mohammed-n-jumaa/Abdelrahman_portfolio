import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(0);

  const experiences = [
    {
      id: 0,
      company: 'Galaxy International Group',
      position: 'Developer & Technical Support (ERP System)',
      duration: 'Feb 2023 - Present',
      location: 'Jordan',
      type: 'Full-time',
      responsibilities: [
        'Developing and maintaining ERP system modules',
        'Analyzing customer requirements and translating them into technical solutions',
        'Providing technical support and troubleshooting',
        'Collaborating with cross-functional teams to implement new features',
        'Optimizing system performance and database queries'
      ],
      current: true,
      color: '#8B5CF6'
    },
    {
      id: 1,
      company: 'Umniah',
      position: 'Activation Officer',
      duration: '2021 - 2023',
      location: 'Jordan',
      type: 'Full-time',
      responsibilities: [
        'Managing customer activation processes',
        'Ensuring smooth service delivery',
        'Handling customer inquiries and technical issues',
        'Coordinating with technical teams for service optimization'
      ],
      current: false,
      color: '#06B6D4'
    },
    {
      id: 2,
      company: 'Umniah',
      position: 'Field Sales Representative',
      duration: '2019 - 2021',
      location: 'Jordan',
      type: 'Full-time',
      responsibilities: [
        'Building and maintaining client relationships',
        'Achieving sales targets and KPIs',
        'Conducting product presentations and demonstrations',
        'Gathering market feedback and customer insights'
      ],
      current: false,
      color: '#10B981'
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>

        <div className="experience-layout">
          {/* Timeline Sidebar */}
          <div className="timeline-sidebar">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`timeline-card ${selectedExp === index ? 'active' : ''}`}
                onClick={() => setSelectedExp(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="timeline-marker" style={{ background: exp.color }}>
                  <FaBriefcase />
                </div>
                
                <div className="timeline-card-content">
                  {exp.current && <span className="pulse-badge">●</span>}
                  <h4>{exp.company}</h4>
                  <p className="timeline-duration">{exp.duration}</p>
                </div>

                <FaChevronRight className="chevron-icon" />
              </motion.div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="details-content"
              >
                {experiences[selectedExp].current && (
                  <motion.div 
                    className="current-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    Current Position
                  </motion.div>
                )}

                <div className="details-header" style={{ borderLeftColor: experiences[selectedExp].color }}>
                  <h3>{experiences[selectedExp].company}</h3>
                  <h4>{experiences[selectedExp].position}</h4>
                </div>

                <div className="details-meta">
                  <div className="meta-chip">
                    <FaCalendar />
                    <span>{experiences[selectedExp].duration}</span>
                  </div>
                  <div className="meta-chip">
                    <FaMapMarkerAlt />
                    <span>{experiences[selectedExp].location}</span>
                  </div>
                  <div className="meta-chip type">
                    {experiences[selectedExp].type}
                  </div>
                </div>

                <div className="responsibilities">
                  <h5>Key Responsibilities</h5>
                  <ul>
                    {experiences[selectedExp].responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="bullet" style={{ background: experiences[selectedExp].color }}></span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;