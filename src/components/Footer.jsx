import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = ({ isDarkTheme, theme }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/pavsher', // Replace with your actual GitHub
      icon: <FiGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pavsher', // Replace with your actual LinkedIn
      icon: <FiLinkedin />,
    },
    {
      name: 'Email',
      url: 'mailto:pav.sher@example.com', // Replace with your actual email
      icon: <FiMail />,
    },
  ];

  const footerStyle = {
    textAlign: 'center',
    padding: '2rem',
    background: isDarkTheme ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    marginTop: '3rem',
    borderTop: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    fontSize: '0.95rem',
    color: theme.textSecondary,
  };

  const footerLinkStyle = {
    color: theme.accent,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '0 0.75rem',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
  };

  return (
    <footer style={footerStyle}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        © {new Date().getFullYear()} Pav Sher. Built with React.js
      </motion.div>
      <motion.div 
        style={{ 
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
            whileHover={{ 
              scale: 1.05,
              background: isDarkTheme ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {link.icon} {link.name}
          </motion.a>
        ))}
      </motion.div>
    </footer>
  );
};

export default Footer;