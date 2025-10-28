import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-greeting"
          >
            Hi, I'm <span className="gradient-text">Abdelrahman</span>
          </motion.h1>

          <div className="hero-typing">
            <TypeAnimation
              sequence={[
                'ERP System Developer',
                2000,
                '.NET & Angular Solutions Expert',
                2000,
                'Technical Support Specialist',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-description"
          >
            Passionate about building efficient ERP systems that streamline
            business operations and empower companies with smarter solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-buttons"
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-image"
        >
          <div className="image-container animate-float">
            <img
              src="https://i.postimg.cc/44BdstJC/a4b2e477-3618-4afe-8e2b-ae3a547791b8.jpg"
              alt="Abdelrahman Al Shkh Nimer"
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;