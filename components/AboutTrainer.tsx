import React from 'react';
import { Heart, AlignCenter, Eye, Wind, Sparkles, Activity, Moon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutTrainer: React.FC = () => {
  const headingAnim = useScrollAnimation({ threshold: 0.2 });
  const contentAnim = useScrollAnimation({ threshold: 0.1 });
  const sidebarAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="vision" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div
          ref={headingAnim.ref}
          className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-block p-2 px-4 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm tracking-wider uppercase mb-4">
            Your Corporate Wellness Specialist
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Diksha Agwan
          </h2>
          <p className="text-xl text-brand-600 font-medium mt-3">
            Corporate Yoga & Mindfulness Expert
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Main Content */}
          <div
            ref={contentAnim.ref}
            className={`lg:col-span-8 space-y-8 text-lg text-gray-700 leading-relaxed slide-up ${contentAnim.isVisible ? 'visible' : ''}`}
          >

            <p>
              With <strong className="text-brand-800">8+ years of specialized experience</strong> in corporate wellness, Diksha designs and delivers evidence-based yoga programs specifically tailored for the modern workplace. Her expertise lies in creating practical, time-efficient sessions that address the unique physical and mental challenges faced by today's professionals.
            </p>

            <p>
              Diksha's approach combines traditional yogic wisdom with contemporary corporate needs, offering structured programs that seamlessly integrate into busy work schedules. From desk-friendly postures to stress-management techniques, every session is purposefully designed to deliver measurable results—reduced pain, enhanced focus, and sustained energy throughout the workday.
            </p>

            <div id="specialized-solutions" className="bg-brand-50 rounded-2xl p-8 border border-brand-100 my-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Specialized Solutions for Modern Workforces
              </h3>

              <div className="space-y-8">

                {/* Benefits Grid - 7 Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><AlignCenter size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Posture Correction</span>
                      <span className="text-xs text-gray-500">Reduces neck and back pain caused by long sitting hours</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><Activity size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Spine Mobility & Stretches</span>
                      <span className="text-xs text-gray-500">Eases stiffness and improves overall flexibility</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><Eye size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Eye Relaxation Techniques</span>
                      <span className="text-xs text-gray-500">Reduces eye strain, dryness, and recurring headaches</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><Wind size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Breathing Practices</span>
                      <span className="text-xs text-gray-500">Calms the mind, lowers anxiety, and boosts mental focus</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><Sparkles size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Mindfulness & Short Meditation</span>
                      <span className="text-xs text-gray-500">Enhances mental clarity and emotional balance</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><Heart size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Desk Yoga Movements</span>
                      <span className="text-xs text-gray-500">Increases blood circulation and energy during work hours</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="text-brand-500"><Moon size={18} /></div>
                    <div>
                      <span className="block font-bold text-gray-900 text-sm">Relaxation Techniques</span>
                      <span className="text-xs text-gray-500">Improves sleep quality and reduces daily fatigue</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Sidebar Image/Summary */}
          <div
            ref={sidebarAnim.ref}
            className={`lg:col-span-4 space-y-6 lg:sticky lg:top-24 slide-left ${sidebarAnim.isVisible ? 'visible' : ''}`}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] relative group bg-brand-100 bg-gray-200">
              <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              {/* Updated to a high quality, reliable professional yoga image */}
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Professional Yoga Instructor in Pose"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white z-20">
                <p className="font-serif text-2xl font-bold">Diksha Agwan</p>
                <p className="text-brand-200 text-sm mt-1">Corporate Yoga Instructor & Wellness Strategist</p>
              </div>
            </div>

            <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-serif font-bold text-xl mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-brand-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">Wellness:</strong> 7+ years in yoga and wellness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">IT Experience:</strong> 11+ years in IT, I understand the lifestyle pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">Certification:</strong> Certified & experienced yoga professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">Specialization:</strong> Practical techniques tailored for desk workers</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;