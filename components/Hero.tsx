import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteContent } from '../types';

interface HeroProps {
  content: SiteContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <div className="relative overflow-hidden bg-brand-50 pb-32 -mt-16">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="relative group inline-block">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-800 leading-tight">
                {content.heroHeadline}
              </h1>
            </div>

            <div className="relative group inline-block w-full">
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {content.heroSubheadline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl group"
              >
                Book a Corporate Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Soothing Corporate Yoga & Wellness"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                  <p className="text-sm font-medium text-brand-800">"D'YOGA changed our office culture completely."</p>
                  <p className="text-xs text-gray-500 mt-1">— HR Director, TechCorp</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;