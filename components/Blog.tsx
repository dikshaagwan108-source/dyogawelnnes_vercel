import React, { useState } from 'react';
import { ArrowRight, User, Calendar, Clock, X } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Power of Breath: A Guide to Pranayama",
        excerpt: "Discover how conscious breathing can transform your stress levels, boost energy, and bring clarity to your daily life.",
        category: "Mindfulness",
        author: "Diksha Agwan",
        date: "March 15, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
        content: `Pranayama, the ancient yogic practice of breath control, is more than just a relaxation technique—it's a powerful tool for transforming your physical and mental well-being.

**The Science of Breath**
When we experience stress, our breathing becomes shallow and rapid, triggering the body's fight-or-flight response. By consciously slowing down and deepening our breath, we can activate the parasympathetic nervous system, signaling to our body that it's safe to relax.

**Simple Techniques to Start**
• Sama Vritti (Equal Breathing): Inhale for a count of 4, exhale for a count of 4.
• Nadi Shodhana (Alternate Nostril Breathing): Helps balance the left and right hemispheres of the brain.
• Bhramari (Bee Breath): Excellent for calming an agitated mind.

**Incorporating Pranayama into Your Day**
You don't need an hour on the mat to benefit from breathwork. Try taking 5 mindful breaths before a big meeting, or practice equal breathing during your commute. The key is consistency.`
    },
    {
        id: 2,
        title: "Finding Balance: Yoga for Desk Workers",
        excerpt: "Simple stretches and mindful moments you can incorporate into your busy workday to prevent burnout and physical strain.",
        category: "Corporate Wellness",
        author: "Diksha Agwan",
        date: "March 10, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
        content: `In our modern corporate world, the phrase 'sitting is the new smoking' has become increasingly relevant. Long hours at a desk can lead to poor posture, back pain, and diminished focus. But it doesn't have to be this way.

**The Impact of Sedentary Work**
When we sit for extended periods, our hip flexors tighten, shoulders round forward, and the neck often juts out to peer at a screen. This postural imbalance not only causes physical discomfort but can also restrict breathing and increase stress.

**Desk-Friendly Yoga Solutions**
1. Seated Spinal Twist: Gentle rotation to release lower back tension.
2. Neck and Shoulder Rolls: Simple movements to relieve tech-neck.
3. Seated Cat-Cow: Mobilizes the spine without leaving your chair.
4. Figure Four Stretch: Opens tight hips from prolonged sitting.

**Creating a Wellness Routine at Work**
Set an alarm every 60 minutes to stand, stretch, and take a brief walk. Remember, small, consistent movements throughout the day are often more beneficial than one intense workout after 8 hours of sitting.`
    },
    {
        id: 3,
        title: "The Health Benefits of Corporate Wellness Coaching",
        excerpt: "How personalized health and wellness coaching can drastically improve employee morale, reduce sick days, and foster a thriving workplace.",
        category: "Health Coaching",
        author: "Diksha Agwan",
        date: "April 5, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        content: `A healthy workforce is a productive workforce. Wellness coaching is shifting the paradigm from reactive healthcare to proactive well-being in the corporate sector.

**What is Wellness Coaching?**
Wellness coaching is a collaborative approach where a professional helps employees identify their health goals—be it stress management, nutrition, or physical fitness—and creates actionable, personalized steps to achieve them.

**Benefits for Employees**
• Reduced burnout and anxiety.
• Better nutritional choices during busy workdays.
• Improved sleep quality leading to sharper focus.
• A stronger sense of being valued by their employer.

**Benefits for the Organization**
Companies that invest in wellness coaching often see a significant return on investment. This comes in the form of reduced absenteeism, lower healthcare costs, and higher employee retention. When people feel good, they do great work.

**Taking the First Step**
Start by surveying your team to understand their specific wellness needs. From there, customized coaching sessions can be integrated seamlessly into the work week, whether through 1-on-1 consultations or group workshops.`
    },
    {
        id: 4,
        title: "Nutrition Tips for the Busy Professional",
        excerpt: "Actionable advice on maintaining a balanced diet when you're jumping from meeting to meeting.",
        category: "Nutrition",
        author: "Diksha Agwan",
        date: "April 12, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
        content: `When deadlines loom, nutrition is often the first thing to be compromised. We reach for quick, heavily processed snacks or skip meals entirely, leading to energy crashes and diminished productivity.

**The Pitfalls of Convenience**
Relying on vending machines or fast food might save time in the short term, but the resulting sugar spikes and crashes severely impact cognitive function and mood.

**Smart Swaps and Habits**
1. Hydration First: Often, we mistake thirst for hunger. Keep a large water bottle at your desk.
2. Prep is Key: Dedicate 30 minutes on Sunday to chop veggies or portion out nuts and seeds for grab-and-go weekday snacks.
3. Protein-Rich Breakfasts: Starting your day with protein stabilizes blood sugar for hours, preventing that mid-morning slump.
4. Mindful Eating: Avoid eating lunch while answering emails. Taking just 15 minutes to focus solely on your meal improves digestion and satiety.

**A Balanced Approach**
Wellness isn't about perfection; it's about making better choices consistently. By planning ahead, you can fuel your body for optimal performance, both in and out of the office.`
    },
    {
        id: 5,
        title: "The Science of Meditation: How It Changes Your Brain",
        excerpt: "Uncover the fascinating neurological benefits of meditation and why just 10 minutes a day can rewire your brain for the better.",
        category: "Mindfulness",
        author: "Diksha Agwan",
        date: "May 1, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=800",
        content: `For decades, meditation was viewed by the corporate world as a spiritual luxury rather than a practical necessity. Today, neuroscience is proving exactly how profoundly sitting in stillness can restructure our brains.

**Neuroplasticity and Meditation**
Brain imaging studies show that regular meditation actually increases the gray matter density in the hippocampus—the area associated with learning, memory, and emotional regulation. Simultaneously, it decreases the size of the amygdala, the brain's stress response center.

**Reducing the 'Monkey Mind'**
Our brains have a Default Mode Network (DMN), responsible for mind-wandering and self-referential thoughts. Meditation has been shown to decrease activity in the DMN, allowing practitioners to stay focused on the present moment rather than ruminating on the past or worrying about the future.

**How to Begin**
You don't need a perfectly quiet room or an hour of free time. Start with just 5 minutes a day. Focus on the sensation of your breath. When your mind wanders (and it will), gently bring it back. That very act of returning your focus is a bicep curl for your brain.`
    },
    {
        id: 6,
        title: "Yoga for Stress Relief: Poses to Calm Your Mind",
        excerpt: "Feeling overwhelmed? Turn to these five simple yoga poses designed to soothe the nervous system and release stored tension.",
        category: "Physical Health",
        author: "Diksha Agwan",
        date: "May 10, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800",
        content: `Stress isn't just something we feel in our minds; we store it physically in our bodies—most commonly in our neck, shoulders, and hips. Yoga offers a targeted approach to unwinding this physical tension, which in turn signals the brain to relax.

**1. Child's Pose (Balasana)**
A grounding posture that offers a sense of safety and calm. It gently stretches the lower back and hips while allowing you to focus deeply on your breath.

**2. Standing Forward Bend (Uttanasana)**
By letting your head hang heavy, you increase blood flow to the brain and release tight hamstrings and calves. It's an instant reset for an agitated mind.

**3. Cat-Cow Stretch (Marjaryasana-Bitilasana)**
Moving through this gentle spinal wave coordinates breath with movement, bringing you out of your head and into your body while relieving back stiffness.

**4. Legs-Up-The-Wall (Viparita Karani)**
This restorative inversion drains tension from the legs, slows the heart rate, and shifts the nervous system into a parasympathetic (rest and digest) state.

Try incorporating just 10 minutes of these poses before bed to vastly improve your sleep quality and lower cortisol levels.`
    },
    {
        id: 7,
        title: "Mindful Eating: Transforming Your Relationship with Food",
        excerpt: "Learn how to eat with intention and awareness to improve digestion, satisfaction, and overall well-being.",
        category: "Nutrition",
        author: "Diksha Agwan",
        date: "May 18, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        content: `In a world of constant distractions, we often eat on autopilot—scrolling through emails, watching TV, or rushing to the next appointment. Mindful eating is the practice of bringing full attention to the experience of eating.

**Why Mindfulness Matters**
When we eat while distracted, our brain doesn't fully register that we've eaten, which can lead to overeating and poor digestion. By eating mindfully, we enhance nutrient absorption and feel more satisfied with smaller portions.

**Steps to Practice Mindful Eating**
• Eliminate Distractions: Step away from your desk and turn off your phone.
• Engage Your Senses: Notice the colors, smells, and textures of your food before taking a bite.
• Chew Thoroughly: Aim for 20-30 chews per bite to aid digestion and slow down your eating pace.
• Listen to Your Body: Stop eating when you feel 80% full, rather than stuffed.

By shifting how we eat, we can turn every meal into a moment of grounding and nourishment.`
    },
    {
        id: 8,
        title: "The Hidden Cost of Workplace Stress: Why Corporate Wellness Isn't Optional Anymore",
        excerpt: "Discover the true financial and cultural impact of unmanaged employee stress, and why forward-thinking companies are investing heavily in wellness.",
        category: "Corporate Wellness",
        author: "Diksha Agwan",
        date: "May 20, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
        content: `For a long time, corporate wellness programs were seen as a 'nice-to-have' perk. Today, they are a fundamental requirement for business sustainability.

**The Financial Impact of Burnout**
The cost of workplace stress is staggering. Between absenteeism, reduced productivity, and employee turnover, companies lose millions annually to unmanaged stress. When employees are operating in a chronic state of fight-or-flight, cognitive function and creativity plummet.

**A Shift in Culture**
Modern employees are demanding more than just a paycheck; they want an environment that supports their holistic well-being. Companies that fail to provide this are seeing their top talent walk out the door.

**The Solution**
Investing in comprehensive wellness programs—like corporate yoga, mindfulness training, and health coaching—creates a profound return on investment. It signals to your team that their health matters, fostering loyalty, resilience, and a deeply engaged workforce.`
    },
    {
        id: 9,
        title: "Practical Tips for Stress Management in a Fast-Paced Office",
        excerpt: "Actionable, everyday strategies you can use to stay grounded and focused, no matter how chaotic your workday gets.",
        category: "Stress Management",
        author: "Diksha Agwan",
        date: "May 25, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
        content: `A fast-paced office doesn't have to equal a stressed-out mind. While we can't always control our workload, we can control our reaction to it.

**Micro-Breaks Matter**
You don't need a 30-minute meditation session to reset your nervous system. Taking a 'micro-break'—just 60 seconds of deep breathing or staring out a window—can significantly lower cortisol levels and prevent afternoon fatigue.

**The 5-5-5 Breathing Rule**
Before walking into a high-stakes meeting, try this: Inhale for 5 seconds, hold for 5 seconds, exhale for 5 seconds. Repeat three times. This simple practice rapidly shifts your body out of a stress response.

**Desk Ergonomics and Tension**
Check your posture. Are your shoulders creeping up to your ears? Drop them. Is your jaw clenched? Relax it. We often hold psychological stress in our physical bodies. By consciously releasing physical tension, we send a signal of safety to our brains.`
    },
    {
        id: 10,
        title: "The Business Impact of Employee Health and Wellness",
        excerpt: "How prioritizing the physical and mental health of your team directly correlates to a stronger bottom line.",
        category: "Business Impact",
        author: "Diksha Agwan",
        date: "May 28, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        content: `When we talk about business metrics, we often focus on KPIs, revenue growth, and market share. But the most critical metric of all is the health of the people driving those numbers.

**Productivity and Presenteeism**
Presenteeism—when employees are physically at work but not fully functioning due to illness or stress—often costs companies more than actual absences. A comprehensive health program ensures that when employees are at work, they are truly engaged.

**Building a Resilient Team**
Wellness programs do more than just prevent illness; they build resilience. Teams that practice mindfulness and stress management are better equipped to handle unexpected challenges, pivot quickly, and maintain high morale during difficult quarters.

**Attracting Top Talent**
In a competitive job market, a robust wellness program is a powerful recruitment tool. It demonstrates a company culture that values human capital, making it significantly easier to attract and retain the best minds in the industry.`
    }
];

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const openPost = (post: BlogPost) => {
        setSelectedPost(post);
        document.body.style.overflow = 'hidden';
    };

    const closePost = () => {
        setSelectedPost(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="page-content animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <section style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>
                        Insights & Articles
                    </span>
                    <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                        Wellness Blog
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '800px', margin: '1rem auto 0', lineHeight: 1.6 }}>
                        Explore our collection of articles on yoga, mindfulness, corporate wellness, and holistic health to help you thrive.
                    </p>
                </div>
            </section>

            <section className="container">
                <div style={styles.grid}>
                    {blogPosts.map((post) => (
                        <article 
                            key={post.id} 
                            style={styles.card} 
                            className="card-hover"
                            onClick={() => openPost(post)}
                        >
                            <div style={styles.imageContainer}>
                                <img src={post.image} alt={post.title} style={styles.image} />
                                <div style={styles.categoryBadge}>{post.category}</div>
                            </div>
                            
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Clock size={16} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 style={styles.cardTitle}>{post.title}</h3>
                                <p style={styles.cardExcerpt}>{post.excerpt}</p>

                                <button style={styles.readMoreBtn}>
                                    Read More <ArrowRight size={16} />
                                </button>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid #e0f0f0', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                                    <User size={16} color="var(--text-muted)" />
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 600 }}>{post.author}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {selectedPost && (
                <div style={styles.modalOverlay} onClick={closePost}>
                    <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div style={{ position: 'relative', height: '300px' }}>
                            <img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <button onClick={closePost} style={styles.closeBtn}>
                                <X size={24} />
                            </button>
                            <div style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
                                <span style={styles.categoryBadge}>{selectedPost.category}</span>
                            </div>
                        </div>

                        <div style={{ padding: '3rem' }}>
                            <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                                {selectedPost.title}
                            </h1>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', borderBottom: '1px solid #e0f0f0', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <User size={18} color="var(--brand-primary)" />
                                    <span style={{ fontWeight: 600 }}>{selectedPost.author}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={18} color="var(--brand-primary)" />
                                    <span>{selectedPost.date}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock size={18} color="var(--brand-primary)" />
                                    <span>{selectedPost.readTime}</span>
                                </div>
                            </div>

                            <div style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                        return (
                                            <h3 key={index} style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--brand-secondary)' }}>
                                                {paragraph.replace(/\*\*/g, '')}
                                            </h3>
                                        );
                                    } else if (paragraph.startsWith('•')) {
                                        const items = paragraph.split('\n');
                                        return (
                                            <ul key={index} style={{ paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {items.map((item, i) => (
                                                    <li key={i}>{item.replace('• ', '')}</li>
                                                ))}
                                            </ul>
                                        );
                                    } else if (paragraph.match(/^\d+\./)) {
                                        const items = paragraph.split('\n');
                                        return (
                                            <ol key={index} style={{ paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {items.map((item, i) => (
                                                    <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                                                ))}
                                            </ol>
                                        );
                                    } else {
                                        return (
                                            <p key={index} style={{ marginBottom: '1.5rem' }}>
                                                {paragraph}
                                            </p>
                                        );
                                    }
                                })}
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #e0f0f0', paddingTop: '2rem' }}>
                                <button className="btn btn-primary" onClick={closePost}>
                                    Close Article
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        cursor: 'pointer',
        border: '1px solid #e0f0f0',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    imageContainer: {
        position: 'relative' as const,
        height: '250px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        transition: 'transform 0.5s ease',
    },
    categoryBadge: {
        position: 'absolute' as const,
        top: '1rem',
        left: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        color: 'var(--brand-primary)',
        padding: '0.25rem 1rem',
        borderRadius: '2rem',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textTransform: 'uppercase' as const,
        letterSpacing: '1px',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-serif)',
        fontWeight: 'bold',
        color: 'var(--text-main)',
        marginBottom: '1rem',
        lineHeight: 1.3,
    },
    cardExcerpt: {
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
    },
    readMoreBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--brand-primary)',
        fontWeight: 'bold',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        transition: 'gap 0.3s ease',
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
        width: '100%',
        maxWidth: '900px',
        maxHeight: 'calc(100vh - 110px)', /* Adjusted max height to account for padding */
        overflowY: 'auto' as const,
        position: 'relative' as const,
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        animation: 'slideUp 0.4s ease-out',
        margin: '0 auto',
    },
    closeBtn: {
        position: 'absolute' as const,
        top: '1.5rem',
        right: '1.5rem',
        background: 'rgba(255,255,255,0.9)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
    }
};

export default Blog;
