import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = ({ isDarkTheme, theme }) => {
  const year = new Date().getFullYear();

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '3rem 2rem 1rem',
    background: isDarkTheme ? '#0f172a' : '#f9fafb',
    color: isDarkTheme ? '#f1f5f9' : '#1e293b',
    borderTop: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : '#cbd5e1'}`,
  };

  const columnStyle = {
    flex: '1 1 300px',
    marginBottom: '2rem',
  };

  const linkStyle = {
    display: 'block',
    margin: '0.4rem 0',
    color: isDarkTheme ? '#cbd5e1' : '#334155',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const iconStyle = {
    fontSize: '1.2rem',
    marginRight: '0.5rem',
  };

  const socialIcons = [
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/pavsher',
    },
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/pavsher',
    },
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:vedantcheulkar6@gmail.com',
    },
  ];

  return (
    <>
      <motion.footer style={containerStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Column 1: Bio & Social */}
        <div style={columnStyle}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span style={{ color: '#8b5cf6' }}>Vedant</span>Cheulkar
          </h2>
          <p style={{ margin: '0.8rem 0', maxWidth: '300px', fontSize: '0.95rem' }}>
            IT student passionate about creating innovative mobile and web applications.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {socialIcons.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontSize: '1.3rem',
                  color: isDarkTheme ? '#cbd5e1' : '#1e293b',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={columnStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Quick Links</h3>
          {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s/g, '')}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = isDarkTheme ? '#cbd5e1' : '#334155')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Column 3: Contact */}
        <div style={columnStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Get in Touch</h3>
          <p style={linkStyle}><FiMail style={iconStyle} /> vedantcheulkar6@gmail.com</p>
          <p style={linkStyle}><FiPhone style={iconStyle} /> +91 8879139228</p>
          <p style={linkStyle}><FiMapPin style={iconStyle} /> Navi Mumbai, Maharashtra, India</p>
        </div>
      </motion.footer>

      {/* Bottom Bar */}
      <motion.div
        style={{
          textAlign: 'center',
          paddingBottom: '1rem',
          background: isDarkTheme ? '#0f172a' : '#f9fafb',
          color: isDarkTheme ? '#94a3b8' : '#64748b',
          fontSize: '0.85rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        © {year} Vedant Cheulkar. All rights reserved. Built with passion and modern web technologies.
      </motion.div>
    </>
  );
};

export default Footer;
