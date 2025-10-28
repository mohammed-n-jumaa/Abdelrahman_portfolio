import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

// Dark Mode Hook
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.body.classList.add('dark'); // ✅ نضيف الكلاس على body
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return [isDark, toggleDarkMode];
};

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
        document.body.classList.add('scrolled');
      } else {
        setShowScrollTop(false);
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>

      {/* Performance Indicators */}
      <div className="performance-indicators">
        <div className="indicator-badge">
          <span className="icon">🟢</span>
          <span>Available</span>
        </div>
        <div className="indicator-badge">
          <span className="icon">🌍</span>
          <span>Remote</span>
        </div>
        <div className="indicator-badge">
          <span className="icon">⚡</span>
          <span>Quick Reply</span>
        </div>
      </div>

      {/* Main Sections */}
      <Hero />
      <Stats />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Scroll to Top Button (اختياري) */}
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
