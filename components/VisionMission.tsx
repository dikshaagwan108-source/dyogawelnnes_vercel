import React from 'react';
import { Eye, Target } from 'lucide-react';
import { SiteContent } from '../types';

interface VisionMissionProps {
  content: SiteContent;
}

const VisionMission: React.FC<VisionMissionProps> = ({ content }) => {
  return (
    <section id="vision" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Why D'YOGA Exists</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Vision Card */}
          <div className="group relative bg-brand-50 rounded-3xl p-10 hover:shadow-xl transition-shadow duration-300 border border-brand-100">
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
           <div id="mission" className="group relative bg-orange-50 rounded-3xl p-10 hover:shadow-xl transition-shadow duration-300 border border-orange-100">
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