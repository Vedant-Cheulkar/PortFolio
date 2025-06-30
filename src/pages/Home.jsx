import React, { useState, useEffect } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleProjectsClick = () => {
    console.log('Navigate to projects');
  };

  const handleAboutClick = () => {
    console.log('Navigate to about');
  };

  // Enhanced Styles with responsive design
  const containerStyle = {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, 
      rgba(59, 130, 246, 0.1) 0%, 
      rgba(147, 51, 234, 0.1) 50%, 
      rgba(6, 182, 212, 0.1) 100%)`,
    transform: isMobile ? 'none' : `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
    transition: 'transform 1s ease-out'
  };

  const mainContentStyle = {
    position: 'relative',
    zIndex: 10,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '2rem',
    textAlign: isMobile ? 'center' : 'left',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: isMobile ? '1rem' : '4rem'
  };

  const textContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'flex-start',
    marginTop: isMobile ? '0' : '-180px', // Add negative margin to move up
    paddingTop: '0' // Remove any default padding
  };

  const profileContainerStyle = {
    position: 'relative',
    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: isMobile ? '1.5rem' : 0,
    marginTop: isMobile ? '1rem' : '50px',
    alignSelf: isMobile ? 'center' : 'flex-start'
  };

  const profileGlowStyle = {
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
    borderRadius: '50%',
    filter: 'blur(8px)',
    opacity: 0.7,
    animation: 'pulse 2s infinite'
  };

  const profileImageStyle = {
    position: 'relative',
    width: isMobile ? '180px' : 'clamp(200px, 25vw, 300px)',
    height: isMobile ? '180px' : 'clamp(200px, 25vw, 300px)',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #1e293b 0%, #3730a3 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: 'white',
    border: '4px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.5s ease',
    cursor: 'pointer'
  };

  const rotatingRingStyle = {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    border: '2px dashed rgba(6, 182, 212, 0.5)',
    borderRadius: '50%',
    animation: 'rotate 20s linear infinite'
  };

  const headingStyle = {
    fontSize: isMobile ? '2.5rem' : 'clamp(2rem, 8vw, 4.5rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #06b6d4 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
    lineHeight: '1.1',
    textAlign: isMobile ? 'center' : 'left'
  };

  const nameSpanStyle = {
    background: 'linear-gradient(135deg, #60a5fa, #a855f7, #06b6d4)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'glow 2s ease-in-out infinite alternate'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1.1rem' : 'clamp(1rem, 4vw, 1.5rem)',
    color: '#93c5fd',
    marginBottom: '1rem',
    fontWeight: '600',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
    textAlign: isMobile ? 'center' : 'left'
  };

  const descriptionStyle = {
    fontSize: isMobile ? '1rem' : 'clamp(1rem, 3vw, 1.25rem)',
    color: '#d1d5db',
    maxWidth: isMobile ? '100%' : '90%',
    lineHeight: '1.7',
    marginBottom: '2rem',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
    textAlign: isMobile ? 'center' : 'left',
    padding: isMobile ? '0 1rem' : 0
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: isMobile ? '1rem' : 'clamp(1rem, 3vw, 2rem)',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'flex-start',
    marginBottom: '2rem',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s',
    width: isMobile ? '100%' : 'auto'
  };

  const primaryButtonStyle = {
    position: 'relative',
    padding: isMobile ? '0.75rem 1.5rem' : 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: isMobile ? '0.9rem' : 'clamp(0.9rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
    width: isMobile ? '100%' : 'auto',
    minWidth: isMobile ? '100%' : '200px',
    maxWidth: isMobile ? '250px' : 'none',
    justifyContent: 'center'
  };

  const secondaryButtonStyle = {
    position: 'relative',
    padding: isMobile ? '0.75rem 1.5rem' : 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#06b6d4',
    border: '2px solid rgba(6, 182, 212, 0.5)',
    borderRadius: '50px',
    fontSize: isMobile ? '0.9rem' : 'clamp(0.9rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
    width: isMobile ? '100%' : 'auto',
    minWidth: isMobile ? '100%' : '200px',
    maxWidth: isMobile ? '250px' : 'none',
    justifyContent: 'center'
  };

//   // Add this new style for mobile skill tags
// const mobileSkillsContainer = {
//   display: isMobile ? 'flex' : 'none',
//   flexWrap: 'wrap',
//   justifyContent: 'center',
//   gap: '0.5rem',
//   width: '100%',
//   padding: '0 1rem',
//   marginBottom: '2rem'
// };

// const mobileSkillTag = {
//   padding: '0.4rem 0.8rem',
//   borderRadius: '20px',
//   fontSize: '0.8rem',
//   fontWeight: '500',
//   backdropFilter: 'blur(10px)',
//   border: '1px solid rgba(255, 255, 255, 0.1)',
//   background: 'rgba(255, 255, 255, 0.05)'
// };

  const floatingOrbsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    overflow: 'hidden'
  };

  const skillTagStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
    border: '1px solid',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    display: isMobile ? 'none' : 'block'
  };

  // CSS Animations as a style element
  const animationStyles = `
    @keyframes pulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes glow {
      0% { filter: brightness(1); }
      100% { filter: brightness(1.2); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(90deg); }
      50% { transform: translateY(0px) rotate(180deg); }
      75% { transform: translateY(-10px) rotate(270deg); }
    }
    
    .floating-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(20px);
      animation: float linear infinite;
    }
    
    .orb-1 {
      width: clamp(80px, 15vw, 150px);
      height: clamp(80px, 15vw, 150px);
      background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
      top: 10%;
      left: 10%;
      animation-duration: 6s;
    }
    
    .orb-2 {
      width: clamp(60px, 10vw, 100px);
      height: clamp(60px, 10vw, 100px);
      background: radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%);
      top: 20%;
      right: 15%;
      animation-duration: 8s;
      animation-delay: 2s;
    }
    
    .orb-3 {
      width: clamp(120px, 20vw, 200px);
      height: clamp(120px, 20vw, 200px);
      background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
      bottom: 20%;
      left: 20%;
      animation-duration: 10s;
      animation-delay: 4s;
    }
    
    .orb-4 {
      width: clamp(80px, 12vw, 120px);
      height: clamp(80px, 12vw, 120px);
      background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%);
      bottom: 15%;
      right: 10%;
      animation-duration: 7s;
      animation-delay: 1s;
    }
    
    .hover-scale:hover {
      transform: scale(1.05);
    }
    
    .hover-glow:hover {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
    }
    
    @media (max-width: 768px) {
      .floating-orb {
        display: none;
      }
      
      #home .main-content {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
    }
  `;

  return (
    <section id="home">
      <>
        <style>{animationStyles}</style>
        <div style={containerStyle}>
          {/* Background Effects */}
          <div style={backgroundOverlayStyle} />
          
          {/* Floating Orbs */}
          <div style={floatingOrbsStyle}>
            <div className="floating-orb orb-1" />
            <div className="floating-orb orb-2" />
            <div className="floating-orb orb-3" />
            <div className="floating-orb orb-4" />
          </div>

          {/* Main Content */}
          <div style={mainContentStyle}>
            {/* Profile Section - Moved to top on mobile */}
            <div style={profileContainerStyle}>
              <div style={profileGlowStyle} />
              <div 
                style={profileImageStyle}
                className="hover-scale"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src="/20200402_003448.jpg"
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </div>
              <div style={rotatingRingStyle} />
            </div>

            {/* Text Content */}
            <div style={textContentStyle}>
              {/* Main Heading */}
              <h1 style={headingStyle}>
                Hi, I'm <span style={nameSpanStyle}>Vedant Cheulkar</span>
              </h1>

              {/* Subtitle */}
              <div style={subtitleStyle}>
                ✨ App & Web Developer ✨
              </div>

              {/* Description */}
              <p style={descriptionStyle}>
                IT student passionate about creating innovative mobile and web applications. Specialized in React Native, Node.js, and full-stack development.
              </p>

              {/* Action Buttons */}
              <div style={buttonContainerStyle}>
                <button 
                  style={primaryButtonStyle}
                  className="hover-glow"
                  onClick={handleProjectsClick}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 15px 40px rgba(37, 99, 235, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
                  }}
                >
                  <span>View Projects</span>
                  <span>→</span>
                </button>

                <button 
                  style={secondaryButtonStyle}
                  onClick={handleAboutClick}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.borderColor = '#06b6d4';
                    e.target.style.background = 'rgba(6, 182, 212, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.borderColor = 'rgba(6, 182, 212, 0.5)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <span>Get In Touch</span>
                  <span>👤</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating Skills Tags - Only visible on desktop */}
          {!isMobile && (
            <>
              <div style={{
                position: 'absolute',
                top: '70%',
                left: '5%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div 
                  style={{
                    ...skillTagStyle,
                    background: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    color: '#93c5fd',
                    animation: 'bounce 2s infinite'
                  }}
                >
                  React Native
                </div>
                <div 
                  style={{
                    ...skillTagStyle,
                    background: 'rgba(147, 51, 234, 0.2)',
                    borderColor: 'rgba(147, 51, 234, 0.3)',
                    color: '#c4b5fd',
                    animation: 'bounce 2s infinite 1s'
                  }}
                >
                  JavaScript
                </div>
                <div 
                  style={{
                    ...skillTagStyle,
                    background: 'rgba(34, 197, 94, 0.2)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                    color: '#86efac',
                    animation: 'bounce 2s infinite 2s'
                  }}
                >
                  Node.js
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '35%',
                right: '4%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div 
                  style={{
                    ...skillTagStyle,
                    background: 'rgba(6, 182, 212, 0.2)',
                    borderColor: 'rgba(6, 182, 212, 0.3)',
                    color: '#67e8f9',
                    animation: 'bounce 2s infinite 0.5s'
                  }}
                >
                  HTML/CSS
                </div>
                <div 
                  style={{
                    ...skillTagStyle,
                    background: 'rgba(236, 72, 153, 0.2)',
                    borderColor: 'rgba(236, 72, 153, 0.3)',
                    color: '#f9a8d4',
                    animation: 'bounce 2s infinite 1.5s'
                  }}
                >
                  MongoDB
                </div>
                <div 
                  style={{
                    ...skillTagStyle,
                    background: 'rgba(245, 158, 11, 0.2)',
                    borderColor: 'rgba(245, 158, 11, 0.3)',
                    color: '#fcd34d',
                    animation: 'bounce 2s infinite 2.5s'
                  }}
                >
                  Full Stack
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </section>
  );
};

export default Home;