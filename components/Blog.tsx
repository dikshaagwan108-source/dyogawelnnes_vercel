import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, User, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Hidden Cost of Workplace Stress: Why Corporate Wellness Isn't Optional Anymore",
        excerpt: "Recent studies reveal that workplace stress costs organizations over $300 billion annually in healthcare and lost productivity. Discover how integrating mindfulness and yoga practices can reduce stress-related absenteeism by up to 32% while boosting employee engagement.",
        content: `Workplace stress has evolved from an individual concern to a critical business issue. Recent research from the American Institute of Stress reveals that workplace stress costs U.S. organizations over $300 billion annually in healthcare expenses, absenteeism, and reduced productivity.

**The Real Impact on Your Bottom Line**

When employees experience chronic stress, the effects ripple throughout your organization:
• 40% increase in turnover rates
• 32% higher absenteeism
• 60% more workplace accidents
• Significant decline in creativity and innovation

**The Solution: Proactive Wellness Programs**

Organizations implementing comprehensive wellness programs, including regular yoga and mindfulness sessions, report remarkable results:
• 32% reduction in stress-related absenteeism
• 28% improvement in employee engagement scores
• 25% decrease in healthcare costs
• 45% increase in productivity metrics

**Making It Work in Your Organization**

The key is consistency and accessibility. Programs that succeed share these characteristics:
1. Regular, scheduled sessions (not just one-off events)
2. On-site or virtual options for maximum participation
3. Leadership buy-in and participation
4. Integration with existing wellness initiatives

**The ROI is Clear**

For every dollar invested in employee wellness programs, companies see an average return of $3.27 in reduced healthcare costs and improved productivity. But beyond the numbers, you're investing in your most valuable asset: your people.

Corporate wellness isn't a perk anymore—it's a strategic necessity for organizations that want to attract top talent, reduce turnover, and maintain a competitive edge in today's demanding business environment.`,
        author: "Diksha Agwan",
        date: "December 10, 2024",
        readTime: "5 min read",
        category: "Workplace Wellness",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Desk Yoga: 7 Simple Exercises That Transform Your Workday",
        excerpt: "You don't need a yoga mat or special clothes to experience the benefits of yoga at work. Learn seven evidence-based desk yoga movements that reduce neck pain, improve circulation, and enhance mental clarity—all within 10 minutes.",
        content: `Sitting at a desk for 8+ hours daily takes a serious toll on your body. But you don't need a yoga studio or special equipment to counteract these effects. Here are seven desk yoga exercises you can do right at your workstation.

**1. Seated Spinal Twist (2 minutes)**
Sit tall, place your right hand on the back of your chair, and gently twist to the right. Hold for 30 seconds, then switch sides. This releases tension in your spine and improves digestion.

**2. Neck Rolls (1 minute)**
Slowly roll your head in a circular motion, 5 times clockwise, then 5 times counter-clockwise. This relieves neck tension and prevents headaches.

**3. Shoulder Shrugs (1 minute)**
Inhale and raise your shoulders to your ears, hold for 3 seconds, then exhale and release. Repeat 10 times. Perfect for releasing upper back tension.

**4. Wrist and Finger Stretches (1 minute)**
Extend your arm, pull fingers back gently with the other hand. Hold 15 seconds each side. Essential for preventing carpal tunnel syndrome.

**5. Seated Forward Fold (2 minutes)**
Sit on the edge of your chair, feet flat on floor. Slowly fold forward, letting your head hang. Hold for 30 seconds. This stretches your entire back.

**6. Ankle Circles (1 minute)**
Lift one foot slightly and rotate your ankle 10 times each direction. Switch feet. Improves circulation and prevents swelling.

**7. Breathing Exercise (2 minutes)**
Close your eyes, breathe in for 4 counts, hold for 4, exhale for 6. Repeat 5 times. This activates your parasympathetic nervous system, reducing stress immediately.

**The Science Behind It**

Research shows that just 10 minutes of desk yoga can:
• Reduce neck and back pain by 40%
• Improve focus and concentration by 25%
• Lower stress hormones by 30%
• Increase energy levels throughout the afternoon

**Make It a Habit**

Set a reminder for mid-morning and mid-afternoon. Your body (and your productivity) will thank you. The best part? No one will even notice you're doing yoga at your desk.`,
        author: "Diksha Agwan",
        date: "December 5, 2024",
        readTime: "4 min read",
        category: "Practical Tips",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Breathing Techniques for High-Pressure Meetings: A Science-Backed Approach",
        excerpt: "Before your next crucial presentation or difficult conversation, try these three breathing techniques used by Fortune 500 executives. Research shows they can lower cortisol levels by 25% and improve decision-making under pressure.",
        content: `High-stakes meetings trigger our body's stress response, flooding us with cortisol and adrenaline. While some stress can sharpen focus, too much impairs decision-making and communication. Here's how top executives use breathing to stay calm and sharp.

**Technique 1: Box Breathing (4-4-4-4)**

Used by Navy SEALs and Fortune 500 CEOs alike:
• Inhale for 4 counts
• Hold for 4 counts
• Exhale for 4 counts
• Hold empty for 4 counts
• Repeat 4 times

Do this 5 minutes before your meeting. Studies show it reduces cortisol by 25% and improves cognitive function.

**Technique 2: 4-7-8 Breathing**

Perfect for calming pre-presentation nerves:
• Inhale through nose for 4 counts
• Hold breath for 7 counts
• Exhale completely through mouth for 8 counts
• Repeat 3-4 times

This activates your parasympathetic nervous system, the body's natural calming mechanism.

**Technique 3: Alternate Nostril Breathing**

For balanced, clear thinking:
• Close right nostril, inhale through left (4 counts)
• Close both, hold (4 counts)
• Open right nostril, exhale (4 counts)
• Inhale through right (4 counts)
• Switch and repeat 5 times

Research shows this balances both brain hemispheres, improving decision-making and creativity.

**The Science**

When you control your breath, you control your nervous system. Slow, deep breathing:
• Lowers heart rate by 10-15 beats per minute
• Reduces blood pressure
• Increases oxygen to the brain
• Improves emotional regulation

**Real-World Application**

One tech CEO I work with uses box breathing before every board meeting. He reports feeling 50% calmer and making clearer decisions under pressure.

**During the Meeting**

If stress spikes mid-meeting, you can still help yourself:
• Take one deep breath before responding to difficult questions
• Exhale slowly while listening to others
• Notice your breath periodically to stay grounded

Your breath is the most powerful tool you have for managing stress. And unlike other stress-management techniques, it's always available, requires no equipment, and works in under 2 minutes.`,
        author: "Diksha Agwan",
        date: "November 28, 2024",
        readTime: "6 min read",
        category: "Stress Management",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "From Burnout to Balance: How Tech Companies Are Prioritizing Employee Mental Health",
        excerpt: "Leading tech organizations are reimagining workplace wellness. Explore case studies showing how companies implementing regular mindfulness sessions saw a 40% reduction in burnout rates and a 28% increase in employee retention.",
        content: `The tech industry has long been associated with long hours, high pressure, and burnout. But forward-thinking companies are changing the narrative by making employee mental health a strategic priority.

**The Burnout Crisis in Tech**

Before implementing wellness programs, many tech companies faced:
• 60% of employees reporting burnout symptoms
• 35% annual turnover in some departments
• Declining productivity despite longer hours
• Rising healthcare costs

**Case Study: Mid-Size Software Company**

A 500-employee software company implemented a comprehensive wellness program including:
• Twice-weekly 30-minute yoga sessions
• Daily 10-minute mindfulness breaks
• Monthly mental health workshops
• Flexible work arrangements

**Results After 12 Months:**
• 40% reduction in reported burnout
• 28% increase in employee retention
• 22% improvement in productivity metrics
• 18% decrease in health insurance claims

**What Made It Work**

The key factors in their success:

1. **Leadership Participation**: The CEO attended sessions regularly, signaling that wellness was a priority, not a perk.

2. **Accessibility**: Both on-site and virtual options ensured everyone could participate, regardless of location or schedule.

3. **Consistency**: Regular, scheduled sessions became part of the company culture, not occasional events.

4. **Measurement**: They tracked participation, satisfaction, and impact on key business metrics.

**The Ripple Effects**

Beyond the direct benefits, the company noticed:
• Improved team collaboration
• More creative problem-solving
• Better work-life boundaries
• Stronger company culture
• Easier recruitment of top talent

**Making It Work for Your Organization**

You don't need a massive budget to start. Begin with:
• One weekly group session
• Encourage managers to model healthy behaviors
• Create quiet spaces for meditation or stretching
• Measure and share results

**The Bottom Line**

Investing in employee mental health isn't just compassionate—it's smart business. Companies that prioritize wellness see better retention, higher productivity, and stronger financial performance.

The question isn't whether you can afford to invest in employee wellness. It's whether you can afford not to.`,
        author: "Diksha Agwan",
        date: "November 20, 2024",
        readTime: "7 min read",
        category: "Industry Insights",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "The ROI of Corporate Wellness: What the Data Really Shows",
        excerpt: "Investing in employee wellness isn't just compassionate—it's profitable. Companies with comprehensive wellness programs see an average ROI of $3.27 for every dollar spent. Learn how to measure and maximize your wellness program's impact.",
        content: `CFOs and business leaders often ask: "What's the return on investment for wellness programs?" The data is compelling—and the ROI goes far beyond healthcare cost savings.

**The Numbers**

According to Harvard Business Review and multiple peer-reviewed studies:
• Average ROI: $3.27 for every $1 invested
• Healthcare cost reduction: 25-30% over 3 years
• Absenteeism reduction: 28% on average
• Productivity increase: 15-20%

**Breaking Down the ROI**

**1. Direct Healthcare Savings**
Companies with wellness programs see:
• Fewer emergency room visits
• Reduced prescription medication costs
• Lower insurance premiums
• Fewer workers' compensation claims

**2. Reduced Absenteeism**
Healthier employees take fewer sick days:
• Average reduction: 1.5 days per employee annually
• For a 100-person company: 150 days saved
• At $200/day average cost: $30,000 annual savings

**3. Improved Productivity**
This is often the biggest ROI driver:
• Reduced "presenteeism" (being at work but not productive)
• Better focus and concentration
• Higher energy levels
• Improved decision-making

**4. Talent Acquisition and Retention**
• 87% of employees consider wellness programs when choosing employers
• Reduced turnover saves 50-200% of an employee's salary
• Stronger employer brand attracts top talent

**How to Measure Your Program's Impact**

**Track These Metrics:**
1. Participation rates
2. Employee satisfaction scores
3. Healthcare claims data
4. Absenteeism rates
5. Turnover rates
6. Productivity metrics
7. Employee engagement scores

**Real Example: 200-Employee Company**

Annual Investment: $50,000
• Wellness program: $30,000
• Instructor fees: $15,000
• Materials and space: $5,000

Annual Returns: $163,500
• Healthcare savings: $60,000
• Reduced absenteeism: $40,000
• Reduced turnover: $50,000
• Productivity gains: $13,500

**Net ROI: 227% or $3.27 per dollar invested**

**Maximizing Your ROI**

1. **Start with Leadership Buy-In**: Programs with executive participation see 3x higher engagement.

2. **Make It Easy**: Convenience drives participation. On-site or virtual options remove barriers.

3. **Communicate Value**: Share success stories and data with employees.

4. **Be Consistent**: One-off events don't create lasting change. Regular programs do.

5. **Measure Everything**: What gets measured gets managed.

**The Intangible Benefits**

Beyond the numbers, wellness programs create:
• Stronger company culture
• Better team cohesion
• Improved morale
• Enhanced company reputation

**The Bottom Line**

Corporate wellness programs aren't an expense—they're an investment with measurable returns. The question isn't whether you can afford a wellness program. It's whether you can afford not to have one.

Start small, measure consistently, and scale what works. Your employees—and your bottom line—will thank you.`,
        author: "Diksha Agwan",
        date: "November 15, 2024",
        readTime: "5 min read",
        category: "Business Impact",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Eye Strain in the Digital Age: Protecting Your Team's Vision Health",
        excerpt: "With employees spending 7+ hours daily on screens, digital eye strain affects 65% of workers. Discover simple eye relaxation techniques and workspace adjustments that can reduce headaches and improve focus throughout the workday.",
        content: `Digital eye strain, also called Computer Vision Syndrome, affects 65% of office workers. With the average employee spending 7+ hours daily on screens, eye health has become a critical workplace wellness issue.

**The Symptoms**

Your employees might be experiencing:
• Dry, irritated eyes
• Blurred vision
• Headaches
• Neck and shoulder pain
• Difficulty focusing
• Increased sensitivity to light

**The 20-20-20 Rule**

The simplest and most effective technique:
• Every 20 minutes
• Look at something 20 feet away
• For 20 seconds

Set a timer or use apps to remind employees. This simple practice can reduce eye strain by 50%.

**Eye Relaxation Exercises**

**1. Palming (2 minutes)**
• Rub hands together to generate warmth
• Cup palms over closed eyes (don't press)
• Relax and breathe deeply
• Repeat 3 times daily

**2. Eye Rolling (1 minute)**
• Look up, slowly roll eyes clockwise 5 times
• Reverse direction, roll counter-clockwise 5 times
• Blink several times

**3. Focus Shifting (2 minutes)**
• Hold finger 10 inches from face
• Focus on finger for 5 seconds
• Shift focus to object 10-20 feet away
• Repeat 10 times

**4. Figure Eight (1 minute)**
• Imagine a large figure 8 on the wall
• Trace it with your eyes slowly
• Repeat 5 times each direction

**Workspace Optimization**

**Screen Position:**
• 20-26 inches from eyes
• Top of screen at or slightly below eye level
• Reduce glare with proper lighting
• Use anti-glare screen protectors

**Lighting:**
• Avoid overhead fluorescent lights directly above screen
• Use task lighting for paper documents
• Position screen perpendicular to windows
• Adjust screen brightness to match surroundings

**Screen Settings:**
• Increase text size (don't strain to read)
• Adjust contrast and brightness
• Use blue light filters after 6 PM
• Enable dark mode when appropriate

**The Blink Reminder**

We blink 66% less when using screens. This causes dry eyes and irritation.

**Solution:**
• Post a "BLINK" reminder near your screen
• Practice conscious blinking every few minutes
• Use lubricating eye drops if needed

**The Business Impact**

Eye strain isn't just uncomfortable—it affects productivity:
• 20% decrease in productivity when experiencing symptoms
• Increased errors and reduced accuracy
• More frequent breaks and interruptions
• Higher healthcare costs

**Creating an Eye-Healthy Workplace**

1. **Educate employees** about eye strain and prevention
2. **Encourage regular breaks** (not just for eyes, but overall health)
3. **Optimize workspace lighting** and ergonomics
4. **Provide eye exams** as part of health benefits
5. **Lead by example** - managers should model healthy screen habits

**When to See a Doctor**

Encourage employees to consult an eye care professional if they experience:
• Persistent headaches
• Significant vision changes
• Eye pain or redness
• Symptoms that don't improve with breaks

**The Bottom Line**

Eye health is often overlooked in corporate wellness programs, but it directly impacts productivity, comfort, and long-term health. Simple interventions like the 20-20-20 rule and workspace optimization can make a dramatic difference.

Your employees' eyes are working hard for your business. Make sure you're taking care of them.`,
        author: "Diksha Agwan",
        date: "November 8, 2024",
        readTime: "4 min read",
        category: "Health & Wellness",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const Blog: React.FC = () => {
    const headingAnim = useScrollAnimation({ threshold: 0.2 });
    const cardsAnim = useScrollAnimation({ threshold: 0.1 });
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
        <>
            <section id="blog" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        ref={headingAnim.ref}
                        className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
                    >
                        <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Insights & Resources</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Our Latest Articles</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
                            Evidence-based insights on workplace wellness, practical tips for corporate teams, and the latest research on employee well-being.
                        </p>
                    </div>

                    <div
                        ref={cardsAnim.ref}
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${cardsAnim.isVisible ? 'visible' : ''}`}
                    >
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                onClick={() => openPost(post)}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openPost(post);
                                            }}
                                            className="text-brand-600 hover:text-brand-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                                        >
                                            Read More
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                                        <User size={16} className="text-gray-400" />
                                        <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {selectedPost && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closePost}
                >
                    <div
                        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-64 md:h-80">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={closePost}
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-lg"
                            >
                                <X size={24} className="text-gray-800" />
                            </button>
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                                    {selectedPost.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                                {selectedPost.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <User size={18} className="text-brand-600" />
                                    <span className="font-medium">{selectedPost.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-brand-600" />
                                    <span>{selectedPost.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="text-brand-600" />
                                    <span>{selectedPost.readTime}</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                        return (
                                            <h3 key={index} className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">
                                                {paragraph.replace(/\*\*/g, '')}
                                            </h3>
                                        );
                                    } else if (paragraph.startsWith('•')) {
                                        const items = paragraph.split('\n');
                                        return (
                                            <ul key={index} className="list-disc list-inside space-y-2 my-4 text-gray-700">
                                                {items.map((item, i) => (
                                                    <li key={i} className="leading-relaxed">{item.replace('• ', '')}</li>
                                                ))}
                                            </ul>
                                        );
                                    } else if (paragraph.match(/^\d+\./)) {
                                        const items = paragraph.split('\n');
                                        return (
                                            <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
                                                {items.map((item, i) => (
                                                    <li key={i} className="leading-relaxed">{item.replace(/^\d+\.\s/, '')}</li>
                                                ))}
                                            </ol>
                                        );
                                    } else {
                                        return (
                                            <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                                {paragraph}
                                            </p>
                                        );
                                    }
                                })}
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                                <button
                                    onClick={closePost}
                                    className="bg-brand-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-brand-700 transition-all"
                                >
                                    Close Article
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </>
    );
};

export default Blog;
