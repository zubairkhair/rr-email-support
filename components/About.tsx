
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">About RR Email Support</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With years of experience in the technical support industry, RR Email Support has established itself as a premier provider of email-related solutions across the United States. We understand that your email is critical for both personal and professional communications.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to provide fast, reliable, and professional assistance 24/7. We pride ourselves on a customer-focused approach, ensuring that every user receives the dedicated support they need to resolve their issues quickly and efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="block text-2xl font-bold text-blue-600">24/7</span>
                <span className="text-slate-500 text-sm">Availability</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="block text-2xl font-bold text-blue-600">USA-Wide</span>
                <span className="text-slate-500 text-sm">Service Areas</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="block text-2xl font-bold text-blue-600">5k+</span>
                <span className="text-slate-500 text-sm">Resolved Issues</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea530af494ad?auto=format&fit=crop&q=80&w=800"
              alt="Support Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-xl font-bold italic">"Fast, reliable, and always there when you need us."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
