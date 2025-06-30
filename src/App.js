import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiCode, FiLayers, FiAward, FiMessageSquare, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = {
    primary: '#0f172a',
    secondary: '#1e293b',
    accent: '#3b82f6',
    text: '#ffffff',
    textSecondary: '#d1d5db',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
  };

  // Navigation styles
  const navStyle = {
    padding: scrolled ? '0.5rem 1.5rem' : '0.75rem 1.5rem',
    background: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.9)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const navLinkStyle = (isActive) => ({
    textDecoration: 'none',
    color: isActive ? theme.accent : theme.textSecondary,
    fontWeight: '500',
    padding: '0.5rem 1.25rem',
    borderRadius: '50px',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent'
  });

  // Mobile Menu Styles (matches your screenshot)
  const mobileMenuStyle = {
    position: 'fixed',
    top: '4.5rem',
    left: 0,
    right: 0,
    background: 'rgba(15, 23, 42, 0.98)',
    backdropFilter: 'blur(16px)',
    padding: '1.5rem',
    zIndex: 999,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  };

  const mobileMenuItemStyle = {
    color: '#d1d5db',
    fontSize: '1.1rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  };

  const activeMobileMenuItemStyle = {
    ...mobileMenuItemStyle,
    color: '#3b82f6',
    transform: 'translateX(5px)'
  };

  const sectionStyle = {
    padding: '0rem 0rem',
    scrollMarginTop: '6rem'
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div style={{ 
      background: theme.gradient,
      minHeight: '100vh',
      transition: 'all 0.5s ease'
    }}>
      {/* Navigation */}
      <nav style={navStyle}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontWeight: '600', color: theme.text }}
        >
          VC
        </motion.div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <motion.a
              href="#home"
              style={navLinkStyle(activeSection === 'home')}
              onClick={() => handleNavClick('home')}
              whileHover={{ 
                scale: 1.05,
                color: theme.accent,
                background: activeSection === 'home' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHome /> Home
            </motion.a>
            <motion.a
              href="#about"
              style={navLinkStyle(activeSection === 'about')}
              onClick={() => handleNavClick('about')}
              whileHover={{ 
                scale: 1.05,
                color: theme.accent,
                background: activeSection === 'about' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiUser /> About
            </motion.a>
            <motion.a
              href="#skills"
              style={navLinkStyle(activeSection === 'skills')}
              onClick={() => handleNavClick('skills')}
              whileHover={{ 
                scale: 1.05,
                color: theme.accent,
                background: activeSection === 'skills' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCode /> Skills
            </motion.a>
            <motion.a
              href="#projects"
              style={navLinkStyle(activeSection === 'projects')}
              onClick={() => handleNavClick('projects')}
              whileHover={{ 
                scale: 1.05,
                color: theme.accent,
                background: activeSection === 'projects' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLayers /> Projects
            </motion.a>
            <motion.a
              href="#certificates"
              style={navLinkStyle(activeSection === 'certificates')}
              onClick={() => handleNavClick('certificates')}
              whileHover={{ 
                scale: 1.05,
                color: theme.accent,
                background: activeSection === 'certificates' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiAward /> Certificates
            </motion.a>
            <motion.a
              href="#contact"
              style={navLinkStyle(activeSection === 'contact')}
              onClick={() => handleNavClick('contact')}
              whileHover={{ 
                scale: 1.05,
                color: theme.accent,
                background: activeSection === 'contact' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMessageSquare /> Contact
            </motion.a>
          </div>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            style={{
              background: 'transparent',
              border: 'none',
              color: theme.text,
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu - Matches your screenshot layout */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={mobileMenuStyle}
          >
            <a
              href="#home"
              style={activeSection === 'home' ? activeMobileMenuItemStyle : mobileMenuItemStyle}
              onClick={() => handleNavClick('home')}
            >
              <FiHome /> Home
            </a>
            <a
              href="#about"
              style={activeSection === 'about' ? activeMobileMenuItemStyle : mobileMenuItemStyle}
              onClick={() => handleNavClick('about')}
            >
              <FiUser /> About
            </a>
            <a
              href="#skills"
              style={activeSection === 'skills' ? activeMobileMenuItemStyle : mobileMenuItemStyle}
              onClick={() => handleNavClick('skills')}
            >
              <FiCode /> Skills
            </a>
            <a
              href="#projects"
              style={activeSection === 'projects' ? activeMobileMenuItemStyle : mobileMenuItemStyle}
              onClick={() => handleNavClick('projects')}
            >
              <FiLayers /> Projects
            </a>
            <a
              href="#certificates"
              style={activeSection === 'certificates' ? activeMobileMenuItemStyle : mobileMenuItemStyle}
              onClick={() => handleNavClick('certificates')}
            >
              <FiAward /> Certificates
            </a>
            <a
              href="#contact"
              style={activeSection === 'contact' ? activeMobileMenuItemStyle : mobileMenuItemStyle}
              onClick={() => handleNavClick('contact')}
            >
              <FiMessageSquare /> Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      <section id="home" style={sectionStyle}>
        <Home isDarkTheme={true} />
      </section>
      <section id="about" style={sectionStyle}>
        <About isDarkTheme={true} />
      </section>
      <section id="skills" style={sectionStyle}>
        <Skills isDarkTheme={true} />
      </section>
      <section id="projects" style={sectionStyle}>
        <Projects isDarkTheme={true} />
      </section>
      <section id="certificates" style={sectionStyle}>
        <Certificates isDarkTheme={true} />
      </section>
      <section id="contact" style={sectionStyle}>
        <Contact isDarkTheme={true} />
      </section>

      {/* Footer Component */}
      <Footer isDarkTheme={true} theme={theme} />
    </div>
  );
};

export default App;