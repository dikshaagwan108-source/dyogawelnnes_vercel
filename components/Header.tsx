import React from 'react';
import { SiteContent } from '../types';

interface HeaderProps {
  content: SiteContent;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="relative group">
            <div className="flex items-center gap-3">
              {/* D'YOGA Logo Image */}
              <img
                src="/dyoga-logo.png"
                alt="D'YOGA Logo"
                className="h-14 w-auto object-contain"
              />

              {/* Text Section */}
              {content.logoImage ? (
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold text-brand-800 tracking-tight leading-none">
                    D'YOGA
                  </span>
                  <span className="text-[10px] md:text-xs text-brand-600 font-medium tracking-widest uppercase mt-0.5">
                    Employee wellness solutions
                  </span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold text-brand-800 tracking-tight leading-none">
                    {content.logoText}
                  </span>
                  <span className="text-[10px] md:text-xs text-brand-600 font-medium tracking-widest uppercase mt-0.5">
                    Employee wellness solutions
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Home</a>
            <a href="#specialized-solutions" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Our Approach</a>
            <a href="#mission" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Programs</a>
            <a href="#blog" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Blog</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;