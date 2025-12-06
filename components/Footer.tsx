import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, User, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">D'YOGA</h3>
            <p className="text-brand-200 max-w-sm mb-6">
              Transforming corporate lives one breath at a time. Join the movement towards a healthier, happier workforce.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-200">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#vision" className="hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book a Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-brand-200">
              <li className="flex items-start gap-2">
                <User size={16} className="mt-1 shrink-0" />
                <span>Contact: Ms. Diksha Agwan</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Wakad, Pune</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+919527981484" className="hover:text-white transition-colors">+91-9527981484</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:mangesh.gulhane21@gmail.com" className="hover:text-white transition-colors break-all">mangesh.gulhane21@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-800 mt-12 pt-8 text-center text-brand-300 text-sm">
          © {new Date().getFullYear()} D'YOGA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;