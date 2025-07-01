import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
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

  const projects = [
    {
      title: 'RealEyez – The DeepFake AI',
      description: 'A web app that detects AI-generated vs real images using EfficientNet CNN, built with Django and TensorFlow.',
      tech: ['Python', 'TensorFlow', 'Django', 'Bootstrap'],
      link: 'https://github.com/yourusername/RealEyez',
      demoVideo: '/videos/realeyez-demo.mp4' // Place video in public/videos/
    },
    {
      title: 'Skill Mapping & Adaptive Learning',
      description: 'AI-based platform that maps user skills and generates adaptive learning pathways. Built during a hackathon.',
      tech: ['React', 'Firebase', 'OpenAI'],
      link: 'https://github.com/yourusername/SkillMapAI',
      demoVideo: '/videos/skillmap-demo.mp4'
    },
    {
      title: 'Community Guardian Network',
      description: 'React Native app that connects women with verified counselors and emergency support, including SOS and live tracking.',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      link: 'https://github.com/yourusername/GuardianApp',
      demoVideo: '/videos/guardian-demo.mp4'
    },
  ];

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem'
  };

  const modalContentStyle = {
    position: 'relative',
    background: '#000',
    borderRadius: '12px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'hidden'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    zIndex: 10
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    display: 'block'
  };

  const containerStyle = {
    minHeight: '100vh',
    background: theme.gradient,
    padding: '2rem 1rem',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.5s ease'
  };

  const contentWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
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
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: theme.textSecondary,
    maxWidth: '600px',
    margin: '0 auto'
  };

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
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.text,
    fontWeight: '500'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const projectCardStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    boxShadow: isDarkTheme 
      ? '0 15px 35px rgba(0, 0, 0, 0.2)'
      : '0 15px 35px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    transition: 'all 0.3s ease'
  };

  const projectContentStyle = { padding: '1.5rem' };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: theme.text,
    marginBottom: '0.75rem'
  };

  const projectDescriptionStyle = {
    fontSize: '1rem',
    color: theme.textSecondary,
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  };

  const techListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };

  const techTagStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    color: theme.text,
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    fontSize: '0.85rem',
    fontWeight: '500',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    color: theme.text,
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
  };

  const animationStyles = `
    .project-card:hover {
      transform: translateY(-10px);
    }

    @media (max-width: 768px) {
      .grid-responsive {
        grid-template-columns: 1fr !important;
      }
      
      .button-group {
        flex-direction: column;
      }
    }
  `;

  return (
    <section id="projects">
      <>
        <style>{animationStyles}</style>
        <div style={containerStyle}>
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
            <div style={headerStyle}>
              <h1 style={titleStyle}>My Projects</h1>
              <p style={subtitleStyle}>
                A collection of my work showcasing my skills and creativity in solving real-world problems.
              </p>
            </div>

            <div style={gridStyle} className="grid-responsive">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  style={projectCardStyle}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div style={projectContentStyle}>
                    <h3 style={projectTitleStyle}>{project.title}</h3>
                    <p style={projectDescriptionStyle}>{project.description}</p>

                    <div style={techListStyle}>
                      {project.tech.map((tech, idx) => (
                        <span key={idx} style={techTagStyle}>{tech}</span>
                      ))}
                    </div>

                    <div style={buttonGroupStyle} className="button-group">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={secondaryButtonStyle}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub /> Code
                      </motion.a>
                      <motion.button
                        style={primaryButtonStyle}
                        onClick={() => setSelectedVideo(project.demoVideo)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink /> Live Demo
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              style={{
                textAlign: 'center',
                marginTop: '4rem',
                background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                padding: '2rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projects.length * 0.1 + 0.3 }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.text,
                marginBottom: '1rem'
              }}>
                Have a Project in Mind?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: theme.textSecondary,
                marginBottom: '1.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                I'm always excited to collaborate on new ideas and challenging projects. Let's bring your vision to life!
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
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <button style={closeButtonStyle} onClick={() => setSelectedVideo(null)}>
                <FiX />
              </button>
              <video src={selectedVideo} controls style={videoStyle} />
            </div>
          </div>
        )}
      </>
    </section>
  );
};

export default Projects;
