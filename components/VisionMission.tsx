import React from 'react';
import { Eye, Target } from 'lucide-react';
import { SiteContent } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface VisionMissionProps {
  content: SiteContent;
}

const VisionMission: React.FC<VisionMissionProps> = ({ content }) => {
  const headingAnim = useScrollAnimation({ threshold: 0.2 });
  const visionAnim = useScrollAnimation({ threshold: 0.2 });
  const missionAnim = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="vision" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={headingAnim.ref}
          className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">About D'YOGA</h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-4xl mx-auto">
            After spending 11+ years in the IT world and over 7 years as a certified yoga and wellness professional, We understand both the pressure of fast-paced work and the solutions employees genuinely need.
            Our specialization lies in delivering practical, zero-space-required wellness techniques designed for desk-bound teams.
            Through D'YOGA, We work alongside organizations to improve employee well-being, energy levels, and overall work harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

          {/* Vision Card */}
          <div
            ref={visionAnim.ref}
            className={`group relative bg-brand-50 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 border border-brand-100 slide-right ${visionAnim.isVisible ? 'visible' : ''}`}
          >
            <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-brand-200 shadow-lg group-hover:scale-110 transition-transform">
              <Eye size={28} />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                {content.visionTitle}
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                {content.visionText}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div
            ref={missionAnim.ref}
            id="mission"
            className={`group relative bg-orange-50 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 border border-orange-100 slide-left ${missionAnim.isVisible ? 'visible' : ''}`}
          >
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-orange-200 shadow-lg group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                {content.missionTitle}
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                {content.missionText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;