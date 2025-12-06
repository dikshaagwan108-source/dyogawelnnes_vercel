import React from 'react';
import { Heart, Sparkles, Brain, Zap, BatteryCharging, AlignCenter } from 'lucide-react';

const AboutTrainer: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm tracking-wider uppercase mb-4">
            Meet the Expert
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Meet Diksha: The Architect of Corporate Calm & Co-Creator of D'Yoga's Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 text-lg text-gray-700 leading-relaxed">
            
            <p>
              At D'Yoga, our mission is to bring transformative wellness directly to the heart of the corporate world, impacting lives one mindful breath at a time. Leading this charge is <strong className="text-brand-800">Diksha</strong>, not just a yoga instructor, but a deeply dedicated practitioner and visionary who embodies the very essence of D'Yoga.
            </p>

            <p>
              With <strong className="text-brand-800">over 8 years of dedicated experience</strong> in guiding individuals through the profound journey of yoga, Diksha brings a level of expertise that extends far beyond physical postures. She understands that in the fast-paced corporate environment, well-being isn't a luxury; it's the foundation of sustained performance, creativity, and joy.
            </p>

            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 my-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                What makes Diksha's approach truly unique?
              </h3>

              <div className="space-y-8">
                {/* Point 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-800">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">A Heart-Centered, Personalized Approach</h4>
                    <p className="text-gray-600">
                      Diksha teaches with an extraordinary blend of professionalism and profound empathy. She doesn't just instruct; she connects. Each session is infused with her genuine care, ensuring every participant feels seen, supported, and empowered. She instinctively understands the subtle nuances of stress and physical strain prevalent in corporate roles.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-800">
                    <AlignCenter size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">The Art of Intentional Alignment & Embodied Mindfulness</h4>
                    <p className="text-gray-600 mb-4">
                      While many focus solely on flexibility, Diksha's unique strength lies in cultivating <strong>precise alignment and deep body mindfulness.</strong> This isn't just about correct posture on the mat; it’s about empowering employees to recognize and address their body’s signals throughout their workday.
                    </p>
                    
                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                         <div className="text-brand-500"><BatteryCharging size={18} /></div>
                         <div>
                           <span className="block font-bold text-gray-900 text-sm">Reduced Desk-Related Aches</span>
                           <span className="text-xs text-gray-500">Alleviating back, neck, and shoulder discomfort.</span>
                         </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                         <div className="text-brand-500"><Brain size={18} /></div>
                         <div>
                           <span className="block font-bold text-gray-900 text-sm">Enhanced Mental Clarity</span>
                           <span className="text-xs text-gray-500">Fostering a sharper, more focused mind.</span>
                         </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                         <div className="text-brand-500"><Sparkles size={18} /></div>
                         <div>
                           <span className="block font-bold text-gray-900 text-sm">Stress Resilience</span>
                           <span className="text-xs text-gray-500">Building an inner sanctuary of calm.</span>
                         </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                         <div className="text-brand-500"><Zap size={18} /></div>
                         <div>
                           <span className="block font-bold text-gray-900 text-sm">Improved Posture</span>
                           <span className="text-xs text-gray-500">More confident and energetic demeanor.</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              <strong className="text-brand-800">Bridging Ancient Wisdom with Modern Demands:</strong> Diksha possesses a rare ability to translate the timeless wisdom of yoga into practical, actionable techniques that seamlessly integrate into the corporate workday. Her classes are designed to be accessible, empowering, and deeply restorative, proving that profound shifts can occur even in short, focused sessions.
            </p>

            <div className="border-l-4 border-brand-500 pl-6 py-2 italic text-gray-600 bg-gray-50 rounded-r-xl">
              "Diksha is more than a trainer; she is a compassionate guide dedicated to unlocking the potential for greater well-being, focus, and peace within every corporate employee."
            </div>
            
            <p className="font-medium text-gray-900">
              Experience the transformative power of Diksha's unique guidance and discover how D'Yoga can uplift your entire organization.
            </p>

          </div>

          {/* Sidebar Image/Summary */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
             <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] relative group bg-brand-100 bg-gray-200">
                <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                {/* Updated to a high quality, reliable professional yoga image */}
                <img 
                  src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional Yoga Instructor in Pose" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white z-20">
                  <p className="font-serif text-2xl font-bold">Ms. Diksha Agwan</p>
                  <p className="text-brand-200 text-sm mt-1">Corporate Yoga Instructor & Wellness Strategist</p>
                </div>
             </div>
             
             <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-serif font-bold text-xl mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-brand-100 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
                    8+ Years Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
                    Corporate Wellness Specialist
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
                    Expert in Desk Yoga & Mindfulness
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
                    Based in Wakad, Pune
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