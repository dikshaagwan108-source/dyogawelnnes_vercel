import React from 'react';
import Testimonials, { Testimonial } from '../components/Testimonials';
import { Brain, HeartPulse, Sparkles, Scale } from 'lucide-react';

const healthTestimonials: Testimonial[] = [
    {
        name: "Program Member",
        role: "Weight Loss Journey",
        company: "D'YOGA Program",
        text: "I struggled with stubborn weight for years. D'YOGA's tailored approach helped me lose 12 kgs sustainably without extreme diets. I feel lighter, stronger, and more energetic than ever.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=A&background=f59e0b&color=fff&size=128"
    },
    {
        name: "Program Member",
        role: "Hormonal Balance",
        company: "D'YOGA Program",
        text: "After dealing with severe PCOD and hormonal imbalances, this program was a blessing. Through consistent yoga and lifestyle changes, my cycles are regular again and my symptoms have significantly reduced.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=A&background=ec4899&color=fff&size=128"
    },
    {
        name: "Program Member",
        role: "Mental Health Focus",
        company: "D'YOGA Program",
        text: "The stress of my daily life was taking a huge toll on my mental health. The mindfulness and breathing techniques I learned here have completely changed how I handle anxiety. I finally have peace of mind.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=A&background=3b82f6&color=fff&size=128"
    },
    {
        name: "Program Member",
        role: "Holistic Wellbeing",
        company: "D'YOGA Program",
        text: "I came in feeling constantly fatigued and out of sync. This program didn't just change my body; it transformed my relationship with myself. I feel incredibly balanced and truly healthy from the inside out.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=A&background=10b981&color=fff&size=128"
    }
];

const HealthProgram: React.FC = () => {
  return (
    <div className="page-content animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="hero bg-main text-center" style={styles.hero}>
        <div className="container">
          <h1 className="title-xl text-primary animate-slide-up">Health Program</h1>
          <p className="title-md text-muted animate-slide-up delay-100" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
            A holistic approach to personal health, focusing on mindfulness, physical strength, and mental clarity.
          </p>
        </div>
      </section>

      <section className="bg-card" style={{ padding: '1rem 0 3rem' }}>
        <div className="container grid md:grid-cols-2 gap-md" style={{ alignItems: 'center' }}>
          <div>
            <img 
              src="/health_path_new_1779356869878.png" 
              alt="Health Program" 
              style={styles.image} 
              className="card-hover"
            />
          </div>
          <div className="animate-slide-up delay-200">
            <h2 className="title-lg text-secondary" style={{ marginBottom: '1.5rem' }}>Transform Your Life</h2>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              Our comprehensive health program goes beyond standard yoga classes. We focus on breathing techniques, nutritional awareness, and mindfulness to bring your body and mind into perfect harmony.
            </p>
            <ul style={styles.list}>
              <li>✓ Personalized Assessment</li>
              <li>✓ Nutritional Guidance</li>
              <li>✓ Mindfulness & Meditation</li>
              <li>✓ Strength & Flexibility Training</li>
            </ul>
            <a href="/#contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Join the Program</a>
          </div>
        </div>
      </section>

      <section className="bg-card" style={{ padding: '2rem 0 3rem' }}>
        <div className="container">
          <div style={{ padding: '2rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #e0f0f0 0%, #f4f9f9 100%)', border: '1px solid var(--border-color)' }}>
            <h3 className="title-md text-primary animate-slide-up" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>What We Offer</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { icon: '🧠', text: 'Neuro-reset techniques to improve focus, energy, and resilience', delay: '0.1s' },
                { icon: '🧘', text: 'Desk-based yoga movements requiring no special equipments', delay: '0.2s' },
                { icon: '🦴', text: 'Posture correction and spine mobility practices', delay: '0.3s' },
                { icon: '👁️', text: 'Ear-Eye relaxation techniques for mental fatigue', delay: '0.4s' },
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
          </div>
        </div>
      </section>

      {/* Niche Expertise Section */}
      <section className="section bg-main" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="animate-slide-up">
            <h2 className="title-lg text-primary">Our Areas of Expertise</h2>
            <p className="text-muted" style={{ maxWidth: '800px', margin: '0.5rem auto' }}>
              We specialize in targeted yoga and wellness protocols designed to address specific health challenges and deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-md">
            <div className="path-card card-hover glass animate-slide-up delay-100" style={{ padding: '2.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <div style={{ backgroundColor: '#468689', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff' }}>
                <Brain size={32} />
              </div>
              <h3 className="title-md text-primary" style={{ marginBottom: '1rem' }}>Mental Rejuvenation</h3>
              <p className="text-muted">
                Mindfulness practices, deep relaxation, and pranayama strategies to reduce anxiety, combat stress, and foster a peaceful, resilient mind.
              </p>
            </div>

            <div className="path-card card-hover glass animate-slide-up delay-200" style={{ padding: '2.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <div style={{ backgroundColor: '#ec4899', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff' }}>
                <HeartPulse size={32} />
              </div>
              <h3 className="title-md text-primary" style={{ marginBottom: '1rem' }}>Hormonal Equilibrium</h3>
              <p className="text-muted">
                Specialized asanas and breathing techniques aimed at regulating the endocrine system, improving circulation, and restoring hormonal balance naturally.
              </p>
            </div>

            <div className="path-card card-hover glass animate-slide-up delay-300" style={{ padding: '2.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <div style={{ backgroundColor: '#3b82f6', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff' }}>
                <Sparkles size={32} />
              </div>
              <h3 className="title-md text-primary" style={{ marginBottom: '1rem' }}>Foundational Health</h3>
              <p className="text-muted">
                Sustainable weight management, improved energy, and lifestyle adjustments through dynamic yoga flows, nutrition awareness, and holistic well-being practices.
              </p>
            </div>

            <div className="path-card card-hover glass animate-slide-up delay-400" style={{ padding: '2.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <div style={{ backgroundColor: '#10b981', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#fff' }}>
                <Scale size={32} />
              </div>
              <h3 className="title-md text-primary" style={{ marginBottom: '1rem' }}>PCOS & Women's Health</h3>
              <p className="text-muted">
                Targeted yoga protocols and lifestyle interventions designed to manage PCOS symptoms, support reproductive health, and promote overall women's wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials 
        data={healthTestimonials}
        title="Real Stories, Real Results"
        subtitle="Hear from those who have transformed their lives through our holistic approach."
        label="Transformations"
      />
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
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.8rem',
    color: 'var(--text-main)',
    fontWeight: 500,
  }
};

export default HealthProgram;
