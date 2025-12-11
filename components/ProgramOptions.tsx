import React from 'react';
import { Clock, Calendar, Globe, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProgramOption {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

const programOptions: ProgramOption[] = [
    {
        number: "01",
        icon: <Clock size={32} />,
        title: "One-time 60 min workshop",
        description: "Quick impactful session for immediate wellness boost",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        icon: <Calendar size={32} />,
        title: "Weekly / Monthly classes",
        description: "Continuous practice for long-term healthy habits",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        number: "03",
        icon: <Globe size={32} />,
        title: "Online & Onsite availability",
        description: "Flexible format that suits every work setup",
        gradient: "from-orange-500 to-red-500"
    },
    {
        number: "04",
        icon: <Settings size={32} />,
        title: "Custom programs",
        description: "Tailored plans to match specific workforce needs",
        gradient: "from-green-500 to-teal-500"
    }
];

const ProgramOptions: React.FC = () => {
    const headingAnim = useScrollAnimation({ threshold: 0.2 });
    const optionsAnim = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="mission" className="py-24 bg-gradient-to-br from-gray-50 to-brand-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headingAnim.ref}
                    className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
                >
                    <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Flexible Solutions</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
                        Program Options
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
                        Choose the format that works best for your organization. We offer flexible options designed to fit seamlessly into your workplace culture.
                    </p>
                </div>

                {/* Options Grid */}
                <div
                    ref={optionsAnim.ref}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children ${optionsAnim.isVisible ? 'visible' : ''}`}
                >
                    {programOptions.map((option, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Background Gradient Overlay */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${option.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>

                            {/* Number Badge */}
                            <div className="relative flex items-start justify-between mb-6">
                                <div className={`text-6xl font-serif font-bold bg-gradient-to-br ${option.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                                    {option.number}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                    {option.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors duration-300">
                                    {option.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {option.description}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${option.gradient} group-hover:w-full transition-all duration-500 ease-out`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
                        <p className="text-gray-700 text-lg mb-4">
                            Not sure which option is right for you?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold px-8 py-4 rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            Let's Discuss Your Needs
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProgramOptions;
