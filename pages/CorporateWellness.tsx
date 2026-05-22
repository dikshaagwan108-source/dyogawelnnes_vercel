import React from 'react';
import Testimonials, { Testimonial } from '../components/Testimonials';

const corporateTestimonials: Testimonial[] = [
    {
        name: "Harshal Patil",
        role: "CEO",
        company: "BTB Venture Group",
        text: "On behalf of everyone at BTB Venture Group, I would like to sincerely thank you for conducting such a refreshing and energizing corporate yoga session for our team. The session brought a wonderful sense of calmness, balance, and mindfulness to the workplace. Your approach was engaging, practical, and easy for everyone to connect with, regardless of their prior experience with yoga. In the middle of fast-paced corporate routines, the session served as a powerful reminder of the importance of mental clarity, breathing, posture, and overall well-being. The team truly appreciated the positive energy, patience, and warmth you brought into the room. It was not just a yoga session, but an experience that encouraged us to pause, reset, and reconnect with ourselves.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Harshal+Patil&background=f59e0b&color=fff&size=128"
    },
    {
        name: "Kritika",
        role: "HR",
        company: "Ageittech",
        text: "Thank you for conducting such an insightful and engaging wellness session for our team. The session was truly refreshing, informative, and well-received by everyone. Your practical guidance, positive energy, and interactive approach made the session both enjoyable and meaningful. It was a great initiative towards promoting employee well-being and work-life balance. We appreciate the time and effort you invested in making this session impactful. The feedback from the team has been very positive, and we look forward to collaborating on more such sessions in the future.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Kritika&background=ec4899&color=fff&size=128"
    },
    {
        name: "Nilesh Gupta",
        role: "CEO & Founder",
        company: "NRSolutions4u",
        text: "The session was highly engaging, calming, and well-structured. The techniques and relaxation you taught were simple, effective, and easily doable even while sitting on a chair, which made it convenient for all employees to participate comfortably during working hours. Our team members found the session extremely beneficial in reducing stress and anxiety, while also helping them improve their focus, mental clarity, and overall sense of well-being. The session created a positive and refreshing environment that encouraged mindfulness, learning, and personal growth among employees.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Nilesh+Gupta&background=3b82f6&color=fff&size=128"
    }
];

const CorporateWellness: React.FC = () => {
  return (
    <div className="page-content animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="hero bg-main text-center" style={styles.hero}>
        <div className="container">
          <h1 className="title-xl text-primary animate-slide-up">Corporate Wellness</h1>
          <p className="title-md text-muted animate-slide-up delay-100" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
            Boost employee productivity, reduce stress, and build a stronger team with our tailored corporate programs.
          </p>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container grid md:grid-cols-2 gap-lg items-center">
          <div>
            <img 
              src="/corporate_wellness_team_1779372521227.png" 
              alt="Corporate Wellness Team" 
              style={styles.image} 
              className="card-hover"
            />
          </div>
          <div className="animate-slide-up delay-200">
            <h2 className="title-lg text-secondary" style={{ marginBottom: '1.5rem' }}>Why Corporate Wellness?</h2>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
              In today's fast-paced corporate world, burnout and stress are at an all-time high. Our specialized corporate wellness programs are designed to integrate seamlessly into your team's busy schedules.
            </p>
            <ul style={styles.list}>
              <li>✓ Improves Focus and Productivity</li>
              <li>✓ Reduces Stress and Anxiety</li>
              <li>✓ Enhances Team Cohesion</li>
              <li>✓ Decreases Absenteeism</li>
            </ul>
            <a href="/#contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Book a Demo Session</a>
          </div>
        </div>
      </section>

      <Testimonials 
        data={corporateTestimonials}
        title="Corporate Success Stories"
        subtitle="See how our corporate wellness sessions are transforming the workplace."
        label="Feedback"
      />
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

export default CorporateWellness;
