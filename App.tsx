import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Features from './components/Features';
import AboutTrainer from './components/AboutTrainer';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { SiteContent } from './types';

const App: React.FC = () => {
  // --- State ---
  // Content state is kept for potential future dynamic updates, but editing UI is removed.
  const [content] = useState<SiteContent>({
    logoText: "D'YOGA",
    logoImage: null,
    heroHeadline: "Mindfulness for the Modern Professional",
    heroSubheadline: "Bring balance to your boardroom. D'YOGA delivers accessible wellness programs directly to your employees, creating a culture of health and productivity.",
    visionTitle: "Our Vision",
    visionText: "To transform corporate cultures worldwide by making accessible yoga and mindfulness an indispensable part of daily work life, fostering happier, healthier, and more productive workforces.",
    missionTitle: "Our Mission",
    missionText: "To partner with corporations globally, delivering tailored, on-site and virtual yoga and mindfulness programs that empower employees to reduce stress, improve focus, and elevate overall well-being.",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header content={content} />
      
      <main>
        <Hero content={content} />
        <VisionMission content={content} />
        <AboutTrainer />
        <Features />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;