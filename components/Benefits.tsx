import React from 'react';
import { CheckCircle2, TrendingDown, Brain, Zap, Users, Scale } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const benefits: Benefit[] = [
    {
        icon: <TrendingDown size={28} />,
        title: "Reduced Pain & Sick Leave",
        description: "Desk yoga and posture correction techniques significantly decrease musculoskeletal issues, leading to fewer sick days and lower healthcare costs.",
        color: "bg-blue-500"
    },
    {
        icon: <Brain size={28} />,
        title: "Better Focus & Productivity",
        description: "Mindfulness practices and breathing exercises enhance concentration, reduce mental fatigue, and improve decision-making capabilities.",
        color: "bg-purple-500"
    },
    {
        icon: <Zap size={28} />,
        title: "Higher Energy Levels",
        description: "Regular movement and stress-relief techniques boost circulation and vitality, helping employees maintain peak performance throughout the day.",
        color: "bg-orange-500"
    },
    {
        icon: <Users size={28} />,
        title: "Improved Team Morale",
        description: "Group wellness sessions foster connection, build camaraderie, and create a positive workplace culture where employees feel valued.",
        color: "bg-green-500"
    },
    {
        icon: <Scale size={28} />,
        title: "Better Work-Life Balance",
        description: "Wellness programs demonstrate organizational commitment to employee well-being, reducing burnout and improving overall life satisfaction.",
        color: "bg-indigo-500"
    }
];

const Benefits: React.FC = () => {
    const headingAnim = useScrollAnimation({ threshold: 0.2 });
    const benefitsAnim = useScrollAnimation({ threshold: 0.1 });

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headingAnim.ref}
                    className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
                >
                    <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Measurable Impact</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
                        Benefits for Companies & Employees
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
                        Our wellness programs deliver tangible results that benefit both your organization and your team members, creating a win-win for everyone.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div
                    ref={benefitsAnim.ref}
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${benefitsAnim.isVisible ? 'visible' : ''}`}
                >
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {benefit.icon}
                            </div>

                            {/* Check Mark */}
                            <div className="absolute top-6 right-6">
                                <CheckCircle2 size={24} className="text-green-500" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm">
                                {benefit.description}
                            </p>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="group relative bg-gradient-to-br from-brand-600 to-brand-700 p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center text-center">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 size={32} className="text-white" />
                        </div>

                        <h3 className="text-2xl font-serif font-bold mb-4">
                            Ready to Transform Your Workplace?
                        </h3>

                        <p className="text-brand-100 mb-6 leading-relaxed">
                            Start seeing these benefits in your organization within weeks, not months.
                        </p>

                        <a
                            href="#contact"
                            className="inline-block bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition-all shadow-lg"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;
