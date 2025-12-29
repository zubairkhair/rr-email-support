
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I reset my Roadrunner email password?",
    answer: "You can reset your password through the official Spectrum/Roadrunner portal using your recovery email or phone number. If you find the process difficult, our technicians can guide you through it in minutes at +1-760-284-5760."
  },
  {
    id: 2,
    question: "Why is my RR email not working on Outlook?",
    answer: "This is usually due to incorrect IMAP or POP settings. Ensure your incoming server is set to 'mail.twc.com'. If errors persist, we can remotely assist with your Outlook configuration."
  },
  {
    id: 3,
    question: "Is my Roadrunner email account secure?",
    answer: "Roadrunner accounts can be targets for spam and phishing. We recommend enabling two-factor authentication and updating security questions regularly. Contact us for a full account security audit."
  },
  {
    id: 4,
    question: "Can I use Roadrunner email on my new iPhone?",
    answer: "Yes, you can add it via the Settings app under Mail > Accounts. Our support team can provide you with the exact port numbers and SSL settings required for Apple devices."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
