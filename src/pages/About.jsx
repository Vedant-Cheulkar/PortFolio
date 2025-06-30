import React, { useState, useEffect } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [activeSection, setActiveSection] = useState('education');

  useEffect(() => {
    setIsLoaded(true);
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

  // Profile section styles
  const profileSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
    gap: '3rem',
    marginBottom: '4rem',
    alignItems: 'start'
  };

  const profileImageContainerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  };

  const profileImageStyle = {
    width: '280px',
    height: '350px',
    borderRadius: '20px',
    background: isDarkTheme 
      ? 'linear-gradient(135deg, #1e293b 0%, #3730a3 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    fontWeight: 'bold',
    color: theme.text,
    border: `4px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
    boxShadow: isDarkTheme 
      ? '0 20px 40px rgba(0, 0, 0, 0.3)'
      : '0 20px 40px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.5s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const profileGlowStyle = {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
    borderRadius: '25px',
    filter: 'blur(15px)',
    opacity: isDarkTheme ? 0.7 : 0.3,
    animation: 'pulse 3s infinite',
    zIndex: -1
  };

  const bioSectionStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
    borderRadius: '20px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    boxShadow: isDarkTheme 
      ? '0 10px 30px rgba(0, 0, 0, 0.2)'
      : '0 10px 30px rgba(0, 0, 0, 0.05)'
  };

  // Navigation tabs styles
  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const tabStyle = (isActive) => ({
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    background: isActive 
      ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
      : isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    color: isActive ? '#ffffff' : theme.text,
    border: isActive 
      ? 'none' 
      : `2px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isActive 
      ? '0 10px 25px rgba(59, 130, 246, 0.3)' 
      : 'none'
  });

  // Content sections styles
  const contentSectionStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
    padding: '2.5rem',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    boxShadow: isDarkTheme 
      ? '0 15px 35px rgba(0, 0, 0, 0.2)'
      : '0 15px 35px rgba(0, 0, 0, 0.08)',
    marginBottom: '2rem'
  };

  const sectionTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: theme.text,
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const listItemStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
    padding: '1.5rem',
    borderRadius: '15px',
    marginBottom: '1rem',
    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
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
    
    @media (max-width: 768px) {
      .grid-responsive {
        grid-template-columns: 1fr !important;
        text-align: center;
      }
    }
  `;

  const sections = {
    education: {
      title: "🎓 Education",
      content: [
        {
          title: "Bachelor of Technology (B.Tech)",
          subtitle: "Computer Science Engineering",
          details: "Currently in 3rd year • Expected Graduation: 2026",
          description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and modern development practices."
        },
        {
          title: "Academic Focus",
          subtitle: "Core Subjects",
          details: "Data Structures • Algorithms • Web Development • Database Systems",
          description: "Building strong foundation in computer science with hands-on experience in modern technologies."
        }
      ]
    },
    interests: {
      title: "💡 Interests & Passions",
      content: [
        {
          title: "Web Development",
          subtitle: "Full-Stack Development",
          details: "React • Node.js • JavaScript • Modern Frameworks",
          description: "Passionate about creating responsive, user-friendly web applications with clean, efficient code."
        },
        {
          title: "Problem Solving",
          subtitle: "Algorithmic Thinking",
          details: "Data Structures • Competitive Programming • Optimization",
          description: "Love tackling complex problems and finding elegant solutions through logical thinking."
        },
        {
          title: "Technology Innovation",
          subtitle: "Emerging Technologies",
          details: "AI/ML • Cloud Computing • Mobile Development",
          description: "Always eager to learn and experiment with cutting-edge technologies and industry trends."
        }
      ]
    },
    aspirations: {
      title: "🚀 Aspirations & Goals",
      content: [
        {
          title: "Software Engineering Excellence",
          subtitle: "Professional Development",
          details: "Clean Code • Best Practices • Team Collaboration",
          description: "Aspiring to become a skilled software engineer who writes maintainable, scalable code and contributes meaningfully to projects."
        },
        {
          title: "Innovation & Impact",
          subtitle: "Making a Difference",
          details: "User-Centric Solutions • Social Impact • Open Source",
          description: "Goal to create technology solutions that solve real-world problems and make a positive impact on people's lives."
        },
        {
          title: "Continuous Learning",
          subtitle: "Growth Mindset",
          details: "New Technologies • Industry Trends • Skill Development",
          description: "Committed to lifelong learning and staying updated with the rapidly evolving technology landscape."
        }
      ]
    }
  };

  return (
    <section id="about">
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
            <h1 style={titleStyle}>About Me</h1>
            <p style={subtitleStyle}>
              Passionate developer with a drive for creating innovative solutions and continuously learning new technologies.
            </p>
          </div>

          {/* Profile Section */}
          <div style={{...profileSectionStyle}} className="grid-responsive">
            <div style={profileImageContainerStyle}>
              <div style={profileGlowStyle} />
              <div style={profileImageStyle} className="hover-lift">
                <span>👨‍💻</span>
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(59, 130, 246, 0.9)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Pav Sher
                </div>
              </div>
            </div>
            
            <div style={bioSectionStyle} className="fade-in">
              <h2 style={{...sectionTitleStyle, marginBottom: '1rem'}}>
                Hello! I'm Pav Sher
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: theme.textSecondary,
                marginBottom: '1.5rem'
              }}>
                A dedicated 3rd-year B.Tech student with an insatiable curiosity for technology and software development. 
                I believe in the power of code to transform ideas into reality and solve meaningful problems.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {['React', 'JavaScript', 'Node.js', 'Python', 'MongoDB'].map((skill, index) => (
                  <span key={skill} style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    animation: `float 2s ease-in-out infinite ${index * 0.2}s`
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={tabsContainerStyle}>
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                style={tabStyle(activeSection === key)}
                onClick={() => setActiveSection(key)}
              >
                {sections[key].title}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div style={contentSectionStyle} className="fade-in">
            <h3 style={sectionTitleStyle}>
              {sections[activeSection].title}
            </h3>
            {sections[activeSection].content.map((item, index) => (
              <div key={index} style={listItemStyle} className="hover-lift">
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: theme.text,
                  marginBottom: '0.5rem'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: theme.accent,
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>
                  {item.subtitle}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: theme.textSecondary,
                  fontWeight: '500',
                  marginBottom: '0.75rem'
                }}>
                  {item.details}
                </p>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: theme.textSecondary
                }}>
                  {item.description}
                </p>
              </div>
            ))}
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
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.text,
                marginBottom: '1rem'
              }}>
                Let's Connect!
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: theme.textSecondary,
                marginBottom: '1.5rem'
              }}>
                Always open to collaborating on exciting projects and learning from fellow developers.
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
                Get In Touch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    </section>
  );
};

export default About;