import React, { useState } from 'react';
import { Quote, Star, X } from 'lucide-react';

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
    image: string;
}

const defaultTestimonials: Testimonial[] = [
    {
        name: "Komal",
        role: "IT Professional",
        company: "Komal Yoga",
        text: "Embarking on this yoga journey has been nothing short of transformative. From the very first class, it was clear that this was a unique experience. Every session is infused with such joy and enthusiasm that practice feels like a routine and more like a celebration of movement and breath. The ability to give personal attention to each student in the class is remarkable; you always feel seen, supported, and gently guided. No question is too small, and the answers always carry a depth of understanding. I was pleasantly moved by a pranayama session that went far beyond the clock, shared with a personal touch that beautifully merged professionalism with genuine care. The meditation sessions are truly melting away stress and leaving a profound sense of peace. As The Bhagavad Gita says, 'Yoga is the journey of the self, through the self, to the self,' and I couldn't have asked for a more incredible guide on this path. The fabulous way knowledge and practice are shared here doesn't just teach yoga; it empowers you to connect with your own inner self. I am endlessly grateful.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Komal&background=f59e0b&color=fff&size=128"
    },
    {
        name: "Kiran",
        role: "Yoga Practitioner",
        company: "Kiran Asan Yoga",
        text: "Training with Diksha Ma'am over the past two months has been a truly transformative experience. She has helped me significantly improve my body posture and overall flexibility, something I had been struggling with for a long time. Diksha Ma'am introduces new yoga techniques and poses in a way that feels both accessible and exciting. She always begins with the basics, ensuring the foundation is strong, and then gradually guides me toward more advanced poses with patience and clarity. One of the biggest surprises for me has been enjoying 24 Surya Namaskars—something I once thought was impossible! With her fun, energetic and positive teaching style, these sessions now feel like a highlight of my day. I can already see remarkable improvement in my back posture. Diksha Ma'am is a dedicated and passionate instructor who genuinely enjoys teaching yoga. She encourages us to trust our bodies and attempt challenging asanas with the right mindset and preparation. Her classes are motivating, uplifting and full of good vibes. I'm truly grateful for her guidance and would highly recommend her to anyone looking to begin or deepen their yoga practice. She has made this journey not only productive, but enjoyable and inspiring. Thank you for your guidance and motivation.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Kiran&background=7c3aed&color=fff&size=128"
    },
    {
        name: "Sachin Wani",
        role: "Corporate Professional",
        company: "Sachin Wani Asan Yoga",
        text: "I have been attending yoga sessions with Diksha ma'am for over a month now and the experience has been truly transformative. Her teaching style is patient, encouraging and deeply knowledgeable. She takes the time to correct postures, explain the purpose behind each asana, and maintain a pace that feels just right. Thanks to her guidance, I feel more energetic, focused, and connected to my body. I genuinely appreciate her commitment to creating a positive, peaceful and supportive learning environment. Diksha Ma'am creates a positive and peaceful learning environment that motivates me to grow each day. Her sessions are a perfect balance of strength, mindfulness, and relaxation. I've noticed significant improvements in my flexibility, posture and stress levels. True to the meaning of her name, 'Diksha' — a sacred initiation into learning — she truly initiates her students into a journey of self-awareness and well-being. Grateful to have such a dedicated and inspiring yoga teacher. Thank you, Ma'am.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Sachin+Wani&background=0891b2&color=fff&size=128"
    },
    {
        name: "Pranali",
        role: "Wellness Enthusiast",
        company: "Pranali Asan Yoga",
        text: "I joined Yoga just 15 days ago, and I can already feel a remarkable improvement in my physical health. Diksha ma'am is extremely caring and friendly, always guiding us patiently through asanas and stretches. When I started, I could barely manage 5 Surya Namaskars while struggling to hold my breath. But within a month, I noticed a real difference in my body—my stamina has increased, I can now perform 12 Surya Namaskars with ease, and most importantly, I've found relief from back pain I feel more energetic and positive every day. Thank you so much diksha maaam, for this wonderful transformation.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Pranali&background=ec4899&color=fff&size=128"
    },
    {
        name: "Vaishali",
        role: "Yoga Student",
        company: "Vaishali Asan Yoga",
        text: "I appreciate Diksha ma'am's gentle and informative teaching style and how she makes the class accessible to all levels. From the very first class it was clear that it was going to be a unique experience with her. She provides encouragement and makes it fun while still offering a challenge. I feel I get a good balance of one on one instruction and one on one guidance even in a larger class. Diksha madam is excellent at guiding us through the poses explaining the benefits of each one. She always maintains a warm welcoming and non judgemental atmosphere in her class with full of positive energy and mix of yoga breathing exercises and meditation is perfect for my needs. Much much more energetic and I have seen improvement in my posture and flexibility. My body feels lighter and I have noticed positive impact on my mood and clarity of mind. After each class I feel calm and restored both physically and mentally. I think Deeksha madam is a fab teacher. thank you very much ma'am.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Vaishali&background=10b981&color=fff&size=128"
    }
];

interface TestimonialsProps {
    data?: Testimonial[];
    title?: string;
    subtitle?: string;
    label?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
    data = defaultTestimonials,
    title = "Client Testimonials",
    subtitle = "Real experiences from professionals who have transformed their well-being through our corporate yoga programs.",
    label = "Client Success Stories"
}) => {
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

    const openTestimonial = (testimonial: Testimonial) => {
        setSelectedTestimonial(testimonial);
        document.body.style.overflow = 'hidden';
    };

    const closeTestimonial = () => {
        setSelectedTestimonial(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section style={{ padding: '6rem 0', backgroundColor: '#f4f9f9', borderTop: '1px solid #e0f0f0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>
                        {label}
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                        {title}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '800px', margin: '1rem auto 0' }}>
                        {subtitle}
                    </p>
                </div>

                <div style={styles.grid}>
                    {data.map((testimonial, index) => (
                        <div 
                            key={index} 
                            style={styles.card} 
                            className="card-hover"
                            onClick={() => openTestimonial(testimonial)}
                        >
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#e0f0f0' }}>
                                <Quote size={40} />
                            </div>

                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>

                            <p style={{ ...styles.clampText, color: 'var(--text-main)', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                                "{testimonial.text}"
                            </p>

                            <button style={{ color: 'var(--brand-primary)', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '1.5rem', padding: 0 }}>
                                Read Full Review →
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #e0f0f0', paddingTop: '1.5rem' }}>
                                <img src={testimonial.image} alt={testimonial.name} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #e0f0f0' }} />
                                <div>
                                    <h4 style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{testimonial.name}</h4>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                        {testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {selectedTestimonial && (
                <div style={styles.modalOverlay} onClick={closeTestimonial}>
                    <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div style={{ backgroundColor: 'var(--brand-secondary)', padding: '2rem', color: '#fff', position: 'relative' }}>
                            <button onClick={closeTestimonial} style={styles.closeBtn}>
                                <X size={24} />
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img src={selectedTestimonial.image} alt={selectedTestimonial.name} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.3)' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: '#FFFFFF' }}>{selectedTestimonial.name}</h3>
                                    <p style={{ color: '#FFFFFF' }}>{selectedTestimonial.role}</p>
                                    <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                                        {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="#fde047" color="#fde047" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', position: 'relative' }}>
                            <Quote size={48} style={{ position: 'absolute', top: '1rem', left: '1rem', color: '#e0f0f0', opacity: 0.5 }} />
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.8, paddingLeft: '2rem', position: 'relative', zIndex: 10 }}>
                                "{selectedTestimonial.text}"
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid #e0f0f0', paddingTop: '1.5rem' }}>
                                <button className="btn btn-primary" onClick={closeTestimonial}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid #e0f0f0',
        position: 'relative' as const,
        cursor: 'pointer',
    },
    clampText: {
        display: '-webkit-box',
        WebkitLineClamp: 6,
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
        lineHeight: 1.6,
    },
    statCard: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: 'var(--shadow-md)',
        textAlign: 'center' as const,
    },
    statNum: {
        fontSize: '2.5rem',
        fontFamily: 'var(--font-serif)',
        fontWeight: 'bold',
        color: 'var(--brand-primary)',
        marginBottom: '0.5rem',
    },
    modalOverlay: {
        position: 'fixed' as const,
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '90px 1rem 1rem 1rem', /* Added top padding to prevent header overlap */
        animation: 'fadeIn 0.3s ease-out',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: '1.5rem',
        width: '95%',
        maxWidth: '800px',
        maxHeight: 'calc(100vh - 110px)', /* Adjusted max height to account for padding */
        overflowY: 'auto' as const,
        position: 'relative' as const,
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        animation: 'slideUp 0.4s ease-out',
        margin: '0 auto',
    },
    closeBtn: {
        position: 'absolute' as const,
        top: '1rem',
        right: '1rem',
        background: 'rgba(255,255,255,0.2)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        cursor: 'pointer',
    }
};

export default Testimonials;
