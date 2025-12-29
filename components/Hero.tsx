
import React from 'react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20">
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-tr from-[#3b82f6] to-[#1e3a8a]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            RR Email Support | <span className="text-blue-400">+1-760-284-5760</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Roadrunner Email Support for All USA Users. Fast, reliable, and professional technical assistance for your email account needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:+17602845760"
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-3 animate-pulse"
            >
              Call Us Now for Instant Help
            </a>
            <button
              onClick={() => onScrollTo('services')}
              className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
            >
              View Our Services <span aria-hidden="true">→</span>
            </button>
          </div>
          
          <div className="mt-12 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <p className="text-blue-300 font-medium">
              Need Help? Call Us at <a href="tel:+17602845760" className="underline font-bold text-white">+1 (760)-284-5760</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
