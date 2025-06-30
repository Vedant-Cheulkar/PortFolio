import React, { useState, useEffect } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
    transition: 'transform 1s ease-out'
  };

  const mainContentStyle = {
    position: 'relative',
    zIndex: 10,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    textAlign: 'center'
  };

  const profileContainerStyle = {
    position: 'relative',
    marginBottom: '1.5rem',
    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
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
    width: 'clamp(120px, 25vw, 200px)',
    height: 'clamp(120px, 25vw, 200px)',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #1e293b 0%, #3730a3 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
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
    fontSize: 'clamp(2rem, 8vw, 4.5rem)',
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
    lineHeight: '1.1'
  };

  const nameSpanStyle = {
    background: 'linear-gradient(135deg, #60a5fa, #a855f7, #06b6d4)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'glow 2s ease-in-out infinite alternate'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: '#93c5fd',
    marginBottom: '1rem',
    fontWeight: '600',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
  };

  const descriptionStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    color: '#d1d5db',
    maxWidth: '90%',
    lineHeight: '1.7',
    marginBottom: '2rem',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: 'clamp(1rem, 3vw, 2rem)',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    opacity: isLoaded ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s'
  };

  const primaryButtonStyle = {
    position: 'relative',
    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap'
  };

  const secondaryButtonStyle = {
    position: 'relative',
    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#06b6d4',
    border: '2px solid rgba(6, 182, 212, 0.5)',
    borderRadius: '50px',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap'
  };



  const floatingOrbsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    overflow: 'hidden'
  };

  const skillTagsLeftStyle = {
    position: 'absolute',
    top: '25%',
    left: 'clamp(0.5rem, 3vw, 2rem)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const skillTagsRightStyle = {
    position: 'absolute',
    top: '35%',
    right: 'clamp(0.5rem, 3vw, 2rem)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const skillTagStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
    border: '1px solid',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
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
    
    @media (max-width: 1024px) {
      .skill-tags {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .floating-orb {
        display: none;
      }
    }
    
    @media (max-width: 480px) {
      .button-container {
        flex-direction: column;
        align-items: center;
      }
      
      .button-container button {
        width: 100%;
        max-width: 250px;
        justify-content: center;
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
            
            {/* Profile Section */}
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
                    orderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </div>
              <div style={rotatingRingStyle} />
            </div>

            {/* Main Heading */}
            <h1 style={headingStyle}>
              Hi, I'm <span style={nameSpanStyle}>Vedant Cheulkar</span>
            </h1>

            {/* Subtitle */}
            <div style={subtitleStyle}>
              ✨ Aspiring Software Developer ✨
            </div>

            {/* Description */}
            <p style={descriptionStyle}>
              IT student passionate about creating innovative mobile and web applications. Specialized in React Native, Node.js, and full-stack development. Building 
              <span style={{ color: '#06b6d4', fontWeight: '600' }}> modern</span>, 
              <span style={{ color: '#60a5fa', fontWeight: '600' }}> responsive</span>, and 
              <span style={{ color: '#a855f7', fontWeight: '600' }}> impactful</span> web applications.
            </p>

            {/* Action Buttons */}
            <div style={buttonContainerStyle} className="button-container">
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
                <span>About Me</span>
                <span>👤</span>
              </button>
            </div>
          </div>

          {/* Floating Skills Tags */}
          <div style={skillTagsLeftStyle} className="skill-tags">
            <div 
              style={{
                ...skillTagStyle,
                background: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                color: '#93c5fd',
                animation: 'bounce 2s infinite'
              }}
            >
              React
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

          <div style={skillTagsRightStyle} className="skill-tags">
            <div 
              style={{
                ...skillTagStyle,
                background: 'rgba(6, 182, 212, 0.2)',
                borderColor: 'rgba(6, 182, 212, 0.3)',
                color: '#67e8f9',
                animation: 'bounce 2s infinite 0.5s'
              }}
            >
              Python
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
              CSS3
            </div>
          </div>

          {/* Scroll Indicator
          <div 
            style={{
              position: 'absolute',
              bottom: '4rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#9ca3af',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease 1.4s',
              animation: 'bounce 2s infinite'
            }}
          >
            <span style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', marginBottom: '0.5rem' }}>Scroll to explore</span>
            <div 
              style={{
                width: '24px',
                height: '40px',
                border: '2px solid #9ca3af',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '8px'
              }}
            >
              <div 
                style={{
                  width: '4px',
                  height: '8px',
                  backgroundColor: '#9ca3af',
                  borderRadius: '2px',
                  animation: 'bounce 1s infinite'
                }}
              />
            </div>
          </div> */}
        </div>
      </>
    </section>
  );
};

export default Home;