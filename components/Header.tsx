
import React from 'react';
import { NavSection } from '../types';

interface HeaderProps {
  activeSection: NavSection;
  setActiveSection: (section: NavSection) => void;
  onScrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onScrollTo }) => {
  const navItems: { label: string; value: NavSection }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollTo('home')}>
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              RR
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">Email Support</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onScrollTo(item.value)}
                className={`text-sm font-semibold transition-colors hover:text-blue-700 ${
                  activeSection === item.value ? 'text-blue-700 underline underline-offset-8' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+17602845760"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1-760-284-5760
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
