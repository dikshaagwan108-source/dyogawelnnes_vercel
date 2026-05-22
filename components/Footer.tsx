import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, User, MapPin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div className="container grid md:grid-cols-3 gap-lg" style={styles.grid}>
        <div style={{ gridColumn: 'span 1' }}>
          <h3 style={styles.logo}>D'YOGA</h3>
          <p style={styles.textMuted}>
            Transforming corporate lives one breath at a time. Join the movement towards a healthier, happier workforce.
          </p>
          <div style={styles.socialFlex}>
            <a href="https://www.instagram.com/dyoga.diksha?igsh=MWc4eHg1NWFtaXJjdA==" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/in/diksha-a-6a668b88?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><Linkedin size={20} /></a>
            <a href="https://youtube.com/@dyoga-getfit?si=B3FQQx1z1vN97_oP" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/corporate-wellness" style={styles.link}>Corporate Wellness</Link></li>
            <li><Link to="/health-program" style={styles.link}>Health Program</Link></li>
            <li><Link to="/morning-yoga" style={styles.link}>Morning Yoga</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/stories" style={styles.link}>Stories</Link></li>
            <li><a href="/#contact" style={styles.link}>Book a Demo</a></li>
          </ul>
        </div>

        <div>
          <h4 style={styles.heading}>Contact Us</h4>
          <ul style={styles.list}>
            <li style={styles.contactItem}>
              <User size={16} />
              <span>Diksha Agwan</span>
            </li>
            <li style={styles.contactItem}>
              <MapPin size={16} />
              <span>Wakad, Pune</span>
            </li>
            <li style={styles.contactItem}>
              <Phone size={16} />
              <a href="tel:+917558709730" style={styles.link}>+91-7558709730</a>
            </li>
            <li style={styles.contactItem}>
              <Mail size={16} />
              <a href="mailto:info@dyogawellness.com" style={styles.link}>info@dyogawellness.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container" style={styles.bottom}>
        <p style={{ color: '#94c5c7', fontSize: '0.875rem' }}>© {new Date().getFullYear()} D'YOGA. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#273e40', // old brand-900
    color: '#ffffff',
    padding: '4rem 0 2rem 0',
    marginTop: 'auto',
  },
  grid: {
    marginBottom: '3rem',
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ffffff',
  },
  textMuted: {
    color: '#c0dfe0', // old brand-200
    marginBottom: '1.5rem',
    maxWidth: '300px',
    lineHeight: 1.6,
  },
  socialFlex: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    padding: '0.5rem',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  heading: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#c0dfe0',
  },
  link: {
    color: '#c0dfe0',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  bottom: {
    borderTop: '1px solid #31585b', // old brand-700
    paddingTop: '2rem',
    textAlign: 'center' as const,
  }
};

export default Footer;
