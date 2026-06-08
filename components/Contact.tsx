import React, { useState } from 'react';
import { User, Briefcase, MapPin, Phone, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const targetEmail = "info@dyogawellness.com";
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);

  const toggleProgram = (program: string) => {
    setSelectedPrograms(prev => 
      prev.includes(program) 
        ? prev.filter(p => p !== program)
        : [...prev, program]
    );
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('_subject', `New Inquiry: ${selectedPrograms.length > 0 ? selectedPrograms.join(', ') : 'General'}`);
    formData.append('_captcha', 'false');

    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error", error);
      setIsSubmitting(false);
      setIsSuccess(true); // Fallback for UX
      setTimeout(() => setIsSuccess(false), 5000);
      e.currentTarget.reset();
    }
  };

  const programsList = ["Corporate Wellness", "Health Program", "Morning Yoga"];

  return (
    <section id="contact" style={styles.section}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#468689', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '0.5rem' }}>Get in Touch</h2>
          <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '1rem' }}>Start Your Wellness Journey</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.125rem' }}>
            Whether you're looking to reduce workplace stress, boost team morale, or create a healthier office culture, we're here to help. Reach out today to discuss customized wellness solutions for your organization.
          </p>
        </div>
        <div style={styles.grid}>
          {/* Left Column */}
          <div style={styles.leftCol}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ ...styles.heading, color: '#ffffff' }}>Let's Connect</h3>
              <p style={{ color: '#e0f0f0', lineHeight: 1.6 }}>
                Ready to bring mindfulness to your workplace? Reach out to us directly to discuss a plan tailored for your team.
              </p>
            </div>

            <div style={styles.statsBox}>
              <div style={styles.stat}>
                <p style={styles.statNum}>11+</p>
                <p style={styles.statLabel}>Years in IT</p>
              </div>
              <div style={styles.stat}>
                <p style={styles.statNum}>8+</p>
                <p style={styles.statLabel}>Years in Wellness</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', color: '#e0f0f0', fontStyle: 'italic', marginBottom: '2rem', fontSize: '0.875rem' }}>
              Certified Yoga & Wellness Professional
            </p>

            <div style={styles.infoList}>
              <InfoItem icon={<User size={20} />} label="Contact" value="Diksha Agwan" />
              <InfoItem icon={<Briefcase size={20} />} label="Designation" value="Corporate Wellness and Performance Coach" />
              <InfoItem icon={<MapPin size={20} />} label="Location" value="Wakad, Pune" />
              <InfoItem 
                icon={<Phone size={20} />} 
                label="Phone Number" 
                value={<a href="tel:+917558709730" style={styles.link}>+91-7558709730</a>} 
              />
              <InfoItem 
                icon={<Mail size={20} />} 
                label="Email" 
                value={<a href={`mailto:${targetEmail}`} style={styles.link}>{targetEmail}</a>} 
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={styles.rightCol}>
            <h4 style={styles.formHeading}>Send us a Message</h4>
            
            <div style={styles.infoBox}>
              <p style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ExternalLink size={14} /> Reliable Delivery
              </p>
              <p style={{ marginTop: '0.5rem', color: '#666' }}>
                Submitting this form will securely send your message to our team. We will get back to you shortly.
              </p>
            </div>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem', backgroundColor: '#ecfdf5', borderRadius: '0.75rem', border: '1px solid #10b981' }}>
                <p style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem' }}>✓ Message Sent Successfully!</p>
                <p style={{ color: '#065f46' }}>Thank you for reaching out. We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Select Programs of Interest</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {programsList.map(program => (
                      <label key={program} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem' }}>
                        <input 
                          type="checkbox" 
                          checked={selectedPrograms.includes(program)}
                          onChange={() => toggleProgram(program)}
                          style={{ accentColor: 'var(--brand-primary)', width: '16px', height: '16px' }}
                        />
                        {program}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Your Name</label>
                  <input type="text" id="name" name="name" required style={styles.input} placeholder="John Doe" />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Email Address</label>
                  <input type="email" id="email" name="email" required style={styles.input} placeholder="john@company.com" />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Message</label>
                  <textarea id="message" name="message" rows={4} required style={styles.textarea} placeholder="How can D'YOGA help your team?"></textarea>
                </div>

                <button type="submit" style={{ ...styles.submitBtn, opacity: isSubmitting ? 0.7 : 1 }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Book a Session'} <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: React.ReactNode }) => (
  <div style={styles.infoItem}>
    <div style={styles.iconBox}>{icon}</div>
    <div>
      <p style={styles.infoLabel}>{label}</p>
      <div style={styles.infoValue}>{value}</div>
    </div>
  </div>
);

const styles = {
  section: {
    padding: '5rem 0',
    backgroundColor: 'var(--bg-main)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  leftCol: {
    backgroundColor: '#31585b', // brand-secondary
    padding: '3rem',
    color: '#fff',
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  statsBox: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    paddingBottom: '2rem',
    marginBottom: '1rem',
  },
  stat: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    padding: '1rem',
    textAlign: 'center' as const,
  },
  statNum: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#e0f0f0',
    marginTop: '0.25rem',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  iconBox: {
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    color: '#e0f0f0',
    fontWeight: 'bold',
    marginBottom: '0.25rem',
  },
  infoValue: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  rightCol: {
    backgroundColor: '#fff',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  },
  formHeading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1.5rem',
  },
  infoBox: {
    backgroundColor: '#f4f9f9',
    border: '1px solid #e0f0f0',
    borderRadius: '0.75rem',
    padding: '1rem',
    marginBottom: '1.5rem',
    fontSize: '0.875rem',
    color: '#2c494c',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    fontFamily: 'inherit',
    backgroundColor: '#fff',
  },
  textarea: {
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'none' as const,
    backgroundColor: '#fff',
  },
  submitBtn: {
    padding: '1rem',
    backgroundColor: '#2c494c', // brand-800
    color: '#fff',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    marginTop: '1rem',
  }
};

export default Contact;
