import React, { useState, useEffect } from 'react';
import { FiDownload, FiPrinter, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-medium-image-zoom/dist/styles.css';

const Certificates = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);
  }, []);

  const theme = isDarkTheme ? themeColors.dark : themeColors.light;

  const certificates = [
    {
      name: 'Nirman National Level Industrial Hackathon',
      issuer: 'odoo',
      date: 'January 2025',
      image: '/certificates/Odoo1.png',
      icon: '💻'
    },
    {
      name: 'Frontend Development with React',
      issuer: 'Meta - Coursera',
      date: 'Feb 2024',
      image: '/certificates/react.png',
      icon: '⚛️'
    },
    {
      name: 'Firebase & Full-Stack Bootcamp',
      issuer: 'Udemy',
      date: 'Jan 2024',
      image: '/certificates/firebase.png',
      icon: '🔥'
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'IBM - Coursera',
      date: 'Dec 2023',
      image: '/certificates/ml.png',
      icon: '🤖'
    },
    {
      name: 'Hands-on Flutter Workshop',
      issuer: 'ACE - PHCET',
      date: 'Feb 2025',
      image: '/certificates/flutter.png',
      icon: '🤖'
    }
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificates[selectedIndex].image;
    link.download = `${certificates[selectedIndex].name}.png`;
    link.click();
  };

  const handlePrint = () => {
    const printWindow = window.open(certificates[selectedIndex].image, '_blank');
    printWindow.print();
  };

  return (
    <section id="certifications" style={{ background: theme.gradient, padding: '2rem' }}>
      <h1 style={{ color: theme.text, textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>
        My Achievements
      </h1>

      {/* Grid of Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            style={{
              background: isDarkTheme ? 'rgba(255,255,255,0.05)' : '#f0f0f0',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              transition: '0.3s',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ fontSize: '2rem' }}>{cert.icon}</div>
            <h3 style={{ color: theme.text }}>{cert.name}</h3>
            <p style={{ color: theme.accent }}>{cert.issuer}</p>
            <p style={{ color: theme.textSecondary }}>{cert.date}</p>
            <button
              onClick={() => openModal(i)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                border: '1px solid transparent',
                background: theme.accent,
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <FiExternalLink style={{ marginRight: '0.5rem' }} />
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
{/* Modal */}
<AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(6px)'
      }}
      onClick={closeModal}
    >
<motion.div
  onClick={(e) => e.stopPropagation()}
  style={{
    background: isDarkTheme ? theme.secondary : theme.primary,
    padding: '1rem',
    borderRadius: '16px',
    maxWidth: '95vw',
    maxHeight: '90vh',
    width: '95vw',
    color: theme.text,
    position: 'relative',
    boxShadow: isDarkTheme
      ? '0 10px 40px rgba(0,0,0,0.6)'
      : '0 10px 40px rgba(0,0,0,0.1)',
    overflowY: 'auto', // Enables scroll only if needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.9 }}
>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => closeModal()}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: theme.textSecondary,
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Swiper for image navigation */}
        <Swiper
          modules={[Navigation]}
          navigation
          initialSlide={selectedIndex}
          onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
          style={{ width: '100%', height: 'auto' }}
        >
          {certificates.map((cert, i) => (
<SwiperSlide key={i}>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100%',
      padding: '1rem',
      boxSizing: 'border-box'
    }}
  >
    {/* Certificate Image */}
    <div
      style={{
        maxHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <Zoom>
        <img
          src={cert.image}
          alt={cert.name}
          style={{
            maxWidth: '600px',
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            objectFit: 'contain',
            boxShadow: isDarkTheme
              ? '0 4px 20px rgba(255,255,255,0.1)'
              : '0 4px 20px rgba(0,0,0,0.1)'
          }}
        />
      </Zoom>
    </div>

    {/* Certificate Details */}
    <div
      style={{
        marginTop: '1rem',
        textAlign: 'center',
        maxWidth: '90%',
        overflowWrap: 'break-word'
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.4rem', color: theme.text }}>
        {cert.name}
      </h2>
      <p style={{ margin: '0.25rem 0', fontWeight: '500', color: theme.accent }}>
        {cert.issuer}
      </p>
      <p style={{ margin: 0, fontSize: '0.95rem', color: theme.textSecondary }}>
        {cert.date}
      </p>
    </div>
  </div>
</SwiperSlide>


          ))}
        </Swiper>

        {/* Action Buttons */}
        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <button onClick={handleDownload} style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            background: theme.accent,
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}>
            <FiDownload style={{ marginRight: '6px' }} />
            Download
          </button>

          <button onClick={handlePrint} style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            background: isDarkTheme ? '#22c55e' : '#10b981',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}>
            <FiPrinter style={{ marginRight: '6px' }} />
            Print
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Certificates;
