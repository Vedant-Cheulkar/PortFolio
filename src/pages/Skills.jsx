import React, { useState, useEffect } from 'react';
import {
  SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiFirebase, SiGit, SiGithub, SiPython, SiMysql, SiRedux,
} from 'react-icons/si';

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [columns, setColumns] = useState(getColumns());

  useEffect(() => {
    setIsLoaded(true);
    const handleResize = () => setColumns(getColumns());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getColumns() {
    const width = window.innerWidth;
    if (width >= 1200) return 'repeat(3, 1fr)';
    if (width >= 768) return 'repeat(2, 1fr)';
    return '1fr';
  }

  const themeColors = {
    primary: '#0f172a',
    secondary: '#1e293b',
    accent: '#3b82f6',
    text: '#ffffff',
    textSecondary: '#d1d5db',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)'
  };

  const theme = themeColors;

  const skills = [
    { name: 'C', icon: <SiC />, level: 'Proficient', percentage: 85, color: '#A8B9CC', category: 'Programming', description: 'Systems programming and algorithm implementation' },
    { name: 'C++', icon: <SiCplusplus />, level: 'Proficient', percentage: 80, color: '#00599C', category: 'Programming', description: 'Object-oriented programming and data structures' },
    { name: 'HTML5', icon: <SiHtml5 />, level: 'Expert', percentage: 95, color: '#E34F26', category: 'Frontend', description: 'Semantic markup and modern web standards' },
    { name: 'CSS3', icon: <SiCss3 />, level: 'Expert', percentage: 90, color: '#1572B6', category: 'Frontend', description: 'Advanced styling, animations, and responsive design' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 'Advanced', percentage: 88, color: '#F7DF1E', category: 'Programming', description: 'ES6+, async programming, and DOM manipulation' },
    { name: 'React.js', icon: <SiReact />, level: 'Advanced', percentage: 85, color: '#61DAFB', category: 'Frontend', description: 'Component-based architecture and hooks' },
    { name: 'Redux', icon: <SiRedux />, level: 'Intermediate', percentage: 75, color: '#764ABC', category: 'Frontend', description: 'State management and predictable data flow' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Advanced', percentage: 82, color: '#06B6D4', category: 'Frontend', description: 'Utility-first CSS framework and design systems' },
    { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate', percentage: 70, color: '#FFCA28', category: 'Backend', description: 'Authentication, database, and hosting services' },
    { name: 'Git', icon: <SiGit />, level: 'Proficient', percentage: 85, color: '#F05032', category: 'Tools', description: 'Version control and collaborative development' },
    { name: 'GitHub', icon: <SiGithub />, level: 'Proficient', percentage: 85, color: '#ffffff', category: 'Tools', description: 'Repository management and CI/CD workflows' },
    { name: 'Python', icon: <SiPython />, level: 'Intermediate', percentage: 78, color: '#3776AB', category: 'Programming', description: 'Scripting, automation, and backend development' },
    { name: 'MySQL', icon: <SiMysql />, level: 'Intermediate', percentage: 72, color: '#4479A1', category: 'Database', description: 'Relational database design and optimization' },
  ];

  const categoriesData = [
    { title: 'Frontend Development', skills: skills.filter(s => s.category === 'Frontend'), color: '#3b82f6', icon: '🎨' },
    { title: 'Programming Languages', skills: skills.filter(s => s.category === 'Programming'), color: '#8b5cf6', icon: '💻' },
    { title: 'Backend & Database', skills: skills.filter(s => s.category === 'Backend' || s.category === 'Database'), color: '#06b6d4', icon: '⚡' },
    { title: 'Development Tools', skills: skills.filter(s => s.category === 'Tools'), color: '#10b981', icon: '🛠️' }
  ];

  return (
    <section id="skills">
      <div style={{
        minHeight: '100vh',
        background: theme.gradient,
        padding: '4rem 1rem',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        transition: 'all 0.5s ease',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{
              fontSize: window.innerWidth > 768 ? '4rem' : '2.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 30%, #06b6d4 70%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}>Technical Expertise</h1>
            <p style={{
              fontSize: '1.2rem',
              color: theme.textSecondary,
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: '1.7'
            }}>
              A comprehensive overview of my technical skills and the technologies I leverage to create exceptional digital experiences.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: theme.accent,
                  display: 'block',
                  lineHeight: '1'
                }}>13+</span>
                <span style={{
                  fontSize: '0.95rem',
                  color: theme.textSecondary,
                  marginTop: '0.5rem',
                  fontWeight: '500'
                }}>Technologies</span>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: theme.accent,
                  display: 'block',
                  lineHeight: '1'
                }}>4</span>
                <span style={{
                  fontSize: '0.95rem',
                  color: theme.textSecondary,
                  marginTop: '0.5rem',
                  fontWeight: '500'
                }}>Specializations</span>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: theme.accent,
                  display: 'block',
                  lineHeight: '1'
                }}>82%</span>
                <span style={{
                  fontSize: '0.95rem',
                  color: theme.textSecondary,
                  marginTop: '0.5rem',
                  fontWeight: '500'
                }}>Avg Proficiency</span>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto 5rem'
          }}>
            {skills.map((skill, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '24px',
                padding: '2.5rem',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                {/* Skill Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      fontSize: '3.2rem',
                      color: skill.color,
                      filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))'
                    }}>{skill.icon}</div>
                    <div>
                      <h3 style={{
                        fontWeight: '700',
                        fontSize: '1.4rem',
                        color: theme.text,
                        marginBottom: '0.3rem',
                        margin: 0
                      }}>{skill.name}</h3>
                      <p style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: theme.accent,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        margin: 0
                      }}>{skill.category}</p>
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: theme.textSecondary,
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>{skill.level}</div>
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  color: theme.textSecondary,
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}>{skill.description}</p>

                {/* Progress Bar */}
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.8rem'
                  }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: theme.text }}>Proficiency</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: theme.text }}>{skill.percentage}%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      borderRadius: '20px',
                      width: `${skill.percentage}%`,
                      transition: 'width 1s ease',
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
<div style={{
  background: 'rgba(255, 255, 255, 0.04)',
  borderRadius: '32px',
  padding: window.innerWidth < 500 ? '2rem 1rem' : '4rem 3rem',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  margin: '5rem auto',
  maxWidth: '1200px',
  width: '90%'
}}>

            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: '800',
              color: theme.text,
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.02em'
            }}>Skill Categories</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem'
            }}>
              {categoriesData.map((category, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2rem', marginRight: '1rem' }}>{category.icon}</span>
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: theme.text,
                      margin: 0
                    }}>{category.title}</h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {category.skills.map((skill, i) => (
                      <span key={i} style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: theme.text,
                        padding: '0.6rem 1.2rem',
                        borderRadius: '16px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}>{skill.name}</span>
                    ))}
                  </div>
                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: theme.textSecondary,
                      fontWeight: '500'
                    }}>
                      Average Proficiency: {Math.round(category.skills.reduce((acc, skill) => acc + skill.percentage, 0) / category.skills.length)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
