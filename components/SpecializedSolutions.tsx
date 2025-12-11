import React from 'react';
import { AlignCenter, Activity, Eye, Wind, Sparkles, Heart, Moon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpecializedSolutions: React.FC = () => {
    const headingAnim = useScrollAnimation({ threshold: 0.2 });
    const solutionsAnim = useScrollAnimation({ threshold: 0.1 });

    return (
        <section className="py-24 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headingAnim.ref}
                    className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
                >
                    <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
                        Specialized Solutions for Modern Workforces
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
                        Targeted techniques designed to address the specific wellness challenges faced by corporate professionals.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div
                    ref={solutionsAnim.ref}
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children ${solutionsAnim.isVisible ? 'visible' : ''}`}
                >
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <AlignCenter size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Posture Correction</h3>
                        <p className="text-sm text-gray-600">Reduces neck and back pain caused by long sitting hours</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <Activity size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Spine Mobility & Stretches</h3>
                        <p className="text-sm text-gray-600">Eases stiffness and improves overall flexibility</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <Eye size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Eye Relaxation Techniques</h3>
                        <p className="text-sm text-gray-600">Reduces eye strain, dryness, and recurring headaches</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <Wind size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Breathing Practices</h3>
                        <p className="text-sm text-gray-600">Calms the mind, lowers anxiety, and boosts mental focus</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Mindfulness & Short Meditation</h3>
                        <p className="text-sm text-gray-600">Enhances mental clarity and emotional balance</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <Heart size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Desk Yoga Movements</h3>
                        <p className="text-sm text-gray-600">Increases blood circulation and energy during work hours</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                            <Moon size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Relaxation Techniques</h3>
                        <p className="text-sm text-gray-600">Improves sleep quality and reduces daily fatigue</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SpecializedSolutions;
