import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import ProgramOptions from './components/ProgramOptions';
import Testimonials from './components/Testimonials';
import AboutTrainer from './components/AboutTrainer';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { SiteContent } from './types';

const App: React.FC = () => {
  // --- State ---
  // Content state is kept for potential future dynamic updates, but editing UI is removed.
  const [content] = useState<SiteContent>({
    logoText: "D'YOGA",
    logoImage: null,
    heroHeadline: "Elevating Employee Well-Being to Strengthen Your Organization",
    heroSubheadline: "Empower your teams to feel better and work better. D'YOGA brings practical, corporate-friendly yoga programs that ease pain, cut stress, and uplift overall employee performance.",
    visionTitle: "",
    visionText: "",
    missionTitle: "",
    missionText: "",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header content={content} />

      <main>
        <Hero content={content} />
        <AboutTrainer />
        <Features />
        <Benefits />
        <ProgramOptions />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;