
import React from 'react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                RR
              </div>
              <span className="text-xl font-bold tracking-tight">Email Support</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for all Roadrunner email technical issues. Providing 24/7 expert support across the USA.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onScrollTo('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => onScrollTo('services')} className="hover:text-blue-400 transition-colors">Services</button></li>
              <li><button onClick={() => onScrollTo('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onScrollTo('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Password Recovery</li>
              <li>IMAP/POP Configuration</li>
              <li>Spam Filtering</li>
              <li>Account Security</li>
              <li>Troubleshooting Errors</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <p className="text-slate-400 text-sm mb-4">Questions or Technical Issues?</p>
            <a href="tel:+17602845760" className="text-xl font-bold text-blue-400 hover:text-blue-300 block mb-2 transition-colors">
              +1 (760)-284-5760
            </a>
            <p className="text-slate-500 text-xs">24/7 USA Helpline</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} RR Email Support. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Disclaimer</a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm font-medium">
            For any email issues, Call Us at <a href="tel:+17602845760" className="text-blue-400 font-bold hover:underline">+1 (760)-284-5760</a> – We’re Here to Help!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
