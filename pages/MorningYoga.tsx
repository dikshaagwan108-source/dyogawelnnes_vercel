import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const MorningYoga: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'trial' | 'monthly'>('trial');
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate(`/payment-qr?plan=${selectedPlan}`);
  };

  return (
    <div className="page-content animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="hero bg-main text-center" style={styles.hero}>
        <div className="container">
          <h1 className="title-xl text-primary animate-slide-up">Morning Yoga</h1>
          <p className="title-md text-muted animate-slide-up delay-100" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
            Awaken your body, center your mind, and set a positive intention for the day ahead.
          </p>
        </div>
      </section>

      <section className="bg-card" style={{ padding: '1rem 0 3rem' }}>
        <div className="container grid md:grid-cols-2 gap-md" style={{ alignItems: 'start' }}>
          
          <div>
            <img 
              src="/morning_path_1779354470501.png" 
              alt="Morning Yoga" 
              style={styles.image}
              className="card-hover"
            />
          </div>

          <div className="animate-slide-up delay-200">
            <h2 className="title-lg text-secondary" style={{ marginTop: 0, paddingTop: 0, marginBottom: '1.5rem', lineHeight: 1.2 }}>Start Your Day Right</h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Morning yoga is the perfect way to kickstart your metabolism, improve circulation, and cultivate a sense of calm before the demands of the day begin. Our sequence is thoughtfully designed to gently wake up your body.
            </p>

            <div style={{ marginBottom: '2rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', border: '1px solid #e0f0f0' }}>
              <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.125rem' }}>Daily Sequence:</p>
              <ul style={styles.list}>
                <li>✓ Vitalization</li>
                <li>✓ Salutation</li>
                <li>✓ Yoga Poses</li>
                <li>✓ Breathwork</li>
                <li>✓ Relaxation & Meditation</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: '#f4f9f9', padding: '2rem', borderRadius: '1rem', border: '1px solid #e0f0f0', marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--brand-primary)', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', textAlign: 'center' }}>Choose Your Plan</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ ...styles.radioLabel, border: selectedPlan === 'trial' ? '2px solid var(--brand-primary)' : '2px solid transparent' }}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="trial" 
                    checked={selectedPlan === 'trial'} 
                    onChange={() => setSelectedPlan('trial')}
                    style={{ marginRight: '1rem', accentColor: 'var(--brand-primary)', width: '1.25rem', height: '1.25rem' }}
                  />
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>7-Day Trial</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--brand-primary)', fontSize: '1.125rem' }}>₹199</span>
                  </div>
                </label>

                <label style={{ ...styles.radioLabel, border: selectedPlan === 'monthly' ? '2px solid var(--brand-primary)' : '2px solid transparent' }}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="monthly" 
                    checked={selectedPlan === 'monthly'} 
                    onChange={() => setSelectedPlan('monthly')}
                    style={{ marginRight: '1rem', accentColor: 'var(--brand-primary)', width: '1.25rem', height: '1.25rem' }}
                  />
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Monthly Pass</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--brand-primary)', fontSize: '1.125rem' }}>₹1,499</span>
                  </div>
                </label>
              </div>

              <button className="btn btn-primary" onClick={handleCheckout} style={{ width: '100%', padding: '1.25rem', marginTop: '1.5rem', fontSize: '1.125rem' }}>
                {selectedPlan === 'trial' ? 'Start 7-Day Trial' : 'Get Monthly Pass'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                🔒 Secured by UPI QR
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
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
  },
  radioLabel: {
    display: 'flex', 
    alignItems: 'center', 
    padding: '1rem', 
    backgroundColor: '#fff', 
    borderRadius: '0.5rem', 
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'border 0.2s ease',
  }
};

export default MorningYoga;
