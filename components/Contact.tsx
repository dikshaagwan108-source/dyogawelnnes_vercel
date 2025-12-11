import React from 'react';
import { Phone, User, Mail, Send, MapPin, Briefcase, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const targetEmail = "dikshaagwan108@gmail.com";

  return (
    <section id="contact" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Start Your Wellness Journey</h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="bg-brand-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Let's Connect</h3>
                <p className="text-brand-100 leading-relaxed">
                  Ready to bring mindfulness to your workplace? Reach out to us directly to discuss a plan tailored for your team.
                </p>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm shrink-0 mt-1">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 uppercase tracking-wider font-bold mb-1">Contact</p>
                    <p className="font-serif text-xl font-medium tracking-wide">Ms. Diksha Agwan</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm shrink-0 mt-1">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 uppercase tracking-wider font-bold mb-1">Designation</p>
                    <p className="font-medium tracking-wide text-brand-50">Corporate Yoga Instructor <br/>& Wellness Strategist</p>
                  </div>
                </div>

                 <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="font-medium tracking-wide text-brand-50">Wakad, Pune</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 uppercase tracking-wider font-bold mb-1">Phone Number</p>
                    <a href="tel:+919527981484" className="font-serif text-lg font-medium tracking-wide hover:text-brand-100 transition-colors">+91-9527981484</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 uppercase tracking-wider font-bold mb-1">Email</p>
                    <a href={`mailto:${targetEmail}`} className="font-medium tracking-wide hover:text-brand-100 transition-colors break-all">{targetEmail}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 flex flex-col justify-center bg-white relative">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-6">Send us a Message</h4>
              
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 mb-6 text-sm text-brand-800">
                <p className="font-semibold flex items-center gap-2">
                  <ExternalLink size={14} />
                  Reliable Delivery
                </p>
                <p className="mt-1 text-gray-600">
                  Submitting this form will redirect you to a confirmation page to ensure your message is safely delivered.
                </p>
              </div>

              <form 
                action={`https://formsubmit.co/${targetEmail}`} 
                method="POST"
                className="space-y-5"
              >
                {/* Configuration Fields for FormSubmit */}
                <input type="hidden" name="_subject" value="New D'YOGA Website Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-1.5">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-1.5">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none placeholder-gray-500" 
                    placeholder="How can D'YOGA help your team?"
                  ></textarea>
                </div>
                
                <div className="grid gap-4">
                  <button 
                    type="submit"
                    className="w-full bg-brand-800 text-white font-semibold py-3.5 rounded-xl hover:bg-brand-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-200"
                  >
                    Send Message
                    <Send size={18} />
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-semibold">Or</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <a 
                    href={`mailto:${targetEmail}?subject=Inquiry from D'YOGA Website`}
                    className="w-full bg-white border-2 border-brand-100 text-brand-700 font-semibold py-3.5 rounded-xl hover:bg-brand-50 transition-all flex items-center justify-center gap-2"
                  >
                    Email Directly
                    <Mail size={18} />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
