import React, { useState, useEffect } from 'react';
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPython,
  SiMysql,
  SiRedux,
} from 'react-icons/si';

const Skills = () => {
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

  const skills = [
    { name: 'C', icon: <SiC />, level: 'Proficient', color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, level: 'Proficient', color: '#00599C' },
    { name: 'HTML', icon: <SiHtml5 />, level: 'Advanced', color: '#E34F26' },
    { name: 'CSS', icon: <SiCss3 />, level: 'Advanced', color: '#1572B6' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 'Advanced', color: '#F7DF1E' },
    { name: 'React.js', icon: <SiReact />, level: 'Intermediate', color: '#61DAFB' },
    { name: 'Redux', icon: <SiRedux />, level: 'Intermediate', color: '#764ABC' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Intermediate', color: '#06B6D4' },
    { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate', color: '#FFCA28' },
    { name: 'Git', icon: <SiGit />, level: 'Proficient', color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, level: 'Proficient', color: '#181717' },
    { name: 'Python', icon: <SiPython />, level: 'Intermediate', color: '#3776AB' },
    { name: 'MySQL', icon: <SiMysql />, level: 'Intermediate', color: '#4479A1' },
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

  // Skills grid styles
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const skillCardStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
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

  const skillIconStyle = (color) => ({
    fontSize: '3rem',
    color: color,
    marginBottom: '1rem',
    transition: 'transform 0.3s ease'
  });

  const skillNameStyle = {
    fontWeight: '600',
    fontSize: '1.3rem',
    color: theme.text,
    marginBottom: '0.5rem'
  };

  const skillLevelStyle = {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: theme.textSecondary,
    marginBottom: '1.5rem'
  };

  const progressBarStyle = (color) => ({
    height: '6px',
    width: '100%',
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    overflow: 'hidden'
  });

  const progressFillStyle = (color, level) => ({
    height: '100%',
    background: color,
    borderRadius: '10px',
    width: level === 'Proficient' ? '90%' : level === 'Advanced' ? '75%' : '60%',
    transition: 'width 1s ease'
  });

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
    
    .skill-card:hover .skill-icon {
      transform: scale(1.2);
    }
    
    .skill-card:hover .glow-effect {
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      .grid-responsive {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="skills">
    <>
      <style>{animationStyles}</style>
      <div style={containerStyle}>
        
        {/* Theme Toggle */}
        <div 
          style={themeToggleStyle}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="hover-lift"
        >
          <span>{isDarkTheme ? '☀️' : '🌙'}</span>
          <span>{isDarkTheme ? 'Light' : 'Dark'}</span>
        </div>

        <div style={contentWrapperStyle}>
          
          {/* Header */}
          <div style={headerStyle}>
            <h1 style={titleStyle}>My Skills</h1>
            <p style={subtitleStyle}>
              Technologies I've worked with and my proficiency level in each.
            </p>
          </div>

          {/* Skills Grid */}
          <div style={gridStyle} className="grid-responsive">
            {skills.map((skill, index) => (
              <div
                key={index}
                style={skillCardStyle}
                className="skill-card fade-in hover-lift"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.glow-effect').style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.glow-effect').style.opacity = 0;
                }}
              >
                <div className="glow-effect" style={glowEffect}></div>
                <div 
                  className="skill-icon" 
                  style={skillIconStyle(skill.color)}
                >
                  {skill.icon}
                </div>
                <h3 style={skillNameStyle}>{skill.name}</h3>
                <p style={skillLevelStyle}>{skill.level}</p>
                <div style={progressBarStyle(skill.color)}>
                  <div 
                    style={progressFillStyle(skill.color, skill.level)}
                    className="progress-fill"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories Section */}
          <div style={{
            background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
            borderRadius: '20px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
            boxShadow: isDarkTheme 
              ? '0 15px 35px rgba(0, 0, 0, 0.2)'
              : '0 15px 35px rgba(0, 0, 0, 0.08)',
            margin: '4rem auto',
            maxWidth: '1000px'
          }} className="fade-in">
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: theme.text,
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Skill Categories
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: 'Frontend Development',
                  skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind CSS'],
                  color: '#3b82f6'
                },
                {
                  title: 'Backend & Databases',
                  skills: ['Python', 'Firebase', 'MySQL'],
                  color: '#8b5cf6'
                },
                {
                  title: 'Tools & Others',
                  skills: ['Git', 'GitHub', 'C', 'C++'],
                  color: '#06b6d4'
                }
              ].map((category, index) => (
                <div key={index} style={{
                  background: isDarkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
                  transition: 'all 0.3s ease'
                }} className="hover-lift">
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: theme.text,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: category.color
                    }}></span>
                    {category.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {category.skills.map((skill, i) => (
                      <span key={i} style={{
                        background: isDarkTheme 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(0, 0, 0, 0.05)',
                        color: theme.text,
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <div style={{
              background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`
            }} className="fade-in">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.text,
                marginBottom: '1rem'
              }}>
                Ready to Collaborate?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: theme.textSecondary,
                marginBottom: '1.5rem'
              }}>
                I'm always excited to work on new projects and challenges. Let's build something amazing together!
              </p>
              <button style={{
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
              className="hover-lift"
              onClick={() => console.log('Navigate to contact')}>
                Contact Me →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    </section>
  );
};

export default Skills;