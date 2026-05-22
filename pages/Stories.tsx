import React from 'react';

const Stories: React.FC = () => {
  return (
    <div className="page-content animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="hero bg-main flex items-center justify-center text-center" style={styles.hero}>
        <div className="container">
          <h1 className="title-xl text-primary animate-slide-up">Success Stories</h1>
          <p className="title-md text-muted animate-slide-up delay-100" style={{ maxWidth: '800px', margin: '1rem auto' }}>
            Hear from our community about how D'YOGA has transformed their lives and workplaces.
          </p>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container grid md:grid-cols-2 gap-lg items-center" style={{ marginBottom: '4rem' }}>
          <div>
            <img 
              src="/stories_hero_1779354573274.png" 
              alt="Community Success" 
              style={styles.image} 
              className="card-hover"
            />
          </div>
          <div className="animate-slide-up delay-200">
            <h2 className="title-lg text-secondary" style={{ marginBottom: '1.5rem' }}>Real Impact</h2>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              "Since introducing D'YOGA to our office, we've seen a noticeable shift in team morale. Afternoon slumps have been replaced with focused energy, and our employees report feeling much more supported."
            </p>
            <p className="text-primary font-serif" style={{ fontWeight: 600, fontSize: '1.2rem' }}>
              - Sarah J., HR Director
            </p>
          </div>
        </div>

        <div className="container grid md:grid-cols-3 gap-md animate-slide-up delay-300">
            <div className="glass card-hover" style={styles.testimonialCard}>
                <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"The morning yoga sessions have completely changed how I start my day. I'm more focused and less stressed."</p>
                <h4 className="text-secondary">- Michael T.</h4>
            </div>
            <div className="glass card-hover" style={styles.testimonialCard}>
                <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Diksha's corporate background means she truly understands our struggles with desk posture and screen time."</p>
                <h4 className="text-secondary">- Priya K.</h4>
            </div>
            <div className="glass card-hover" style={styles.testimonialCard}>
                <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"A phenomenal health program that goes beyond just stretching. It's a complete lifestyle upgrade."</p>
                <h4 className="text-secondary">- David L.</h4>
            </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    minHeight: '40vh',
    borderBottom: '1px solid var(--border-color)',
  },
  image: {
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    width: '100%',
  },
  testimonialCard: {
      padding: '2rem',
      borderRadius: 'var(--radius-md)',
  }
};

export default Stories;
