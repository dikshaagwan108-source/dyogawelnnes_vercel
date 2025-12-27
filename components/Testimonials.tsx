import React, { useState } from 'react';
import { Quote, Star, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
    image: string;
}

const testimonials: Testimonial[] = [
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
        text: "Training with Diksha Ma'am over the past two months has been a truly transformative experience. She has helped me significantly improve my body posture and overall flexibility, something I had been struggling with for a long time. Diksha Ma'am introduces new yoga techniques and poses in a way that feels both accessible and exciting. She always begins with the basics, ensuring the foundation is strong, and then gradually guides me toward more advanced poses with patience and clarity. One of the biggest surprises for me has been enjoying 24 Surya Namaskars—something I once thought was impossible! With her fun, energetic, and positive teaching style, these sessions now feel like a highlight of my day. I can already see remarkable improvement in my back posture. Diksha Ma'am is a dedicated and passionate instructor who genuinely enjoys teaching yoga. She encourages us to trust our bodies and attempt challenging asanas with the right mindset and preparation. Her classes are motivating, uplifting, and full of good vibes. I'm truly grateful for her guidance and would highly recommend her to anyone looking to begin or deepen their yoga practice. She has made this journey not only productive, but enjoyable and inspiring. Thank you for your guidance and motivation.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Kiran&background=7c3aed&color=fff&size=128"
    },
    {
        name: "Sachin Wani",
        role: "Corporate Professional",
        company: "Sachin Wani Asan Yoga",
        text: "I have been attending yoga sessions with Diksha ma'am for over a month now and the experience has been truly transformative. Her teaching style is patient, encouraging, and deeply knowledgeable. She takes the time to correct postures, explain the purpose behind each asana, and maintain a pace that feels just right. Thanks to her guidance, I feel more energetic, focused, and connected to my body. I genuinely appreciate her commitment to creating a positive, peaceful, and supportive learning environment. Diksha Ma'am creates a positive and peaceful learning environment that motivates me to grow each day. Her sessions are a perfect balance of strength, mindfulness, and relaxation. I've noticed significant improvements in my flexibility, posture, and stress levels. True to the meaning of her name, 'Diksha' — a sacred initiation into learning — she truly initiates her students into a journey of self-awareness and well-being. Grateful to have such a dedicated and inspiring yoga teacher. Thank you, Ma'am.",
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

const Testimonials: React.FC = () => {
    const headingAnim = useScrollAnimation({ threshold: 0.2 });
    const testimonialsAnim = useScrollAnimation({ threshold: 0.1 });
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
        <>
            <section className="py-24 bg-gradient-to-br from-brand-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        ref={headingAnim.ref}
                        className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
                    >
                        <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Client Success Stories</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
                            Client Testimonials
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
                            Real experiences from professionals who have transformed their well-being through our corporate yoga programs.
                        </p>
                    </div>

                    <div
                        ref={testimonialsAnim.ref}
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${testimonialsAnim.isVisible ? 'visible' : ''}`}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                onClick={() => openTestimonial(testimonial)}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-200 cursor-pointer"
                            >
                                <div className="absolute top-6 right-6 text-brand-200 group-hover:text-brand-300 transition-colors">
                                    <Quote size={40} className="opacity-50" />
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6 relative z-10 line-clamp-6">
                                    "{testimonial.text}"
                                </p>

                                <button className="text-brand-600 text-sm font-semibold hover:text-brand-700 mb-4">
                                    Read Full Review →
                                </button>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full ring-2 ring-brand-200"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="text-4xl font-serif font-bold text-brand-600 mb-2">100+</div>
                            <p className="text-gray-600">Happy Clients</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="text-4xl font-serif font-bold text-brand-600 mb-2">500+</div>
                            <p className="text-gray-600">Sessions Conducted</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="text-4xl font-serif font-bold text-brand-600 mb-2">98%</div>
                            <p className="text-gray-600">Satisfaction Rate</p>
                        </div>
                    </div>

                </div>

                <style>{`
          .line-clamp-6 {
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
            </section>

            {selectedTestimonial && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeTestimonial}
                >
                    <div
                        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white">
                            <button
                                onClick={closeTestimonial}
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4">
                                <img
                                    src={selectedTestimonial.image}
                                    alt={selectedTestimonial.name}
                                    className="w-20 h-20 rounded-full ring-4 ring-white/30"
                                />
                                <div>
                                    <h3 className="text-2xl font-serif font-bold">{selectedTestimonial.name}</h3>
                                    <p className="text-brand-100">{selectedTestimonial.role}</p>
                                    <div className="flex gap-1 mt-2">
                                        {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="relative">
                                <Quote size={48} className="absolute -top-4 -left-2 text-brand-200 opacity-50" />
                                <p className="text-gray-700 text-lg leading-relaxed pl-8">
                                    "{selectedTestimonial.text}"
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                                <button
                                    onClick={closeTestimonial}
                                    className="bg-brand-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-brand-700 transition-all"
                                >
                                    Close
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
      `}</style>
        </>
    );
};

export default Testimonials;
