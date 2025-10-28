import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiDotnet, 
  SiAngular, 
  SiMysql, 
  SiOracle, 
  SiOpenjdk, 
  SiPhp, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiGit 
} from 'react-icons/si';

import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: '.NET / C#', icon: <SiDotnet />, level: 100, color: '#512BD4' },
    { name: 'Angular', icon: <SiAngular />, level: 100, color: '#DD0031' },
    { name: 'SQL Server / MySQL', icon: <SiMysql />, level: 100, color: '#CC2927' },
    { name: 'Oracle', icon: <SiOracle />, level: 80, color: '#F80000' },
    { name: 'PHP', icon: <SiPhp />, level: 78, color: '#777BB4' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 82, color: '#3178C6' },
    { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 />, level: 92, color: '#1572B6' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
    { name: 'Git', icon: <SiGit />, level: 100, color: '#F05032' }
  ];

  return (
    <section className="techstack-section" id="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Technologies I work with to build powerful solutions
        </motion.p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="tech-card"
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              
              <div className="progress-container">
                <div className="progress-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                    className="progress-fill"
                    style={{ background: tech.color }}
                  />
                </div>
                <span className="progress-label">{tech.level}%</span>
              </div>

              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.5 + i * 0.1 }}
                    className={i < Math.round(tech.level / 20) ? 'star filled' : 'star'}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <div className="tech-glow" style={{ background: tech.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
