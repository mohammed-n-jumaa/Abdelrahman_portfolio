import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaFolder, FaStar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Courses Management System',
      description: 'Comprehensive system for managing students, teachers, and courses with intuitive UI.',
      technologies: ['Angular', '.NET', 'SQL Server', 'TypeScript'],
      type: 'Graduation Project',
      category: 'Academic',
      featured: true,
      demo: '#',
      icon: '🎓'
    },
    {
      title: 'ERP System - HR Module',
      description: 'HR management module including employee records, attendance, payroll, and performance.',
      technologies: ['.NET', 'Angular', 'Oracle', 'C#'],
      type: 'Enterprise',
      category: 'ERP',
      featured: true,
      demo: '#',
      icon: '👥'
    },
    {
      title: 'ERP System - Inventory',
      description: 'Advanced inventory with real-time tracking, automated reordering, and reporting.',
      technologies: ['.NET', 'SQL Server', 'Angular', 'TypeScript'],
      type: 'Enterprise',
      category: 'ERP',
      featured: false,
      demo: '#',
      icon: '📦'
    },
    {
      title: 'ERP System - Finance',
      description: 'Financial management with accounts, ledger, budgeting, and multi-currency support.',
      technologies: ['.NET', 'Oracle', 'Angular', 'Chart.js'],
      type: 'Enterprise',
      category: 'ERP',
      featured: true,
      demo: '#',
      icon: '💰'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured shopping platform with cart, payment, and customer dashboard.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      type: 'Web App',
      category: 'Web',
      featured: false,
      demo: '#',
      icon: '🛒'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard for visualizing metrics, KPIs with real-time updates.',
      technologies: ['Angular', '.NET', 'SQL Server', 'D3.js'],
      type: 'Dashboard',
      category: 'Analytics',
      featured: false,
      demo: '#',
      icon: '📊'
    }
  ];

  const categories = ['All', 'ERP', 'Web', 'Academic', 'Analytics'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Recent work and accomplishments</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="filter-tabs"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon">
                  <span className="icon-emoji">{project.icon}</span>
                  <FaFolder className="folder-icon" />
                </div>
               
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <FaStar className="featured-star" title="Featured" />
                  )}
                </div>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-footer">
                <div className="tech-stack">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-dot" title={tech}>
                      <FaCode />
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="tech-tooltip">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;