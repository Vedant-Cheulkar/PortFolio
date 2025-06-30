import React, { useState, useEffect } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Main container styles
  const containerStyle = {
    minHeight: '100vh',
    background: theme.gradient,
    padding: '2rem 1rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    transition: 'all 0.5s ease'
  };

  const contentWrapperStyle = {
    maxWidth: '800px',
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

  // Form styles
  const formContainerStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
    padding: '2.5rem',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    boxShadow: isDarkTheme 
      ? '0 15px 35px rgba(0, 0, 0, 0.2)'
      : '0 15px 35px rgba(0, 0, 0, 0.08)',
    marginBottom: '3rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: theme.text,
    textAlign: 'left'
  };

  const inputStyle = {
    padding: '1rem',
    borderRadius: '12px',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
    color: theme.text,
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    padding: '1rem',
    borderRadius: '12px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  // Social links styles
  const socialContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '2rem'
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    color: theme.text,
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
    transition: 'all 0.3s ease'
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
    
    .hover-lift:hover {
      transform: translateY(-5px);
    }
    
    .fade-in {
      animation: fadeInUp 0.8s ease forwards;
    }
    
    input:focus, textarea:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
    
    .social-link:hover {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
      border-color: transparent;
    }
    
    @media (max-width: 768px) {
      .form-container {
        padding: 1.5rem !important;
      }
      
      .social-container {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact">
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

        <div style={contentWrapperStyle} className="fade-in">
          
          {/* Header */}
          <div style={headerStyle}>
            <h1 style={titleStyle}>Get In Touch</h1>
            <p style={subtitleStyle}>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          {/* Contact Form */}
          <motion.div 
            style={formContainerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="form-container"
          >
            <form style={formStyle} onSubmit={handleSubmit}>
              <div style={inputGroupStyle}>
                <label htmlFor="name" style={labelStyle}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="email" style={labelStyle}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="message" style={labelStyle}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  style={textareaStyle}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                style={buttonStyle}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            style={socialContainerStyle}
            className="social-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="mailto:youremail@example.com"
              style={socialLinkStyle}
              className="social-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail /> Email
            </motion.a>

            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              className="social-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub /> GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              className="social-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin /> LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
    </section>
  );
};

export default Contact;