import React from 'react';
import { Armchair, Coffee, Users, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: <Armchair size={24} />,
    title: "Desk Yoga",
    description: "Simple, effective movements designed to be performed right at the workstation, no changing required."
  },
  {
    icon: <Coffee size={24} />,
    title: "Mindful Breaks",
    description: "15-minute guided meditation sessions to reset focus and reduce cognitive fatigue."
  },
  {
    icon: <Users size={24} />,
    title: "Team Harmony",
    description: "Group sessions that build trust, communication, and collective well-being among colleagues."
  },
  {
    icon: <Heart size={24} />,
    title: "Stress Management",
    description: "Practical breathing techniques to handle high-pressure situations with calm and clarity."
  }
];

const Features: React.FC = () => {
  const headingAnim = useScrollAnimation({ threshold: 0.2 });
  const featuresAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingAnim.ref}
          className={`text-center mb-16 fade-in ${headingAnim.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Our Sessions Focus
          </h2>
        </div>

        <div
          ref={featuresAnim.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children ${featuresAnim.isVisible ? 'visible' : ''}`}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;