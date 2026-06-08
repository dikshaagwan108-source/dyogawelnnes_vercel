import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  React.useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // Slight delay ensures layout is fully painted before scrolling
    }
  }, []);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section 
        className="hero flex flex-col justify-center items-center text-center relative"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, var(--bg-main) 0%, var(--brand-accent) 100%)',
          padding: '2rem'
        }}
      >
        <div className="container animate-slide-up delay-200" style={{ zIndex: 10, marginTop: '4rem' }}>
          <h1 className="title-xl text-primary" style={{ marginBottom: '1.5rem' }}>
            Elevate Your Well-Being
          </h1>
          <p className="title-md text-secondary" style={{ maxWidth: '800px', margin: '0 auto 3rem', fontWeight: 400 }}>
            Empowering individuals and organizations to unlock sustainable health, resilience, and peak performance through Corporate wellness and holistic health programs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#choose-path" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              Explore Paths
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.125rem', borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section id="choose-path" className="section bg-main">
        <div className="container text-center">
          <h2 className="title-lg text-primary" style={{ marginBottom: '1rem' }}>Choose Your Path</h2>
          <p className="subtitle" style={{ marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
            Whether you're looking to elevate workplace wellness, improve your health, or create healthier daily habits, we have a path designed for you.
          </p>

          <div className="grid lg:grid-cols-3 gap-lg">
            <Link to="/corporate-wellness" className="path-card card-hover glass text-center">
              <div style={styles.cardImageContainer}>
                <img src="/corporate_wellness_team_1779372521227.png" alt="Corporate Wellness" style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <h3 className="title-md text-primary">Corporate Wellness</h3>
                <p className="text-muted" style={{ marginTop: '1rem' }}>
                  Boost employee productivity, reduce stress and build a stronger team with our tailored corporate programs.
                </p>
              </div>
            </Link>

            {/* Path 2: Health Program */}
            <Link to="/health-program" className="path-card card-hover glass text-center delay-100">
              <div style={styles.cardImageContainer}>
                <img src="/health_path_new_1779356869878.png" alt="Health Program" style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <h3 className="title-md text-primary">Health Program</h3>
                <p className="text-muted" style={{ marginTop: '1rem' }}>
                  A holistic approach to personal health, focusing on mindfulness, physical strength, and mental clarity.
                </p>
              </div>
            </Link>

            {/* Path 3: Morning Yoga */}
            <Link to="/morning-yoga" className="path-card card-hover glass text-center delay-200">
              <div style={styles.cardImageContainer}>
                <img src="/morning_path_1779354470501.png" alt="Morning Yoga" style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <h3 className="title-md text-primary">Morning Yoga</h3>
                <p className="text-muted" style={{ marginTop: '1rem' }}>
                  Start your day with energy and focus. Join our morning sessions to awaken your body and mind.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

const styles = {
  cardImageContainer: {
    height: '250px',
    overflow: 'hidden',
    borderTopLeftRadius: 'var(--radius-md)',
    borderTopRightRadius: 'var(--radius-md)',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.5s ease',
  },
  cardContent: {
    padding: '2rem',
  }
};

export default Home;
