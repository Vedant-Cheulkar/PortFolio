import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiHome, FiUser, FiCode, FiLayers, FiAward, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const themeColors = {
    dark: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#3b82f6',
      text: '#ffffff',
      textSecondary: '#d1d5db',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
    },
    light: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      accent: '#2563eb',
      text: '#1f2937',
      textSecondary: '#6b7280',
      gradient: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #ffffff 100%)'
    }
  };

  const theme = isDarkTheme ? themeColors.dark : themeColors.light;

  // Navigation styles
  const navStyle = {
    padding: '1rem 2rem',
    background: isDarkTheme ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    position: 'sticky',
    top: 0,
    zIndex: 999,
    transition: 'all 0.5s ease'
  };

  const navLinkStyle = (isActive) => ({
    textDecoration: 'none',
    color: isActive ? theme.accent : theme.text,
    fontWeight: '500',
    margin: '0 1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    background: isActive ? (isDarkTheme ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.1)') : 'transparent',
    transition: 'all 0.3s ease'
  });

  // Theme toggle styles
  const themeToggleStyle = {
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
    color: theme.text,
    borderRadius: '50%',
    width: '3rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    boxShadow: isDarkTheme 
      ? '0 4px 15px rgba(0, 0, 0, 0.3)'
      : '0 4px 15px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  // Section styles
  const sectionStyle = {
    padding: '0rem 0rem',
    scrollMarginTop: '6rem'
  };

  // Animation styles
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .nav-link:hover {
      color: ${theme.accent};
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      .nav-container {
        padding: 0.75rem !important;
      }
      
      .nav-link {
        margin: 0.25rem !important;
        padding: 0.5rem !important;
        font-size: 0.9rem;
      }
    }
  `;

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div style={{ 
        background: theme.gradient,
        minHeight: '100vh',
        transition: 'all 0.5s ease'
      }}>
        {/* Theme Toggle */}
        <motion.button
          style={themeToggleStyle}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkTheme ? <FiSun size={18} /> : <FiMoon size={18} />}
        </motion.button>

        {/* Navigation */}
        <nav style={navStyle} className="nav-container">
          <motion.a 
            href="#home" 
            style={navLinkStyle(activeSection === 'home')}
            className="nav-link"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
          >
            <FiHome /> Home
          </motion.a>
          <motion.a 
            href="#about" 
            style={navLinkStyle(activeSection === 'about')}
            className="nav-link"
            onClick={() => handleNavClick('about')}
            whileHover={{ scale: 1.05 }}
          >
            <FiUser /> About
          </motion.a>
          <motion.a 
            href="#skills" 
            style={navLinkStyle(activeSection === 'skills')}
            className="nav-link"
            onClick={() => handleNavClick('skills')}
            whileHover={{ scale: 1.05 }}
          >
            <FiCode /> Skills
          </motion.a>
          <motion.a 
            href="#projects" 
            style={navLinkStyle(activeSection === 'projects')}
            className="nav-link"
            onClick={() => handleNavClick('projects')}
            whileHover={{ scale: 1.05 }}
          >
            <FiLayers /> Projects
          </motion.a>
          <motion.a 
            href="#certificates" 
            style={navLinkStyle(activeSection === 'certificates')}
            className="nav-link"
            onClick={() => handleNavClick('certificates')}
            whileHover={{ scale: 1.05 }}
          >
            <FiAward /> Certificates
          </motion.a>
          <motion.a 
            href="#contact" 
            style={navLinkStyle(activeSection === 'contact')}
            className="nav-link"
            onClick={() => handleNavClick('contact')}
            whileHover={{ scale: 1.05 }}
          >
            <FiMessageSquare /> Contact
          </motion.a>
        </nav>

        {/* Main Content Sections */}
        <section id="home" style={sectionStyle}>
          <Home isDarkTheme={isDarkTheme} />
        </section>
        <section id="about" style={sectionStyle}>
          <About isDarkTheme={isDarkTheme} />
        </section>
        <section id="skills" style={sectionStyle}>
          <Skills isDarkTheme={isDarkTheme} />
        </section>
        <section id="projects" style={sectionStyle}>
          <Projects isDarkTheme={isDarkTheme} />
        </section>
        <section id="certificates" style={sectionStyle}>
          <Certificates isDarkTheme={isDarkTheme} />
        </section>
        <section id="contact" style={sectionStyle}>
          <Contact isDarkTheme={isDarkTheme} />
        </section>

        {/* Footer Component */}
        <Footer isDarkTheme={isDarkTheme} theme={theme} />
      </div>
    </>
  );
};

export default App;