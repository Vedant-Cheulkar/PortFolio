import React, { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Certificates = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);
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

  const certificates = [
    {
      name: 'Introduction to AI',
      issuer: 'Coursera - Stanford University',
      date: 'March 2024',
      link: 'https://coursera.org/verify/example1',
      icon: '🧠'
    },
    {
      name: 'Frontend Development with React',
      issuer: 'Meta - Coursera',
      date: 'February 2024',
      link: 'https://coursera.org/verify/example2',
      icon: '⚛️'
    },
    {
      name: 'Firebase & Full-Stack Bootcamp',
      issuer: 'Udemy',
      date: 'January 2024',
      link: 'https://udemy.com/certificate/example3',
      icon: '🔥'
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'IBM - Coursera',
      date: 'December 2023',
      link: 'https://coursera.org/verify/example4',
      icon: '🤖'
    },
    {
      name: 'Advanced JavaScript Concepts',
      issuer: 'Frontend Masters',
      date: 'November 2023',
      link: 'https://frontendmasters.com/certificate/example5',
      icon: '📜'
    },
    {
      name: 'Cloud Computing Fundamentals',
      issuer: 'Google Cloud',
      date: 'October 2023',
      link: 'https://cloud.google.com/certificate/example6',
      icon: '☁️'
    }
  ];

  // Main container styles
  const containerStyle = {
    minHeight: '100vh',
    background: theme.gradient,
    padding: '2rem 1rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    transition: 'all 0.5s ease'
  };

  const contentWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  // Header styles
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    position: 'relative'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    background: isDarkTheme 
      ? 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #06b6d4 100%)'
      : 'linear-gradient(135deg, #1f2937 0%, #3b82f6 50%, #059669 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    letterSpacing: '-0.02em'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: theme.textSecondary,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  // Theme toggle styles
  const themeToggleStyle = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    border: `2px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
    borderRadius: '50px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.text,
    fontWeight: '500'
  };

  // Certificates grid styles
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const certificateCardStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '16px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    boxShadow: isDarkTheme 
      ? '0 15px 35px rgba(0, 0, 0, 0.2)'
      : '0 15px 35px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const certificateIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    display: 'inline-block',
    transform: 'rotate(-5deg)',
    transition: 'transform 0.3s ease'
  };

  const certificateNameStyle = {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: theme.text,
    marginBottom: '0.5rem',
    lineHeight: '1.4'
  };

  const certificateIssuerStyle = {
    fontSize: '1rem',
    color: theme.accent,
    fontWeight: '600',
    marginBottom: '0.25rem'
  };

  const certificateDateStyle = {
    fontSize: '0.9rem',
    color: theme.textSecondary,
    marginBottom: '1.5rem'
  };

  const certificateLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    color: theme.text,
    fontSize: '0.95rem',
    fontWeight: '600',
    textDecoration: 'none',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
    transition: 'all 0.3s ease'
  };

  const glowEffect = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  };

  // Animation styles
  const animationStyles = `
    @keyframes pulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
    }
    
    .fade-in {
      animation: fadeInUp 0.8s ease forwards;
    }
    
    .certificate-card:hover {
      transform: translateY(-5px);
      box-shadow: ${isDarkTheme 
        ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
        : '0 20px 40px rgba(0, 0, 0, 0.15)'};
    }
    
    .certificate-card:hover .certificate-icon {
      transform: rotate(0deg) scale(1.1);
    }
    
    .certificate-card:hover .glow-effect {
      opacity: 1;
    }
    
    .certificate-card:hover .verify-link {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
      border-color: transparent;
    }
    
    @media (max-width: 768px) {
      .grid-responsive {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="certifications">
    <>
      <style>{animationStyles}</style>
      <div style={containerStyle}>
        
        {/* Theme Toggle */}
        <motion.div 
          style={themeToggleStyle}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isDarkTheme ? '☀️' : '🌙'}</span>
          <span>{isDarkTheme ? 'Light' : 'Dark'}</span>
        </motion.div>

        <div style={contentWrapperStyle}>
          
          {/* Header */}
          <div style={headerStyle}>
            <h1 style={titleStyle}>My Certificates</h1>
            <p style={subtitleStyle}>
              Recognized achievements and qualifications in various technologies and methodologies.
            </p>
          </div>

          {/* Certificates Grid */}
          <div style={gridStyle} className="grid-responsive">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                style={certificateCardStyle}
                className="certificate-card fade-in hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glow-effect" style={glowEffect}></div>
                <div className="certificate-icon" style={certificateIconStyle}>
                  {cert.icon}
                </div>
                <h3 style={certificateNameStyle}>{cert.name}</h3>
                <p style={certificateIssuerStyle}>{cert.issuer}</p>
                <p style={certificateDateStyle}>{cert.date}</p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={certificateLinkStyle}
                  className="verify-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink /> Verify Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
              maxWidth: '800px',
              margin: '0 auto'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: certificates.length * 0.1 + 0.3 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: theme.text,
              marginBottom: '1rem'
            }}>
              Continuous Learning Journey
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: theme.textSecondary,
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              I'm committed to expanding my knowledge and skills through continuous education. 
              Currently pursuing more certifications in advanced topics.
            </p>
            <motion.button
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log('Navigate to contact')}
            >
              See My Learning Path
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
    </section>
  );
};

export default Certificates;