import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page-content animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="hero bg-main text-center" style={styles.hero}>
        <div className="container">
          <h1 className="title-xl text-primary animate-slide-up">About D'YOGA</h1>
          <p className="title-md text-muted animate-slide-up delay-100" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
            Meet Diksha Agwan, the visionary behind our holistic wellness approach.
          </p>
        </div>
      </section>

      <section className="bg-card" style={{ padding: '1rem 0 3rem' }}>
        <div className="container grid md:grid-cols-2 gap-md" style={{ alignItems: 'start' }}>
          <div>
            <img 
              src="/about_founder_new_1779377240704.png" 
              alt="Diksha Agwan - Founder" 
              style={styles.image} 
              className="card-hover"
            />
          </div>
          <div className="animate-slide-up delay-200">
            <h3 className="title-md text-secondary" style={{ marginBottom: '1rem' }}>About D'YOGA</h3>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              D'YOGA was founded with a simple belief: lasting wellness begins by addressing the root cause, not just the symptoms.
            </p>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              Built on over 11 years of firsthand corporate experience, we understand the realities of modern work stress, burnout, sedentary lifestyles, weight challenges, hormonal imbalances, and the struggle to prioritize health.
            </p>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              Our approach combines holistic health coaching, yoga expertise, and practical lifestyle transformation to help busy professionals achieve <strong>Mental Rejuvenation, Foundational Health, Hormonal Equilibrium, and Women's Wellbeing</strong>.
            </p>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              At D'YOGA, we don't just promote wellness — we help people build sustainable habits that support healthier, happier, and more productive lives.
            </p>

            <div style={{ marginTop: '2.5rem', padding: '2rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #e0f0f0 0%, #f4f9f9 100%)', border: '1px solid var(--border-color)' }}>
              <h3 className="title-md text-primary animate-slide-up" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>WHY D'YOGA?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: '🧠', text: 'Neuro-Reset for Focus & Resilience', delay: '0.1s' },
                  { icon: '🧘', text: 'Desk-Based Yoga for Busy Professionals', delay: '0.2s' },
                  { icon: '🦴', text: 'Posture Correction & Spine Mobility', delay: '0.3s' },
                  { icon: '👁️', text: 'Eye-Ear Relaxation for Digital Fatigue', delay: '0.4s' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="animate-slide-up card-hover"
                    style={{
                      animationDelay: item.delay,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem',
                      backgroundColor: '#fff',
                      borderRadius: '0.75rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      border: '1px solid #e0f0f0',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted animate-slide-up" style={{ animationDelay: '0.5s', textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                Designed by professionals who understand corporate life, D'YOGA delivers practical wellness solutions that fit seamlessly into the modern workplace.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#273a3c', borderRadius: '1rem', padding: '2rem', marginTop: '2.5rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 'bold', color: '#fcf3da', marginBottom: '1.5rem' }}>Quick Facts</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: '#e2ecec', lineHeight: 1.5 }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Experience:</strong> 8+ years in health, 11+ years in IT</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Certification:</strong> Certified health coach and wellbeing specialist</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Specialization:</strong> Practical techniques tailored for desk workers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    padding: '4rem 1rem 1.5rem',
  },
  image: {
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    width: '100%',
  }
};

export default About;
