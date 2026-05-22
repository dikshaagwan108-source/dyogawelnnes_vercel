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

      <section className="section bg-card">
        <div className="container grid md:grid-cols-2 gap-lg items-center">
          <div className="animate-slide-up delay-200">
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              With 7+ years of specialized experience in wellness and 11+ years of IT experience, Diksha designs and delivers evidence-based yoga programs specifically tailored for the modern workplace. Her expertise lies in creating practical, time-efficient sessions that address the unique physical and mental challenges faced by today's professionals.
            </p>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              Diksha's approach combines traditional yogic wisdom with contemporary corporate needs, offering structured programs that seamlessly integrate into busy work schedules. From desk-friendly postures to stress-management techniques, every session is purposefully designed to deliver measurable results—reduced pain, enhanced focus, and sustained energy throughout the workday.
            </p>

            <h3 className="title-md text-secondary" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>Our Coaching Philosophy</h3>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              Health and wellness coaching is a personalized, science-backed approach that helps individuals build sustainable lifestyle habits to improve their physical, mental, and emotional well-being. A health and wellness coach works closely with clients to identify the root causes affecting their health, create practical strategies, and guide them toward long-term transformation through nutrition, movement, recovery, stress management, and behavioral change.
            </p>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              Specializing in weight loss, PCOD management, hormonal balance, and mental wellness, our coaching is designed for corporate professionals whose demanding work lives often lead to stress, fatigue, poor sleep, unhealthy weight gain, burnout, and lifestyle imbalances. Through a holistic and result-oriented approach, we help professionals restore energy, improve focus, balance hormones, manage stress effectively, and create healthier routines that support both career performance and overall well-being.
            </p>
            
            <div style={{ backgroundColor: '#273a3c', borderRadius: '1rem', padding: '2rem', marginTop: '2.5rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 'bold', color: '#fcf3da', marginBottom: '1.5rem' }}>Quick Facts</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: '#e2ecec', lineHeight: 1.5 }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Wellness:</strong> 7+ years in yoga and wellness</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>IT Experience:</strong> 11+ years in IT, I understand the lifestyle pain</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Certification:</strong> Certified & experienced yoga professional</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Health Coach:</strong> Certified health coach</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#68a1a3', fontSize: '1.25rem', lineHeight: '1.3' }}>•</span>
                  <span><strong style={{ color: '#ffffff' }}>Specialization:</strong> Practical techniques tailored for desk workers</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src="/about_founder_new_1779377240704.png" 
              alt="Diksha Agwan - Founder" 
              style={styles.image} 
              className="card-hover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    padding: '4rem 1rem 3rem',
    borderBottom: '1px solid var(--border-color)',
  },
  image: {
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    width: '100%',
  }
};

export default About;
