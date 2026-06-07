import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Corporate Wellness', path: '/corporate-wellness' },
    { name: 'Health Program', path: '/health-program' },
    { name: 'Morning Yoga', path: '/morning-yoga' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blog' },
  ];

  return (
    <header className={`header ${scrolled ? 'glass' : ''}`} style={styles.header}>
      <div className="container flex justify-between items-center" style={styles.container}>
        <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
          <img src="/dyoga-logo.png" alt="D'YOGA Logo" style={{ height: '50px', width: 'auto' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ ...styles.logo, color: '#2c494c', lineHeight: 1 }}>D'YOGA</span>
            <span style={{ fontSize: '1.05rem', color: '#386c70', fontWeight: 600, letterSpacing: '0.5px', marginTop: '2px' }}>Corporate wellness solutions</span>
          </div>
        </Link>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`} style={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{
                ...styles.navLink,
                color: location.pathname === link.path ? 'var(--brand-primary)' : 'var(--text-main)'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={styles.mobileBtn}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: '1rem 0',
  },
  container: {
    padding: '0 2rem',
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '2px',
  },
  navDesktop: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    fontSize: '0.9rem',
    letterSpacing: '1px',
    transition: 'color 0.3s ease',
  },
  mobileBtn: {
    display: 'none', // We'll assume desktop first, use media queries for mobile if needed, but inline styles don't support media queries.
    // For a real production app, we'd move this to CSS. I'll add some base classes to index.css if needed.
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'var(--text-main)',
  }
};

export default Header;