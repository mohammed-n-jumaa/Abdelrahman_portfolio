import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaProjectDiagram, FaUsers, FaCode } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    technologies: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: <FaBriefcase />,
      end: 3,
      label: 'Years Experience',
      description: 'In ERP System Development & Support',
      color: '#8B5CF6'
    },
    {
      icon: <FaProjectDiagram />,
      end: 30,
      label: 'Projects Completed',
      description: 'Management Systems, Web Apps, ERP Solutions',
      color: '#06B6D4'
    },
    {
      icon: <FaUsers />,
      end: 50,
      label: 'Happy Clients',
      description: 'Across Various Projects',
      color: '#F59E0B'
    },
    {
      icon: <FaCode />,
      end: 12,
      label: 'Technologies Mastered',
      description: '.NET, Angular, SQL, PHP, OOP, and more',
      color: '#10B981'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 4000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.end / steps;
      const key = ['experience', 'projects', 'clients', 'technologies'][index];

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          setCounters(prev => ({ ...prev, [key]: stat.end }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, interval);
    });
  };

  return (
    <section className="stats-section" id="stats" ref={statsRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="stat-card"
              whileHover={{ y: -10 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">
                {Object.values(counters)[index]}+
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
              <div className="stat-glow" style={{ background: stat.color }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;