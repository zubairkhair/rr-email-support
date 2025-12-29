
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-4">Contact RR Email Support</h2>
          <p className="text-slate-600 text-center mb-12">
            Have a question or need detailed help? Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 p-6 rounded-xl inline-block mb-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xl font-bold">Thank you for reaching out!</p>
                  <p>Our team will contact you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Describe your email issue..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Immediate Support Needed?</h3>
            <p className="text-slate-600 mb-8">For instant resolution, calling us is the fastest way.</p>
            <a
              href="tel:+17602845760"
              className="inline-block bg-white border-2 border-blue-700 text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all text-xl"
            >
              Call Us Directly at +1 (760)-284-5760
            </a>
            <p className="mt-4 text-sm text-slate-500">Available 24/7 | USA Wide Technical Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
